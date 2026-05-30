import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Text from "../ui/Text";

interface AudioTestDriveProps {
  headline: string;
  subheadline?: string;
  text: string;
  audioSrc?: string | null;
  caption?: string;
}

const AudioTestDrive = ({ headline, subheadline, text, audioSrc, caption }: AudioTestDriveProps) => (
  <Section id="audio" variant="muted">
    <Container className="max-w-4xl mx-auto">
      <Heading as="h2" className="text-center mb-4">
        {headline}
      </Heading>
      {subheadline ? (
        <Heading
          as="h3"
          className="!text-base md:!text-lg !font-semibold text-muted-foreground text-center max-w-3xl mx-auto mb-4"
        >
          {subheadline}
        </Heading>
      ) : null}
      <Text variant="lead" className="text-center max-w-3xl mx-auto">
        {text}
      </Text>

      <div className="mt-10 max-w-3xl mx-auto">
        {audioSrc ? (
          <div className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
            <audio controls preload="none" className="w-full">
              <source src={audioSrc} />
              Ваш браузер не поддерживает аудио-плеер.
            </audio>
            {caption && (
              <p className="mt-3 text-sm text-muted-foreground text-center">{caption}</p>
            )}
          </div>
        ) : (
          <div className="rounded-xl border-2 border-dashed border-border bg-muted/30 p-10 text-center">
            <div className="text-muted-foreground/70 text-sm">
              Место для аудио-плеера с подкастом (MP3/OGG)
            </div>
            {caption && (
              <p className="mt-3 text-sm text-muted-foreground text-center">{caption}</p>
            )}
          </div>
        )}
      </div>
    </Container>
  </Section>
);

export default AudioTestDrive;

