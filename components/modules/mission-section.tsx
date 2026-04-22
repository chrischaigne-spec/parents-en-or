import { BookOpen, FlaskConical, Heart, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: FlaskConical,
    title: "Fondé sur la science",
    description:
      "Chaque conseil est sourcé. Je m'appuie sur la recherche en neurosciences, en psychologie du développement et en anthropologie.",
  },
  {
    icon: Heart,
    title: "Le respect avant tout",
    description:
      "L'enfant n'est pas une espèce différente. Il a le même cerveau que nous, simplement immature. Il mérite la même considération.",
  },
  {
    icon: ShieldCheck,
    title: "Esprit critique",
    description:
      "Je remets en question les croyances populaires sur l'éducation. Pas de dogme ici, juste de l'honnêteté et l'art du doute.",
  },
  {
    icon: BookOpen,
    title: "Des outils concrets",
    description:
      "Articles et ateliers : des ressources accessibles pour transformer votre quotidien de parent, pas à pas.",
  },
];

export function MissionSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-5xl px-4">
        {/* En-tête de section */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-text md:text-4xl">
            Pourquoi Parents en Or ?
          </h2>
          <p className="mt-4 text-lg text-text-light">
            Parce qu&apos;une parentalité éclairée change la vie — la vôtre
            et celle de vos enfants. Voici ce qui guide chaque contenu que je
            crée.
          </p>
        </div>

        {/* Grille des 4 piliers */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex gap-5 rounded-2xl bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-sage/10">
                <pillar.icon
                  className="h-6 w-6 text-sage"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-text">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
