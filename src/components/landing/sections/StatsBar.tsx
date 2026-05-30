import { useEffect, useRef, useState, useCallback } from "react";
import Container from "../ui/Container";

interface StatItem {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  sublabel?: string;
}

interface StatsBarProps {
  items: StatItem[];
}

function useCountUp(end: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const start = useCallback(() => {
    if (started) return;
    setStarted(true);
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let raf: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, end, duration]);

  return { count, start };
}

function AnimatedStat({ item }: { item: StatItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const { count, start } = useCountUp(item.value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start();
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [start]);

  const labelStyle = "text-sm font-medium text-muted-foreground sm:text-base text-center";

  return (
    <div ref={ref} className="flex flex-col items-center px-4">
      <span className="text-3xl font-extrabold tracking-tight text-accent sm:text-4xl md:text-5xl">
        {item.prefix}
        {count.toLocaleString("ru-RU")}
        {item.suffix}
      </span>
      <div className="mt-2 leading-tight">
        <div className={labelStyle}>{item.label}</div>
        {item.sublabel ? (
          <div className={`${labelStyle} mt-0.5`}>{item.sublabel}</div>
        ) : null}
      </div>
    </div>
  );
}

const StatsBar = ({ items }: StatsBarProps) => (
  <section className="relative -mt-10 z-10 pb-6">
      <Container className="max-w-4xl mx-auto">
      <div className="rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm shadow-[var(--shadow-elevated)] px-6 py-8 sm:px-10 sm:py-10 card-hover-glow">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-around sm:gap-4">
          {items.map((item, i) => (
            <AnimatedStat key={i} item={item} />
          ))}
        </div>
      </div>
    </Container>
  </section>
);

export default StatsBar;
