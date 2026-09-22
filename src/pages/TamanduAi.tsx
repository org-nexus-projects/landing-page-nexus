import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle, Sparkles, Brain, Zap } from "lucide-react";

const TamanduAi = () => {
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
            alt="Comunnications AI Logo" 
            className="w-64 h-64 object-contain mx-auto mb-8"
          />
          <div className="flex items-center justify-center gap-2 mb-6">
            <h1 className="text-4xl font-bold text-primary">UFABC Next WhatsApp Bot AI</h1>
            <Sparkles className="text-primary" size={32} />
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Assistente inteligente com IA para responder dúvidas acadêmicas de forma personalizada
          </p>
        </div>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Sobre o Projeto</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-lg text-gray-700 mb-4">
              A versão com Inteligência Artificial do WhatsApp Bot leva a experiência dos estudantes a um novo patamar. 
              Utilizando tecnologias avançadas de processamento de linguagem natural, o bot AI compreende perguntas 
              complexas e fornece respostas contextualizadas e personalizadas.
            </p>
            <p className="text-lg text-gray-700">
              Mais do que apenas buscar informações, o Bot AI pode entender o contexto da conversa, fazer recomendações 
              inteligentes e auxiliar os estudantes de forma muito mais natural e eficiente.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Funcionalidades com IA</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Brain className="text-primary mb-3" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-primary">Compreensão Contextual</h3>
              <p className="text-gray-700">
                Entende perguntas complexas e mantém o contexto da conversa, oferecendo respostas 
                mais precisas e relevantes para suas dúvidas.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Sparkles className="text-primary mb-3" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-primary">Recomendações Personalizadas</h3>
              <p className="text-gray-700">
                Recebe sugestões inteligentes de disciplinas, professores e trilhas de estudo 
                baseadas no seu perfil e objetivos acadêmicos.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <MessageCircle className="text-primary mb-3" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-primary">Conversa Natural</h3>
              <p className="text-gray-700">
                Converse de forma natural como se estivesse falando com um colega, sem precisar 
                usar comandos específicos ou formatações rígidas.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Zap className="text-primary mb-3" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-primary">Aprendizado Contínuo</h3>
              <p className="text-gray-700">
                O bot aprende com cada interação, melhorando constantemente suas respostas e 
                se adaptando às necessidades da comunidade.
              </p>
            </div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Capacidades da IA</h2>
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">O que o Bot AI pode fazer:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-gray-700">Responder perguntas sobre disciplinas e professores</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-gray-700">Sugerir planos de estudo personalizados</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-gray-700">Auxiliar no planejamento de matrícula</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-gray-700">Explicar conceitos acadêmicos complexos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-gray-700">Fornecer dicas de estudo e organização</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Tecnologias Utilizadas:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700">Large Language Models (LLMs)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700">Natural Language Processing (NLP)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700">Machine Learning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700">Retrieval Augmented Generation (RAG)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700">Vector Databases</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Desempenho</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-primary text-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-lg">Taxa de Precisão</p>
            </div>
            <div className="bg-primary text-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">&lt;2s</div>
              <p className="text-lg">Tempo de Resposta</p>
            </div>
            <div className="bg-primary text-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">10k+</div>
              <p className="text-lg">Conversas</p>
            </div>
            <div className="bg-primary text-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <p className="text-lg">Avaliação Média</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-br from-primary to-primary/80 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Experimente o Bot AI</h2>
          <p className="text-lg mb-8">
            Converse com nossa inteligência artificial e descubra uma nova forma de acessar informações acadêmicas
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Sparkles className="mr-2" size={18} />
              Iniciar Conversa
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

export default TamanduAi;
