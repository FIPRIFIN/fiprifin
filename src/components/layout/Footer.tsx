"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Container from "@/components/layout/Container";
import styles from "./Footer.module.css";
import { useState } from "react";

const TAP_PULSE_DURATION = 250;

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const [tapping, setTapping] = useState(false);

  const handleNavClick = (href: string) => {
    setTapping(true);
    setTimeout(() => {
      setTapping(false);
      router.push(href);
    }, TAP_PULSE_DURATION);
  };

  const links = [
    { label: "Kontakt", href: "/contact" },
    { label: "DNA", href: "/dna" },
    { label: "Insights", href: "/insights" },
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ];

  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.26, 1, 0.36, 1] }}
    >
      <Container>
        <div className={styles.inner}>
          {/* === LINKS === */}
          <div className={styles.links}>
            {links.map((item) => {
              const isActive = pathname === item.href;
              return (
                <button
                  key={item.href}
                  className={`${styles.linkButton} ${
                    isActive ? styles.active : ""
                  } ${tapping ? styles.tapping : ""}`}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* === SOCIALS === */}
          <div className={styles.socials}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
          </div>

          {/* === Divider === */}
          <div className={styles.divider} />

          {/* === Copyright === */}
          <div className={styles.copy}>
            © {new Date().getFullYear()} FIPRIFIN – First Principle Finance. Alle
            Rechte vorbehalten.
          </div>
        </div>
      </Container>
    </motion.footer>
  );
}
