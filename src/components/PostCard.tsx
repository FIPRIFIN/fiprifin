import Link from "next/link";
import Image from "next/image";
import styles from "@/app/insights/insights.module.css";
import { PostMeta } from "@/lib/content"

interface PostCardProps {
  post: PostMeta;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className={styles.card}>
      {post.image && (
        <div className={styles.cardImageWrapper}>
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={450}
            className={styles.cardImage}
          />
        </div>
      )}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{post.title}</h3>
        <p className={styles.cardExcerpt}>{post.excerpt}</p>
        <p className={styles.cardMeta}>
          {post.author} · {new Date(post.date).toLocaleDateString()}
        </p>
        <Link href={`/insights/${post.category}/${post.slug}`} className={styles.cardLink}>
          Weiterlesen →
        </Link>
      </div>
    </article>
  );
}
