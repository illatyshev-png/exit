import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import LandingButton from "../ui/LandingButton";
import { isSafePdfEmbedSrc, sanitizeAnchorHref } from "@/utils/safeUrl";

interface InsideExitProps {
  headline: string;
  subheadline?: string;
  text: string;
  gallery: {
    images?: string[];
    caption?: string;
    showPlaceholders?: boolean;
  };
  pdfPreview?: {
    headline: string;
    text: string;
    pdfSrc?: string | null;
    ctaText?: string;
  };
}

const InsideExit = ({ headline, subheadline, text, gallery, pdfPreview }: InsideExitProps) => {
  const rawPdfSrc = pdfPreview?.pdfSrc?.trim() ?? "";
  const safePdfSrc = rawPdfSrc && isSafePdfEmbedSrc(rawPdfSrc) ? rawPdfSrc : null;
  const pdfCtaHref = sanitizeAnchorHref(safePdfSrc || "#pricing", "#pricing");

  return (
  <Section id="inside">
    <Container className="max-w-5xl mx-auto">
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

      {(gallery.images && gallery.images.length > 0) || gallery.showPlaceholders ? (
        <div className="mt-10">
          {gallery.images && gallery.images.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.images.map((src, i) => (
                <img
                  key={src + i}
                  src={src}
                  alt={`Скриншот/страница ${i + 1}`}
                  className="w-full aspect-[4/3] object-cover rounded-xl border border-border bg-card"
                  loading="lazy"
                />
              ))}
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="w-full aspect-[4/3] rounded-xl border-2 border-dashed border-border bg-muted/30 flex items-center justify-center"
                >
                  <div className="text-center text-muted-foreground/70 px-4">
                    <div className="text-sm font-medium">Место для картинки</div>
                    <div className="text-xs mt-1">
                      Оглавление / верстка / ключевая страница
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {gallery.caption && (
            <p className="mt-4 text-sm text-muted-foreground text-center">
              {gallery.caption}
            </p>
          )}
        </div>
      ) : null}

      {pdfPreview && (
        <div className="mt-14">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-[var(--shadow-soft)]">
            <Heading as="h3" className="mb-3 text-center">
              {pdfPreview.headline}
            </Heading>
            {pdfPreview.text && (
              <Text className="text-center max-w-3xl mx-auto">{pdfPreview.text}</Text>
            )}

            <div className="mt-6">
              {safePdfSrc ? (
                <div className="overflow-hidden rounded-xl border border-border bg-background">
                  <iframe
                    src={safePdfSrc}
                    title="PDF-превью"
                    className="block h-[70vh] min-h-[320px] w-full"
                  />
                  <div className="border-t border-border bg-card/60 px-4 py-3 text-center">
                    <p className="text-sm text-muted-foreground">
                      Если встроенное превью не загрузилось, откройте файл отдельно.
                    </p>
                    <div className="mt-3">
                      <LandingButton variant="outline" size="md" href={safePdfSrc}>
                        Открыть PDF
                      </LandingButton>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="rounded-xl border-2 border-dashed border-border bg-muted/30 p-10 text-center">
                  <div className="text-muted-foreground/70 text-sm">
                    Место для PDF-превью (первые страницы книги)
                  </div>
                </div>
              )}
            </div>

            {pdfPreview.ctaText && (
              <div className="mt-6 text-center">
                <LandingButton
                  variant="outline"
                  size="md"
                  href={pdfCtaHref}
                >
                  {pdfPreview.ctaText}
                </LandingButton>
              </div>
            )}
          </div>
        </div>
      )}
    </Container>
  </Section>
  );
};

export default InsideExit;

