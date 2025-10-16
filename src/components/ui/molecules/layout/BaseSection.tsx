import styles from "./BaseSection.module.css";
import React from "react";

interface BaseSectionProps {
  id?: string;
  background?: "surface" | "transparent" | "dark" | "light";
  ariaLabelledby?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * 🧱 BaseSection – mobile-first Layout Wrapper
 * Rendert eine semantische <section> mit responsivem, CD-konformem Design.
 * SEO-optimiert durch aria-labelledby und strukturiertes DOM.
 */
export default function BaseSection({
  id,
  background = "surface",
  ariaLabelledby,
  children,
  className = "",
}: BaseSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`${styles.base} ${styles[background]} ${className}`}
    >
      <div className={styles.inner}>{children}</div>
    </section>
  );
}
