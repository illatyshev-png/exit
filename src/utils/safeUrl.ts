import { SITE_URL } from "@/content/landing";

/**
 * Разрешённые для пользовательских/контентных href схемы:
 * относительные пути, якоря, mailto, http(s).
 * Исключает javascript:, data:, vbscript: и protocol-relative //evil.com
 */
export function isSafeAnchorHref(href: string): boolean {
  const h = href.trim();
  if (!h) return false;
  if (h.startsWith("//")) return false;
  if (h.startsWith("#")) return true;
  if (h.startsWith("/")) {
    return !h.includes("..") && !h.includes("\\");
  }
  const proto = h.slice(0, 12).toLowerCase();
  if (proto.startsWith("mailto:")) {
    if (/[\s<>"'`]/.test(h)) return false;
    try {
      return new URL(h).protocol === "mailto:";
    } catch {
      return /^mailto:[^\s<>]+$/i.test(h);
    }
  }
  if (!/^https?:\/\//i.test(h)) return false;
  try {
    const u = new URL(h);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

export function sanitizeAnchorHref(href: string, fallback = "#"): string {
  return isSafeAnchorHref(href) ? href.trim() : fallback;
}

/** src для встраивания PDF: только путь с этого сайта или тот же host, что SITE_URL */
export function isSafePdfEmbedSrc(src: string): boolean {
  const s = src.trim();
  if (!s || s.startsWith("//")) return false;
  if (/javascript:/i.test(s) || /data:/i.test(s)) return false;
  if (s.startsWith("/")) {
    return !s.includes("..") && !s.includes("\\");
  }
  try {
    const u = new URL(s);
    if (u.protocol !== "http:" && u.protocol !== "https:") return false;
    const allowed = new URL(SITE_URL);
    return u.hostname === allowed.hostname;
  } catch {
    return false;
  }
}
