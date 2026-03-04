import { ArticleCard } from "@/components/modules/article-card";
import { articles } from "@/lib/articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles et conseils sur la parentalité bienveillante : sommeil, émotions, communication, éducation positive et bien-être familial.",
};

export default function BlogPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        {/* En-tête de page */}
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold text-text md:text-5xl">
            Le blog
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-light">
            Explorez des articles pensés pour accompagner votre quotidien de
            parent avec douceur et bienveillance.
          </p>
        </div>

        {/* Grille d'articles */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...articles]
            .sort(
              (a, b) =>
                new Date(b.publishedAt).getTime() -
                new Date(a.publishedAt).getTime()
            )
            .map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
        </div>
      </div>
    </section>
  );
}
