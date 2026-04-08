import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import LandingButton from "../ui/LandingButton";

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaHref: string;
  imageSrc?: string;
  imageAlt?: string;
}

const Hero = ({
  headline,
  subheadline,
  ctaText,
  ctaHref,
  imageSrc,
  imageAlt,
}: HeroProps) => (
  <section
    className="py-20 pb-16 md:py-32 md:pb-20 bg-background"
    itemScope
    itemType="https://schema.org/WebPageElement"
  >
    <Container className="relative">
      <div className="flex flex-col items-center gap-12">
        <div className="text-center max-w-3xl mx-auto">
          <Heading as="h1" className="mb-6 animate-fade-in-up" itemProp="headline">
            {headline}
          </Heading>
          <Text
            variant="lead"
            className="mb-8 max-w-2xl mx-auto animate-fade-in-up [animation-delay:100ms] opacity-0"
            itemProp="description"
          >
            {subheadline}
          </Text>
          <div className="animate-fade-in-up [animation-delay:200ms] opacity-0">
            <LandingButton variant="accent" size="lg" href={ctaHref}>
              {ctaText}
            </LandingButton>
          </div>
        </div>

        {imageSrc ? (
          <div className="relative mx-auto w-full max-w-5xl animate-fade-in-up [animation-delay:150ms] opacity-0">
            <div className="relative overflow-hidden rounded-2xl border bg-muted/20 shadow-2xl ring-1 ring-foreground/5">
              <img
                src={imageSrc}
                alt={imageAlt ?? ""}
                loading="eager"
                decoding="async"
                className="block w-full h-auto object-cover"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent"
              />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-6 -z-10 blur-2xl opacity-60"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 50%, hsl(var(--primary) / 0.20), transparent 60%)",
              }}
            />
          </div>
        ) : null}
      </div>
    </Container>
  </section>
);

export default Hero;
