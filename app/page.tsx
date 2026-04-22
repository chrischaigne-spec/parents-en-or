import { AboutPreview } from "@/components/modules/about-preview";
import { ArticleCard } from "@/components/modules/article-card";
import { Hero } from "@/components/modules/hero";
import { MissionSection } from "@/components/modules/mission-section";
import { Button } from "@/components/ui/button";
import { getLatestArticles } from "@/lib/articles";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

/* ─── SEO : métadonnées spécifiques à la page d'accueil ─── */
export const metadata: Metadata = {
  title: "Parents en Or — Parentalité bienveillante fondée sur la science",
  description:
    "Découvrez des conseils de parentalité bienveillante fondés sur la science. Sandra, maman et passionnée de développement de l'enfant, partage articles, ateliers et podcasts pour accompagner vos enfants avec respect.",
  alternates: {
    canonical: "https://parents-en-or.fr",
  },
};

export default function HomePage() {
  const latestArticles = getLatestArticles(3);

  return (
    <>
      {/* ─── 1. Hero — Accroche + Portrait Sandra ─── */}
      <Hero />

      {/* ─── 2. Pourquoi Parents en Or — Les 4 piliers ─── */}
      <MissionSection />

      {/* ─── 3. Derniers articles ─── */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-text md:text-4xl">
              Derniers articles
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-text-light">
              Des réflexions sourcées et des outils concrets pour votre
              quotidien de parent.
            </p>
          </div>

          {/* Grille de cartes */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          {/* Lien vers tous les articles */}
          <div className="mt-12 text-center">
            <Link href="/blog">
              <Button variant="outline">
                Tous les articles
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 4. Qui suis-je ? — Aperçu storytelling ─── */}
      <AboutPreview />

    </>
  );
}
