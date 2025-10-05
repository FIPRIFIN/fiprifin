import { notFound } from "next/navigation";
import { getCategories, getPostsByCategory } from "@/lib/content";
import { buildBreadcrumbJsonLd } from "@/lib/seo/breadcrumbs";
import PostCard from "@/components/PostCard";
import Breadcrumb from "@/components/Breadcrumbs";
import styles from "../insights.module.css";

export const dynamic = "force-static";

// 🔠 Hilfsfunktion für Anzeigeformat
function formatCategoryName(cat: string) {
  return cat.replace(/([a-z])([A-Z])/g, "$1 $2");
}

export async function generateStaticParams() {
  return getCategories().map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const displayName = formatCategoryName(category);
  return {
    title: `Insights: ${displayName}`,
    description: `Artikel für ${displayName}`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const baseUrl = "https://fiprifin.com";
  const parts = ["insights", category];
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(baseUrl, parts);

  const categories = getCategories();
  if (!categories.includes(category)) return notFound();

  const posts = getPostsByCategory(category);
  const displayName = formatCategoryName(category);

  return (
    <div className={styles.categoryContainer}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Breadcrumb />

      <h1 className={styles.categoryTitle}>{displayName}</h1>

      {category === "JungeFamilien" && (
        <section className={styles.categoryIntro}>
          <h2>
            Finanzen für junge Familien – Denken in Prinzipien, nicht in Produkten
          </h2>
          <p>
            In der Welt der Finanzen werden oft fertige Lösungen verkauft – Konten,
            Fonds, Versicherungen. Doch wer wirklich verstehen will, wie finanzielle
            Stabilität entsteht, muss eine Ebene tiefer denken. Bei{" "}
            <strong>FIPRIFIN</strong> betrachten wir Geld nicht als Zahl auf einem
            Konto, sondern als System aus Ursache und Wirkung. Wir zerlegen komplexe
            Fragen in ihre kleinsten Bestandteile – Einkommen, Ausgaben,
            Entscheidungen, Werte – und bauen daraus Lösungen, die wirklich tragen.
          </p>
          <p>
            Diese Sektion richtet sich an <strong>junge Familien</strong>, die ihre
            finanzielle Basis verstehen und stärken möchten. Hier findest du keine
            Werbeversprechen, sondern klar nachvollziehbare Prinzipien: wie man ein
            Haushaltsbudget aufbaut, Sparziele realistisch definiert, Risiken
            einordnet und langfristig Sicherheit schafft – ohne sich in unnötigen
            Details zu verlieren.
          </p>
          <p>
            Wir glauben: Wer die Grundlagen beherrscht, braucht keine komplizierten
            Produkte. Er braucht nur klare Prinzipien – und den Willen, sie
            anzuwenden.
          </p>
        </section>
      )}

      {posts.length === 0 ? (
        <p>Noch keine Artikel.</p>
      ) : (
        <div className={styles.postsGrid}>
          {posts.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      )}
    </div>
  );
}
