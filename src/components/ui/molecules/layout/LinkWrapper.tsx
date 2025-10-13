import React from "react";
import type { JSX } from "react";
import styles from "./LinkWrapper.module.css";

interface LinkWrapperProps {
  /**
   * 🧩 Enthaltene Link- oder Inline-Elemente
   * Wird typischerweise mit <Link />- oder <InlineLink />-Atoms verwendet.
   */
  children: React.ReactNode;

  /**
   * 🔀 Grundausrichtung der Links
   * - "horizontal" → nebeneinander (Default)
   * - "vertical" → untereinander
   *
   * Mobile-First-Ansatz: Standardmäßig vertikal auf Mobile,
   * wechselt ab 768 px automatisch zu horizontal, wenn `responsiveStack` aktiv ist.
   */
  direction?: "horizontal" | "vertical";

  /**
   * 🎯 Horizontale Ausrichtung innerhalb des Containers
   * - "left" (Default)
   * - "center"
   * - "right"
   */
  align?: "left" | "center" | "right";

  /**
   * 📏 Abstand zwischen den Links (Verosoma-Spacing-Token)
   * - "space-1" → kompakt
   * - "space-2" → Standard (Default)
   * - "space-3" → großzügig
   */
  gap?: "space-1" | "space-2" | "space-3";

  /**
   * 📱 Responsive Logik
   * Wenn true → automatisch vertikal auf Mobile, horizontal ab 768 px
   */
  responsiveStack?: boolean;

  /**
   * 🎨 Zusätzliche Klassen (z. B. für thematische Anpassungen)
   */
  className?: string;

  /**
   * 🔤 Semantischer Wrapper-Typ (Standard: "nav")
   * Beispiele: "div", "ul", "footer"
   */
  as?: keyof JSX.IntrinsicElements;
}

/**
 * 🧭 LinkWrapper – Molekül zur Gruppierung von Link-Atoms
 * --------------------------------------------------------
 * Dient als struktureller Container für Navigations- oder Textlinks.
 * Unterstützt mobile-first Layouts, systemische Abstände und Theme-Kohärenz
 * gemäß der Verosoma-CD (Klarheit, Systematik, Modularität).
 *
 * 📘 Verwendung:
 * ```tsx
 * // Header-Navigation
 * <LinkWrapper responsiveStack align="center" gap="space-3">
 *   <Link href="/about">Über uns</Link>
 *   <Link href="/shop">Shop</Link>
 *   <Link href="/contact">Kontakt</Link>
 * </LinkWrapper>
 *
 * // Footer-Links
 * <LinkWrapper direction="vertical" gap="space-1">
 *   <Link href="/privacy" variant="muted">Datenschutz</Link>
 *   <Link href="/terms" variant="muted">AGB</Link>
 *   <Link href="/impressum" variant="muted">Impressum</Link>
 * </LinkWrapper>
 * ```
 */
export default function LinkWrapper({
  children,
  direction = "horizontal",
  align = "left",
  gap = "space-2",
  responsiveStack = false,
  className = "",
  as: Component = "nav",
}: LinkWrapperProps) {
  const classes = [
    styles.wrapper,
    styles[direction],
    styles[align],
    styles[gap],
    responsiveStack ? styles.responsiveStack : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <Component className={classes}>{children}</Component>;
}
