import { siteConfig } from "@/lib/constants";

/** Données structurées JSON-LD pour le SEO (Schema.org) */

export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sandra",
    url: `${siteConfig.url}/a-propos`,
    image: `${siteConfig.url}/images/sandra-portrait.webp`,
    description: siteConfig.author.description,
    jobTitle: "Créatrice de contenu en parentalité",
    knowsAbout: [
      "Développement de l'enfant",
      "Parentalité bienveillante",
      "Esprit critique",
      "Immunologie",
      "Microbiologie",
    ],
    sameAs: [
      siteConfig.links.instagram,
      siteConfig.links.pinterest,
      siteConfig.links.youtube,
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/a-propos`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Person",
      name: siteConfig.author.name,
      description: siteConfig.author.description,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface ArticleJsonLdProps {
  title: string;
  description: string;
  publishedAt: string;
  url: string;
  image?: string;
}

export function ArticleJsonLd({
  title,
  description,
  publishedAt,
  url,
  image,
}: ArticleJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: publishedAt,
    url,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    ...(image && {
      image: {
        "@type": "ImageObject",
        url: `${siteConfig.url}${image}`,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
