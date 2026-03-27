import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const METRIKA_ID = 107051380;

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

    if (prevPath.current === null) {
      prevPath.current = url;
      window.ym?.(METRIKA_ID, "hit", url, { title: document.title });
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
  }, [location]);

  return null;
};

export default YandexMetrika;
