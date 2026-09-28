import { Database, Code, Zap, GitBranch, RefreshCw, Lock } from "lucide-react";
import { ProjectPage } from "@/components/ProjectPage";

const UfabcParser = () => (
  <ProjectPage
    logo="/projects/parser-logo.png"
    logoAlt="UFABC Parser"
    title="UFABC Parser"
    tagline="Dados acadêmicos da UFABC, estruturados e acessíveis via API."
    description="Uma API open source que transforma as informações brutas dos sistemas da universidade em dados limpos, padronizados e prontos para uso por qualquer desenvolvedor ou pesquisador."
    stats={[
      { value: "100+", label: "Endpoints" },
      { value: "Open", label: "Source" },
      { value: "24/7", label: "Disponível" },
      { value: "3+", label: "Projetos dependentes" },
    ]}
    features={[
      {
        icon: <Database size={28} />,
        title: "Dados Estruturados",
        description:
          "Disciplinas, professores, turmas, horários e grades curriculares em formato padronizado e consistente.",
      },
      {
        icon: <Code size={28} />,
        title: "API RESTful",
        description:
          "Interface bem documentada, fácil de integrar com qualquer linguagem ou framework. JSON limpo, sem surpresas.",
      },
      {
        icon: <RefreshCw size={28} />,
        title: "Atualização Automática",
        description:
          "Coleta automatizada dos sistemas da UFABC garante que os dados estejam sempre atualizados a cada ciclo acadêmico.",
      },
      {
        icon: <GitBranch size={28} />,
        title: "Open Source",
        description:
          "Código aberto e contribuições bem-vindas. Transparência total no funcionamento e evolução do projeto.",
      },
      {
        icon: <Zap size={28} />,
        title: "Alta Performance",
        description:
          "Infraestrutura otimizada com cache inteligente para responder consultas em milissegundos, mesmo sob alta carga.",
      },
      {
        icon: <Lock size={28} />,
        title: "Confiável",
        description:
          "Base de dados que alimenta o UFABC Next e outros projetos da comunidade. Testado em produção há anos.",
      },
    ]}
    timeline={[
      {
        year: "2021",
        title: "Origem",
        description:
          "Nasce da necessidade de alimentar o UFABC Next com dados confiáveis. Primeiro scraper manual dos sistemas da universidade.",
      },
      {
        year: "2022",
        title: "Abertura",
        description:
          "Projeto se torna open source e a API passa a ser pública, permitindo que outros projetos da comunidade a utilizem.",
      },
      {
        year: "2023",
        title: "Maturidade",
        description:
          "Reescrita para FastAPI com banco PostgreSQL e Docker. Documentação completa e cobertura de testes adicionadas.",
      },
    ]}
    ctaText="Ver no GitHub"
    ctaHref="https://github.com/org-nexus-projects/ufabc-next-backend"
    secondaryCta={{
      text: "Documentação da API",
      href: "https://github.com/org-nexus-projects/ufabc-next-backend",
    }}
  />
);

export default UfabcParser;
