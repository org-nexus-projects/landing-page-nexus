import React from "react";
import { Link } from "react-router-dom";
import { Button } from "#components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";

export interface ProjectFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ProjectStat {
  value: string;
  label: string;
}

export interface ProjectTimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface ProjectPageProps {
  logo: string;
  logoAlt: string;
  title: string;
  tagline: string;
  description: string;
  features: ProjectFeature[];
  stats: ProjectStat[];
  timeline?: ProjectTimelineItem[];
  ctaText: string;
  ctaHref?: string;
  ctaOnClick?: () => void;
  secondaryCta?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
}

export function ProjectPage({
  logo,
  logoAlt,
  title,
  tagline,
  description,
  features,
  stats,
  timeline,
  ctaText,
  ctaHref,
  ctaOnClick,
  secondaryCta,
}: ProjectPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="w-full border-b border-gray-100 py-4 px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={16} />
            Instituto Nexus
          </Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6">
        {/* Hero */}
        <section className="pt-20 pb-24 text-center">
          <img
            src={logo}
            alt={logoAlt}
            className="w-20 h-20 object-contain mx-auto mb-8 rounded-2xl"
          />
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-4 leading-relaxed">
            {tagline}
          </p>
          <p className="text-base text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {ctaHref ? (
              <a href={ctaHref} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#0a2e4f] hover:bg-[#0a2e4f]/90 text-white px-8">
                  {ctaText}
                  <ExternalLink className="ml-2" size={16} />
                </Button>
              </a>
            ) : (
              <Button
                size="lg"
                className="bg-[#0a2e4f] hover:bg-[#0a2e4f]/90 text-white px-8"
                onClick={ctaOnClick}
              >
                {ctaText}
              </Button>
            )}
            {secondaryCta && (
              secondaryCta.href ? (
                <a href={secondaryCta.href} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="px-8">
                    {secondaryCta.text}
                  </Button>
                </a>
              ) : (
                <Button size="lg" variant="outline" className="px-8" onClick={secondaryCta.onClick}>
                  {secondaryCta.text}
                </Button>
              )
            )}
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 border-t border-b border-gray-100">
          <div className={`grid gap-8 ${stats.length <= 3 ? "grid-cols-3" : "grid-cols-2 md:grid-cols-4"}`}>
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#0a2e4f] mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">
            O que oferece
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature, i) => (
              <div key={i} className="space-y-3">
                <div className="text-[#0a2e4f]">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        {timeline && timeline.length > 0 && (
          <section className="py-20 border-t border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">
              História
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
                <div className="space-y-12 pl-8">
                  {timeline.map((item, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[33px] top-1 w-3 h-3 rounded-full bg-[#0a2e4f] ring-4 ring-white" />
                      <div className="text-xs font-semibold text-[#0a2e4f] mb-1 uppercase tracking-widest">
                        {item.year}
                      </div>
                      <h3 className="text-base font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Footer */}
        <section className="py-20 border-t border-gray-100 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Pronto para começar?
          </h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Faça parte da comunidade que está transformando a experiência universitária na UFABC.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {ctaHref ? (
              <a href={ctaHref} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#0a2e4f] hover:bg-[#0a2e4f]/90 text-white px-8">
                  {ctaText}
                  <ExternalLink className="ml-2" size={16} />
                </Button>
              </a>
            ) : (
              <Button
                size="lg"
                className="bg-[#0a2e4f] hover:bg-[#0a2e4f]/90 text-white px-8"
                onClick={ctaOnClick}
              >
                {ctaText}
              </Button>
            )}
            <Link to="/">
              <Button size="lg" variant="ghost" className="text-gray-500">
                Voltar ao início
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
