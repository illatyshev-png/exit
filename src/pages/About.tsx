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
  solutionContent,
  detailsContent,
  footerContent,
  SITE_URL,
} from "../content/landing";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="О программе подготовки к экзамену в Минюсте | 8 недель, 350+ тестов"
        description="Подробная информация о программе подготовки к аттестационному экзамену в Минюсте. 8 недель интенсивной работы, полный конспект, 350+ тестовых вопросов, коучинговые техники."
        url={`${SITE_URL}/about`}
        image={`${SITE_URL}/sections/solution.png`}
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
                { label: "О программе подготовки" },
              ]}
            />

            <Heading as="h1" className="mb-6">
              О программе подготовки к аттестационному экзамену в Минюсте
            </Heading>

            <Text variant="lead" className="mb-12">
              Комплексная 8-недельная программа подготовки к экзамену в Министерстве
              юстиции. Проверенная методика, которая помогла 109 юристам успешно
              подготовиться к аттестации.
            </Text>

            {/* Что получает участник */}
            <div className="mb-16">
              <Heading as="h2" className="mb-8">
                {solutionContent.headline}
              </Heading>
              <Text className="mb-8">{solutionContent.description}</Text>

              <div className="grid sm:grid-cols-2 gap-6">
                {solutionContent.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="bg-card border border-border rounded-lg p-6 shadow-[var(--shadow-soft)] card-hover-glow"
                  >
                    <div className="flex items-start gap-3 mb-3">
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
                      <h3 className="font-semibold text-foreground text-lg">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Как работает группа */}
            <div className="mb-16">
              <Heading as="h2" className="mb-8">
                {detailsContent.headline}
              </Heading>

              <div className="space-y-6">
                {detailsContent.features.map((feature, i) => (
                  <div
                    key={i}
                    className="bg-card border border-border rounded-lg p-6 shadow-[var(--shadow-soft)]"
                  >
                    <h3 className="font-semibold text-foreground text-lg mb-2">
                      {feature.name}
                    </h3>
                    <p className="text-muted-foreground">{feature.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlight card */}
            <div className="relative max-w-2xl mx-auto mb-12">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/40 via-accent/60 to-accent/40 rounded-xl blur-sm animate-pulse" />
              <div className="relative bg-accent/10 border-accent/30 border-2 rounded-lg p-8">
                <Heading as="h3" className="mb-4 text-accent text-center">
                  {solutionContent.highlightCard.title}
                </Heading>
                <ul className="space-y-3">
                  {solutionContent.highlightCard.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
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
                      <span className="text-foreground/90 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bonus card */}
            <div className="bg-muted border border-border rounded-lg p-8 text-center mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full mb-3">
                Актуально
              </span>
              <Heading as="h3" className="mb-3 text-accent">
                {detailsContent.bonus.title}
              </Heading>
              <Text className="text-foreground/80">
                {detailsContent.bonus.description}
              </Text>
            </div>

            {/* CTA */}
            <div className="text-center">
              <LandingButton variant="accent" size="lg" href="/pricing">
                Узнать стоимость участия
              </LandingButton>
            </div>
          </Container>
        </Section>
      </main>

      <Footer {...footerContent} />
    </div>
  );
};

export default About;
