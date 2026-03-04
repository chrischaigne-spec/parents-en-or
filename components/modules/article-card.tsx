import type { Article } from "@/types";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
      {/* Image de couverture */}
      <Link
        href={`/blog/${article.slug}`}
        className="block relative aspect-[16/10] overflow-hidden"
      >
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Badge catégorie */}
        <span className="absolute top-4 left-4 rounded-full bg-sage px-3 py-1 text-xs font-semibold text-white">
          {article.category}
        </span>
      </Link>

      {/* Contenu */}
      <div className="p-5">
        <Link href={`/blog/${article.slug}`}>
          <h3 className="font-heading text-lg font-bold text-text group-hover:text-sage transition-colors line-clamp-2">
            {article.title}
          </h3>
        </Link>

        <p className="mt-2 text-sm text-text-light line-clamp-2">
          {article.excerpt}
        </p>

        {/* Métadonnées */}
        <div className="mt-4 flex items-center gap-4 text-xs text-text-light">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
            <time dateTime={article.publishedAt}>
              {new Date(article.publishedAt).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {article.readingTime}
          </span>
        </div>
      </div>
    </article>
  );
}
