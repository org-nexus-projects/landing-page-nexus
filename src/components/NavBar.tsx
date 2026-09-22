import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Github } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  hasDropdown?: boolean;
}

function NavBarLink({ to, children, hasDropdown }: NavLinkProps) {
  return (
    <a 
      href={to} 
      className="relative text-[15px] font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 px-1 py-1"
    >
      {children}
      {hasDropdown && <ChevronDown className="inline-block h-3.5 w-3.5 ml-1 opacity-60" />}
    </a>
  );
}

function NavDropdown({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative text-[15px] font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 outline-none px-1 py-1">
        {label}
        <ChevronDown className="inline-block h-3.5 w-3.5 ml-1 opacity-60" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-52 mt-2 shadow-lg border">
        {items.map((item) => (
          <DropdownMenuItem key={item.href} asChild>
            <a href={item.href} className="cursor-pointer text-[14px] py-2.5">
              {item.label}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function MobileNavLink({ to, onClick, children }: { to: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <a 
      href={to} 
      onClick={onClick}
      className="text-foreground/80 hover:text-foreground text-[15px] font-medium transition-colors duration-200 py-2 block"
    >
      {children}
    </a>
  );
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const productsDropdown = [
    { label: "Projetos", href: "/#projetos" },
    { label: "UFABC Next", href: "/projetos/ufabc-next" },
    { label: "UFABC Parser", href: "/projetos/ufabc-parser" },
  ];

  const resourcesDropdown = [
    { label: "Blog", href: "/blog" },
    { label: "Comunidade", href: "/#comunidade" },
  ];

  const projectsDropdown = [
    { label: "WhatsApp Bot", href: "/projetos/whatsapp-bot" },
    { label: "TamanduAI", href: "/projetos/whatsapp-bot-ai" },
    { label: "UFABC parser", href: "/projetos/ufabc-parser" },
    { label: "UFABC next", href: "/projetos/ufabc-next" },
    { label: "Aulões Next", href: "/projetos/auloes-next" },
  ];

  const docsDropdown = [  
    { label: "UFABC parser", href: "https://ufabc-parser.com/docs" },
  
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 border-b border-border/40">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo - Bold & Left Aligned */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-200"
            >
              <img 
                src="/nexus-logo-black.png" 
                alt="Nexus Logo" 
                className="h-7 w-auto" 
              />
            </Link>
          </div>
          
          {/* Center Navigation - Generous Spacing */}
          <nav className="hidden lg:flex items-center gap-10">

           <NavDropdown label="Projetos" items={projectsDropdown} />
            
            <span className="h-4 w-px bg-border/60" aria-hidden="true" />

            <NavDropdown label="Documentação" items={docsDropdown} />
            
            <span className="h-4 w-px bg-border/60" aria-hidden="true" />
            

            <NavBarLink to="/team">Time</NavBarLink>


            <span className="h-4 w-px bg-border/60" aria-hidden="true" />

            <NavBarLink to="/blog">Blog</NavBarLink>
            
            {/*  <span className="h-4 w-px bg-border/60" aria-hidden="true" /> */}
            
           {/* Center Navigation - Generous Spacing  <NavDropdown label="Recursos" items={resourcesDropdown} /> */}
          </nav>
          
          {/* Right Side - Clean Interaction Area */}
          <div className="hidden lg:flex items-center gap-6">
            {/* GitHub Link - Minimal */}
            <a 
              href="https://github.com/org-nexus-projects" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 text-[14px] font-medium"
            >
              <Github className="h-4 w-4 opacity-70" />
            </a>

            {/* CTA Button - Clean */}
            <Button 
              size="sm" 
              className="rounded-lg px-5 py-2 font-medium text-[14px] shadow-sm hover:shadow transition-all duration-200"
              asChild
            >
              <a href="/#comunidade">Junte-se a nós</a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-3 lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-lg">
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[400px]">
                <SheetHeader className="border-b pb-6">
                  <SheetTitle className="flex items-center gap-3">
                    <img src="/nexus-logo-gradient.svg" alt="Nexus Logo" className="h-7 w-7" />
                    <span className="text-[19px] font-bold">Nexus</span>
                  </SheetTitle>
                </SheetHeader>
                  <nav className="flex flex-col gap-6 mt-8">
                    <div className="space-y-2">
                      <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Produtos
                      </p>
                      {productsDropdown.map((item) => (
                        <MobileNavLink key={item.href} to={item.href} onClick={() => setIsOpen(false)}>
                          {item.label}
                        </MobileNavLink>
                      ))}
                    </div>

                    <div className="border-t pt-6 space-y-2">
                       <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Documentação
                      </p>
                      {docsDropdown.map((item) => (
                        <MobileNavLink key={item.href} to={item.href} onClick={() => setIsOpen(false)}>
                          {item.label}
                        </MobileNavLink>
                      ))}
                    </div>

                    <div className="border-t pt-6 space-y-2">
                      <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Projetos
                      </p>
                      {projectsDropdown.map((item) => (
                        <MobileNavLink key={item.href} to={item.href} onClick={() => setIsOpen(false)}>
                          {item.label}
                        </MobileNavLink>
                      ))}
                    </div>

                    <div className="border-t pt-6 space-y-2">
                      <MobileNavLink to="/blog" onClick={() => setIsOpen(false)}>
                        Blog
                      </MobileNavLink>
                      {resourcesDropdown.map((item) => (
                        <MobileNavLink key={item.href} to={item.href} onClick={() => setIsOpen(false)}>
                          {item.label}
                        </MobileNavLink>
                      ))}
                    </div>

                    <div className="border-t pt-6">
                      <Button className="w-full rounded-lg font-medium shadow-sm" asChild>
                        <a href="/#comunidade" onClick={() => setIsOpen(false)}>
                          Cadastrar
                        </a>
                      </Button>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    );
  }
