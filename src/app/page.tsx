import Container from "@/components/Container";
import Button from "@/components/Button";
import ButtonWrapper from "@/components/ButtonWrapper";
import styles from "./Home.module.css";
import Counter from "@/components/Counter";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <Container>
        <section className={styles.hero}>
          <div className={styles.heroVisual}>
            <Image
              src="/images/produktcover/MasterCoverProdukte_V1_SVG.svg"
              alt="Verosoma Budget Produktcover – digitales Haushaltsbuch Tool für Familien"
              className={styles.heroImage}
              width={560}
              height={560}
              unoptimized
            />
          </div>

          <div className={styles.heroContent}>
            {/* Visually hidden for better SEO */}
             <h1 className="visuallyHidden">
              Verosoma Budget – das digitale Haushaltsbuch und Finanzplaner für Familien
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
      </Container>
    </main>
  );
}
