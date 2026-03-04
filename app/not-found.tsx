import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page introuvable",
};

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-20">
      <div className="text-center">
        <p className="text-6xl font-bold text-sage/30">404</p>
        <h1 className="mt-4 font-heading text-3xl font-bold text-text">
          Page introuvable
        </h1>
        <p className="mt-3 text-text-light">
          Oups, cette page semble avoir pris son envol.
        </p>
        <Link href="/" className="mt-8 inline-block">
          <Button>
            <Home className="mr-2 h-4 w-4" aria-hidden="true" />
            Retour à l&apos;accueil
          </Button>
        </Link>
      </div>
    </section>
  );
}
