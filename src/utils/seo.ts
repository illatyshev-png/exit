/**
 * SEO мета-данные для всех страниц сайта
 * Используется для централизованного управления SEO
 */

import { SITE_URL } from "@/content/landing";

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  type?: string;
}

export const pageMetas: Record<string, PageMeta> = {
  home: {
    title: "Подготовка к экзамену в Минюсте | более 50% сдают с 1 раза",
    description:
      "Группа подготовки к аттестационному экзамену в Минюсте. Более 50% участников сдают с первого раза. 8 недель, 5–6 человек, отработанная методика.",
    keywords:
      "курс подготовки юристов к экзамену в Минюсте, подготовка к экзамену минюст, аттестационный экзамен, группа подготовки юристов, экзамен министерство юстиции беларусь",
    ogImage: `${SITE_URL}/sections/details.png`,
    canonical: SITE_URL,
    type: "website",
  },

  about: {
    title: "О программе подготовки к экзамену в Минюсте | 8 недель, 350+ тестов",
    description:
      "Подробная информация о программе подготовки к аттестационному экзамену в Минюсте. 8 недель интенсивной работы, полный конспект, 350+ тестовых вопросов, коучинговые техники.",
    keywords:
      "программа подготовки, методика подготовки к экзамену, конспекты минюст, тестовые вопросы",
    ogImage: `${SITE_URL}/sections/solution.png`,
    canonical: `${SITE_URL}/about`,
    type: "article",
  },

  pricing: {
    title:
      "Стоимость участия в группе подготовки к экзамену в Минюсте | От 500 руб",
    description:
      "Стоимость участия в группе подготовки к аттестационному экзамену в Минюсте. 900 руб за 8 встреч или 500 руб за 4 встречи. Оплата картой или через ЕРИП.",
    keywords:
      "стоимость подготовки к экзамену, цена группы подготовки, оплата обучения юристов",
    ogImage: `${SITE_URL}/sections/pricing.png`,
    canonical: `${SITE_URL}/pricing`,
    type: "website",
  },

  reviews: {
    title:
      "Отзывы участников групп подготовки к экзамену в Минюсте | 103 юриста",
    description:
      "Реальные отзывы 103 участников групп подготовки к аттестационному экзамену в Минюсте. Более 50% сдают с первого раза. Читайте отзывы юристов о программе и методике.",
    keywords:
      "отзывы о подготовке к экзамену в Минюсте, отзывы о курсе подготовки юристов к экзамену в Минюсте, курс подготовки к аттестационному экзамену, отзывы о подготовке к экзамену, отзывы участников, результаты подготовки юристов",
    ogImage: `${SITE_URL}/sections/testimonials.png`,
    canonical: `${SITE_URL}/reviews`,
    type: "article",
  },

  author: {
    title: "Об авторе - Илья Латышев | Юрист, бизнес-коуч, автор программы",
    description:
      "Илья Латышев - юрист с 2001 года, бизнес-коуч ICU, автор 270+ статей. С 2022 года веду группы подготовки к аттестационному экзамену в Минюсте. Более 50% участников сдают с первого раза.",
    keywords:
      "илья латышев, автор курса, бизнес-коуч для юристов, преподаватель юристов",
    ogImage: `${SITE_URL}/author.jpg`,
    canonical: `${SITE_URL}/author`,
    type: "profile",
  },

  faq: {
    title:
      "Часто задаваемые вопросы о подготовке к экзамену в Минюсте | FAQ",
    description:
      "Ответы на часто задаваемые вопросы о группе подготовки к аттестационному экзамену в Минюсте. Как проходят встречи, сколько времени нужно, как присоединиться к группе.",
    keywords:
      "курс подготовки юристов к экзамену в Минюсте, вопросы о подготовке к экзамену, как подготовиться к экзамену минюст, faq экзамен",
    ogImage: `${SITE_URL}/sections/faq.jpeg`,
    canonical: `${SITE_URL}/faq`,
    type: "article",
  },

  notFound: {
    title: "404 - Страница не найдена | Подготовка к экзамену в Минюсте",
    description:
      "Запрашиваемая страница не найдена. Вернитесь на главную страницу или перейдите к разделам о программе подготовки к экзамену в Минюсте.",
    ogImage: `${SITE_URL}/sections/details.png`,
    canonical: SITE_URL,
    type: "website",
  },
};

/**
 * Функция для обновления мета-тегов страницы
 * @param meta - объект с мета-данными
 */
export const updatePageMeta = (meta: PageMeta) => {
  // Обновляем title
  document.title = meta.title;

  // Обновляем meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", meta.description);
  }

  // Обновляем meta keywords (если указаны)
  if (meta.keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute("content", meta.keywords);
  }

  // Обновляем canonical URL
  let canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute("href", meta.canonical || SITE_URL);
  }

  // Обновляем Open Graph теги
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", meta.title);

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.setAttribute("content", meta.description);

  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) ogImage.setAttribute("content", meta.ogImage || `${SITE_URL}/sections/details.png`);

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute("content", meta.canonical || SITE_URL);

  const ogType = document.querySelector('meta[property="og:type"]');
  if (ogType) ogType.setAttribute("content", meta.type || "website");

  // Обновляем Twitter Card теги
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) twitterTitle.setAttribute("content", meta.title);

  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  if (twitterDescription) twitterDescription.setAttribute("content", meta.description);

  const twitterImage = document.querySelector('meta[name="twitter:image"]');
  if (twitterImage) twitterImage.setAttribute("content", meta.ogImage || `${SITE_URL}/sections/details.png`);

  const twitterUrl = document.querySelector('meta[name="twitter:url"]');
  if (twitterUrl) twitterUrl.setAttribute("content", meta.canonical || SITE_URL);
};
