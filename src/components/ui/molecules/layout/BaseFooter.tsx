"use client";

import React from "react";
import styles from "./BaseFooter.module.css";

interface BaseFooterProps {
  /**
   * 🧩 Inhalt des Footers
   * Typischerweise FooterLinks, SocialLinks, ThemeSwitch & CopyrightNotice
   */
  children: React.ReactNode;

  /**
   * Optional: ID oder ARIA Label Reference
   */
  id?: string;
  ariaLabelledby?: string;

  /**
   * Zusätzliche Klassen für Layout oder Theme Overrides
   */
  className?: string;

  /**
   * Semantisches Footer-Label (z. B. "site-footer")
   */
  role?: string;
}

/**
 * 🧱 BaseFooter – globaler, modularer Footer für Verosoma-CD.
 * Mobile-first, theme-ready über CSS-Variablen gesteuert.
 * Rendert semantisch korrekt ein <footer> mit standardisiertem Innenaufbau.
 */
export default function BaseFooter({
  id,
  ariaLabelledby,
  children,
  className = "",
  role = "contentinfo",
}: BaseFooterProps) {
  return (
    <footer
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`${styles.base} ${className}`}
      role={role}
    >
      <div className={styles.inner}>{children}</div>
    </footer>
  );
}
