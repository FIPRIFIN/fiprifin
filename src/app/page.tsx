import Container from "@/components/Container";
import Button from "@/components/Button";
import ButtonWrapper from "@/components/ButtonWrapper";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Container>
        <section className={styles.hero}>
          <div className={styles.heroVisual}>
            <img
              src="/images/VerosomaBudgetCover.svg"
              alt="Verosoma Budget Cover"
              className={styles.heroImage}
            />
          </div>

          <div className={styles.heroContent}>
            <h1 className={styles.title}>Verosoma Budget</h1>
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
