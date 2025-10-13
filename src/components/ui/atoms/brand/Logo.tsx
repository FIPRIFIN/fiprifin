"use client";

import styles from "./Logo.module.css";
import Link from "next/link";

interface LogoProps {
  /**
   * 📏 Größe des Logos (optional)
   * - "sm" → kompakt
   * - "md" → Standard (Default)
   * - "lg" → groß (Hero / Intro)
   */
  size?: "sm" | "md" | "lg";

  /**
   * 🔗 Optionaler Link-Zielpfad
   * Wenn gesetzt → Logo wird klickbar.
   */
  href?: string;

  /**
   * 🎨 Zusätzliche Klassen (z. B. Positionierung oder Animation)
   */
  className?: string;
}

/**
 * 🪶 Logo – minimalistisches Markenzeichen von Verosoma.
 * ------------------------------------------------------
 * Das „V“ steht für Struktur, Systematik und Klarheit.
 * Es nutzt automatisch die Akzentfarbe des aktiven Themes (`--color-accent`)
 * und skaliert responsiv über Tokens. Perfekt geeignet für Header, Footer und Hero-Sections.
 *
 * 📘 Verwendung:
 * ```tsx
 * <Logo />
 * <Logo size="lg" />
 * <Logo href="/" />
 * ```
 */
export default function Logo({
  size = "md",
  href,
  className = "",
}: LogoProps) {
  const classes = [styles.logo, styles[size], className].join(" ");

  const logoContent = (
    <span className={classes} aria-label="Verosoma Logo">
      V
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={styles.linkWrapper} aria-label="Startseite">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
