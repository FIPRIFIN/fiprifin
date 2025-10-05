import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import styles from "./Home.module.css";
import ButtonWrapper from "@/components/ButtonWrapper";

export default function Home() {
  return (
    <main className={styles.main}>
      <Container>
        <section className={styles.section}>
          <h1 className={styles.title}>Unser Auftrag</h1>
          <p className={styles.text}>
            FIPRIFIN steht für Klarheit in persönlichen Finanzen. Wir glauben,
            dass finanzielle Stabilität nicht mit komplizierten Produkten
            beginnt, sondern mit einfachen Prinzipien, die jeder verstehen und
            umsetzen kann. Unser Auftrag ist es, junge Familien und moderne
            Haushalte mit Wissen, Tools und Denkanstößen auszustatten – damit
            sie selbstbestimmt, digital und ohne Umwege Entscheidungen treffen
            können, die wirklich zu ihrem Leben passen.
          </p>
        </section>

        <div className={styles.divider} />

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Was wir machen</h2>
          <p className={styles.text}>
            Wir entwickeln Inhalte, Werkzeuge und Strukturen, die sofort im
            Alltag helfen. Von einfachen Budgetplanern bis hin zu praxisnahen
            E-Books – FIPRIFIN liefert Lösungen, die nicht in der Theorie stecken
            bleiben. Alles ist digital, klar und leicht zugänglich, damit junge
            Familien und moderne Haushalte direkt profitieren können. Unser Ziel:
            Finanzen verständlich machen – Schritt für Schritt, ohne Umwege.
          </p>
        </section>

        <div className={styles.divider} />

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Unsere DNA</h2>
          <p className={styles.text}>
            Unsere DNA ist die Grundlage von FIPRIFIN – fünf Prinzipien, die
            Finanzen verständlich, digital und alltagstauglich machen.
          </p>
          <ButtonWrapper>
            <Button href="/dna">Mehr über unsere DNA</Button>
          </ButtonWrapper>
        </section>
      </Container>
    </main>
  );
}
