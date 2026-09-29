import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { projects } from "#lib/constants";
import { getPostBySlug } from "#data/blog-posts";
import { updatePageTitle } from "#hooks/use-document-title";

const STATIC_TITLES: Record<string, string> = {
  "/": "",
  "/blog": "Blog",
  "/team": "Time",
  "/status": "Status",
};

export default function DynamicTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    const cleanPath = pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

    if (Object.prototype.hasOwnProperty.call(STATIC_TITLES, cleanPath)) {
      updatePageTitle(STATIC_TITLES[cleanPath]);
      return;
    }

    // (exemplo /ufabc-next, /ufabc-parser, etc.)
    const matchedProject = projects.find((p) => p.link === cleanPath);
    if (matchedProject) {
      updatePageTitle(matchedProject.title);
      return;
    }

    if (cleanPath.startsWith("/blog/")) {
      const slug = decodeURIComponent(cleanPath.replace(/^\/blog\//, ""));
      const post = getPostBySlug(slug);
      if (post?.title) {
        updatePageTitle(post.title);
        return;
      }
      updatePageTitle("Post Não Encontrado");
      return;
    }

    updatePageTitle("Página Não Encontrada");
  }, [pathname]);

  return null;
}
