import styles from "./impressum.module.css";

export default function ImpressumPage() {
  return (
    <section className={styles.impressum}>
      <h1>Impressum</h1>

      <p>
        Paul Kaiser<br />
        Paul Kaiser &ndash; FIPRIFIN (First Principle Finance)<br />
        Oberer Weiler 3<br />
        71577 Großerlach
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: <a href="tel:01739069171">0173&nbsp;9069171</a><br />
        E-Mail:{" "}
        <a href="mailto:Admin@fiprifin.com">Admin@fiprifin.com</a>
      </p>

      <h2>Verbraucher&shy;streit&shy;beilegung / Universal&shy;schlichtungs&shy;stelle</h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>Zentrale Kontaktstelle nach dem Digital Services Act (DSA)</h2>
      <p>
        Unsere zentrale Kontaktstelle für Nutzer und Behörden nach Art. 11, 12 DSA erreichen Sie wie folgt:
      </p>
      <p>
        E-Mail: <a href="mailto:Admin@fiprifin.com">Admin@fiprifin.com</a><br />
        Telefon: <a href="tel:01739069171">0173&nbsp;9069171</a>
      </p>
      <p>Die für den Kontakt zur Verfügung stehenden Sprachen sind: Deutsch, Englisch.</p>

      <p>
        Quelle:{" "}
        <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer">
          eRecht24
        </a>
      </p>
    </section>
  );
}
