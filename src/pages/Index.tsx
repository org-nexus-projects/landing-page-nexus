import NavBar from "@/components/NavBar";
import SubmitDialog from "@/components/SubmitDialog";
import Footer from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { toast } from "sonner";
import { BlogNotificationToast } from "@/components/BlogNotificationToast";

const LandingPage = () => {
  useEffect(() => {
    // Show custom blog notification toast immediately on page load
    toast.custom(
      (toastId) => (
        <BlogNotificationToast
          onDismiss={() => toast.dismiss(toastId)}
          onAction={() => {
            toast.dismiss(toastId);
            const blogSection = document.getElementById("blog-section");
            if (blogSection) {
              blogSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
        />
      ),
      {
        duration: 8000,
        position: "bottom-right",
      }
    );
  }, []);

  const projects = [
    {
      id: 1,
      title: "UFABC next",
      description: "Construímos uma plataforma de avaliação de professores, disciplinas e programas com base na experiência dos alunos",
      icon: "./projects/next-logo.jpg",
      link: "/projetos/ufabc-next"
    },
    {
      id: 2,
      title: "Parser",
      description: "Fornecemos todas as informações relevantes para o desenvolvimento universitário da UFABC em formato de API",
      icon: "./projects/parser-icon.png",
      link: "/projetos/ufabc-parser"
    },
    {
      id: 3,
      title: "Communications",
      description: "Criamos um bot do WhatsApp para facilitar o acesso dos alunos a informações acadêmicas importantes e manter a comunidade acadêmica conectada",
      icon: "./projects/whatsapp-icon.png",
      link: "/projetos/whatsapp-bot"
    },
    {
      id: 4,
      title: "TamanduAI",
      description: "Assistente inteligente com IA para responder dúvidas acadêmicas de forma personalizada",
      icon: "./projects/Ai.png",
      link: "/projetos/whatsapp-bot-ai"
    },
    {
      id: 5,
      title: "cronos",
      description: "Planejador de graduação personalizado para ajudar os alunos a montarem a grade que mais vai gerar valor para a sua carreira e vida pessoal",
      icon: "./projects/cronos-project.png",
      link: "/projetos/cronos"
    },
    {
      id: 6,
      title: "Aulões Next",
      description: "Criamos aulões para conectar veteranos e calouros",
      icon: "./projects/aulao-logo.png",
      link: "/projetos/auloes-next"
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <main>
        {/* Hero Section */}
        <section className="bg-[#0a2e4f] text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6">
            {/* Mobile Layout - Stacked */}
            <div className="flex flex-col gap-8 md:hidden">
              {/* Text */}
              <div className="space-y-4">
                <h1 className="text-3xl font-bold leading-tight">
                  O ecossistema de inovação e transformação
                </h1>
                <p className="text-base text-white/80 leading-relaxed">
                  Uma plataforma feita por e para estudantes da Universidade Federal do ABC, promovendo mentorias, conteúdo acadêmico e suporte comunitário ao longo da graduação.
                </p>
              </div>

              {/* Image */}
              <div className="flex justify-center hover:scale-105 transition-all duration-300">
                <img
                  src="/members/time.jpeg"
                  alt="Estudantes UFABC Next"
                  className="rounded-2xl shadow-2xl w-full max-h-[400px] object-cover"
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <SubmitDialog
                  type="volunteer"
                  buttonText={"Seja um Voluntário"}
                  buttonClassName="bg-white text-black hover:bg-white/70 font-semibold w-full sm:w-auto"
                />
                <Button
                  size="lg"
                  className="text-white hover:bg-white/10 bg-transparent w-full sm:w-auto"
                  onClick={() => {
                    window.scrollTo({
                      top: document.getElementById("comunidade")?.offsetTop,
                      behavior: "smooth",
                    });
                  }}
                >
                  Saiba Mais
                </Button>
              </div>
            </div>

            {/* Desktop/Tablet Layout - Side by Side */}
            <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
              {/* Text & Buttons */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  O ecossistema de inovação e transformação
                </h1>
                <p className="text-lg text-white/80 leading-relaxed">
                  Uma plataforma feita por e para estudantes da Universidade Federal do ABC, promovendo mentorias, conteúdo acadêmico e suporte comunitário ao longo da graduação.
                </p>
                <div className="flex gap-4 pt-4 justify-center">
                  <SubmitDialog
                    type="volunteer"
                    buttonText={"Seja um Voluntário"}
                    buttonClassName="bg-white text-black hover:bg-white/70 font-semibold"
                  />
                  <Button
                    size="lg"
                    className="text-white hover:bg-white/10 bg-transparent"
                  >
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className="flex justify-center hover:scale-105 transition-all duration-300">
                <img
                  src="/members/time.jpeg"
                  alt="Estudantes UFABC Next"
                  className="rounded-2xl shadow-2xl w-full max-h-[520px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Section */}
        <section id="sobre" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-foreground">
              Sobre Nós
            </h2>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-xl text-muted-foreground leading-relaxed">
                O Nexus nasceu da necessidade de criar uma comunidade de apoio e desenvolvimento acadêmico dentro da Universidade Federal do ABC, onde estudantes pudessem compartilhar conhecimento, experiências e se prepararem melhor para os desafios da graduação.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Nossa Missão
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Facilitar a jornada acadêmica dos alunos da UFABC através de uma rede de apoio, compartilhamento de conhecimento e ferramentas de desenvolvimento.
                </p>
              </div>

              <div className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Nossa Visão
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser reconhecido como a principal iniciativa de apoio ao desenvolvimento acadêmico na UFABC, tornando-se referência para outras universidades.
                </p>
              </div>

              <div className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Nosso Impacto
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Mais de 20.000 alunos impactados pelas tecnologias desenvolvidas e uma comunidade ativa que transforma experiências acadêmicas.
                </p>
              </div>
            </div>
          </div>
        </section>


                {/* Impact Numbers Section */}
        <section className="bg-gradient-to-br from-[#0a2e4f] to-primary" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white">
              Nosso Impacto
            </h2>
            <p className="text-xl text-white/90 text-center max-w-3xl mx-auto mb-20">
              Números mostrando o alcance e impacto do Nexus na comunidade acadêmica
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  + 20.000
                </div>
                <p className="text-white/90 text-lg">Pessoas Impactadas</p>
              </div>

              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  + 5
                </div>
                <p className="text-white/90 text-lg">Projetos Desenvolvidos</p>
              </div>

              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  + 5
                </div>
                <p className="text-white/90 text-lg">Aulões Realizados</p>
              </div>

              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                + 10
                </div>
                <p className="text-white/90 text-lg">Membros Ativos</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projetos */}
        <section id="projetos" className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
              Projetos
            </h2>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
              A UFABC Next atua em múltiplas frentes para garantir uma experiência universitária mais completa e enriquecedora.
            </p>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {projects.map((project) => (
                  <CarouselItem
                    key={project.id}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <ProjectItem project={project} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hover:bg-primary/10 transition-all duration-300 left-2" />
              <CarouselNext className="hover:bg-primary/10 transition-all duration-300 right-2" />
            </Carousel>
          </div>
        </section>


         {/* Governança */}
        <section 
          className="relative"
          style={{ 
            paddingTop: '3rem', 
            paddingBottom: '36rem',
            backgroundImage: 'url(/team-image.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-[#0a2e4f]/80"></div>
          
          <div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white">
              Governança Nexus
            </h2>
            <p className="text-xl text-white/80 text-center max-w-3xl mx-auto mb-16">
              A estrutura organizacional da UFABC Next garante planejamento, execução e impacto contínuo. Cada área é liderada por estudantes com alta responsabilidade e engajamento.
            </p>

            <Button
              className="transition-all duration-300 p-8 hover:scale-105 bg-gradient-to-br from-[#0a2e4f] to-primary hover:opacity-90"
            >
              <a href="/team" className="text-white text-xl font-medium">
                Conheça nosso time
              </a>
            </Button>
          </div>
        </section>

        {/* Latest Blog Posts - Editorial Style */}
        <section id="blog-section" className="py-28 bg-background" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
          <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
            {/* Section Header */}
            <div className="mb-20 flex flex-col items-center justify-center text-center">
              <h2 className="text-[42px] md:text-[52px] font-bold tracking-tight text-foreground mb-4">
                Nossas histórias
              </h2>
              <p className="text-[17px] text-foreground/60 font-medium max-w-2xl">
                Insights, momentos e atualizações da comunidade Nexus
              </p>
            </div>

            {/* Blog Cards Grid */}
            <div className="flex justify-center">
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-16 max-w-[900px]">
                {/* Blog Card 1 */}
                <BlogCard
                  image="/blog/blog-1/wallpaper/resizing_machines.png"
                  title="Mayday, o next caiu! E agora?"
                  description="Um guia completo sobre como diagnosticar e resolver problemas de servidor, desde volumes EBS até gerenciamento de filesystem."
                  author={{
                    name: "Gabriel Monteiro",
                    avatar: "/members/gabriel.jpeg",
                    date: "6 de Dez, 2025"
                  }}
                  href="/blog/my-server-is-down-what-do-i-do"
                />

                {/* Blog Card 2 */}
                <BlogCard
                  image="/blog/blog-2/wallpaper/image.png"
                  title="Atualização de Dados no UFABC Next"
                  description="Entenda o funcionamento da extensão de atualização automática de dados e como ela facilita sua experiência."
                  author={{
                    name: "Nicolas Greco",
                    avatar: "/members/nicolas.jpeg",
                    date: "1 de Dez, 2025"
                  }}
                  href="/404"
                />
              </div>
            </div>

            {/* View All Link */}
            <div className="mt-16 text-center">
              <a 
                href="/blog"
                className="inline-flex items-center gap-2 text-[15px] font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 group"
              >
                Ver todos os posts
                <svg 
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>


       



        
        {/* Comunidade */}
        <section
          id="comunidade"
          className="py-20 bg-[#0a2e4f] text-white text-center"
        >
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">Junte-se a Nós</h2>
            <p className="text-lg mb-8">
              Faça parte desta comunidade e contribua para o desenvolvimento acadêmico dos alunos da UFABC, seja como mentor, voluntário ou parceiro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SubmitDialog
                type="mentor"
                buttonText={"Quero ser mentor"}
                buttonClassName="bg-transparent text-white hover:bg-white/10 font-semibold"
              />

              <SubmitDialog
                type="volunteer"
                buttonText={"Quero ser voluntário"}
                buttonClassName="bg-white text-black hover:bg-white/70 font-semibold"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;

function ProjectItem({ project }: { project: any }) {
  return (
    <a href={project.link} className="block h-full">
      <div className="bg-card rounded-xl p-6 shadow-sm border border-border text-center h-full hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer">
        <div className="text-4xl mb-4">
          <img
            src={project.icon}
            height={270}
            alt={project.title}
            className="w-full h-64 object-contain rounded-lg"
          />
        </div>
        <h3 className="text-xl font-bold mb-3 text-foreground">
          {project.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </div>
    </a>
  );
}

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  author: {
    name: string;
    avatar: string;
    date: string;
  };
  href: string;
}

function BlogCard({ image, title, description, author, href }: BlogCardProps) {
  return (
    <a 
      href={href}
      className="group block"
    >
      <article className="flex flex-col h-full">
        {/* Feature Image */}
        <div className="relative aspect-[16/10] mb-6 overflow-hidden rounded-2xl bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Title */}
          <h3 className="text-[22px] font-bold leading-tight tracking-tight text-foreground group-hover:text-foreground/80 transition-colors duration-200 line-clamp-2">
            {title}
          </h3>

          {/* Description */}
          <p className="text-[15px] leading-relaxed text-foreground/60 font-normal line-clamp-3">
            {description}
          </p>

          {/* Author Area */}
          <div className="mt-auto pt-4 flex items-center gap-3 border-t border-border/40">
            {/* Avatar */}
            <div className="relative">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-background">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Author Info */}
            <div className="flex-1 min-w-0">
              <p className="text-[14px] font-medium text-foreground truncate">
                {author.name}
              </p>
              <p className="text-[13px] text-foreground/50 font-normal">
                {author.date}
              </p>
            </div>

            {/* Bookmark Icon (Optional) */}
            <button 
              className="p-2 hover:bg-blue-50 rounded-lg transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                // Bookmark functionality here
              }}
            >
              <svg 
                className="w-5 h-5 text-foreground/40 hover:text-blue-600 transition-colors" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" 
                />
              </svg>
            </button>
          </div>
        </div>
      </article>
    </a>
  );
}