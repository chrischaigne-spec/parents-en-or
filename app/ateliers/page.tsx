import { Hammer } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ateliers",
  description:
    "Les ateliers Parents en Or arrivent bientôt. Des formations parentalité basées sur la science, conçues par Sandra.",
};

export default function AteliersPage() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto max-w-2xl px-4 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage/10">
          <Hammer className="h-8 w-8 text-sage" aria-hidden="true" />
        </div>

        <h1 className="mt-8 font-heading text-4xl font-bold text-text md:text-5xl">
          Les ateliers arrivent bientôt
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-text-light">
          Je prépare de nouveaux ateliers parentalité basés sur la science.
          En attendant, retrouvez-moi sur Instagram pour ne rien manquer.
        </p>

        <a
          href="https://instagram.com/parents.en.or"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-sage px-6 py-3 font-medium text-white transition-colors hover:bg-sage/90"
        >
          Suivez-moi sur Instagram
        </a>
      </div>
    </section>
  );
}
