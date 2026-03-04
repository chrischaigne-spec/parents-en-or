import { ArticleJsonLd } from "@/components/modules/json-ld";
import { ArticleToc } from "@/components/modules/article-toc";
import { Button } from "@/components/ui/button";
import { articles, getArticleBySlug } from "@/lib/articles";
import { parseMarkdown } from "@/lib/markdown";
import { siteConfig } from "@/lib/constants";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

/* ─── Génération statique de toutes les routes d'articles ─── */
export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

/* ─── Métadonnées dynamiques par article ─── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
      images: [
        {
          url: article.coverImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const { toc, contentHtml } = parseMarkdown(article.content);
  const hasToc = toc.filter((t) => t.level === 2).length > 2;

  return (
    <>
      <ArticleJsonLd
        title={article.title}
        description={article.excerpt}
        publishedAt={article.publishedAt}
        url={`${siteConfig.url}/blog/${article.slug}`}
        image={article.coverImage}
      />

      <article className="py-12 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 lg:max-w-5xl">
          {/* Bouton retour */}
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Retour au blog
            </Button>
          </Link>

          {/* En-tête de l'article */}
          <header className="mb-10 lg:max-w-3xl">
            <span className="inline-block rounded-full bg-sage/10 px-3 py-1 text-xs font-semibold text-sage">
              {article.category}
            </span>

            <h1 className="mt-4 font-heading text-3xl font-bold leading-tight text-text md:text-4xl lg:text-5xl">
              {article.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-text-light">
              <span className="inline-flex items-center gap-1.5">
                <User className="h-4 w-4" aria-hidden="true" />
                {article.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <time dateTime={article.publishedAt}>
                  {new Date(article.publishedAt).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {article.readingTime} de lecture
              </span>
            </div>
          </header>

          {/* Image de couverture */}
          <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl lg:max-w-3xl">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>

          {/* Mobile TOC (hidden on desktop — sidebar handles it) */}
          {hasToc && (
            <div className="lg:hidden">
              <ArticleToc items={toc} />
            </div>
          )}

          {/* Grid: article + sidebar TOC */}
          <div className={hasToc ? "lg:grid lg:grid-cols-[1fr_240px] lg:gap-10" : ""}>
            {/* Corps de l'article */}
            <div
              className="prose-article"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {/* Desktop TOC sidebar (rendered inside ArticleToc) */}
            {hasToc && (
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <ArticleToc items={toc} />
                </div>
              </aside>
            )}
          </div>

          {/* Séparateur et CTA retour */}
          <div className="mt-16 border-t border-sage/10 pt-8 text-center lg:max-w-3xl">
            <p className="text-text-light">
              Cet article vous a plu ? Partagez-le avec d&apos;autres parents !
            </p>
            <Link href="/blog" className="mt-4 inline-block">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                Découvrir d&apos;autres articles
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
