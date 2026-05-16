import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

/**
 * Компонент для динамического управления SEO мета-тегами
 * Использовать на страницах, где нужно изменить title/description
 */
const SEOHead = ({
  title = "Группа подготовки к экзамену в Минюсте | более 50% сдают с 1 раза",
  description = "Группа подготовки к аттестационному экзамену в Минюсте. Более 50% участников сдают с первого раза. 8 недель, 5–6 человек, отработанная методика.",
  image = "https://exam.ilat.info/sections/hero-groups-collage.png",
  url = "https://exam.ilat.info/",
  type = "website",
}: SEOHeadProps) => {
  useEffect(() => {
    // Обновляем title
    document.title = title;

    // Обновляем meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Обновляем Open Graph теги
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (ogDescription) ogDescription.setAttribute("content", description);

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute("content", image);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", url);

    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) ogType.setAttribute("content", type);

    // Обновляем Twitter Card теги
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", title);

    const twitterDescription = document.querySelector(
      'meta[name="twitter:description"]'
    );
    if (twitterDescription)
      twitterDescription.setAttribute("content", description);

    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) twitterImage.setAttribute("content", image);

    const twitterUrl = document.querySelector('meta[name="twitter:url"]');
    if (twitterUrl) twitterUrl.setAttribute("content", url);

    // Обновляем canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", url);
    } else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("href", url);
      document.head.appendChild(canonical);
    }
  }, [title, description, image, url, type]);

  return null;
};

export default SEOHead;
