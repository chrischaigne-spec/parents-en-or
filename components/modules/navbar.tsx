"use client";

import { navLinks, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Fermer le menu mobile lors d'un changement de route
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Empêcher le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-sage/10 bg-cream/80 backdrop-blur-md">
        <nav
          className="container mx-auto flex max-w-5xl items-center justify-between px-4 py-4"
          aria-label="Navigation principale"
        >
          {/* Logo / Nom du site */}
          <Link
            href="/"
            className="font-heading text-xl font-bold text-sage md:text-2xl"
          >
            {siteConfig.name}
          </Link>

          {/* Navigation desktop */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-sage",
                    pathname === link.href
                      ? "text-sage"
                      : "text-text-light"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Bouton menu mobile */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-text-light hover:text-sage md:hidden"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </header>

      {/* Menu mobile — panneau plein écran (hors du header pour éviter le contexte backdrop-blur) */}
      {isOpen && (
        <div className="fixed inset-x-0 top-[65px] bottom-0 z-50 bg-[#FCF9F5] md:hidden">
          <ul className="flex flex-col items-center gap-6 pt-12">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "font-heading text-2xl font-semibold transition-colors",
                    pathname === link.href
                      ? "text-sage"
                      : "text-text-light hover:text-sage"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
