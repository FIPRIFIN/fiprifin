import Link from "next/link";
import styles from "./Button.module.css";
import * as React from "react";

interface ButtonProps {
  /**
   * Wenn gesetzt → rendert als Link (<a>)
   * Wenn leer + `as="button"` → rendert als <button>
   */
  href?: string;

  /**
   * Inhalt (Text oder Icon + Text)
   */
  children: React.ReactNode;

  /**
   * Stilvariante
   * - primary → Farbverlauf, CTA
   * - secondary → Glas-Outline
   * - ghost → minimaler Button ohne Hintergrund (optional)
   */
  variant?: "primary" | "secondary" | "ghost";

  /**
   * Größe des Buttons
   * - sm → kompakt
   * - md → Standard
   * - lg → groß / hero
   */
  size?: "sm" | "md" | "lg";

  /**
   * Deaktiviert den Button (auch visuell)
   */
  disabled?: boolean;

  /**
   * Legt das gerenderte Element fest
   * - "button" oder "link"
   */
  as?: "button" | "link";

  /**
   * Optionaler Klick-Handler (nur bei Button)
   */
  onClick?: () => void;

  /**
   * Zusätzliche Klassen
   */
  className?: string;
}

/**
 * ⚡ Button – universeller Call-To-Action nach Verosoma-CD.
 * Nutzt Farbverlauf, Blur und Shadow aus der globalen Architektur.
 *
 * 📘 Verwendung:
 * ```tsx
 * // Standard CTA-Link
 * <Button href="/shop" variant="primary">Jetzt kaufen</Button>
 *
 * // Sekundärer Button (z. B. "Mehr erfahren")
 * <Button href="/about" variant="secondary">Mehr erfahren</Button>
 *
 * // Reiner Button im Formular
 * <Button as="button" onClick={handleSubmit}>Absenden</Button>
 *
 * // Kleiner, dezenter Button
 * <Button size="sm" variant="ghost">Details</Button>
 *
 * // Deaktiviert
 * <Button disabled>Wird geladen...</Button>
 * ```
 */
export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  as = "link",
  disabled = false,
  onClick,
  className = "",
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    disabled ? styles.disabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (as === "button" || !href) {
    return (
      <button
        className={classes}
        disabled={disabled}
        onClick={onClick}
        type="button"
      >
        {children}
      </button>
    );
  }

  return (
    <Link href={href} className={classes} aria-disabled={disabled}>
      {children}
    </Link>
  );
}
