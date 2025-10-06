import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const classes = [styles.button, styles[variant]].join(" ");

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
