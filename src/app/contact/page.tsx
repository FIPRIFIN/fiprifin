import styles from "./contact.module.css";
import { Mail, Phone, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <main className={styles.contactSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>Kontakt aufnehmen</h1>
        <p className={styles.subtitle}>
          Wir freuen uns auf Ihre Nachricht. Ob Fragen, Ideen oder Feedback – wir sind für Sie da.
        </p>

        <div className={styles.buttonList}>
          <a href="mailto:info@fiprifin.com" className={styles.button}>
            <span className={styles.icon}><Mail /></span>
            E-Mail schreiben
          </a>

          <a href="mailto:info@fiprifin.com" className={styles.button}>
            <span className={styles.icon}><MessageSquare /></span>
            Nachricht senden
          </a>
        </div>
      </div>
    </main>
  );
}
