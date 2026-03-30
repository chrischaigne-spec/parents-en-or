import { siteConfig } from "@/lib/constants";
import { ExternalLink, Headphones } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcasts",
  description:
    "Écoutez le podcast Parents en Or : des épisodes sur la parentalité bienveillante, le développement de l'enfant et le quotidien de parent, disponibles sur Spotify, Apple Podcasts et YouTube.",
};

const platforms = [
  {
    name: "Spotify",
    description: "Tous les épisodes disponibles gratuitement",
    url: siteConfig.links.spotify,
    color: "bg-[#1DB954]/10 text-[#1DB954]",
  },
  {
    name: "Apple Podcasts",
    description: "Abonnez-vous sur votre iPhone ou Mac",
    url: siteConfig.links.apple,
    color: "bg-[#9933CC]/10 text-[#9933CC]",
  },
  {
    name: "YouTube",
    description: "Épisodes en vidéo et en audio",
    url: siteConfig.links.youtube,
    color: "bg-[#FF0000]/10 text-[#FF0000]",
  },
  {
    name: "Soundcloud",
    description: "Écoute directe sans inscription",
    url: siteConfig.links.soundcloud,
    color: "bg-[#FF5500]/10 text-[#FF5500]",
  },
] as const;

export default function PodcastsPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        {/* ─── En-tête ─── */}
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sage/10 px-4 py-2 text-sm font-medium text-sage">
            <Headphones className="h-4 w-4" aria-hidden="true" />
            Podcast
          </div>
          <h1 className="font-heading text-4xl font-bold text-text md:text-5xl">
            Le podcast
            <br />
            <span className="text-sage">{siteConfig.name}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-light">
            Des conversations sincères sur la parentalité, le développement de
            l&apos;enfant et le quotidien de parent. Sandra explore les
            recherches scientifiques et partage des réflexions concrètes pour
            accompagner vos enfants avec bienveillance.
          </p>
        </div>

        {/* ─── Plateformes d'écoute ─── */}
        <div className="mt-14 space-y-4">
          <h2 className="text-center font-heading text-xl font-bold text-text">
            Où m&apos;écouter
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${platform.color}`}
                >
                  <Headphones className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <p className="font-heading font-bold text-text">
                    {platform.name}
                  </p>
                  <p className="text-sm text-text-light">
                    {platform.description}
                  </p>
                </div>
                <ExternalLink
                  className="h-4 w-4 text-text-light/50 transition-colors group-hover:text-sage"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>

        {/* ─── Note ─── */}
        <div className="mt-14 rounded-2xl bg-sage/5 p-8 text-center">
          <p className="text-text-light">
            De nouveaux épisodes sont publiés régulièrement. Abonnez-vous sur
            votre plateforme préférée pour ne rien manquer !
          </p>
        </div>
      </div>
    </section>
  );
}
