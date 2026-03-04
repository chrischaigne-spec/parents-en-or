import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";
import { Headphones } from "lucide-react";

/**
 * Bannière CTA pour le podcast — section d'accroche sur la homepage.
 */
export function PodcastCta() {
  return (
    <section className="bg-sage py-16 md:py-20">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
          <Headphones className="h-7 w-7 text-white" aria-hidden="true" />
        </div>

        <h2 className="mt-6 font-heading text-2xl font-bold text-white md:text-3xl">
          Le podcast Parents en Or
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sage-light/90">
          Parentalité respectueuse, esprit critique et Homo sapiens — je vous
          parle au creux de l&apos;oreille, un épisode à la fois.
        </p>

        {/* Liens plateformes */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={siteConfig.links.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="sm"
              className="border-white/30 text-white hover:bg-white hover:text-sage"
            >
              Spotify
            </Button>
          </a>
          <a
            href={siteConfig.links.apple}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="sm"
              className="border-white/30 text-white hover:bg-white hover:text-sage"
            >
              Apple Podcasts
            </Button>
          </a>
          <a
            href={siteConfig.links.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="sm"
              className="border-white/30 text-white hover:bg-white hover:text-sage"
            >
              YouTube
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
