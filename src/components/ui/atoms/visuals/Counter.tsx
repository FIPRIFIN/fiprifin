"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import styles from "./Counter.module.css";

/**
 * Typdefinition für den Counter-Atom.
 */
interface CounterProps {
  /**
   * 🎯 Zielwert, bis zu dem der Counter hochzählt.
   * Beispiel: 1000 → Der Counter zählt animiert bis 1.000.
   */
  target: number;

  /**
   * ⏱ Dauer der Animation in Sekunden.
   * Standardwert: 2 Sekunden.
   */
  duration?: number;

  /**
   * 🏷 Optionales Label, das hinter dem Zähler angezeigt wird.
   * Beispiel: `+`, `%`, `Kunden`, `Downloads`
   */
  label?: string;
}

/**
 * 🔢 Counter – animiertes Zahlen-Atom für Kennzahlen oder Statistiken.
 * -------------------------------------------------------------
 * Verwendet Framer Motion für flüssige, performante Zahl-Animationen.
 * Nutzt Token-basierte Styles (Counter.module.css) und globale Theme-Farben.
 *
 * 📘 Verwendung:
 * ```tsx
 * // Einfacher Zähler ohne Label
 * <Counter target={500} />
 *
 * // Zähler mit Label
 * <Counter target={2500} label="Downloads" />
 *
 * // Langsamerer Zähler
 * <Counter target={10000} duration={5} label="Klicks" />
 * ```
 *
 * 📐 Atomic Level: **Atom**
 * Wird häufig innerhalb von Molekülen wie KPI-Sections, Hero-Badges oder Stat-Groups verwendet.
 */
export default function Counter({
  target,
  duration = 2,
  label,
}: CounterProps) {
  /**
   * 🔧 MotionValue – Framer Motion interner animierbarer Zahlenwert.
   * Startet bei 0, zählt bis `target`.
   */
  const count = useMotionValue(0);

  /**
   * 🧮 Gerundeter Wert (integer) mit deutscher Zahlformatierung.
   * Beispiel: 1000 → "1.000"
   */
  const rounded = useTransform(count, (latest) =>
    Math.floor(latest).toLocaleString("de-DE")
  );

  /**
   * 💬 React-State zur Anzeige des aktuellen Wertes als String.
   * Wird bei jeder Animation aktualisiert.
   */
  const [displayValue, setDisplayValue] = useState("0");

  /**
   * 🌀 useEffect – startet die Animation bei Mount oder wenn Zielwert/Dauer geändert wird.
   */
  useEffect(() => {
    // Framer Motion: Listener für Wertänderungen
    const unsubscribe = rounded.on("change", (v) => {
      setDisplayValue(v);
    });

    // Starte Animation
    const controls = animate(count, target, {
      duration,
      ease: "easeOut",
    });

    // Cleanup bei Unmount oder Prop-Wechsel
    return () => {
      unsubscribe();
      controls.stop();
    };
  }, [count, target, duration, rounded]);

  /**
   * 💅 Gerendetes Markup:
   * Enthält Zahl (Counter) und optionales Label.
   */
  return (
    <motion.span className={styles.counterText}>
      <span className={styles.counter}>{displayValue}</span>
      {label && <span className={styles.counterLabel}> {label}</span>}
    </motion.span>
  );
}
