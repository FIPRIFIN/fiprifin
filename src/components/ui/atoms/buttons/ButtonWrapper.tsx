import { ReactNode } from "react";
import styles from "./ButtonWrapper.module.css";

interface ButtonWrapperProps {
  /**
   * Kinder-Elemente (meist Buttons)
   */
  children: ReactNode;

  /**
   * Ausrichtung der Buttons im Layout
   * - center (Standard)
   * - left
   * - right
   */
  align?: "center" | "left" | "right";

  /**
   * Abstand oberhalb (optional, um visuell Sections abzugrenzen)
   */
  spacing?: "none" | "sm" | "md" | "lg";

  /**
   * Optional zusätzliche Klasse
   */
  className?: string;
}

/**
 * 🧱 ButtonWrapper – gruppiert mehrere Buttons semantisch korrekt.
 * Kümmert sich um Abstand, Ausrichtung & Responsive Verhalten.
 *
 * 📘 Verwendung:
 * ```tsx
 * // Zentriert (Standard)
 * <ButtonWrapper>
 *   <Button variant="primary">Jetzt starten</Button>
 *   <Button variant="secondary">Mehr erfahren</Button>
 * </ButtonWrapper>
 *
 * // Linksbündig mit größerem Abstand
 * <ButtonWrapper align="left" spacing="lg">
 *   <Button variant="primary">Kontakt</Button>
 * </ButtonWrapper>
 * ```
 */
export default function ButtonWrapper({
  children,
  align = "center",
  spacing = "md",
  className = "",
}: ButtonWrapperProps) {
  return (
    <div
      className={[
        styles.wrapper,
        styles[align],
        styles[`space-${spacing}`],
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
