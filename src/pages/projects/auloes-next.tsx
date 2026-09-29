import { GraduationCap, Users, Calendar, BookOpen, Heart, Award } from "lucide-react";
import { ProjectPage } from "#components/project-page";

const AuloesNext = () => (
  <ProjectPage
    logo="/projects/auloes-next.png"
    logoAlt="Aulões Next"
    title="Aulões Next"
    tagline="Veteranos ensinando, calouros crescendo. Juntos."
    description="Eventos de revisão presenciais e online onde estudantes mais experientes compartilham conhecimento, estratégias e motivação com quem está começando. Porque todo veterano já foi calouro."
    stats={[
      { value: "5+", label: "Aulões realizados" },
      { value: "500+", label: "Participantes" },
      { value: "20+", label: "Veteranos voluntários" },
      { value: "10+", label: "Disciplinas cobertas" },
    ]}
    features={[
      {
        icon: <GraduationCap size={28} />,
        title: "Aulões Temáticos",
        description:
          "Revisões focadas em disciplinas específicas — Cálculo, Física, Álgebra, Programação — ministradas por veteranos que se destacaram nelas.",
      },
      {
        icon: <Users size={28} />,
        title: "Mentorias em Grupo",
        description:
          "Sessões onde veteranos compartilham estratégias, rotinas e o que aprenderam na prática sobre navegar pela UFABC.",
      },
      {
        icon: <Calendar size={28} />,
        title: "Eventos Regulares",
        description:
          "Calendário de aulões ao longo do semestre, intensificados em período de provas quando a demanda é maior.",
      },
      {
        icon: <BookOpen size={28} />,
        title: "Material de Apoio",
        description:
          "Listas de exercícios, resumos e recursos de estudo produzidos pelos próprios veteranos e disponíveis para todos.",
      },
      {
        icon: <Heart size={28} />,
        title: "Apoio Além do Conteúdo",
        description:
          "Não é só sobre matéria. Veteranos compartilham dicas de vida universitária, saúde mental e como equilibrar tudo.",
      },
      {
        icon: <Award size={28} />,
        title: "Desenvolvimento dos Mentores",
        description:
          "Veteranos desenvolvem habilidades de ensino, liderança e comunicação — experiências que valem no mercado.",
      },
    ]}
    timeline={[
      {
        year: "2023",
        title: "Primeira edição",
        description:
          "Aulão piloto de Cálculo I com mais de 80 participantes. A demanda supera as expectativas e valida o modelo.",
      },
      {
        year: "2024",
        title: "Expansão",
        description:
          "Formato se expande para mais disciplinas e inclui modalidade híbrida. Comunidade de voluntários cresce para mais de 20 veteranos.",
      },
    ]}
    ctaText="Ver Próximos Aulões"
    secondaryCta={{ text: "Quero ser Mentor" }}
  />
);

export default AuloesNext;
