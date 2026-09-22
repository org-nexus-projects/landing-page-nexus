import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

type ServiceStatus = "checking" | "operational" | "degraded" | "down";

interface Service {
  name: string;
  description: string;
  url: string;
  checkUrl: string;
}

interface ServiceResult {
  status: ServiceStatus;
  latency: number | null;
  checkedAt: Date | null;
}

const SERVICES: Service[] = [
  {
    name: "UFABC Next",
    description: "Plataforma web de avaliação acadêmica",
    url: "https://ufabcnext.com",
    checkUrl: "https://ufabcnext.com",
  },
  {
    name: "API Backend",
    description: "API v2 — autenticação, reviews, matrículas",
    url: "https://api.v2.ufabcnext.com",
    checkUrl: "https://api.v2.ufabcnext.com/health",
  },
  {
    name: "Parser",
    description: "Dados acadêmicos estruturados da UFABC",
    url: "https://ufabc-parser.com",
    checkUrl: "https://ufabc-parser.com/v2",
  },
];

const TIMEOUT_MS = 6000;
const POLL_INTERVAL_MS = 30_000;

async function pingService(checkUrl: string): Promise<{ ok: boolean; latency: number }> {
  const start = Date.now();
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    await fetch(checkUrl, { mode: "no-cors", signal: controller.signal });
    clearTimeout(timer);
    const latency = Date.now() - start;
    return { ok: true, latency };
  } catch {
    return { ok: false, latency: Date.now() - start };
  }
}

function latencyToStatus(latency: number): ServiceStatus {
  if (latency < 800) return "operational";
  if (latency < 3000) return "degraded";
  return "down";
}

const STATUS_CONFIG: Record<ServiceStatus, { label: string; color: string; dot: string }> = {
  checking: {
    label: "Verificando...",
    color: "text-gray-400",
    dot: "bg-gray-300 animate-pulse",
  },
  operational: {
    label: "Operacional",
    color: "text-emerald-600",
    dot: "bg-emerald-500",
  },
  degraded: {
    label: "Lento",
    color: "text-amber-500",
    dot: "bg-amber-400",
  },
  down: {
    label: "Fora do ar",
    color: "text-red-500",
    dot: "bg-red-500",
  },
};

function overallStatus(results: Record<string, ServiceResult>): ServiceStatus {
  const statuses = Object.values(results).map((r) => r.status);
  if (statuses.every((s) => s === "checking")) return "checking";
  if (statuses.some((s) => s === "down")) return "down";
  if (statuses.some((s) => s === "degraded")) return "degraded";
  return "operational";
}

export default function Status() {
  const [results, setResults] = useState<Record<string, ServiceResult>>(() =>
    Object.fromEntries(
      SERVICES.map((s) => [
        s.name,
        { status: "checking" as ServiceStatus, latency: null, checkedAt: null },
      ])
    )
  );
  const [isRefreshing, setIsRefreshing] = useState(false);

  const checkAll = useCallback(async () => {
    setIsRefreshing(true);
    setResults((prev) =>
      Object.fromEntries(
        SERVICES.map((s) => [s.name, { ...prev[s.name], status: "checking" as ServiceStatus }])
      )
    );

    await Promise.all(
      SERVICES.map(async (service) => {
        const { ok, latency } = await pingService(service.checkUrl);
        const status: ServiceStatus = ok ? latencyToStatus(latency) : "down";
        setResults((prev) => ({
          ...prev,
          [service.name]: { status, latency: ok ? latency : null, checkedAt: new Date() },
        }));
      })
    );

    setIsRefreshing(false);
  }, []);

  useEffect(() => {
    checkAll();
    const interval = setInterval(checkAll, POLL_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [checkAll]);

  const overall = overallStatus(results);
  const overallCfg = STATUS_CONFIG[overall];

  const bannerColor =
    overall === "operational"
      ? "bg-emerald-50 border-emerald-200"
      : overall === "degraded"
      ? "bg-amber-50 border-amber-200"
      : overall === "down"
      ? "bg-red-50 border-red-200"
      : "bg-gray-50 border-gray-200";

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="w-full border-b border-gray-100 py-4 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={16} />
            Instituto Nexus
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Status dos Serviços</h1>
          <p className="text-gray-500">
            Monitoramento em tempo real dos projetos do Instituto Nexus.
          </p>
        </div>

        {/* Overall banner */}
        <div className={`rounded-xl border p-5 mb-10 flex items-center justify-between ${bannerColor}`}>
          <div className="flex items-center gap-3">
            <span className={`w-3 h-3 rounded-full flex-shrink-0 ${overallCfg.dot}`} />
            <span className={`font-semibold text-base ${overallCfg.color}`}>
              {overall === "operational"
                ? "Todos os sistemas operacionais"
                : overall === "degraded"
                ? "Alguns sistemas com lentidão"
                : overall === "down"
                ? "Serviços com interrupção"
                : "Verificando sistemas..."}
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={checkAll}
            disabled={isRefreshing}
            className="text-gray-500 hover:text-gray-900 gap-2"
          >
            <RefreshCw size={14} className={isRefreshing ? "animate-spin" : ""} />
            Atualizar
          </Button>
        </div>

        {/* Service list */}
        <div className="space-y-3">
          {SERVICES.map((service) => {
            const result = results[service.name];
            const cfg = STATUS_CONFIG[result.status];
            return (
              <div
                key={service.name}
                className="flex items-center justify-between py-5 border-b border-gray-100 last:border-0"
              >
                <div className="flex flex-col gap-0.5">
                  <a
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gray-900 hover:text-[#0a2e4f] transition-colors"
                  >
                    {service.name}
                  </a>
                  <span className="text-sm text-gray-400">{service.description}</span>
                </div>

                <div className="flex items-center gap-4">
                  {result.latency !== null && result.status !== "checking" && (
                    <span className="text-sm text-gray-400 tabular-nums">
                      {result.latency}ms
                    </span>
                  )}
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${cfg.dot}`} />
                    <span className={`text-sm font-medium ${cfg.color}`}>{cfg.label}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Last checked */}
        {Object.values(results).some((r) => r.checkedAt) && (
          <p className="text-xs text-gray-300 mt-8 text-right">
            Última verificação:{" "}
            {Object.values(results)
              .filter((r) => r.checkedAt)
              .sort((a, b) => (b.checkedAt?.getTime() ?? 0) - (a.checkedAt?.getTime() ?? 0))[0]
              ?.checkedAt?.toLocaleTimeString("pt-BR")}
            {" "}· Atualiza automaticamente a cada 30s
          </p>
        )}

        {/* Note */}
        <div className="mt-12 p-4 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong className="text-gray-500">Como funciona:</strong> O status é verificado diretamente do seu navegador via requisição HTTP. "Lento" indica tempo de resposta entre 800ms e 3s. "Fora do ar" indica falha de conexão ou timeout após 6s.
          </p>
        </div>
      </main>
    </div>
  );
}
