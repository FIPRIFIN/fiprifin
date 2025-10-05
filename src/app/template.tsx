"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * Einfaches Fade-In bei jedem Seitenwechsel.
 * Kein Flicker, da keine Exit-Animation.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.26, 1, 0.36, 1],
      }}
      style={{
        backgroundColor: "transparent",
      }}
    >
      {children}
    </motion.div>
  );
}
