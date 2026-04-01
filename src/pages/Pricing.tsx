import { useEffect } from "react";
import Header from "../components/landing/layout/Header";
import Footer from "../components/landing/layout/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import SEOHead from "../components/SEOHead";
import Container from "../components/landing/ui/Container";
import Section from "../components/landing/ui/Section";
import Heading from "../components/landing/ui/Heading";
import Text from "../components/landing/ui/Text";
import Pricing from "../components/landing/sections/Pricing";
import StructuredData from "../components/StructuredData";

import {
  siteConfig,
  navLinks,
  pricingContent,
  footerContent,
  SITE_URL,
} from "../content/landing";

const PricingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Стоимость участия в группе подготовки к экзамену в Минюсте | От 500 руб"
        description="Стоимость участия в группе подготовки к аттестационному экзамену в Минюсте. 900 руб за 8 встреч или 500 руб за 4 встречи. Оплата картой или через ЕРИП."
        url={`${SITE_URL}/pricing`}
        image={`${SITE_URL}/sections/pricing.png`}
      />
      <StructuredData />
      <Header
        siteName={siteConfig.name}
        logo={siteConfig.logo}
        navLinks={navLinks}
      />

      <main className="flex-1">
        <Section>
          <Container className="max-w-4xl mx-auto">
            <Breadcrumbs
              items={[
                { label: "Главная", href: "/" },
                { label: "Стоимость участия" },
              ]}
            />

            <Heading as="h1" className="mb-6 text-center">
              Стоимость участия в группе подготовки к экзамену в Минюсте
            </Heading>

            <Text variant="lead" className="mb-12 text-center max-w-3xl mx-auto">
              Выберите удобный вариант оплаты. Все участники получают одинаковый
              доступ к материалам и встречам группы.
            </Text>
          </Container>
        </Section>

        <Pricing {...pricingContent} />

        <Section variant="muted">
          <Container className="max-w-3xl mx-auto text-center">
            <Heading as="h2" className="mb-6">
              Что входит в стоимость участия
            </Heading>

            <div className="grid sm:grid-cols-2 gap-6 text-left mb-12">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-accent shrink-0 mt-1">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <h3 className="font-semibold text-foreground">
                    8 онлайн-встреч в Zoom
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Еженедельные встречи по 2 часа с разбором тестов и вопросов
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-accent shrink-0 mt-1">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <h3 className="font-semibold text-foreground">
                    Полный конспект по программе
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Готовые конспекты по всем 300+ темам экзаменационной программы
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-accent shrink-0 mt-1">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <h3 className="font-semibold text-foreground">
                    350+ тестовых вопросов
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Решение и обсуждение реальных тестовых вопросов на встречах
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-accent shrink-0 mt-1">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <h3 className="font-semibold text-foreground">
                    Поддержка группы
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Чат в Telegram, обмен опытом, моральная поддержка
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-accent shrink-0 mt-1">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <h3 className="font-semibold text-foreground">
                    Коучинговые техники
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Специальные техники для повышения эффективности подготовки
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-accent shrink-0 mt-1">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <h3 className="font-semibold text-foreground">
                    Гибкий график
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Группа сама выбирает удобный день и время встреч
                </p>
              </div>
            </div>

            {/* Способы оплаты */}
            <div className="bg-muted border border-border rounded-lg p-8 mb-12">
              <Heading as="h2" className="mb-6 text-center">
                Способы оплаты
              </Heading>
              <div className="space-y-4 text-left max-w-2xl mx-auto">
                <div className="flex items-start gap-3">
                  <span className="text-accent shrink-0 mt-1">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-foreground mb-1">
                      Оплата банковской картой
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Быстрая и безопасная оплата через платежную систему bePaid
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-accent shrink-0 mt-1">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-foreground mb-1">Через ЕРИП</p>
                    <p className="text-sm text-muted-foreground">
                      В дереве ЕРИП выберите «E-POS — оплата товаров и услуг» и
                      введите код услуги
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-accent shrink-0 mt-1">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-foreground mb-1">
                      Безналичный расчет для юрлиц и ИП
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Возможна оплата по счету с НДС или без НДС
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Гарантии */}
            <div className="text-center mb-12">
              <Heading as="h2" className="mb-6">
                Результаты
              </Heading>
              <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="text-4xl font-bold text-accent mb-2">более 50%</div>
                  <p className="text-sm text-muted-foreground">
                    участников сдают экзамен с первого раза
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="text-4xl font-bold text-accent mb-2">103</div>
                  <p className="text-sm text-muted-foreground">
                    юриста уже подготовились в наших группах
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="text-4xl font-bold text-accent mb-2">18</div>
                  <p className="text-sm text-muted-foreground">
                    групп успешно завершили программу
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-accent/5 border border-accent/20 rounded-lg p-8">
              <Heading as="h3" className="mb-4">
                Готовы присоединиться к юбилейной, 20-й группе подготовки юристов?
              </Heading>
              <Text className="mb-6">
                Количество мест ограничено. Не упустите возможность подготовиться
                к экзамену с проверенной методикой.
              </Text>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://tiny.by/link/38c85fb1a"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-accent text-accent-foreground hover:bg-accent/90 h-11 px-8"
                >
                  Оплатить 900 руб (8 встреч)
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
                >
                  Узнать больше о программе
                </a>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer {...footerContent} />
    </div>
  );
};

export default PricingPage;
