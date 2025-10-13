"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./BurgerMenu.module.css";
import { PORTAL_ROOT_ID } from "@/app/layout"; // ⬅️ zentral importiert

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
    >
      <nav className={styles.nav} role="navigation">
        {children}
      </nav>
    </div>
  );

  return (
    <div className={styles.container}>
      {/* Toggle Button */}
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

      {/* Overlay via globales Portal */}
      {mounted &&
        createPortal(menu, document.getElementById(PORTAL_ROOT_ID)!)}
    </div>
  );
}
