"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import styles from "./Counter.module.css"; 

type CounterProps = {
  target: number;
  duration?: number;
  label?: string;
};

export default function Counter({ target, duration = 2, label }: CounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.floor(latest).toLocaleString("de-DE")
  );

  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      setDisplayValue(v);
    });

    const controls = animate(count, target, {
      duration,
      ease: "easeOut",
    });

    return () => {
      unsubscribe();
      controls.stop();
    };
  }, [count, target, duration, rounded]);

  return (
    <motion.span className={styles.counterText}>
      <span className={styles.counter}>{displayValue}</span>
      {label && <span className={styles.counterLabel}> {label}</span>}
    </motion.span>
  );
}
