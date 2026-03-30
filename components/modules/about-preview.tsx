import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
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
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            {/* Portrait */}
            <div className="h-40 w-40 flex-shrink-0 overflow-hidden rounded-full border-4 border-sage/20 shadow-md md:h-48 md:w-48">
              <Image
                src="/images/sandra-portrait.webp"
                alt="Sandra, fondatrice de Parents en Or"
                width={192}
                height={240}
                className="h-full w-full object-cover object-top"
              />
            </div>

            {/* Texte */}
            <div className="text-center md:text-left">
              <p className="text-sm font-semibold uppercase tracking-wider text-sage">
                Qui suis-je ?
              </p>

              <h2 className="mt-3 font-heading text-2xl font-bold text-text md:text-3xl">
                Je suis Sandra.
              </h2>

              <p className="mt-4 leading-relaxed text-text-light">
                Maman de deux garçons, scientifique de formation. En 2012,
                l&apos;arrivée de mon premier fils a tout fait voler. J&apos;ai
                balayé mes croyances, remis en cause tout ce que je pensais
                savoir sur les enfants, et j&apos;ai cherché des réponses dans
                la science plutôt que dans les injonctions des autres.
              </p>

              <Link href="/a-propos" className="mt-6 inline-block">
                <Button variant="outline" size="sm">
                  Lire mon histoire
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
