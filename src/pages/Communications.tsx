import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle, Bell, Users, Clock } from "lucide-react";

const Communications = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full bg-white shadow-sm border-b py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-primary font-bold text-2xl flex items-center">
            <ArrowLeft className="mr-2" size={24} />
            <span>Voltar</span>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <img 
            src="/members/wpp-bot-project.webp" 
            alt="Communications Logo" 
            className="w-64 h-64 object-contain mx-auto mb-8"
          />
          <h1 className="text-4xl font-bold mb-6 text-primary">UFABC Next WhatsApp Bot</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Bot no WhatsApp para facilitar o acesso dos estudantes a informações acadêmicas importantes
          </p>
        </div>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Sobre o Projeto</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-lg text-gray-700 mb-4">
              O Communications foi desenvolvido para trazer praticidade ao dia a dia dos estudantes, 
              oferecendo acesso rápido e fácil a informações acadêmicas diretamente pelo WhatsApp, o aplicativo 
              de mensagens mais utilizado pelos alunos.
            </p>
            <p className="text-lg text-gray-700">
              Através de comandos simples e uma interface conversacional intuitiva, estudantes podem consultar 
              horários, disciplinas, prazos e outras informações importantes sem precisar acessar múltiplos sistemas.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Funcionalidades</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <MessageCircle className="text-primary mb-3" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-primary">Consultas Rápidas</h3>
              <p className="text-gray-700">
                Obtenha informações sobre disciplinas, horários e turmas através de mensagens 
                simples e diretas no WhatsApp.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Bell className="text-primary mb-3" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-primary">Notificações Importantes</h3>
              <p className="text-gray-700">
                Receba alertas sobre prazos de matrícula, eventos acadêmicos e outras 
                informações relevantes em tempo real.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Clock className="text-primary mb-3" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-primary">Disponível 24/7</h3>
              <p className="text-gray-700">
                Acesse informações acadêmicas a qualquer hora do dia, com respostas 
                automáticas e instantâneas.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Users className="text-primary mb-3" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-primary">Comunidade Conectada</h3>
              <p className="text-gray-700">
                Mantenha-se conectado com a comunidade acadêmica e receba atualizações 
                importantes diretamente no WhatsApp.
              </p>
            </div>
          </div>
        </section>

        {/* How to Use Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Como Usar</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <ol className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</span>
                <span>Adicione o número do bot aos seus contatos do WhatsApp</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</span>
                <span>Envie uma mensagem inicial para começar a conversa</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</span>
                <span>Utilize os comandos sugeridos para consultar informações</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</span>
                <span>Configure suas preferências de notificações</span>
              </li>
            </ol>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Impacto</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-primary text-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">5k+</div>
              <p className="text-lg">Usuários Ativos</p>
            </div>
            <div className="bg-primary text-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">20k+</div>
              <p className="text-lg">Mensagens Enviadas</p>
            </div>
            <div className="bg-primary text-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-lg">Disponibilidade</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-br from-primary to-primary/80 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Comece a Usar</h2>
          <p className="text-lg mb-8">
            Adicione o bot aos seus contatos e tenha acesso rápido a informações acadêmicas
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100"
            >
              <MessageCircle className="mr-2" size={18} />
              Adicionar ao WhatsApp
            </Button>
            <Link to="/">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Voltar ao Início
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Communications;
