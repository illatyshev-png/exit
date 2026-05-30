import { useCallback, useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Container from "../ui/Container";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  siteName: string;
  logo?: string | null;
  navLinks: { label: string; href: string }[];
}

const Header = ({ siteName, logo, navLinks }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min(window.scrollY / docHeight, 1) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks
      .map((l) => l.href.replace("#", ""))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navLinks]);

  const scrollTo = useCallback(
    (href: string) => {
      const wasOpen = mobileOpen;
      setMobileOpen(false);
      
      // Если это внутренняя ссылка (начинается с #)
      if (href.startsWith("#")) {
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          if (wasOpen) {
            setTimeout(() => {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 350);
          } else {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }
      // Если это обычная ссылка - ничего не делаем, пусть React Router обработает
    },
    [mobileOpen],
  );

  const onMainPage = location.pathname === "/";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-lg shadow-sm"
          : "bg-background",
      )}
    >
      <div
        className="absolute inset-x-0 top-0 h-[3px] origin-left bg-accent transition-none"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
      <Container>
        <nav className="flex min-h-16 items-center justify-between gap-4 py-2">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 max-w-[40%]"
            aria-label="На главную"
          >
            {logo ? (
              <img src={logo} alt={`Логотип ${siteName}`} className="h-8 w-auto" />
            ) : (
              <span className="text-base font-bold leading-tight tracking-tight text-foreground">
                {siteName}
              </span>
            )}
          </a>

          {/* Desktop navigation - якоря на главной */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isLinkActive = onMainPage && activeSection === link.href;
              return (
                <li key={link.href}>
                  {onMainPage ? (
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(link.href);
                      }}
                      className={cn(
                        "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        isLinkActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {link.label}
                      {isLinkActive && (
                        <span className="absolute inset-x-1 -bottom-[1.5px] h-0.5 rounded-full bg-primary" />
                      )}
                    </a>
                  ) : (
                    <Link
                      to={{ pathname: "/", hash: link.href.slice(1) }}
                      className="relative rounded-md px-3 py-2 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA - якорь #pricing на главной */}
          {onMainPage ? (
            <Button
              size="sm"
              className="hidden md:inline-flex"
              onClick={() => scrollTo("#pricing")}
            >
              Хочу уйти из найма!
            </Button>
          ) : (
            <Button size="sm" className="hidden md:inline-flex" asChild>
              <Link to="/#pricing">Хочу уйти из найма!</Link>
            </Button>
          )}

          {/* Mobile menu */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Открыть меню"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetContent side="right" className="w-72 sm:w-80">
              <SheetHeader className="text-left">
                <SheetTitle>
                  {logo ? (
                    <img src={logo} alt={`Логотип ${siteName}`} className="h-7 w-auto" />
                  ) : (
                    <span className="text-lg font-bold tracking-tight">
                      {siteName}
                    </span>
                  )}
                </SheetTitle>
              </SheetHeader>

              <nav className="mt-8 flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isLinkActive = onMainPage && activeSection === link.href;
                  return onMainPage ? (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(link.href);
                      }}
                      className={cn(
                        "rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                        isLinkActive
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                      )}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      to={{ pathname: "/", hash: link.href.slice(1) }}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-md px-3 py-2.5 text-sm font-medium transition-colors text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <div className="my-4 h-px bg-border" />

                {onMainPage ? (
                  <Button className="w-full" onClick={() => scrollTo("#pricing")}>
                    Хочу уйти из найма!
                  </Button>
                ) : (
                  <Button className="w-full" asChild>
                    <Link to="/#pricing" onClick={() => setMobileOpen(false)}>
                      Хочу уйти из найма!
                    </Link>
                  </Button>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
