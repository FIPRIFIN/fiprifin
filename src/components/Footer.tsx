import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Container from "./Container";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.links}>
            <Link href="/contact">Kontakt</Link>
            <Link href="/dna">DNA</Link>
            <Link href="/insights">Insights</Link>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>

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

          <div className={styles.copy}>
            © {new Date().getFullYear()} FIPRIFIN – First Principle Finance. Alle Rechte vorbehalten.
          </div>
        </div>
      </Container>
    </footer>
  );
}
