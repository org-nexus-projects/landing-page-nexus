import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "#components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center space-y-16 py-20">
        {/* Visual Element - Illustration Space */}
        <div className="py-12">
          <div className="relative max-w-md mx-auto">
            <div className="aspect-square max-w-[280px] mx-auto mb-8 rounded-full bg-muted flex items-center justify-center overflow-hidden">
              <img
                src="/brand/nexus-logo-black.png"
                alt="Nexus Logo"
                className="w-48 h-auto opacity-50"
              />
            </div>
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
            <a href="/">Voltar para a página inicial</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
