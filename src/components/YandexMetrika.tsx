import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const METRIKA_ID = 109145604;
const HIT_DELAY_MS = 150;

declare global {
  interface Window {
    ym?: (...args: unknown[]) => void;
  }
}

const YandexMetrika = () => {
  const location = useLocation();
  const prevPath = useRef<string | null>(null);

  useEffect(() => {
    const url = location.pathname + location.search;

    const timeoutId = window.setTimeout(() => {
      if (prevPath.current === null) {
        prevPath.current = url;
        window.ym?.(METRIKA_ID, "hit", url, {
          title: document.title,
          referer: document.referrer || undefined,
        });
        return;
      }

      if (prevPath.current !== url) {
        const referer = window.location.origin + prevPath.current;
        prevPath.current = url;
        window.ym?.(METRIKA_ID, "hit", url, {
          title: document.title,
          referer,
        });
      }
    }, HIT_DELAY_MS);

    return () => window.clearTimeout(timeoutId);
  }, [location]);

  return null;
};

export default YandexMetrika;
