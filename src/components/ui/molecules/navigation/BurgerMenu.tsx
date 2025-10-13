"use client";

import React, { useState } from "react";
import styles from "./BurgerMenu.module.css";

interface BurgerMenuProps {
  /**
   * 📜 Navigationslinks (typischerweise LinkWrapper + Link-Atoms)
   */
  children: React.ReactNode;
}

/**
 * 🍔 BurgerMenu – Mobile Navigation für Verosoma
 * ----------------------------------------------
 * Minimalistisches, Apple-inspiriertes Overlay-Menü.
 * Mobile-first, fix dunkel, nutzt `--header-fg` für helle Elemente.
 * Vollständig semantisch & ARIA-konform.
 *
 * 📘 Verwendung:
 * ```tsx
 * <BurgerMenu>
 *   <LinkWrapper direction="vertical" align="center" gap="space-3">
 *     <Link href="/about">Über uns</Link>
 *     <Link href="/shop">Shop</Link>
 *     <Link href="/contact">Kontakt</Link>
 *   </LinkWrapper>
 * </BurgerMenu>
 * ```
 */
export default function BurgerMenu({ children }: BurgerMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      {/* === Toggle Button === */}
      <button
        className={`${styles.burger} ${open ? styles.active : ""}`}
        aria-label="Menü öffnen oder schließen"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* === Overlay Navigation === */}
      <div
        className={`${styles.overlay} ${open ? styles.open : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <nav className={styles.nav} role="navigation">
          {children}
        </nav>
      </div>
    </div>
  );
}
