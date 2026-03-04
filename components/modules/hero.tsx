import { Button } from "@/components/ui/button";
import { Microscope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-12 md:py-20">
      {/* Formes décoratives d'arrière-plan */}
      <div
        className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-rose-light/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-sage-light/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-8 md:grid-cols-[2fr_3fr] md:gap-0">
          {/* Colonne texte */}
          <div className="relative z-10">
            {/* Badge différenciant */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-sage/10 px-4 py-2 text-sm font-medium text-sage-dark">
              <Microscope className="h-4 w-4" aria-hidden="true" />
              Parentalité fondée sur la science
            </div>

            {/* H1 — optimisé SEO */}
            <h1 className="font-heading text-3xl font-bold leading-tight text-text sm:text-4xl lg:text-5xl">
              Éduquer autrement,{" "}
              <span className="text-sage">guidé par la science</span> et le
              respect de l&apos;enfant
            </h1>

            {/* Sous-titre */}
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-text-light">
              Je suis Sandra, maman et passionnée de développement de
              l&apos;enfant. Ici, je partage des outils concrets, sourcés
              scientifiquement, pour vous aider à accompagner vos enfants avec
              confiance — sans culpabilité.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/blog">
                <Button size="lg">Lire les articles</Button>
              </Link>
              <Link href="/a-propos">
                <Button variant="outline" size="lg">
                  Découvrir mon parcours
                </Button>
              </Link>
            </div>
          </div>

          {/* Colonne illustration */}
          <div className="flex justify-center md:-mr-12 md:justify-end lg:-mr-20">
            <Image
              src="/images/hero-famille.webp"
              alt="Illustration aquarelle d'une famille de dos — une maman brune, un papa et leurs deux garçons — marchant main dans la main sur un chemin de campagne fleuri au coucher du soleil"
              width={1200}
              height={670}
              sizes="(max-width: 768px) 100vw, 60vw"
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
