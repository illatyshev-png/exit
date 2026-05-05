import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const FacebookPixel = () => {
  const location = useLocation();

  useEffect(() => {
    // For SPA navigation we must trigger PageView manually.
    window.fbq?.("track", "PageView");
  }, [location.pathname, location.search, location.hash]);

  return null;
};

export default FacebookPixel;

