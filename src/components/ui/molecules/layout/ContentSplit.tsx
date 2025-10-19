"use client";

import { ReactNode } from "react";
import styles from "./ContentSplit.module.css";

/**
 * ============================================================
 * 🧩 ContentSplit – flexibles Layout Molekül
 * ------------------------------------------------------------
 * Anordnung für Hero-, Produkt- oder Feature-Sektionen.
 * Unterstützt responsives Split-Layout mit zentralem Stack.
 *
 * Props:
 * - visual → SVG, Bild, Animation etc.
 * - content → Text-, Button- oder andere Atoms/Molecules
 * - reverse → Reihenfolge umdrehen (z. B. Text links, Bild rechts)
 * ============================================================
 */
interface ContentSplitProps {
  visual: ReactNode;
  content: ReactNode;
  reverse?: boolean;
  gap?: string;
  className?: string;
}

export default function ContentSplit({
  visual,
  content,
  reverse = false,
  gap = "var(--space-6)",
  className = "",
}: ContentSplitProps) {
  return (
    <div
      className={[
        styles.split,
        reverse ? styles.reverse : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ gap }}
    >
      <div className={styles.visual}>{visual}</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
}
