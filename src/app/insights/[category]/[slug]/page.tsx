import { notFound } from "next/navigation";
import { getAllParams, getPost, getPostsByCategory } from "@/lib/content";
import { buildBreadcrumbJsonLd } from "@/lib/seo/breadcrumbs";
import Breadcrumb from "@/components/Breadcrumbs";
import AffiliateBox from "@/components/AffiliateBox";
import Link from "next/link";
import NextImage from "next/image";
import styles from "./../../insights.module.css";
import type { ImageProps } from "next/image";
const Image = NextImage as unknown as React.FC<ImageProps>;


export const dynamic = "force-static";

export async function generateStaticParams() {
  return getAllParams();
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  try {
    const post = await getPost(category, slug);
    return {
      title: post.title,
      description: post.excerpt ?? "",
    };
  } catch {
    return {};
  }
}

export default async function PostPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  // 👇 Hier der entscheidende Teil
  const { category, slug } = await params;
  const baseUrl = "https://fiprifin.com"; 
  const parts = ["insights", category, slug];
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(baseUrl, parts);

  try {
    const post = await getPost(category, slug);
    const more = getPostsByCategory(category)
      .filter((p) => p.slug !== slug)
      .slice(0, 3);

    return (
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <Breadcrumb />
        <header>
          {typeof post.image === "string" && post.image.trim() !== "" && (
          <Image
            src={post.image}
            alt={post.title || "Artikelbild"}
            width={1200}
            height={600}
            className={styles.postHeaderImage}
            priority
          />
        )}

          <h1>{post.title}</h1>
          <p style={{ opacity: 0.7 }}>
            {post.author ?? ""} · {new Date(post.date).toLocaleDateString()}
          </p>
        </header>

        <AffiliateBox items={post.affiliate} />

        <article dangerouslySetInnerHTML={{ __html: post.html }} />

        {more.length > 0 && (
          <>
            <hr />
            <h3>Mehr aus {post.category.replace("-", " ")}</h3>
            <ul>
              {more.map((m) => (
                <li key={m.slug}>
                  <Link href={`/insights/${m.category}/${m.slug}`}>
                    {m.title}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </main>
    );
  } catch {
    return notFound();
  }
}
