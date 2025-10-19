"use client";
import { motion } from "framer-motion";
import React from "react";

/**
 * 🌀 MotionWrapper – universeller Animations-Wrapper
 * --------------------------------------------------
 * Einheitliche Motion für dein gesamtes Framework.
 * Kann jede Section, jedes Atom oder Molekül wrappen.
 *
 * Varianten:
 *  - fadeIn
 *  - slideUp
 *  - slideLeft
 *  - slideRight
 *  - zoomIn
 *  - blurIn
 */
interface MotionWrapperProps {
  children: React.ReactNode;
  variant?:
    | "fadeIn"
    | "slideUp"
    | "slideLeft"
    | "slideRight"
    | "zoomIn"
    | "blurIn";
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function MotionWrapper({
  children,
  variant = "fadeIn",
  delay = 0,
  duration = 0.8,
  once = true,
  amount = 0.2,
  className = "",
  style = {},
}: MotionWrapperProps) {
  const variants = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    slideUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
    },
    slideLeft: {
      initial: { opacity: 0, x: 40 },
      animate: { opacity: 1, x: 0 },
    },
    slideRight: {
      initial: { opacity: 0, x: -40 },
      animate: { opacity: 1, x: 0 },
    },
    zoomIn: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
    },
    blurIn: {
      initial: { opacity: 0, filter: "blur(8px)" },
      animate: { opacity: 1, filter: "blur(0px)" },
    },
  };

  const { initial, animate } = variants[variant];

  return (
    <motion.div
      className={className}
      style={{
        willChange: "transform, opacity, filter",
        ...style,
      }}
      initial={initial}
      whileInView={animate}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.26, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
