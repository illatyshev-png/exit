import { useEffect } from "react";
import Header from "../components/landing/layout/Header";
import Footer from "../components/landing/layout/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import SEOHead from "../components/SEOHead";
import Container from "../components/landing/ui/Container";
import Section from "../components/landing/ui/Section";
import Heading from "../components/landing/ui/Heading";
import Text from "../components/landing/ui/Text";
import SocialProof from "../components/landing/sections/SocialProof";
import LandingButton from "../components/landing/ui/LandingButton";
import StructuredData from "../components/StructuredData";

import {
  siteConfig,
  navLinks,
  testimonialsContent,
  footerContent,
  SITE_URL,
} from "../content/landing";

const Reviews = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Отзывы участников групп подготовки к экзамену в Минюсте | 109 юристов"
        description="Реальные отзывы 109 участников групп подготовки к аттестационному экзамену в Минюсте. Более 50% сдают с первого раза. Читайте отзывы юристов о программе и методике."
        url={`${SITE_URL}/reviews`}
        image={`${SITE_URL}/sections/testimonials.png`}
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
                { label: "Отзывы участников" },
              ]}
            />

            <Heading as="h1" className="mb-6 text-center">
              Отзывы участников <del className="line-through">курса</del>{" "}
              групп подготовки к экзамену в Минюсте
            </Heading>

            <Text variant="lead" className="mb-12 text-center max-w-3xl mx-auto">
              За 4 года работы через мои группы прошли 109 юристов. Вот что они
              говорят о программе подготовки к аттестационному экзамену.
            </Text>

            {/* Статистика */}
            <div className="grid sm:grid-cols-3 gap-6 mb-16">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">109</div>
                <p className="text-sm text-muted-foreground">
                  участников прошли подготовку
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">более 50%</div>
                <p className="text-sm text-muted-foreground">
                  сдают экзамен с первого раза
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">19</div>
                <p className="text-sm text-muted-foreground">
                  групп успешно завершили программу
                </p>
              </div>
            </div>
          </Container>
        </Section>

        <SocialProof
              {...testimonialsContent}
              headline={
                <>
                  Отзывы участников <del className="line-through">курса</del>{" "}
                  групп подготовки к экзамену в Минюсте
                </>
              }
            />

        <Section>
          <Container className="max-w-3xl mx-auto">
            <Heading as="h2" className="mb-6 text-center">
              Почему юристы выбирают наш{" "}
              <del className="text-muted-foreground">курс</del> группу
              подготовки к экзамену в Минюсте?
            </Heading>

            <div className="space-y-6 mb-12">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  Проверенная методика подготовки юристов
                </h3>
                <p className="text-muted-foreground">
                  Материал прорабатывается минимум 3–5 раз через систему конспектов,
                  тестов и обсуждений. Это эффективнее любых лекций.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  Поддержка группы
                </h3>
                <p className="text-muted-foreground">
                  Чувство локтя, обмен опытом, моральная поддержка и мотивация от
                  коллег помогают не сойти с дистанции и дойти до экзамена.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  Экспертиза автора
                </h3>
                <p className="text-muted-foreground">
                  Илья Латышев - юрист с 2001 года, бизнес-коуч ICU, автор 300+
                  статей. С 2022 года ведет группы подготовки к экзамену в Минюсте.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  Результаты говорят сами за себя
                </h3>
                <p className="text-muted-foreground">
                  Более 50% участников, ходивших на экзамен, сдают с первого раза — это в 2–3 раза выше
                  средней результативности в 20–30%.
                </p>
              </div>
            </div>

            <div className="text-center bg-accent/5 border border-accent/20 rounded-lg p-8">
              <Heading as="h3" className="mb-4">
                Присоединяйтесь к 21-й группе!
              </Heading>
              <Text className="mb-6">
                Станьте частью успешного сообщества юристов, которые готовятся к
                экзамену в Минюсте по проверенной методике.
              </Text>
              <LandingButton variant="accent" size="lg" href="/pricing">
                Присоединиться к группе
              </LandingButton>
            </div>
          </Container>
        </Section>
      </main>

      <Footer {...footerContent} />
    </div>
  );
};

export default Reviews;
