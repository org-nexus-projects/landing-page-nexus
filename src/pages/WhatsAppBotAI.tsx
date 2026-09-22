import { Brain, Sparkles, MessageCircle, Zap, Target, RefreshCw } from "lucide-react";
import { ProjectPage } from "@/components/ProjectPage";

const WhatsAppBotAI = () => (
  <ProjectPage
    logo="/projects/tamanduai.jpeg"
    logoAlt="TamanduAI"
    title="TamanduAI"
    tagline="Seu assistente acadêmico inteligente, no WhatsApp."
    description="Mais do que comandos: converse naturalmente sobre dúvidas acadêmicas, planejamento de carreira e vida na UFABC. A IA entende contexto, faz recomendações e aprende com a comunidade."
    stats={[
      { value: "95%", label: "Taxa de precisão" },
      { value: "<2s", label: "Tempo de resposta" },
      { value: "10k+", label: "Conversas" },
      { value: "4.8/5", label: "Avaliação média" },
    ]}
    features={[
      {
        icon: <Brain size={28} />,
        title: "Compreensão Contextual",
        description:
          "Entende perguntas complexas e mantém o fio da conversa. Quanto mais você conta, mais precisa fica a resposta.",
      },
      {
        icon: <Sparkles size={28} />,
        title: "Recomendações Personalizadas",
        description:
          "Sugestões de disciplinas, professores e trilhas de estudo baseadas no seu perfil acadêmico e objetivos de carreira.",
      },
      {
        icon: <MessageCircle size={28} />,
        title: "Conversa Natural",
        description:
          "Sem comandos rígidos. Escreva como você fala — a IA entende e responde de forma clara e direta.",
      },
      {
        icon: <Target size={28} />,
        title: "Planejamento Acadêmico",
        description:
          "Auxilia no planejamento de matrícula, organização de estudos e tomada de decisão sobre sua graduação.",
      },
      {
        icon: <Zap size={28} />,
        title: "Respostas Instantâneas",
        description:
          "Powered by LLMs com RAG sobre dados da UFABC. Respostas fundamentadas e rápidas, não alucinações genéricas.",
      },
      {
        icon: <RefreshCw size={28} />,
        title: "Aprendizado Contínuo",
        description:
          "O sistema melhora com cada interação da comunidade, ficando cada vez mais especializado no contexto da UFABC.",
      },
    ]}
    ctaText="Iniciar Conversa"
  />
);

export default WhatsAppBotAI;
