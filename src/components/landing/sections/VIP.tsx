import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import LandingButton from "../ui/LandingButton";
import { getExternalLinkRel } from "@/utils/linkRel";
import { sanitizeAnchorHref } from "@/utils/safeUrl";

interface VIPProps {
  headline: string;
  subheadline?: string;
  items: { title: string; text: string; href?: string; hrefLabel?: string }[];
  ctaText: string;
  ctaHref: string;
}

const VIP = ({ headline, subheadline, items, ctaText, ctaHref }: VIPProps) => (
  <Section id="vip" variant="muted">
    <Container className="max-w-5xl mx-auto">
      <Heading as="h2" className="text-center mb-6">
        {headline}
      </Heading>
      {subheadline ? (
        <Heading
          as="h3"
          className="!text-base md:!text-lg !font-semibold text-muted-foreground text-center max-w-4xl mx-auto -mt-2 mb-8"
        >
          {subheadline}
        </Heading>
      ) : null}

      <div className="grid gap-5 md:grid-cols-3">
        {items.map((it, i) => (
          <div
            key={i}
            className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] card-hover-glow"
          >
            <p className="font-semibold text-foreground mb-2">{it.title}</p>
            <Text variant="muted">{it.text}</Text>
            {it.href ? (() => {
              const safe = sanitizeAnchorHref(it.href, "#");
              const openExternal =
                safe.startsWith("http://") || safe.startsWith("https://");
              return (
              <a
                href={safe}
                {...(openExternal
                  ? { target: "_blank" as const, rel: getExternalLinkRel(safe) }
                  : {})}
                className="inline-flex mt-3 text-sm font-medium text-accent hover:underline"
              >
                {it.hrefLabel || "Открыть ссылку"}
              </a>
              );
            })() : null}
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <LandingButton variant="accent" size="lg" href={ctaHref}>
          {ctaText}
        </LandingButton>
        <p className="mt-3 text-xs text-muted-foreground">
          Если удобнее — напишите коротко: «EXIT, хочу обсудить VIP».
        </p>
      </div>
    </Container>
  </Section>
);

export default VIP;

