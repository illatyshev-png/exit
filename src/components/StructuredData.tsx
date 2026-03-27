import { useEffect } from "react";
import { SITE_URL, faqContent } from "@/content/landing";
import {
  getOrganizationSchema,
  getCourseSchema,
  getFAQSchema,
  getWebSiteSchema,
  getBreadcrumbSchema,
} from "@/utils/structuredData";

/**
 * Компонент для добавления структурированных данных (Schema.org) на страницу
 * Улучшает SEO и позволяет получить богатые сниппеты в поисковой выдаче
 */
const StructuredData = () => {
  useEffect(() => {
    // Organization Schema
    const organizationSchema = getOrganizationSchema({
      name: "Группа подготовки к экзамену в Минюсте",
      description:
        "Группа подготовки к аттестационному экзамену в Минюсте. Более 50% участников сдают с первого раза.",
      logo: `${SITE_URL}/apple-touch-icon.png`,
      founder: {
        name: "Илья Латышев",
        jobTitle: "Бизнес-коуч, юрист",
        image: `${SITE_URL}/author.jpg`,
        url: "https://www.ilat.info",
      },
      address: {
        country: "BY",
        locality: "Минск",
      },
      contactUrl: "https://t.me/IlyaLatyshev",
    });

    // Course Schema
    const courseSchema = getCourseSchema({
      name: "Группа подготовки к экзамену в Министерстве юстиции",
      description:
        "8-недельная программа подготовки к аттестационному экзамену в Минюсте. Включает полный конспект, 350+ тестовых вопросов, коучинговые техники.",
      provider: "Илья Латышев",
      duration: "P8W",
      price: "900",
      currency: "BYN",
      rating: {
        value: "4.8",
        count: "103",
      },
      instructor: {
        name: "Илья Латышев",
        description:
          "Юрист с 2001 года, бизнес-коуч ICU, автор 270+ статей и курсов",
      },
    });

    // FAQPage Schema
    const faqSchema = getFAQSchema(faqContent.items);

    // WebSite Schema
    const websiteSchema = getWebSiteSchema({
      name: "Подготовка к экзамену в Минюсте",
      url: SITE_URL,
      description:
        "Группа подготовки к аттестационному экзамену в Минюсте. Более 50% участников сдают с первого раза.",
      publisher: "Илья Латышев",
      language: "ru-BY",
    });

    // BreadcrumbList Schema
    const breadcrumbSchema = getBreadcrumbSchema([
      {
        name: "Главная",
        url: SITE_URL,
      },
      {
        name: "Что входит",
        url: `${SITE_URL}/#solution`,
      },
      {
        name: "Как работает",
        url: `${SITE_URL}/#details`,
      },
      {
        name: "Стоимость",
        url: `${SITE_URL}/#pricing`,
      },
    ]);

    // Добавляем все схемы в head
    const schemas = [
      organizationSchema,
      courseSchema,
      faqSchema,
      websiteSchema,
      breadcrumbSchema,
    ];

    const scriptElements: HTMLScriptElement[] = [];

    schemas.forEach((schema, index) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = `structured-data-${index}`;
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
      scriptElements.push(script);
    });

    // Cleanup при размонтировании
    return () => {
      scriptElements.forEach((script) => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, []);

  return null;
};

export default StructuredData;
