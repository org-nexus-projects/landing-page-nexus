import { useEffect } from "react";

export const DEFAULT_SITE_TITLE = "Fundação Nexus";

export function formatTitle(title?: string | null, exact = false): string {
  if (!title || title.trim() === "") return DEFAULT_SITE_TITLE;
  if (exact) return title;
  return `${title} - ${DEFAULT_SITE_TITLE}`;
}

export function updatePageTitle(title?: string | null, exact = false) {
  const newTitle = formatTitle(title, exact);
  document.title = newTitle;

  const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.content = newTitle;
  }

  const twitterTitle = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]');
  if (twitterTitle) {
    twitterTitle.content = newTitle;
  }
}

export function useDocumentTitle(title?: string | null, exact = false) {
  useEffect(() => {
    updatePageTitle(title, exact);
  }, [title, exact]);
}
