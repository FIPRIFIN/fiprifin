"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import styles from "./Breadcrumbs.module.css";

export default function Breadcrumb() {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);

  const formatName = (part: string) =>
    part
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());

  let href = "";
  const crumbs = parts.map((part, index) => {
    href += `/${part}`;
    const isLast = index === parts.length - 1;

    return isLast ? (
      <span key={part} className={`${styles.current} ${styles.active}`}>
        {formatName(part)}
      </span>
    ) : (
      <span key={part}>
        <Link href={href}>{formatName(part)}</Link>
        <span className={styles.separator}>›</span>
      </span>
    );
  });

  return (
    <motion.div
      className={styles.breadcrumbContainer}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.26, 1, 0.36, 1],
        delay: 0.15,
      }}
    >
      <motion.nav
        className={styles.breadcrumb}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.26, 1, 0.36, 1] }}
      >
        <Link href="/">Home</Link>
        <span className={styles.separator}>›</span>
        {crumbs}
      </motion.nav>
    </motion.div>
  );
}
