"use client";

import { navLinks, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(73);

  // Fermer le menu mobile lors d'un changement de route
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Mesurer la hauteur du header pour positionner le menu mobile
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  // Empêcher le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Focus trap + fermeture avec Escape
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen || !menuRef.current) return;

      if (e.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (e.key === "Tab") {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          "a, button"
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [isOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      <header ref={headerRef} className="sticky top-0 z-50 border-b border-sage/10 bg-cream/80 backdrop-blur-md">
        <nav
          className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-4"
          aria-label="Navigation principale"
        >
          {/* Logo / Nom du site */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3"
          >
            <Image
              src="/images/logo-icon.webp"
              alt=""
              width={115}
              height={120}
              className="h-10 w-auto sm:h-12 md:h-16"
              aria-hidden="true"
              priority
            />
            <span className="font-heading text-xl font-bold text-sage sm:text-2xl md:text-3xl">
              {siteConfig.name}
            </span>
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
            ref={toggleRef}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-text-light hover:text-sage md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
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
        <div
          ref={menuRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
          className="fixed inset-x-0 bottom-0 z-50 bg-[#FCF9F5] md:hidden"
          style={{ top: headerHeight }}
        >
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
