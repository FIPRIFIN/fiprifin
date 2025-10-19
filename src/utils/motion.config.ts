/**
 * ============================================================
 * ⚙️ motion.config.ts
 * ------------------------------------------------------------
 * Zentrale Motion-Konfiguration für dein UI-Framework.
 * Liest globale CSS-Tokens aus (:root) und stellt sie typisiert
 * für Framer Motion bereit.
 * ============================================================
 */

export type MotionDurationKey =
  | "ultrafast"
  | "fast"
  | "base"
  | "slow"
  | "superslow";

export type MotionEaseKey =
  | "linear"
  | "default"
  | "soft"
  | "spring"
  | "bounce";

export type MotionEase =
  | "linear"
  | "ease"
  | "ease-in"
  | "ease-out"
  | "ease-in-out"
  | `cubic-bezier(${number}, ${number}, ${number}, ${number})`
  | number[];

/**
 * Liest eine CSS-Variable aus :root und gibt sie typisiert zurück.
 * Erkennt automatisch "ms" und "s" und konvertiert in Sekunden (für Framer Motion).
 */
function getToken(variable: string, fallback: string | number): string | number {
  if (typeof window === "undefined") return fallback;
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();
  if (!value) return fallback;

  if (value.endsWith("ms")) return parseFloat(value) / 1000;
  if (value.endsWith("s")) return parseFloat(value);
  return value;
}

/**
 * Motion Tokens — direkt aus deinen globalen CSS-Variablen
 * oder Fallbacks für SSR / Build-Zeiten.
 */
export const motionTokens: {
  durations: Record<MotionDurationKey, number>;
  easings: Record<MotionEaseKey, MotionEase>;
} = {
  durations: {
    ultrafast: (getToken("--motion-ultrafast", 0.1) as number),
    fast: (getToken("--motion-fast", 0.15) as number),
    base: (getToken("--motion-base", 0.3) as number),
    slow: (getToken("--motion-slow", 0.5) as number),
    superslow: (getToken("--motion-superslow", 0.8) as number),
  },

  easings: {
    linear: "linear",
    default: "cubic-bezier(0.4, 0, 0.2, 1)",
    soft: "ease",
    spring: "cubic-bezier(0.5, 1.25, 0.75, 1)",
    bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  },
};

/**
 * Hilfsfunktionen, um Motion-Werte direkt zu holen
 */
export const getMotionDuration = (key: MotionDurationKey): number =>
  motionTokens.durations[key] ?? 0.3;

export const getMotionEase = (key: MotionEaseKey): MotionEase =>
  motionTokens.easings[key] ?? "ease";
