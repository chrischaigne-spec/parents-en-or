import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";
import { Heart, Sparkles, Star } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos",
  description: `Découvrez l'histoire derrière ${siteConfig.name} : une maman passionnée par la parentalité bienveillante qui partage son chemin avec authenticité.`,
};

export default function AboutPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        {/* ─── En-tête ─── */}
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-light/30 px-4 py-2 text-sm font-medium text-rose-dark">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Mon histoire
          </div>
          <h1 className="font-heading text-4xl font-bold text-text md:text-5xl">
            Bonjour, je suis derrière
            <br />
            <span className="text-sage">{siteConfig.name}</span>
          </h1>
        </div>

        {/* ─── Storytelling ─── */}
        <div className="mt-14 space-y-8 text-lg leading-relaxed text-text-light">
          {/* Bloc 1 — L'origine */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/10">
                <Heart className="h-5 w-5 text-sage" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-xl font-bold text-text">
                Comment tout a commencé
              </h2>
            </div>
            <p>
              Comme beaucoup de mamans, j&apos;ai cherché des réponses quand mon
              premier enfant est arrivé. Les nuits courtes, les crises de
              larmes, le doute permanent... Je me suis retrouvée submergée,
              cherchant désespérément un mode d&apos;emploi qui n&apos;existait
              pas.
            </p>
            <p className="mt-4">
              C&apos;est en découvrant la parentalité bienveillante que tout a
              changé. Pas du jour au lendemain, mais doucement, comme un lever
              de soleil. J&apos;ai compris que je n&apos;avais pas besoin
              d&apos;être parfaite — j&apos;avais besoin d&apos;être
              authentique.
            </p>
          </div>

          {/* Bloc 2 — La mission */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose/10">
                <Star className="h-5 w-5 text-rose" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-xl font-bold text-text">
                Pourquoi ce blog ?
              </h2>
            </div>
            <p>
              {siteConfig.name} est né d&apos;un constat simple : trop de
              parents se sentent seuls face à leurs questions. Les réseaux
              sociaux regorgent de conseils contradictoires, et il est facile de
              se perdre.
            </p>
            <p className="mt-4">
              J&apos;ai voulu créer un espace différent. Un lieu où l&apos;on
              peut respirer, lire à son rythme, et trouver des réponses
              bienveillantes ancrées dans la réalité du quotidien. Pas de
              jugement, pas de recettes miracles — juste de l&apos;humanité.
            </p>
          </div>

          {/* Bloc 3 — Les valeurs */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/10">
                <Sparkles className="h-5 w-5 text-sage" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-xl font-bold text-text">
                Ce que je crois profondément
              </h2>
            </div>
            <ul className="mt-2 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-sage" />
                <span>
                  Chaque enfant est unique et mérite d&apos;être vu pour qui il
                  est.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-rose" />
                <span>
                  Les émotions ne sont jamais le problème — elles sont toujours
                  le message.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-sage" />
                <span>
                  Le lien parent-enfant se construit dans les petits moments du
                  quotidien.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-rose" />
                <span>
                  Prendre soin de soi n&apos;est pas égoïste, c&apos;est
                  essentiel.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ─── CTA ─── */}
        <div className="mt-14 text-center">
          <p className="text-lg text-text-light">
            Envie d&apos;échanger ? Je serais ravie de vous lire.
          </p>
          <Link href="/contact" className="mt-6 inline-block">
            <Button size="lg">Me contacter</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
