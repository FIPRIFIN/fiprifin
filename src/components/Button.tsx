// src/components/Button.tsx
import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "light" | "dark";
}

export default function Button({ href, children, variant = "light" }: ButtonProps) {
  const classes = [styles.button, styles[variant]].join(" ");

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
