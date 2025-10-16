"use client";

import React from "react";
import styles from "./BaseHeader.module.css";
import ScrollProgressBar from "../../atoms/visuals/ScrollProgressBar";

interface BaseHeaderProps {
  /**
   * 🧩 Inhalt des Headers
   * Typischerweise Logo, Navigation oder ThemeSwitch
   */
  children: React.ReactNode;

  /**
   * Optional: ID + ARIA Label Reference
   */
  id?: string;
  ariaLabelledby?: string;

  /**
   * Zusätzliche Klassen
   */
  className?: string;
}

/**
 * 🧱 BaseHeader – globaler, fixer Header für Verosoma-CD.
 * Mobile-first, fix dunkel (Apple-Stil) und layoutstabil.
 * Rendert semantisch korrekt ein <header> mit standardisiertem Innenaufbau.
 */
export default function BaseHeader({
  id,
  ariaLabelledby,
  children,
  className = "",
}: BaseHeaderProps) {
  return (
    <>
    <header
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`${styles.base} ${className}`}
      role="banner"
    >
      <div className={styles.inner}>{children}</div>
    </header>
    <ScrollProgressBar />
    </>
  );
}
