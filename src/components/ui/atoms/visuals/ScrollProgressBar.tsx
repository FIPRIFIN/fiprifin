"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import styles from "./ScrollProgressBar.module.css";

/**
 * 📊 ScrollProgressBar – zeigt den Scroll-Fortschritt der Seite an.
 * ---------------------------------------------------------------
 * Reagiert dynamisch auf das Scrollverhalten mit `framer-motion`
 * und nutzt das globale Farb-Token `--accent-gradient`.
 *
 * Beispiel:
 * ```tsx
 * <ScrollProgressBar />
 * ```
 */
export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 18,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={styles.scrollProgress}
      style={{ scaleX }}
      initial={{ scaleX: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    />
  );
}
