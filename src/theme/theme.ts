// ============================================
// THEME CONFIGURATION
// Change ONLY this file to rebrand the template.
// All values are injected as CSS variables.
// ============================================

export const theme = {
  name: "EXIT",

  colors: {
    // HSL values only (without hsl() wrapper)
    // Main: black + yellow
    primary: "48 100% 55%",
    primaryForeground: "0 0% 8%",
    accent: "48 100% 55%",
    accentForeground: "0 0% 8%",
    background: "0 0% 6%",
    foreground: "0 0% 98%",
    muted: "0 0% 12%",
    mutedForeground: "0 0% 72%",
    card: "0 0% 10%",
    cardForeground: "0 0% 98%",
    border: "0 0% 20%",
    input: "0 0% 20%",
    ring: "48 100% 55%",
    secondary: "0 0% 14%",
    secondaryForeground: "0 0% 98%",
    destructive: "0 72% 51%",
    destructiveForeground: "0 0% 100%",
  },

  radius: "0.625rem",

  // Optional: override font family
  // fontFamily: "'Inter', sans-serif",
} as const;

export type Theme = typeof theme;
