import Container from "../ui/Container";
import Section from "../ui/Section";
import { getExternalLinkRel } from "@/utils/linkRel";
import { sanitizeAnchorHref } from "@/utils/safeUrl";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import LandingCard from "../ui/LandingCard";
import LandingButton from "../ui/LandingButton";

interface Benefit {
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}

interface SolutionProps {
  headline: string;
  description: string;
  benefits: Benefit[];
  ctaText?: string;
  ctaHref?: string;
  highlightCard: {
    title: string;
    items: string[];
  };
}

const Solution = ({ headline, description, benefits, ctaText, ctaHref, highlightCard }: SolutionProps) => (
  <Section id="solution">
    <Container>
      <div className="max-w-3xl mx-auto md:text-center mb-12">
        <div className="flex items-center gap-3 mb-4 md:block">
          <Heading as="h2">{headline}</Heading>
        </div>
        <Text variant="lead">{description}</Text>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
        {benefits.map((b, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-lg p-6 shadow-[var(--shadow-soft)] flex flex-col card-hover-glow"
          >
            <div className="flex items-start gap-3 mb-2">
              <span className="mt-1 text-accent shrink-0">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <p className="font-medium text-foreground">{b.title}</p>
            </div>
            <p className="text-sm text-muted-foreground flex-1">{b.description}</p>
            {b.linkText && b.linkHref && (() => {
              const safe = sanitizeAnchorHref(b.linkHref, "#");
              const openExternal =
                safe.startsWith("http://") || safe.startsWith("https://");
              return (
              <a
                href={safe}
                {...(openExternal
                  ? { target: "_blank" as const, rel: getExternalLinkRel(safe) }
                  : {})}
                className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline mt-3"
              >
                {b.linkText}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              );
            })()}
          </div>
        ))}
      </div>

      <div className="relative max-w-2xl mx-auto">
        <div className="absolute -inset-1 bg-gradient-to-r from-accent/40 via-accent/60 to-accent/40 rounded-xl blur-sm animate-pulse" />
        <LandingCard variant="elevated" className="relative bg-accent/10 border-accent/30 border-2 py-8 px-8">
          <Heading as="h3" className="mb-4 text-accent text-center">{highlightCard.title}</Heading>
          <ul className="space-y-3">
            {highlightCard.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 text-accent shrink-0">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-foreground/80 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </LandingCard>
      </div>
      {ctaText && ctaHref && (
        <div className="text-center mt-12">
          <LandingButton variant="accent" size="lg" href={ctaHref}>
            {ctaText}
          </LandingButton>
        </div>
      )}
    </Container>
  </Section>
);

export default Solution;
