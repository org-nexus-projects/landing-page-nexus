import { Brain, Sparkles, MessageCircle, Zap, Bot, GraduationCap } from "lucide-react";
import { ProjectPage } from "#components/project-page";

const TamanduAi = () => (
  <ProjectPage
    logo="/projects/tamanduai.png"
    logoAlt="TamanduAI"
    title="TamanduAI"
    tagline="Assistente inteligente com IA para responder dúvidas acadêmicas de forma personalizada."
    description="Utilizando inteligência artificial e processamento de linguagem natural, o TamanduAI compreende o contexto acadêmico da UFABC para responder dúvidas, sugerir trilhas de estudo e apoiar sua jornada universitária."
    stats={[
      { value: "95%", label: "Taxa de precisão" },
      { value: "< 2s", label: "Tempo de resposta" },
      { value: "10k+", label: "Conversas" },
      { value: "4.8/5", label: "Avaliação média" },
    ]}
    features={[
      {
        icon: <Brain size={28} />,
        title: "Compreensão Contextual",
        description:
          "Entende perguntas complexas e mantém o contexto da conversa, oferecendo respostas precisas e contextualizadas sobre a UFABC.",
      },
      {
        icon: <Sparkles size={28} />,
        title: "Recomendações Personalizadas",
        description:
          "Recebe sugestões inteligentes de disciplinas, professores e trilhas de estudo baseadas no seu perfil e objetivos acadêmicos.",
      },
      {
        icon: <MessageCircle size={28} />,
        title: "Conversação Natural",
        description:
          "Converse de forma intuitiva como se estivesse falando com um colega, sem comandos rígidos ou sintaxes pré-definidas.",
      },
      {
        icon: <Zap size={28} />,
        title: "Respostas Instantâneas",
        description:
          "Esclareça dúvidas sobre disciplinas, matrizes curriculares e procedimentos da universidade em segundos.",
      },
      {
        icon: <Bot size={28} />,
        title: "Tecnologia RAG e LLMs",
        description:
          "Alimentado por modelos avançados de linguagem e bases de conhecimento especializadas no ecossistema da UFABC.",
      },
      {
        icon: <GraduationCap size={28} />,
        title: "Apoio Acadêmico",
        description:
          "Auxílio no planejamento e dúvidas sobre a rotina acadêmica com base em dados reais da comunidade.",
      },
    ]}
    timeline={[
      {
        year: "2024",
        title: "Concepção do TamanduAI",
        description:
          "Evolução do bot tradicional para uma arquitetura com modelos de inteligência artificial generativa.",
      },
      {
        year: "2024",
        title: "Integração com bases da UFABC",
        description:
          "Treinamento e indexação via RAG com perguntas frequentes, planos de ensino e matrizes curriculares.",
      },
    ]}
    ctaText="Iniciar Conversa"
  />
);

export default TamanduAi;
