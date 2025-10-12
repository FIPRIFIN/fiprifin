import * as React from "react";
import styles from "./HiddenHeadline.module.css";

interface HiddenHeadlineProps {
  /**
   * Textinhalt der Überschrift (sichtbar für SEO, unsichtbar für Nutzer)
   */
  text: string;

  /**
   * Optional: ID für aria-labelledby oder Referenzen
   */
  id?: string;

  /**
   * Überschriftenlevel – z. B. "h1", "h2", "h3" usw.
   * Default ist "h1" (SEO-Hauptüberschrift)
   */
  as?: keyof React.JSX.IntrinsicElements;

  /**
   * Optional: zusätzliche aria-Attribute oder Rollen für A11y
   */
  role?: string;

  /**
   * Optional: ob Screenreader den Text vorlesen sollen (true = standard)
   */
  ariaHidden?: boolean;
}

/**
 * 🔒 HiddenHeadline – unsichtbare, aber SEO- und A11y-relevante Überschrift.
 * Ideal für Seiten, bei denen visuell keine H1 angezeigt werden soll, 
 * aber Suchmaschinen und Screenreader trotzdem eine semantische Struktur benötigen.
 *
 * 📘 Verwendung:
 * ```tsx
 * // Standard-SEO-H1 (sichtbar für Crawler, unsichtbar im Layout)
 * <HiddenHeadline text="Verosoma Budget – Das digitale Haushaltsbuch" />
 *
 * // Alternative Ebene (z. B. für Unterabschnitte)
 * <HiddenHeadline as="h2" text="Verosoma Flow – Coming Soon" />
 *
 * // Mit expliziter ID für aria-labelledby-Referenzen
 * <HiddenHeadline id="verosoma-flow-heading" text="Verosoma Flow – Finanzcoach" />
 *
 * // Wenn Screenreader diese Headline NICHT vorlesen sollen
 * <HiddenHeadline text="Interne SEO-Struktur" ariaHidden />
 * ```
 */


/**
 * 🔒 SEO-optimierte, barrierearme Überschrift.
 * Unsichtbar gerendert, aber für Crawler & Screenreader verfügbar.
 */
export default function HiddenHeadline({
  text,
  id,
  as: Tag = "h1",
  role,
  ariaHidden = false,
}: HiddenHeadlineProps) {
  const Element = Tag;

  return (
    <Element
      id={id}
      className={styles.visuallyHidden}
      role={role}
      aria-hidden={ariaHidden}
    >
      {text}
    </Element>
  );
}
