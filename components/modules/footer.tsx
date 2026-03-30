import { navLinks, siteConfig } from "@/lib/constants";
import { Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-sage/10 bg-white">
      <div className="container mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Colonne 1 — Marque */}
          <div>
            <Link
              href="/"
              className="font-heading text-xl font-bold text-sage"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-light">
              {siteConfig.author.description}
            </p>
          </div>

          {/* Colonne 2 — Navigation */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-text">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-light transition-colors hover:text-sage"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Retrouvez Sandra */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-text">
              Retrouvez-moi
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-light transition-colors hover:text-sage"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-light transition-colors hover:text-sage"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-light transition-colors hover:text-sage"
                >
                  Pinterest
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-light transition-colors hover:text-sage"
                >
                  Podcast (Spotify)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bas de page */}
        <div className="mt-10 flex flex-col items-center gap-2 border-t border-sage/10 pt-6 text-xs text-text-light md:flex-row md:justify-between">
          <p>
            &copy; 2019–{currentYear} {siteConfig.name} — Marque
            d&eacute;pos&eacute;e. Tous droits r&eacute;serv&eacute;s.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/mentions-legales"
              className="transition-colors hover:text-sage"
            >
              Mentions légales
            </Link>
            <p className="inline-flex items-center gap-1">
              Fait avec{" "}
              <Heart
                className="h-3.5 w-3.5 fill-rose text-rose"
                aria-hidden="true"
              />{" "}
              par Sandra
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
