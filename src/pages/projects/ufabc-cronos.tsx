import {
  Calendar,
  Map,
  Target,
  TrendingUp,
  Layers,
  Lightbulb,
} from "lucide-react";
import { ProjectPage } from "#components/project-page";

const UfabcCronos = () => (
  <ProjectPage
    fullLogo="/projects/ufabc-cronos-green-full.png"
    logoAlt="UFABC Cronos"
    title="UFABC Cronos"
    customColor="#095839"
    tagline="Monte a graduação que vai gerar mais valor para a sua vida."
    description="Um planejador de graduação inteligente que cruza seu perfil, objetivos de carreira e as avaliações da comunidade para ajudar você a construir o percurso acadêmico ideal na UFABC."
    stats={[
      { value: "100+", label: "Combinações possíveis" },
      { value: "0", label: "Semestres perdidos" },
    ]}
    features={[
      {
        icon: <Map size={28} />,
        title: "Mapa de Graduação",
        description:
          "Visualize toda a sua trajetória acadêmica em um único lugar. Pré-requisitos, optativas e eletivas organizados de forma clara.",
      },
      {
        icon: <Target size={28} />,
        title: "Alinhado à Carreira",
        description:
          "Informe seus objetivos profissionais e o Cronos sugere as disciplinas que mais vão agregar valor para o caminho que você quer seguir.",
      },
      {
        icon: <Layers size={28} />,
        title: "Planejamento por Semestre",
        description:
          "Monte cada semestre considerando carga de trabalho, horários disponíveis e sequência lógica de pré-requisitos.",
      },
      {
        icon: <TrendingUp size={28} />,
        title: "Dados da Comunidade",
        description:
          "Integrado com as avaliações do UFABC Next para que você escolha disciplinas com dados reais de quem já cursou.",
      },
      {
        icon: <Calendar size={28} />,
        title: "Projeção de Formatura",
        description:
          "Veja quando você vai se formar com cada configuração de grade e ajuste o plano de acordo com suas prioridades.",
      },
      {
        icon: <Lightbulb size={28} />,
        title: "Sugestões Inteligentes",
        description:
          "O sistema identifica gargalos no seu percurso e sugere otimizações para você chegar mais rápido aos seus objetivos.",
      },
    ]}
    ctaText="Acessar"
    ctaHref="https://ufabccronos.com.br"
  />
);

export default UfabcCronos;
