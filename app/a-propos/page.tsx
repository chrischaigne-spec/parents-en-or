import { PersonJsonLd } from "@/components/modules/json-ld";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Heart,
  Instagram,
  Pin,
  Sparkles,
  Youtube,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Qui suis-je — Sandra, maman et scientifique",
  description:
    "Sandra, maman de deux garçons en IEF, scientifique de formation (immunologie, microbiologie). Elle décrypte la parentalité à travers la science et l'esprit critique depuis 2019.",
  openGraph: {
    title: "Qui suis-je — Sandra, fondatrice de Parents en Or",
    description:
      "Sandra, maman de deux garçons en IEF, scientifique de formation. Elle décrypte la parentalité à travers la science et l'esprit critique depuis 2019.",
    images: [
      {
        url: "/images/sandra-portrait.webp",
        width: 800,
        height: 1000,
        alt: "Sandra, fondatrice de Parents en Or",
      },
    ],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qui suis-je — Sandra, fondatrice de Parents en Or",
    description:
      "Maman de deux garçons, scientifique de formation. Sandra décrypte la parentalité à travers la science et l'esprit critique.",
    images: ["/images/sandra-portrait.webp"],
  },
};

export default function AboutPage() {
  return (
    <section className="py-16 md:py-24">
      <PersonJsonLd />
      <div className="container mx-auto max-w-3xl px-4">
        {/* ─── En-tête avec portrait ─── */}
        <div className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-rose-light/30 px-4 py-2 text-sm font-medium text-rose-dark">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Qui suis-je ?
          </div>

          <div className="mx-auto mb-8 h-64 w-64 overflow-hidden rounded-full border-4 border-sage/20 shadow-lg md:h-80 md:w-80">
            <Image
              src="/images/sandra-portrait.webp"
              alt="Sandra, fondatrice de Parents en Or"
              width={320}
              height={400}
              className="h-full w-full object-cover object-top"
              priority
            />
          </div>

          <h1 className="font-heading text-3xl font-bold text-text md:text-4xl">
            Je suis Sandra.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-light">
            Maman de deux garçons (2012 et 2016). Scientifique de formation.
            On pratique l&apos;Instruction En Famille et on vit à la campagne.
          </p>
        </div>

        {/* ─── Storytelling ─── */}
        <div className="mt-14 space-y-8 text-lg leading-relaxed text-text-light">
          {/* Bloc 1 — 2012 */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/10">
                <Heart className="h-5 w-5 text-sage" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-xl font-bold text-text">
                2012 : la révolution
              </h2>
            </div>
            <p>
              En donnant la vie pour la première fois, une révolution intérieure
              s&apos;est mise en place. Mon fils a tout fait voler. Son arrivée a
              complètement chamboulé ma vie et mes pensées.
            </p>
            <p className="mt-4">
              En plus de l&apos;épuisement maternel, cette longue période de
              doutes, de peurs et de tourments a été comme une purge. J&apos;ai
              balayé mes croyances, mes idées reçues, j&apos;ai remis en cause
              tout ce que je croyais. Le normal est devenu anormal, les
              certitudes sont devenues incertaines.
            </p>
            <p className="mt-4">
              J&apos;ai transformé mes pensées jusqu&apos;à me sentir enfin en
              accord avec elles, au point d&apos;être aujourd&apos;hui certaine
              de mes choix.
            </p>
          </div>

          {/* Bloc 2 — 2016 */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose/10">
                <Sparkles className="h-5 w-5 text-rose" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-xl font-bold text-text">
                2016 : la mort en pleine face
              </h2>
            </div>
            <p>
              Cette année-là fut terriblement éprouvante. J&apos;ai donné la vie
              à mon deuxième fils pendant que mon père, lui, perdait la sienne.
            </p>
            <p className="mt-4">
              Voir la mort arriver, la voir prendre possession d&apos;un corps,
              ça vous marque et ça vous fait ouvrir grand les yeux. J&apos;ai
              pris conscience, très profondément, de ma mortalité. La vie est
              fragile et courte. Le corps humain n&apos;est qu&apos;une enveloppe
              éphémère. On le sait tout ça, mais il est rare de le sentir au fond
              de soi, très consciemment.
            </p>
            <p className="mt-4">
              Tout ça m&apos;a fait aller à l&apos;essentiel. Les véritables
              besoins qui nous animent, les aspirations profondes de
              l&apos;humain. Jusqu&apos;à me rendre compte de la merveilleuse
              magie que représente le fait d&apos;être vivant.
            </p>
          </div>

          {/* Bloc 3 — Ce que je fais */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/10">
                <BookOpen className="h-5 w-5 text-sage" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-xl font-bold text-text">
                Ce que je fais ici
              </h2>
            </div>
            <p>
              J&apos;aide les parents à reprendre confiance dans leur
              parentalité et à aider leurs enfants à développer leur potentiel,
              à avoir confiance en eux et à se sentir bien dans leurs pompes.
            </p>
            <p className="mt-4">
              Je suis passionnée par l&apos;Humain et le développement de
              l&apos;enfant. J&apos;ai tendance à tout remettre en question.
              J&apos;utilise l&apos;art du doute perpétuellement, car il est
              impossible de détenir LA vérité dans sa forme absolue.
            </p>
            <p className="mt-4">
              Je mets à votre disposition mes connaissances à travers du contenu
              gratuit ({" "}
              <Link href="/blog" className="font-medium text-sage underline underline-offset-2 hover:text-sage/80">
                articles
              </Link>
              ) et payant (
              <Link href="/ateliers" className="font-medium text-sage underline underline-offset-2 hover:text-sage/80">
                ateliers
              </Link>
              , soutien personnalisé).
            </p>
          </div>

          {/* Bloc 4 — Compétences & formations */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose/10">
                <GraduationCap
                  className="h-5 w-5 text-rose"
                  aria-hidden="true"
                />
              </div>
              <h2 className="font-heading text-xl font-bold text-text">
                Mon parcours
              </h2>
            </div>
            <p>
              De formation initiale scientifique, j&apos;ai parcouru différents
              domaines : immunologie, microbiologie, métrologie, assurance
              qualité. Toutes ces expériences m&apos;ont forgé une rigueur et
              m&apos;ont appris la démarche scientifique et l&apos;usage de
              l&apos;esprit critique. Ces compétences sont, pour moi,
              fondamentales dans tous les domaines de notre quotidien dont celui
              de notre parentalité.
            </p>
            <p className="mt-4">
              Depuis maintenant plusieurs années, je me suis tournée, doucement
              puis sûrement, vers une parentalité sans domination sur mes
              enfants. Je ne pouvais pas considérer les êtres que j&apos;aime le
              plus au monde comme une sous-espèce qui doit obéir ou que je
              pouvais manipuler comme des pantins.
            </p>

            <h3 className="mt-6 font-heading text-lg font-semibold text-text">
              Mes formations
            </h3>
            <ul className="mt-3 space-y-2 text-base">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-sage" />
                <span>
                  <strong>Esprit critique et discernement</strong> — Atelier
                  Médiation et Critique
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-rose" />
                <span>
                  <strong>Initiation à l&apos;anthropologie</strong> — Les
                  Origines de l&apos;Homme, Muséum national d&apos;Histoire
                  naturelle
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-sage" />
                <span>
                  <strong>Développement de l&apos;enfant</strong> — Institut
                  d&apos;Accompagnement Respectueux de l&apos;Enfant
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-rose" />
                <span>
                  <strong>
                    Développement psychologique de l&apos;enfant
                  </strong>{" "}
                  — Université de Genève
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-sage" />
                <span>
                  <strong>Burn-out parental</strong> — Moïra Mikolajczak et
                  Isabelle Roskam
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-rose" />
                <span>
                  <strong>Lecture critique de méta-analyses</strong> — Mathias
                  Soulhol
                </span>
              </li>
            </ul>
            <p className="mt-4 text-base italic text-text-light/80">
              Mais plus important encore : je me forme constamment et remets
              toujours en question mes connaissances pour les approfondir et les
              enrichir.
            </p>
          </div>

          {/* Bloc 5 — Ce que je crois */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/10">
                <Sparkles className="h-5 w-5 text-sage" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-xl font-bold text-text">
                Ce que je crois profondément
              </h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-sage" />
                <span>
                  Les enfants ne sont pas une espèce différente de nous.
                  L&apos;enfance n&apos;est qu&apos;une étape dans le
                  développement de l&apos;humain.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-rose" />
                <span>
                  Ils ont le même cerveau que nous, simplement immature, et les
                  mêmes besoins. Ils portent des handicaps qui ne sont que
                  temporaires si on prend soin d&apos;eux.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-sage" />
                <span>
                  La violence ça fait mal, physiquement et psychologiquement. Et
                  elle revêt parfois des masques de douceur, car elle
                  n&apos;existe qu&apos;à travers la perception de celui qui la
                  vit.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-rose" />
                <span>
                  L&apos;enfant n&apos;a aucune raison, ni biologique, ni
                  sociale, d&apos;être sous-considéré dans sa famille. C&apos;est
                  un membre aussi important qu&apos;un autre, avec une
                  vulnérabilité qui fait de lui un membre qu&apos;il faut
                  protéger encore plus que les autres.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-sage" />
                <span>
                  On porte tous un paquet de croyances qu&apos;on ne remet
                  parfois jamais en question. On met alors de l&apos;importance
                  parfois démesurée sur des petites choses du quotidien. Mon
                  boulot, c&apos;est de briser ces croyances et de faire du
                  débunkage d&apos;idées reçues sur les enfants et
                  l&apos;éducation.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-rose" />
                <span>
                  Ce que veulent la majorité des parents se résume à deux choses
                  simples : que leurs enfants aillent bien et qu&apos;ils aient
                  de belles relations avec eux. Le reste, ce n&apos;est que de la
                  broderie.
                </span>
              </li>
            </ul>
          </div>

          {/* Bloc 6 — Marque */}
          <div className="rounded-2xl bg-cream p-8 text-center">
            <p className="font-heading text-xl font-bold text-text">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-base text-text-light">
              Marque déposée depuis 2019
            </p>

            {/* Réseaux */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-text-light shadow-sm transition-colors hover:text-sage"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                Instagram
              </a>
              <a
                href={siteConfig.links.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-text-light shadow-sm transition-colors hover:text-sage"
              >
                <Pin className="h-4 w-4" aria-hidden="true" />
                Pinterest
              </a>
              <a
                href={siteConfig.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-text-light shadow-sm transition-colors hover:text-sage"
              >
                <Youtube className="h-4 w-4" aria-hidden="true" />
                YouTube
              </a>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-text-light shadow-sm transition-colors hover:text-sage"
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                Articles
              </Link>
            </div>
          </div>
        </div>

        {/* ─── Articles suggérés (maillage interne) ─── */}
        <div className="mt-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="font-heading text-xl font-bold text-text">
            Pour aller plus loin
          </h2>
          <p className="mt-2 text-text-light">
            Des articles où je décortique la science derrière nos croyances
            de parents.
          </p>
          <ul className="mt-5 space-y-3">
            {[
              {
                href: "/blog/feliciter-ses-enfants-que-dit-la-science",
                label: "Féliciter ses enfants : que dit la science ?",
              },
              {
                href: "/blog/cadre-limites-epuisement-parental",
                label: "Cadre et limites : quand ça mène à l'épuisement",
              },
              {
                href: "/blog/cacher-stress-enfants",
                label: "Faut-il cacher notre stress à nos enfants ?",
              },
            ].map((article) => (
              <li key={article.href}>
                <Link
                  href={article.href}
                  className="group flex items-center gap-3 text-text-light transition-colors hover:text-sage"
                >
                  <ArrowRight
                    className="h-4 w-4 flex-shrink-0 text-sage transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                  <span className="underline-offset-2 group-hover:underline">
                    {article.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/blog"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-sage hover:text-sage/80"
          >
            Voir tous les articles
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        {/* ─── CTA ─── */}
        <div className="mt-14 text-center">
          <p className="text-lg italic text-text-light">
            &laquo;&nbsp;Allons à l&apos;essentiel. Qu&apos;est-ce qui compte
            vraiment pour vous&nbsp;?&nbsp;&raquo;
          </p>
          <a
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block"
          >
            <Button size="lg">
              <Instagram className="mr-2 h-4 w-4" aria-hidden="true" />
              Me suivre sur Instagram
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
