"use client";

import { ReactNode } from "react";
import styles from "./MediaWrapper.module.css";

/**
 * ============================================================
 * 🧩 MediaWrapper – Molekül für Bild- & SVG-Container
 * ------------------------------------------------------------
 * Einheitlicher Container für alle visuellen Medien.
 * Nutzt Flexbox + Tokens für Abstände, max-width & Ratio.
 * ------------------------------------------------------------
 * Props:
 * - children → SVG oder <Image>
 * - size     → "sm" | "md" | "lg" (definiert max-width)
 * - align    → "center" | "left" | "right"
 * ============================================================
 */
interface MediaWrapperProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  align?: "center" | "left" | "right";
  className?: string;
}

export default function MediaWrapper({
  children,
  size = "md",
  align = "center",
  className = "",
}: MediaWrapperProps) {
  return (
    <div
      className={[
        styles.wrapper,
        styles[`size--${size}`],
        styles[`align--${align}`],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
