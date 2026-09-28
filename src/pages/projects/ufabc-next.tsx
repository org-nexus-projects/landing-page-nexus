import { Star, Users, BookOpen, TrendingUp, BarChart2, Shield } from "lucide-react";
import { ProjectPage } from "#components/project-page";

const UfabcNext = () => (
  <ProjectPage
    logo="/projects/ufabc-next-mascot.jpg"
    logoAlt="UFABC Next"
    title="UFABC Next"
    tagline="A plataforma de avaliação acadêmica feita por alunos, para alunos."
    description="Avalie professores, disciplinas e cursos com base na experiência real de quem já passou por lá. Tome decisões mais informadas sobre sua trajetória na UFABC."
    stats={[
      { value: "15k+", label: "Usuários ativos" },
      { value: "10k+", label: "Avaliações" },
      { value: "500+", label: "Disciplinas avaliadas" },
      { value: "3 anos", label: "De história" },
    ]}
    features={[
      {
        icon: <Star size={28} />,
        title: "Avaliação de Professores",
        description:
          "Consulte e compartilhe avaliações detalhadas sobre didática, forma de avaliação e experiência geral com cada professor.",
      },
      {
        icon: <BookOpen size={28} />,
        title: "Avaliação de Disciplinas",
        description:
          "Descubra dificuldade, carga de trabalho e relevância de cada matéria antes de se matricular — com dados reais de quem já cursou.",
      },
      {
        icon: <TrendingUp size={28} />,
        title: "Planejamento de Matrícula",
        description:
          "Use as avaliações da comunidade para montar um semestre mais equilibrado e alinhado com seus objetivos acadêmicos.",
      },
      {
        icon: <BarChart2 size={28} />,
        title: "Dados Transparentes",
        description:
          "Médias, distribuições e tendências históricas por disciplina e professor. Informação que o sistema universitário não te dá.",
      },
      {
        icon: <Users size={28} />,
        title: "Comunidade Ativa",
        description:
          "Milhares de estudantes compartilhando experiências reais. Quanto mais avalia, mais preciso fica o sistema para todos.",
      },
      {
        icon: <Shield size={28} />,
        title: "Anônimo por Padrão",
        description:
          "Avalie com liberdade. Todas as contribuições são anônimas para garantir honestidade e proteger os usuários.",
      },
    ]}
    timeline={[
      {
        year: "2022",
        title: "Primeiros passos",
        description:
          "Pedro Birais, Lucas Grippa e Rafael Telles constroem a primeira versão da plataforma, focada em avaliações de professores.",
      },
      {
        year: "2023",
        title: "Crescimento e reescrita",
        description:
          "Felipe Augusto e Vinicius Santana lideram uma reescrita completa, expandindo para avaliação de disciplinas e cursos.",
      },
      {
        year: "2024",
        title: "Escala e maturidade",
        description:
          "Felipe Silva e Felipe Tiozo levam a plataforma a mais de 15 mil usuários ativos, com foco em performance e experiência.",
      },
    ]}
    ctaText="Acessar a Plataforma"
    ctaHref="https://ufabcnext.com"
  />
);

export default UfabcNext;
