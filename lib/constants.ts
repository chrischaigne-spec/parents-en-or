/** Configuration globale du site */
export const siteConfig = {
  name: "Parents en Or",
  description:
    "Parentalité bienveillante fondée sur la science. Sandra, maman et passionnée de développement de l'enfant, partage des outils concrets pour accompagner vos enfants avec respect et confiance.",
  url: "https://parents-en-or.fr",
  author: {
    name: "Sandra",
    fullTitle: "Sandra — Parents en Or",
    description:
      "Maman de deux garçons, formation scientifique et passionnée par le développement de l'enfant. Je partage des outils fondés sur la recherche pour une parentalité respectueuse et éclairée.",
  },
  links: {
    instagram: "https://instagram.com/parents.en.or",
    pinterest: "https://pinterest.com/parentsenor0310",
    youtube:
      "https://www.youtube.com/channel/UC7qajWE_TDWmz0PuFANp7fg",
    spotify: "https://open.spotify.com/show/parentsenor",
    apple: "https://podcasts.apple.com/podcast/parents-en-or",
    soundcloud: "https://soundcloud.com/parentsenor",
  },
} as const;

/** Navigation principale */
export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/blog", label: "Articles" },
  { href: "/ateliers", label: "Ateliers" },
  { href: "/a-propos", label: "Qui suis-je" },
] as const;
