import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

/**
 * Section "Qui est Sandra ?" en aperçu sur la page d'accueil.
 * Storytelling court pour créer le lien humain avant le reste du contenu.
 */
export function AboutPreview() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="rounded-3xl bg-cream p-8 md:p-12">
          <div className="mx-auto max-w-2xl text-center">
            {/* Petite accroche */}
            <p className="text-sm font-semibold uppercase tracking-wider text-sage">
              Qui suis-je ?
            </p>

            <h2 className="mt-4 font-heading text-2xl font-bold text-text md:text-3xl">
              &laquo; L&apos;arrivée de mon premier enfant a tout
              changé &raquo;
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              En 2012, je suis devenue maman. L&apos;épuisement, le doute, les
              injonctions contradictoires... J&apos;ai traversé tout ça. Puis
              j&apos;ai décidé de chercher des réponses dans la science plutôt
              que dans les croyances populaires. Aujourd&apos;hui, maman de
              deux garçons et formée en développement de l&apos;enfant, je
              partage tout ce que j&apos;ai appris — pour que vous n&apos;ayez
              pas à chercher seul(e).
            </p>

            <Link href="/a-propos" className="mt-8 inline-block">
              <Button variant="outline" size="sm">
                Lire mon histoire
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
