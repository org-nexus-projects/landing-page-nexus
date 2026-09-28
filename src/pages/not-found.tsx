import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "#components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center space-y-16 py-20">
        {/* Header Text */}
        <div className="space-y-4">
          <h1 className="text-[56px] md:text-[72px] font-light tracking-tight text-foreground/90">
            Desculpe
          </h1>
          <p className="text-[18px] md:text-[20px] font-normal text-foreground/60 leading-relaxed max-w-lg mx-auto">
            Ainda estamos trabalhando para criar esta página.
          </p>
        </div>

        {/* Visual Element - Illustration Space */}
        <div className="py-12">
          <div className="relative max-w-md mx-auto">
            {/* Placeholder for mascot/character image */}
            <div className="aspect-square max-w-[280px] mx-auto mb-8 rounded-full bg-muted/30 flex items-center justify-center overflow-hidden">
              <img
                src="/nexus-logo-gradient.svg"
                alt="Mascote Nexus"
                className="w-32 h-32 opacity-40"
              />
            </div>
            
            {/* Character Description */}
            <p className="text-[14px] md:text-[15px] text-foreground/50 font-light leading-relaxed italic max-w-sm mx-auto">
              Nosso logo tentou encontrar a página, mas ela parece estar em outra dimensão. 
              Não se preocupe, vamos te levar de volta ao início!
            </p>
          </div>
        </div>

        {/* 404 Code - Subtle */}
        <div className="space-y-2">
          <p className="text-[13px] uppercase tracking-widest text-foreground/30 font-medium">
            Erro 404
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-8">
          <Button
            asChild
            size="lg"
            className="px-12 py-6 text-[16px] font-medium rounded-full hover:scale-105 transition-all duration-300 shadow-sm"
          >
            <a href="/">
              Voltar para a página inicial
            </a>
          </Button>
        </div>

        {/* Optional: Helpful Links */}
        <div className="pt-12 space-y-3">
          <p className="text-[14px] text-foreground/40 font-light">
            Ou visite uma dessas páginas:
          </p>
          <div className="flex flex-wrap gap-6 justify-center text-[14px]">
            <a 
              href="/#sobre" 
              className="text-foreground/60 hover:text-foreground transition-colors duration-200 font-normal"
            >
              Sobre nós
            </a>
            <a 
              href="/#projetos" 
              className="text-foreground/60 hover:text-foreground transition-colors duration-200 font-normal"
            >
              Projetos
            </a>
            <a 
              href="/blog" 
              className="text-foreground/60 hover:text-foreground transition-colors duration-200 font-normal"
            >
              Blog
            </a>
            <a 
              href="/team" 
              className="text-foreground/60 hover:text-foreground transition-colors duration-200 font-normal"
            >
              Equipe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
