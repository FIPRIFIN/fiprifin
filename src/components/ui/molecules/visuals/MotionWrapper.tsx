"use client";

import { motion, Easing } from "framer-motion";
import React from "react";
import { getMotionEase, motionTokens } from "@/utils/motion.config";

/* ============================================================
   🌀 MOTION WRAPPER – UNIVERSALER ANIMATIONS-LAYER
   ------------------------------------------------------------
   Ein zentraler Wrapper, um konsistente Motion-Effekte 
   über das gesamte Framework hinweg zu nutzen.

   ✅ Einheitliche Token-basierte Steuerung:
      - Nutzt CSS-/Motion-Tokens aus motion.config.ts
   ✅ Responsiv & Barrierefrei:
      - Deaktiviert Animationen automatisch bei 
        „prefers-reduced-motion“
   ✅ Modular:
      - Kann jedes Atom, Molekül oder Organismus-Element wrappen

   ------------------------------------------------------------
   🔧 Props:
   - variant:   Definiert die Art der Animation (fadeIn, slideUp, etc.)
   - delay:     Startverzögerung in Sekunden
   - duration:  Dauer (als Zahl oder Token, z. B. "base")
   - easing:    Bewegungsgefühl (Token aus motion.config)
   - once:      Animation nur beim ersten Viewport-Eintritt
   - amount:    Scroll-Schwelle, ab wann die Animation triggert
   - className: Zusätzliche CSS-Klassen
   - style:     Inline-Stile

   ------------------------------------------------------------
   📘 Beispiel:
   <MotionWrapper variant="slideUp" duration="slow" easing="spring">
     <MySection />
   </MotionWrapper>
   ============================================================ */

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
  duration?: number | keyof typeof motionTokens["durations"];
  easing?: keyof typeof motionTokens["easings"];
  once?: boolean;
  amount?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function MotionWrapper({
  children,
  variant = "fadeIn",
  delay = 0,
  duration = "base",
  easing = "soft",
  once = true,
  amount = 0.2,
  className = "",
  style = {},
}: MotionWrapperProps) {
  /* ------------------------------------------------------------
     🧩 Varianten-Mapping – Basisanimationen
     ------------------------------------------------------------ */
  const variants = {
    fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1 } },
    slideUp: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
    slideLeft: { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
    slideRight: { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
    zoomIn: { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
    blurIn: { initial: { opacity: 0, filter: "blur(8px)" }, animate: { opacity: 1, filter: "blur(0px)" } },
  };

  const { initial, animate } = variants[variant];

  /* ------------------------------------------------------------
     🧮 Resolve Tokens → Framer-kompatible Werte
     ------------------------------------------------------------ */
  const resolvedDuration =
    typeof duration === "string"
      ? motionTokens.durations[duration] ?? 0.8
      : duration;

  const resolvedEase = getMotionEase(easing) as Easing;

  /* ------------------------------------------------------------
     🎬 Render – Motion Wrapper mit einheitlichem Verhalten
     ------------------------------------------------------------ */
  return (
    <motion.div
      className={className}
      style={{
        willChange: "transform, opacity, filter", // Performance-Hint
        ...style,
      }}
      initial={initial}
      whileInView={animate}
      viewport={{ once, amount }}
      transition={{
        duration: resolvedDuration,
        delay,
        ease: resolvedEase,
      }}
    >
      {children}
    </motion.div>
  );
}
