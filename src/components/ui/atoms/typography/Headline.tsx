import styles from "./Headline.module.css";
import * as React from "react";

interface HeadlineProps {
  /**
   * Die semantische Ebene der Überschrift (z. B. "h1"–"h6")
   */
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  /**
   * Visuelle Variante – steuert Farb- & Akzentstil
   */
  variant?: "default" | "accent" | "gradient";

  /**
   * Textausrichtung
   */
  align?: "left" | "center" | "right";

  /**
   * Größe unabhängig von Level überschreiben
   */
  size?: "sm" | "md" | "lg";

  /**
   * Optional zusätzliche Klasse
   */
  className?: string;

  /**
   * Inhalt der Headline
   */
  children: React.ReactNode;
}

/**
 * 🧠 Headline – semantisch korrekte, visuell anpassbare Überschrift.
 * Kombiniert SEO-Semantik mit Verosoma-CD-Styling.
 *
 * 📘 Verwendung:
 * ```tsx
 * // Standard-Überschrift (semantisch h2)
 * <Headline>Das ist eine Standard-Headline</Headline>
 *
 * // Akzentuierte Überschrift mit Farbverlauf
 * <Headline variant="gradient" level="h1">
 *   Finanzielle Klarheit beginnt hier
 * </Headline>
 *
 * // Zentrierte Headline, unabhängig größer gesetzt
 * <Headline align="center" size="lg">
 *   Verosoma Flow – Coming Soon
 * </Headline>
 *
 * // Kleinere Zwischenüberschrift
 * <Headline level="h3" size="sm" variant="accent">
 *   Nächster Schritt
 * </Headline>
 * ```
 */

/**
 * 🧠 Headline – semantisch korrekte, visuell anpassbare Überschrift.
 * Kombiniert SEO-Semantik mit Verosoma-CD-Styling.
 */
export default function Headline({
  level = "h2",
  variant = "default",
  align = "left",
  size = "md",
  className = "",
  children,
}: HeadlineProps) {
  const Tag = level;

  return (
    <Tag
      className={[
        styles.headline,
        styles[variant],
        styles[align],
        styles[size],
        className,
      ].join(" ")}
    >
      {children}
    </Tag>
  );
}
