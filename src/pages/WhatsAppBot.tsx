import { MessageCircle, Bell, Clock, Users, Search, Calendar } from "lucide-react";
import { ProjectPage } from "@/components/ProjectPage";

const WhatsAppBot = () => (
  <ProjectPage
    logo="/projects/whatsapp-bot.webp"
    logoAlt="Communications UFABC Next"
    title="Communications"
    tagline="Informações acadêmicas da UFABC direto no seu WhatsApp."
    description="Sem precisar abrir múltiplos sistemas universitários: consulte horários, turmas, prazos e notificações importantes com comandos simples pelo app que você já usa todo dia."
    stats={[
      { value: "5k+", label: "Usuários ativos" },
      { value: "20k+", label: "Mensagens enviadas" },
      { value: "24/7", label: "Disponibilidade" },
    ]}
    features={[
      {
        icon: <Search size={28} />,
        title: "Consultas Rápidas",
        description:
          "Busque disciplinas, horários e turmas com uma mensagem simples. Sem logins, sem navegação, sem burocracia.",
      },
      {
        icon: <Bell size={28} />,
        title: "Notificações em Tempo Real",
        description:
          "Receba alertas sobre prazos de matrícula, eventos acadêmicos e comunicados importantes assim que acontecem.",
      },
      {
        icon: <Clock size={28} />,
        title: "Disponível 24/7",
        description:
          "Respostas automáticas e instantâneas a qualquer hora. Ideal para aquela dúvida de madrugada antes da prova.",
      },
      {
        icon: <MessageCircle size={28} />,
        title: "Interface Conversacional",
        description:
          "Comandos simples em linguagem natural. Não é preciso memorizar sintaxes complexas para obter o que precisa.",
      },
      {
        icon: <Calendar size={28} />,
        title: "Calendário Acadêmico",
        description:
          "Datas importantes do semestre sempre à mão: matrículas, provas, feriados e eventos da universidade.",
      },
      {
        icon: <Users size={28} />,
        title: "Comunidade Conectada",
        description:
          "Receba atualizações e avisos da comunidade UFABC Next diretamente no WhatsApp, sem precisar checar redes sociais.",
      },
    ]}
    ctaText="Adicionar ao WhatsApp"
  />
);

export default WhatsAppBot;
