"use client";

import styles from "./CopyrightNotice.module.css";

/**
 * 🪶 CopyrightNotice – minimalistisches Typografie-Atom.
 * Zeigt dynamisch das aktuelle Jahr & Markenrechtstext.
 *
 * 📘 Verwendung:
 * ```tsx
 * <CopyrightNotice brand="FIPRIFIN – First Principle Finance" />
 * ```
 */
interface CopyrightNoticeProps {
  /**
   * Der angezeigte Markenname oder Firmentitel.
   * Wird automatisch in den Text integriert.
   */
  brand: string;

  /**
   * Optional zusätzlicher Text oder Überschreibungen.
   */
  textOverride?: string;

  /**
   * Optionale zusätzliche CSS-Klasse.
   */
  className?: string;
}

export default function CopyrightNotice({
  brand,
  textOverride,
  className = "",
}: CopyrightNoticeProps) {
  const year = new Date().getFullYear();

  return (
    <p className={`${styles.copy} ${className}`}>
      {textOverride ?? `© ${year} ${brand}. Alle Rechte vorbehalten.`}
    </p>
  );
}
