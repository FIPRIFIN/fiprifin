import { ReactNode } from "react";
import styles from "./ButtonWrapper.module.css";

interface ButtonWrapperProps {
  children: ReactNode;
  align?: "center" | "left" | "right";
}

export default function ButtonWrapper({ children, align = "center" }: ButtonWrapperProps) {
  return <div className={`${styles.buttonWrapper} ${styles[align]}`}>{children}</div>;
}
