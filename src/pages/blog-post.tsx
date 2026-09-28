import { useParams, Link } from "react-router-dom";
import NavBar from "#components/nav-bar";
import Footer from "#components/footer";
import { Button } from "#components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "#components/ui/avatar";
import { ArrowLeft, Calendar, School, Share2, Twitter, Linkedin, Github, MapPin, AtSign, Check } from "lucide-react";
import { getPostBySlug, type Author } from "#data/blog-posts";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "#components/ui/carousel";

// Author Card Component
function AuthorCard({ author }: { author: Author }) {
  return (
    <div className="p-8 rounded-2xl bg-muted/50 border h-full">
      <div className="flex items-start gap-6">
        <Avatar className="h-16 w-16 border-2">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h4 className="font-bold text-lg mb-1">{author.name}</h4>
          <p className="text-sm text-muted-foreground mb-3">{author.role}</p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {author.bio || `${author.name} is the ${author.role} at Nexus.`}
          </p>
          {author.social && (
            <div className="flex gap-3">
              {author.social.twitter && (
                <a 
                  href={author.social.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              )}
              {author.social.linkedin && (
                <a 
                  href={author.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {author.social.github && (
                <a 
                  href={author.social.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);
  
  const post = slug ? getPostBySlug(slug) : null;

  const handleShareClick = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <NavBar />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Não Encontrado</h1>
          <p className="text-muted-foreground mb-8">
            O post que você está procurando não existe.
          </p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <article className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-blue-600 transition-colors mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar ao Blog
        </Link>

        {/* Category Badge */}
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-muted text-muted-foreground uppercase tracking-wide">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <School className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

    
        {/* Author Section */}
        <div className="flex items-center justify-between mb-12 pb-8 border-b">

    {/* Authors avatars row with hover cards */}
        <AuthorsHoverRow authors={post.authors && post.authors.length > 0 ? post.authors : [post.author]} />

         
          <Button 
            variant="outline" 
            size="sm" 
            className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
            onClick={handleShareClick}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Link copiado!
              </>
            ) : (
              <>
                <Share2 className="h-4 w-4 mr-2" />
                Compartilhar
              </>
            )}
          </Button>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-slate max-w-none dark:prose-invert
          prose-headings:font-bold 
          prose-headings:tracking-tight
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
          prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3
          prose-p:leading-relaxed prose-p:mb-6
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-strong:font-semibold prose-strong:text-foreground
          prose-ul:my-6 prose-ol:my-6
          prose-li:my-2
          prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic
          prose-img:rounded-lg prose-img:shadow-md
          [&_pre]:!bg-[#0d1117] [&_pre]:!text-[#c9d1d9] [&_pre]:rounded-lg [&_pre]:shadow-lg [&_pre]:my-6 [&_pre]:p-4 [&_pre]:overflow-auto [&_pre]:border [&_pre]:border-[#30363d]
          [&_pre_code]:!bg-transparent [&_pre_code]:!text-inherit [&_pre_code]:!p-0
          [&_code]:!bg-gray-800 [&_code]:!text-gray-200 [&_code]:!px-1.5 [&_code]:!py-0.5 [&_code]:!rounded [&_code]:!text-sm [&_code]:border [&_code]:border-[#30363d]
          [&_.shiki]:!bg-[#0d1117] [&_.shiki]:rounded-lg [&_.shiki]:my-6 [&_.shiki]:shadow-lg
        ">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm bg-muted hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Authors Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">
            {post.authors && post.authors.length > 1 ? "Sobre os Autores" : "Sobre o Autor"}
          </h3>
          
          {post.authors && post.authors.length > 1 ? (
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {post.authors.map((author, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                    <AuthorCard author={author} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          ) : (
            <AuthorCard author={post.author} />
          )}
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t flex justify-between items-center">
          <Link to="/blog">
            <Button variant="outline" className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Todos os Posts
            </Button>
          </Link>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="hover:bg-blue-50 hover:text-blue-600">← Anterior</Button>
            <Button variant="ghost" size="sm" className="hover:bg-blue-50 hover:text-blue-600">Próximo →</Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

// Authors hover row: small avatar list where hovering/focus shows a floating author card
function AuthorsHoverRow({ authors }: { authors: Author[] }) {
  function computeLocalTime(tz?: string) {
    if (!tz) return null;
    // Expect simple form like 'UTC', 'UTC+2', 'UTC-3', 'UTC+5:30'
    const m = tz.match(/UTC([+-]\d+)(?::(\d+))?/);
    if (!m) return null;
    const hours = parseInt(m[1], 10);
    const mins = m[2] ? parseInt(m[2], 10) : 0;
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const offsetMinutes = hours * 60 + (hours >= 0 ? mins : -mins);
    const local = new Date(utc + offsetMinutes * 60000);
    return local.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  return (
    <div className="mb-8">
      <div className="flex items-center gap-3">
        {authors.map((author, idx) => (
          <div key={idx} className="relative group" tabIndex={0} aria-describedby={`author-card-${idx}`}>
            <div className="cursor-pointer">
              <Avatar className="h-10 w-10 border-2">
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </div>

            {/* Floating card */}
            <div
              id={`author-card-${idx}`}
              role="dialog"
              aria-hidden="false"
              className="pointer-events-none absolute bottom-full left-1/2 z-50 w-72 -translate-x-1/2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto group-focus:translate-y-0 group-focus:opacity-100 group-focus:pointer-events-auto transition-all duration-200"
            >
              <div className="bg-popover rounded-xl shadow-lg p-4 border">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16 border-2">
                    <AvatarImage src={author.avatar} alt={author.name} />
                    <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-sm">{author.name}</div>
                        <div className="text-xs text-muted-foreground">{author.role}</div>
                      </div>
                    </div>
                    <div className="my-3 border-t pt-3">
                      <div className="flex flex-col gap-2 text-xs text-muted-foreground">
                        {author.campus && (
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{author.campus}</span>
                          </div>
                        )}
                        {author.curso && (
                          <div className="flex items-center gap-2">
                            <School className="h-4 w-4" />
                            <span>{author.curso}</span>
                          </div>
                        )}
                        {author.handle && (
                          <div className="flex items-center gap-2">
                            <AtSign className="h-4 w-4" />
                            <span>{author.handle}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t">
                  <a
                    href={ author.social?.linkedin }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center rounded-md px-3 py-2 bg-muted/40 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm"
                  >
                    Ver mais
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
