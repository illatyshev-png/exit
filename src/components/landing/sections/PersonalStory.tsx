import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Text from "../ui/Text";

interface PersonalStoryProps {
  headline: string;
  subheadline?: string;
  text: string;
  /** Второй уровень заголовка между вводным текстом и списком (например, «Меня зовут…») */
  midSectionHeading?: string;
  midSectionBody?: string;
  image?: string | null;
  imageAlt?: string;
}

const PersonalStory = ({
  headline,
  subheadline,
  text,
  midSectionHeading,
  midSectionBody,
  image,
  imageAlt = "Фото автора",
}: PersonalStoryProps) => (
  <Section id="story">
    <Container className="max-w-5xl mx-auto">
      <div className="grid gap-8 md:grid-cols-2 md:items-start">
        <div>
          <Heading as="h2" className="mb-4">
            {headline}
          </Heading>
          {subheadline ? (
            <Heading
              as="h3"
              className="!text-base md:!text-lg !font-semibold text-muted-foreground leading-relaxed mb-4"
            >
              {subheadline}
            </Heading>
          ) : null}
          <Text className="whitespace-pre-line">{text}</Text>
          {midSectionHeading ? (
            <Heading as="h2" className="mt-8 mb-3 text-xl md:text-2xl font-semibold text-foreground">
              {midSectionHeading}
            </Heading>
          ) : null}
          {midSectionBody ? (
            <Text className="whitespace-pre-line">{midSectionBody}</Text>
          ) : null}
        </div>

        <div>
          {image ? (
            <img
              src={image}
              alt={imageAlt}
              className="w-full aspect-[4/5] object-cover rounded-2xl border border-border shadow-[var(--shadow-soft)]"
              loading="lazy"
            />
          ) : (
            <div className="w-full aspect-[4/5] rounded-2xl border-2 border-dashed border-border flex items-center justify-center bg-muted/30">
              <div className="text-center text-muted-foreground/70 px-6">
                <div className="text-sm font-medium">Место для фото автора</div>
                <div className="text-xs mt-1">Портрет / рабочий кадр / на мероприятии</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  </Section>
);

export default PersonalStory;

