"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import Button from "@/components/Button";
import ButtonWrapper from "@/components/ButtonWrapper";
import Counter from "@/components/Counter";
import Image from "next/image";
import styles from "./Home.module.css";

/* ===========================
   🏠 HOMEPAGE
=========================== */
export default function Home() {
  const pathname = usePathname();

  // 🩵 Safari/iPad Layout Bugfix (forced repaint bei Route-Wechsel)
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollBy(0, 1);
      window.scrollBy(0, -1);
    }
  }, [pathname]);

  return (
    <main className={styles.main}>
      <Container>
        {/* ===========================
            HERO SECTION – Hauptprodukt
        ============================ */}
        <section
          className={styles.hero}
          aria-labelledby="verosoma-budget-heading"
        >
          <div className={styles.coverVisual}>
            <Image
              src="/images/produktcover/ProduktCoverBalance.svg.svg"
              alt="Produktcover von Verosoma Budget – digitales Haushaltsbuch Tool für Familien"
              className={styles.coverImage}
              width={560}
              height={560}
              priority
              unoptimized
            />
          </div>

          <div className={styles.heroContent}>
            {/* SEO-freundlicher H1, visuell versteckt */}
            <h1 id="verosoma-budget-heading" className="visuallyHidden">
              Verosoma Budget – Das digitale Haushaltsbuch und Finanzplaner für Familien
            </h1>

            <Counter target={1284} duration={3} label="+ aktive Planner" />

            <p className={styles.text}>
              Struktur schafft Freiheit. Dein klarer Start in die Finanzordnung –{" "}
              <br />
              Schritt für Schritt. Das digitale Haushaltsbuch für junge Familien
              und moderne Haushalte – gestaltet für Übersicht, Kontrolle und Ruhe.
            </p>

            <ButtonWrapper>
              <Button href="/shop/verosoma-budget" variant="primary">
                Jetzt kaufen
              </Button>
              <Button href="/verosoma-budget" variant="secondary">
                Verstehen
              </Button>
            </ButtonWrapper>
          </div>
        </section>

        {/* ===========================
            COMING SOON SECTION – Folgeprodukt
        ============================ */}
        <section
          className={styles.comingSoon}
          aria-labelledby="verosoma-flow-heading"
        >
          <div className={styles.coverVisual}>
            <Image
              src="/images/produktcover/ProduktCoverFlow.svg.svg"
              alt="Produktcover von Verosoma Flow – digitales Finanzcoaching Tool (Coming Soon)"
              className={styles.coverImage}
              width={460}
              height={460}
              unoptimized
            />
          </div>

          <div className={styles.comingSoonContent}>
            <h2 id="verosoma-flow-heading">Verosoma Flow – Coming Soon</h2>
            <p>
              Nach dem Erfolg von <strong>Verosoma Budget</strong> folgt das
              nächste Kapitel: <br />
              <em>Flow</em> – dein smarter Begleiter für finanzielle Klarheit,
              Gelassenheit und gesunde Routinen im Umgang mit Geld. Bald
              verfügbar.
            </p>
            <ButtonWrapper>
              <Button href="/newsletter" variant="primary">
                Frühzugang sichern
              </Button>
            </ButtonWrapper>
          </div>
        </section>
      </Container>
    </main>
  );
}
