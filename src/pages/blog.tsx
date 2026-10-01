import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "#components/nav-bar";
import Footer from "#components/footer";
import { Button } from "#components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "#components/ui/avatar";
import { getVisiblePosts, type BlogPost } from "#data/blog-posts";
import { blog_categories } from "#lib/constants";

// Get all blog posts from centralized data
const blogPosts: BlogPost[] = getVisiblePosts();

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts = selectedCategory === "all" 
    ? blogPosts
    : blogPosts.filter(post => post.categories.includes(selectedCategory));

  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <main className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Histórias, tutoriais e insights da comunidade Nexus
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {blog_categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className={`
                rounded-full px-6 py-2 font-medium transition-all duration-200
                ${selectedCategory === category.id 
                  ? "shadow-md scale-105" 
                  : "hover:scale-105 hover:shadow-sm hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
                }
              `}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              Nenhum post encontrado nesta categoria
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link 
      to={`/blog/${post.slug}`}
      className="group block rounded-2xl overflow-hidden bg-white border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="aspect-[16/9] overflow-hidden bg-muted">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6 space-y-4">
        {/* Category Badge */}
        <div className="flex flex-wrap gap-2">
          {post.categories.map((categoryId) => {
            const category = blog_categories.find((item) => item.id === categoryId);

            return (
              <span
                key={categoryId}
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-muted text-muted-foreground"
              >
                {category?.label ?? categoryId}
              </span>
            );
          })}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        {/* Author Section */}
        <div className="flex items-center gap-3 pt-2">
          <div className="flex -space-x-2 items-center">
            {(post.authors).slice(0, 3).map((a, i) => (
              <div key={i} className="rounded-full ring-2 ring-card bg-card">
                <Avatar className="h-8 w-8 border-2">
                  <AvatarImage src={a.avatar} alt={a.name} />
                  <AvatarFallback>{a.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
            ))}
            {(post.authors && post.authors.length > 3) && (
              <div className="ml-2 text-xs text-muted-foreground">+{post.authors.length - 3}</div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">
              {post.authors[0].name + ` e +${post.authors.length - 1}` }
            </p>
            <p className="text-xs text-muted-foreground">{post.date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
