"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./BurgerMenu.module.css";
import { PORTAL_ROOT_ID } from "@/app/utils/portal"; // ⬅️ zentral importiert

interface BurgerMenuProps {
  children: React.ReactNode;
}

/**
 * 🍔 BurgerMenu – Mobile Navigation (Portal-Version)
 * --------------------------------------------------
 * Apple-inspiriertes Overlay, gerendert im globalen Portal-Root.
 * Skalierbar, SSR-safe, iOS-kompatibel.
 */
export default function BurgerMenu({ children }: BurgerMenuProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const menu = (
    <div
      className={`${styles.overlay} ${open ? styles.open : ""}`}
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
      // Wenn ein <a> Element oder dessen Kind angeklickt wurde → Menü schließen
      const target = e.target as HTMLElement;
      if (target.closest("a")) setOpen(false);
    }}
    >
      <nav className={styles.nav} role="navigation">
        {children}
      </nav>
    </div>
  );

 return (
  <>
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

    {mounted &&
      createPortal(
        <div
          className={`${styles.overlay} ${open ? styles.open : ""}`}
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
          const target = e.target as HTMLElement;
          if (target.closest("a")) setOpen(false);
      }}
        >
          <nav className={styles.nav}>{children}</nav>

          {/* 👇 Close Button INS Overlay, iOS-fest */}
          <button
            className={`${styles.burger} ${styles.close}`}
            onClick={() => setOpen(false)}
            aria-label="Menü schließen"
          >
            <span />
            <span />
            <span />
          </button>
        </div>,
        document.getElementById(PORTAL_ROOT_ID)!
      )}
  </>
);
}
