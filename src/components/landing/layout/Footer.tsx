import Container from "../ui/Container";
import { Link } from "react-router-dom";
import { getExternalLinkRel } from "@/utils/linkRel";

interface FooterProps {
  copyright: string;
  links: { label: string; href: string; highlight?: boolean; internal?: boolean }[];
  projectsTitle?: string;
  projects?: { label: string; href: string }[];
}

const Footer = ({ copyright, links, projectsTitle, projects }: FooterProps) => {
  const handleInternalClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const projectLinks = projects?.filter((p) => p.label && p.href) || [];

  return (
    <footer className="border-t border-border bg-muted py-12">
      <Container>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              {copyright}
            </p>
            <nav className="flex items-center gap-4 flex-wrap justify-center" aria-label="Footer navigation">
              {links.map((link) => {
                const isInternalPage = link.internal && link.href.startsWith("/");
                const isAnchor = link.internal && link.href.startsWith("#");

                if (isInternalPage) {
                  return (
                    <Link
                      key={link.label}
                      to={link.href}
                      className={`text-sm transition-colors ${
                        link.highlight
                          ? "font-semibold text-foreground bg-background/80 px-3 py-1.5 rounded-md border border-border hover:bg-background"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={isAnchor ? (e) => handleInternalClick(e, link.href) : undefined}
                    target={link.internal ? undefined : "_blank"}
                    rel={link.internal ? undefined : getExternalLinkRel(link.href)}
                    className={`text-sm transition-colors ${
                      link.highlight
                        ? "font-semibold text-foreground bg-background/80 px-3 py-1.5 rounded-md border border-border hover:bg-background"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
          </div>

          {projectLinks.length > 0 && (
            <div className="border-t border-border/60 pt-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground text-center">
                {projectsTitle || "Другие проекты"}
              </div>
              <nav
                className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
                aria-label="Другие проекты"
              >
                {projectLinks.map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    target="_blank"
                    rel={getExternalLinkRel(p.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {p.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
