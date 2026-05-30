import Container from "../ui/Container";
import Heading from "../ui/Heading";
import LandingButton from "../ui/LandingButton";

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaHref: string;
  imageSrc?: string | null;
  imageAlt?: string;
}

const Hero = ({
  headline,
  subheadline,
  ctaText,
  ctaHref,
  imageSrc,
  imageAlt = "Мокап книги EXIT",
}: HeroProps) => (
  <section className="py-20 pb-16 md:py-32 md:pb-20 bg-background" itemScope itemType="https://schema.org/WebPageElement">
    <Container className="max-w-6xl mx-auto">
      <div className="grid gap-10 items-center md:grid-cols-2">
        <div className="text-center md:text-left">
          <Heading as="h1" className="mb-6 animate-fade-in-up" itemProp="headline">
            {headline}
          </Heading>
          <Heading
            as="h3"
            className="!text-lg md:!text-xl !font-normal text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0 animate-fade-in-up [animation-delay:100ms] opacity-0"
            itemProp="description"
          >
            {subheadline}
          </Heading>
          <div className="animate-fade-in-up [animation-delay:200ms] opacity-0">
            <LandingButton variant="accent" size="lg" href={ctaHref}>
              {ctaText}
            </LandingButton>
          </div>
        </div>

        {imageSrc ? (
          <div className="flex justify-center md:justify-end animate-fade-in-up [animation-delay:150ms] opacity-0">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full max-w-md md:max-w-lg object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.18)]"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        ) : null}
      </div>
    </Container>
  </section>
);

export default Hero;
