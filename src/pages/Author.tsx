import { useEffect } from "react";
import Header from "../components/landing/layout/Header";
import Footer from "../components/landing/layout/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import SEOHead from "../components/SEOHead";
import Container from "../components/landing/ui/Container";
import Section from "../components/landing/ui/Section";
import Heading from "../components/landing/ui/Heading";
import Text from "../components/landing/ui/Text";
import LandingButton from "../components/landing/ui/LandingButton";
import StructuredData from "../components/StructuredData";

import {
  siteConfig,
  navLinks,
  authorityContent,
  footerContent,
  SITE_URL,
} from "../content/landing";

const Author = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Об авторе - Илья Латышев | Юрист, бизнес-коуч, автор программы"
        description="Илья Латышев - юрист с 2001 года, бизнес-коуч ICU, автор 270+ статей. С 2022 года веду группы подготовки к аттестационному экзамену в Минюсте. Более 50% участников сдают с первого раза."
        url={`${SITE_URL}/author`}
        image={`${SITE_URL}/author.jpg`}
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
                { label: "Об авторе" },
              ]}
            />

            <div className="grid md:grid-cols-[300px_1fr] gap-8 mb-12">
              <div>
                <img
                  src="/author.jpg"
                  alt="Илья Латышев - автор программы подготовки к экзамену в Минюсте"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
              <div>
                <Heading as="h1" className="mb-6">
                  {authorityContent.headline}
                </Heading>
                <Text variant="lead" className="mb-6">
                  Помогаю юристам успешно сдать аттестационный экзамен в
                  Министерстве юстиции через проверенную методику групповой
                  подготовки.
                </Text>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://t.me/IlyaLatyshev"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                    </svg>
                    Telegram
                  </a>
                  <a
                    href="mailto:il.latyshev@gmail.com"
                    rel="nofollow"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Email
                  </a>
                  <a
                    href="https://www.ilat.info"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                    Сайт
                  </a>
                </div>
              </div>
            </div>

            {/* Экспертиза */}
            <div className="mb-16">
              <Heading as="h2" className="mb-8 text-center">
                Экспертиза и опыт
              </Heading>

              <div className="space-y-8">
                {authorityContent.groups.map((group, i) => (
                  <div key={i} className="bg-card border border-border rounded-lg p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {i + 1}. {group.title}
                    </h3>
                    <ul className="space-y-3">
                      {group.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="w-2 h-2 rounded-full bg-accent shrink-0 mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Достижения */}
            <div className="mb-16">
              <Heading as="h2" className="mb-8 text-center">
                Ключевые достижения
              </Heading>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-muted border border-border rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">2022</div>
                  <p className="text-sm text-muted-foreground">
                    Начал вести группы подготовки к экзамену в Минюсте
                  </p>
                </div>

                <div className="bg-muted border border-border rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">18</div>
                  <p className="text-sm text-muted-foreground">
                    групп успешно завершили программу подготовки
                  </p>
                </div>

                <div className="bg-muted border border-border rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">103</div>
                  <p className="text-sm text-muted-foreground">
                    юриста подготовились к аттестационному экзамену
                  </p>
                </div>

                <div className="bg-muted border border-border rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">270+</div>
                  <p className="text-sm text-muted-foreground">
                    статей юридической тематики написано
                  </p>
                </div>

                <div className="bg-muted border border-border rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">2001</div>
                  <p className="text-sm text-muted-foreground">
                    год начала работы в юридической сфере
                  </p>
                </div>

                <div className="bg-muted border border-border rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">100+</div>
                  <p className="text-sm text-muted-foreground">
                    юридических семинаров проведено
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-accent/5 border border-accent/20 rounded-lg p-8">
              <Heading as="h3" className="mb-4">
                Готовы начать подготовку?
              </Heading>
              <Text className="mb-6">
                Принимаю заявки в юбилейную, 20-ю, группу подготовки к экзамену в Минюсте.
                Стартуем в мае 2026. Осталось 3 места.
              </Text>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <LandingButton variant="accent" size="lg" href="/pricing">
                  Узнать стоимость
                </LandingButton>
                <LandingButton variant="outline" size="lg" href="/about">
                  О программе
                </LandingButton>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer {...footerContent} />
    </div>
  );
};

export default Author;
