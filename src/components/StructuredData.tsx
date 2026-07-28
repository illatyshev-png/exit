import { useEffect } from "react";
import { SITE_URL, faqContent, pricingContent } from "@/content/landing";
import {
  getOrganizationSchema,
  getFAQSchema,
  getWebSiteSchema,
  getBreadcrumbSchema,
  getPersonSchema,
  getProductSchema,
} from "@/utils/structuredData";

/**
 * Компонент для добавления структурированных данных (Schema.org) на страницу
 * Улучшает SEO и позволяет получить богатые сниппеты в поисковой выдаче
 */
const StructuredData = () => {
  useEffect(() => {
    const authorName = "Илья Латышев";

    // Organization Schema (как издатель/проект)
    const organizationSchema = getOrganizationSchema({
      name: "EXIT",
      description:
        "EXIT — пошаговый план побега из найма в свой бизнес.",
      logo: `${SITE_URL}/apple-touch-icon.png`,
      founder: {
        name: authorName,
        jobTitle: "Юрист, предприниматель",
        image: `${SITE_URL}/author.jpg`,
        url: "https://www.ilat.info",
      },
      address: {
        country: "BY",
        locality: "Минск",
      },
      contactUrl: "https://t.me/IlyaLatyshev",
    });

    // Person Schema
    const personSchema = getPersonSchema({
      name: authorName,
      jobTitle: "Юрист, предприниматель",
      description:
        "Автор книги «EXIT: Пошаговый план побега из найма в свой бизнес».",
      url: "https://www.ilat.info",
      sameAs: ["https://t.me/IlyaLatyshev"],
    });

    // Product Schema (книга)
    const productSchema = getProductSchema({
      name: "EXIT: Пошаговый план побега из найма в свой бизнес",
      description:
        "Пошаговый план выхода из найма в свой бизнес от Ильи Латышева: клиенты без бюджета, партнёрство без судов, ценообразование без демпинга.",
      image: `${SITE_URL}/images/book-mockup.png`,
      price: pricingContent.plans?.[0]?.tiers?.[0]?.price?.replace(/[^\d]/g, "") || "25",
      currency: "BYN",
      offers: pricingContent.plans.flatMap((plan) =>
        plan.tiers.map((tier) => ({
          price: tier.price.replace(/[^\d]/g, ""),
          currency: "BYN",
          availability: "https://schema.org/InStock",
        })),
      ),
    });

    // FAQPage Schema
    const faqSchema = getFAQSchema(faqContent.items);

    // WebSite Schema
    const websiteSchema = getWebSiteSchema({
      name: "EXIT",
      url: SITE_URL,
      description:
        "Книга Ильи Латышева о том, как выйти из найма в свой бизнес и вырасти в чеке. 19 лет опыта, 130 страниц конкретики, 8 минут аудио-концентрата.",
      publisher: authorName,
      language: "ru",
    });

    // BreadcrumbList Schema
    const breadcrumbSchema = getBreadcrumbSchema([
      {
        name: "Главная",
        url: SITE_URL,
      },
      {
        name: "Аудио",
        url: `${SITE_URL}/#audio`,
      },
      {
        name: "Тарифы",
        url: `${SITE_URL}/#pricing`,
      },
    ]);

    // Добавляем все схемы в head
    const schemas = [
      organizationSchema,
      personSchema,
      productSchema,
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
