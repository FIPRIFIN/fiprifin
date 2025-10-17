"use client";

import { motion } from "framer-motion";
import styles from "./Divider.module.css";

interface DividerProps {
  /**
   * Orientierung:
   * - horizontal → Standardlinie
   * - vertical → Spaltentrenner
   */
  orientation?: "horizontal" | "vertical";

  /**
   * Stilvariante:
   * - subtle → neutral
   * - accent → Markenfarbe
   * - gradient → linearer Verlauf
   */
  variant?: "subtle" | "accent" | "gradient";

  /**
   * Breite (z. B. "100%", "80px", "var(--space-6)")
   */
  width?: string;

  /**
   * Höhe (z. B. "1px", "4px", "var(--space-1)")
   */
  height?: string;

  /**
   * Zusätzliche Klassen (Layout, Margin etc.)
   */
  className?: string;
}

export default function Divider({
  orientation = "horizontal",
  variant = "subtle",
  width,
  height,
  className = "",
}: DividerProps) {
  const style = {
    width: width || (orientation === "horizontal" ? "100%" : "1px"),
    height: height || (orientation === "horizontal" ? "1px" : "100%"),
  };

  return (
    <motion.div
      className={`${styles.divider} ${styles[orientation]} ${styles[variant]} ${className}`}
      style={style}
      initial={{
        opacity: 0,
        scaleX: orientation === "horizontal" ? 0 : 1,
        scaleY: orientation === "vertical" ? 0 : 1,
      }}
      whileInView={{ opacity: 1, scaleX: 1, scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
    />
  );
}
