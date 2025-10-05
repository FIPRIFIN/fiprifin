import Link from "next/link";
import { getCategories, getPostsByCategory } from "@/lib/content";
import Breadcrumb from "@/components/Breadcrumbs";
import styles from "./insights.module.css";

export const dynamic = "force-static";

// kleine Hilfsfunktion für bessere Anzeige
function formatCategoryName(cat: string) {
  // Beispiel: "JungeFamilien" → "Junge Familien"
  return cat.replace(/([a-z])([A-Z])/g, "$1 $2");
}

export default async function InsightsHome() {
  const categories = getCategories();

  return (
    <main className={styles.container}>
      <Breadcrumb />

      <header className={styles.header}>
        <h1 className={styles.title}>Insights</h1>
        <p className={styles.subtitle}>
          Wähle deine Kategorie und entdecke Finanzwissen, das auf Prinzipien
          basiert – nicht auf Produkten.
        </p>
      </header>

      <ul className={styles.categoryList}>
        {categories.map((cat) => {
            const count = getPostsByCategory(cat).length;
            return (
            <li key={cat} className={styles.categoryItem}>
                <Link href={`/insights/${cat}`} className={styles.categoryLink}>
                {formatCategoryName(cat)}
                <span className={styles.categoryCount}>({count})</span>
                </Link>
            </li>
            );
        })}
      </ul>

    </main>
  );
}
