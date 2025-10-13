import * as React from "react";
import styles from "./Text.module.css";

interface TextProps {
  /**
   * HTML-Tag (z. B. "p", "span", "div")
   */
  as?: keyof React.JSX.IntrinsicElements;

  /**
   * Farbvariante
   */
  variant?: "default" | "muted" | "accent" | "error" | "success" | "light-default" | "light-muted" | "light-accent";

  /**
   * Textgröße
   */
  size?: "sm" | "md" | "lg";

  /**
   * Textausrichtung
   */
  align?: "left" | "center" | "right";

  /**
   * Optional zusätzliche Klasse
   */
  className?: string;

  /**
   * Inhalt
   */
  children: React.ReactNode;
}

/**
 * 💬 Text – universelle Textkomponente für Fließtext, Inline-Elemente & Beschreibungstexte.
 *
 * 📘 Verwendung:
 * ```tsx
 * // Standardtext
 * <Text>Das ist ein normaler Absatz.</Text>
 *
 * // Abgeschwächter Text
 * <Text variant="muted">Dies ist eine ergänzende Beschreibung.</Text>
 *
 * // Akzentuierter Text
 * <Text variant="accent" size="lg" align="center">
 *   Wichtiger Hinweis in Akzentfarbe
 * </Text>
 *
 * // Inline-Link im Fließtext
 * <Text>
 *   Erfahre mehr über unsere <InlineLink href="/datenschutz">Datenschutzrichtlinien</InlineLink>.
 * </Text>
 * ```
 */
export default function Text({
  as: Tag = "p",
  variant = "default",
  size = "md",
  align = "left",
  className = "",
  children,
}: TextProps) {
  // Falls InlineLink innerhalb von Text verwendet wird, wird er automatisch als inline-block behandelt.
  // (Kein separates Styling nötig – Styles übernehmen das.)

  return (
    <Tag
      className={[
        styles.text,
        styles[variant],
        styles[size],
        styles[align],
        className,
      ].join(" ")}
    >
      {children}
    </Tag>
  );
}
