import Container from "@/components/layout/Container";
import styles from "./dna.module.css";

export default function DNA() {
  return (
    <main className={styles.main}>
      <Container>
        <section className={styles.section}>
          <h1 className={styles.title}>Unsere DNA</h1>

          <p className={styles.intro}>
            Wir sind überzeugt: Finanzwissen darf kein Privileg sein. Es sollte jedem Menschen
            zugänglich gemacht werden – klar, verständlich und digital. Unser Ansatz verbindet
            Wissen, Technologie und Verantwortung, um nachhaltige finanzielle Entscheidungen
            zu ermöglichen.
          </p>

          <div className={styles.divider} />

          <h2 className={styles.subtitle}>1. First Principle als Grundlage</h2>
          <p className={styles.text}>
            Wir glauben, dass die besten Lösungen entstehen, wenn man Probleme auf ihre Grundprinzipien
            zurückführt. Anstatt alte Finanzregeln blind zu kopieren, stellen wir Fragen: Was steht 
            wirklich dahinter?
          </p>

          <div className={styles.divider} />

          <h2 className={styles.subtitle}>2. Bildung statt Verkauf</h2>
          <p className={styles.text}>
            Finanzen sind kein Produkt sondern ein Prozess. Unser Ziel ist es, Wissen und Klarheit zu 
            schaffen – damit Familien selbst Entscheidungen treffen können, die zu ihrem Leben passen.
          </p>

          <div className={styles.divider} />

          <h2 className={styles.subtitle}>3. Tools statt Theorie</h2>
          <p className={styles.text}>
            Wir entwickeln Inhalte, Werkzeuge und Strukturen, die Menschen sofort im Alltag einsetzen 
            können. Einfach, digital, verständlich – und immer mit echtem Nutzen.
          </p>

          <div className={styles.divider} />

          <h2 className={styles.subtitle}>4. Digital First</h2>
          <p className={styles.text}>
            Unsere Welt ist mobil, flexibel und vernetzt. Deshalb bauen wir Lösungen, die nicht an 
            veraltete Strukturen gebunden sind, sondern überall zugänglich sind – für alle die smarter 
            mit Ihren Finanzen umgehen wollen.
          </p>

          <div className={styles.divider} />

          <h2 className={styles.subtitle}>5. Probleme an der Wurzel packen</h2>
          <p className={styles.text}>
            Wir glauben nicht daran, Symptome zu überdecken. Bevor man über große Finanzprodukte spricht, 
            müssen Grundlagen wie Budget, Struktur und gesunde Finanzgewohnheiten stimmen. Nur so entsteht 
            echte Flexibilität.
          </p>

          <div className={styles.divider} />

          <p className={styles.conclusion}>
            FIPRIFIN steht für Klarheit, Bildung und Verantwortung.
            Das ist unser Fundament – und unsere DNA.
          </p>
        </section>
      </Container>
    </main>
  );
}
