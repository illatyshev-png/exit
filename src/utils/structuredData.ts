/**
 * Утилиты для генерации структурированных данных (Schema.org)
 * Используются для создания JSON-LD разметки
 */

import { SITE_URL } from "@/content/landing";

export interface OrganizationSchemaParams {
  name: string;
  description: string;
  logo?: string;
  founder?: {
    name: string;
    jobTitle: string;
    image?: string;
    url?: string;
  };
  address?: {
    country: string;
    locality: string;
  };
  contactUrl?: string;
}

export const getOrganizationSchema = (params: OrganizationSchemaParams) => ({
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: params.name,
  url: SITE_URL,
  logo: params.logo || `${SITE_URL}/apple-touch-icon.png`,
  description: params.description,
  ...(params.founder && {
    founder: {
      "@type": "Person",
      name: params.founder.name,
      jobTitle: params.founder.jobTitle,
      ...(params.founder.image && { image: params.founder.image }),
      ...(params.founder.url && { url: params.founder.url }),
    },
  }),
  ...(params.address && {
    address: {
      "@type": "PostalAddress",
      addressCountry: params.address.country,
      addressLocality: params.address.locality,
    },
  }),
  ...(params.contactUrl && {
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      url: params.contactUrl,
      availableLanguage: ["Russian"],
    },
  }),
});

export interface CourseSchemaParams {
  name: string;
  description: string;
  provider: string;
  duration: string;
  price: string;
  currency?: string;
  rating?: {
    value: string;
    count: string;
  };
  instructor?: {
    name: string;
    description?: string;
  };
}

export const getCourseSchema = (params: CourseSchemaParams) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  name: params.name,
  description: params.description,
  provider: {
    "@type": "Person",
    name: params.provider,
  },
  educationalLevel: "Professional",
  courseMode: "Online",
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Online",
    duration: params.duration,
    ...(params.instructor && {
      instructor: {
        "@type": "Person",
        name: params.instructor.name,
        ...(params.instructor.description && {
          description: params.instructor.description,
        }),
      },
    }),
  },
  offers: {
    "@type": "Offer",
    price: params.price,
    priceCurrency: params.currency || "BYN",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/#pricing`,
  },
  ...(params.rating && {
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: params.rating.value,
      reviewCount: params.rating.count,
      bestRating: "5",
    },
  }),
});

export interface FAQItem {
  question: string;
  answer: string;
}

/** Разворачивает markdown-ссылки в FAQ для поля text в JSON-LD */
const faqAnswerForSchema = (answer: string) =>
  answer.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, "$1 ($2)");

export const getFAQSchema = (items: FAQItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faqAnswerForSchema(item.answer),
    },
  })),
});

export interface WebSiteSchemaParams {
  name: string;
  url: string;
  description: string;
  publisher: string;
  language?: string;
}

export const getWebSiteSchema = (params: WebSiteSchemaParams) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: params.name,
  url: params.url,
  description: params.description,
  inLanguage: params.language || "ru-BY",
  publisher: {
    "@type": "Person",
    name: params.publisher,
  },
});

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export const getBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export interface PersonSchemaParams {
  name: string;
  jobTitle?: string;
  description?: string;
  image?: string;
  url?: string;
  sameAs?: string[];
}

export const getPersonSchema = (params: PersonSchemaParams) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: params.name,
  ...(params.jobTitle && { jobTitle: params.jobTitle }),
  ...(params.description && { description: params.description }),
  ...(params.image && { image: params.image }),
  ...(params.url && { url: params.url }),
  ...(params.sameAs && { sameAs: params.sameAs }),
});

export interface ProductSchemaParams {
  name: string;
  description: string;
  image?: string;
  price: string;
  currency?: string;
  rating?: {
    value: string;
    count: string;
  };
  offers?: {
    price: string;
    currency?: string;
    availability?: string;
  }[];
}

export const getProductSchema = (params: ProductSchemaParams) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: params.name,
  description: params.description,
  ...(params.image && { image: params.image }),
  offers: params.offers
    ? params.offers.map((offer) => ({
        "@type": "Offer",
        price: offer.price,
        priceCurrency: offer.currency || "BYN",
        availability: offer.availability || "https://schema.org/InStock",
        url: `${SITE_URL}/#pricing`,
      }))
    : {
        "@type": "Offer",
        price: params.price,
        priceCurrency: params.currency || "BYN",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/#pricing`,
      },
  ...(params.rating && {
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: params.rating.value,
      reviewCount: params.rating.count,
      bestRating: "5",
    },
  }),
});
