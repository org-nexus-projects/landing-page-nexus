import { MessageCircle, Bell, Clock, Users, Smartphone, Shield } from "lucide-react";
import { ProjectPage } from "#components/project-page";

const Communications = () => (
  <ProjectPage
    logo="/projects/communications.png"
    logoAlt="Communications"
    title="Communications"
    tagline="Informações acadêmicas rápidas e diretas no WhatsApp."
    description="Bot no WhatsApp desenvolvido para trazer praticidade ao dia a dia dos estudantes, oferecendo acesso rápido a horários, disciplinas, prazos e notificações acadêmicas sem precisar acessar múltiplos sistemas."
    stats={[
      { value: "5k+", label: "Usuários ativos" },
      { value: "20k+", label: "Mensagens enviadas" },
      { value: "24/7", label: "Disponibilidade" },
      { value: "100%", label: "Gratuito" },
    ]}
    features={[
      {
        icon: <MessageCircle size={28} />,
        title: "Consultas Rápidas",
        description:
          "Obtenha informações sobre disciplinas, horários e turmas através de comandos simples e conversas diretas no WhatsApp.",
      },
      {
        icon: <Bell size={28} />,
        title: "Notificações Importantes",
        description:
          "Receba alertas sobre prazos de matrícula, eventos acadêmicos e comunicados relevantes em tempo real.",
      },
      {
        icon: <Clock size={28} />,
        title: "Disponível 24/7",
        description:
          "Acesse informações a qualquer hora do dia ou da noite, com respostas automáticas e instantâneas.",
      },
      {
        icon: <Users size={28} />,
        title: "Comunidade Conectada",
        description:
          "Mantenha-se informado e conectado aos acontecimentos da universidade direto no seu aplicativo de mensagens.",
      },
      {
        icon: <Smartphone size={28} />,
        title: "Sem Instalação Extra",
        description:
          "Funciona direto no WhatsApp. Basta salvar o contato e mandar um oi, sem precisar baixar novos aplicativos.",
      },
      {
        icon: <Shield size={28} />,
        title: "Privacidade Garantida",
        description:
          "Suas interações e preferências são tratadas com total privacidade e segurança para toda a comunidade acadêmica.",
      },
    ]}
    timeline={[
      {
        year: "2023",
        title: "Primeira versão",
        description:
          "Lançamento do bot de WhatsApp para envio de avisos e consultas rápidas aos alunos da UFABC.",
      },
      {
        year: "2024",
        title: "Expansão da comunidade",
        description:
          "Mais de 5 mil estudantes ativos utilizando as consultas e alertas automatizados diariamente.",
      },
    ]}
    ctaText="Adicionar ao WhatsApp"
  />
);

export default Communications;
