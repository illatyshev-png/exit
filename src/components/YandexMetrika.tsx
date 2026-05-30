import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/** Совпадает с номером счётчика в index.html (Yandex.Metrika) */
const METRIKA_ID = 107051380;

declare global {
  interface Window {
    ym?: (...args: unknown[]) => void;
  }
}

/**
 * SPA-сайт: в index.html init с defer:true (без автопросмотра).
 * Здесь отправляем ym(..., "hit") при каждом просмотре, включая первый.
 * @see https://yandex.ru/support/metrica/ru/code/counter-spa-setup
 */
const YandexMetrika = () => {
  const location = useLocation();
  const prevPath = useRef<string | null>(null);

  useEffect(() => {
    const url = location.pathname + location.search;

    const sendHit = () => {
      const referer =
        prevPath.current !== null
          ? window.location.origin + prevPath.current
          : document.referrer || undefined;

      window.ym?.(METRIKA_ID, "hit", url, {
        title: document.title,
        referer,
      });

      prevPath.current = url;
    };

    // Даём SEOHead обновить document.title на внутренних страницах
    const timer = window.setTimeout(sendHit, 150);
    return () => window.clearTimeout(timer);
  }, [location]);

  return null;
};

export default YandexMetrika;
