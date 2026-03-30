import { siteConfig } from "@/lib/constants";
import { Scale, Shield, Globe, FileText, Lock, Gavel } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site ${siteConfig.name} — informations sur l'éditeur, l'hébergement, la propriété intellectuelle et la protection des données.`,
};

export default function MentionsLegalesPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        {/* ─── En-tête ─── */}
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold text-text md:text-5xl">
            Mentions légales
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-light">
            Informations légales relatives au site {siteConfig.name}.
          </p>
        </div>

        {/* ─── Sections ─── */}
        <div className="mt-14 space-y-8 text-lg leading-relaxed text-text-light">
          {/* Éditeur */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/10">
                <FileText className="h-5 w-5 text-sage" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-xl font-bold text-text">
                Éditeur du site
              </h2>
            </div>
            <p>
              Le site <strong>{siteConfig.url}</strong> est édité par :
            </p>
            <ul className="mt-4 space-y-2 text-base">
              <li>
                <strong>Entreprise :</strong> J&apos;edenerie
              </li>
              <li>
                <strong>SIRET :</strong> 849 238 167
              </li>
              <li>
                <strong>Responsable de publication :</strong> Sandra
              </li>
              <li>
                <strong>Contact :</strong>{" "}
                <a
                  href="mailto:contact@parentsenor.fr"
                  className="text-sage underline underline-offset-2 hover:text-sage-dark"
                >
                  contact@parentsenor.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Marque déposée */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose/10">
                <Shield className="h-5 w-5 text-rose" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-xl font-bold text-text">
                Marque déposée
              </h2>
            </div>
            <p>
              <strong>Parents en Or</strong> est une marque déposée depuis 2019
              auprès de l&apos;Institut National de la Propriété Industrielle
              (INPI), sous le numéro d&apos;enregistrement{" "}
              <strong>n&deg;&nbsp;19&nbsp;4&nbsp;588</strong>.
            </p>
            <p className="mt-3">
              Toute utilisation non autorisée de cette marque est interdite et
              pourra faire l&apos;objet de poursuites.
            </p>
          </div>

          {/* Hébergement */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/10">
                <Globe className="h-5 w-5 text-sage" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-xl font-bold text-text">
                Hébergement
              </h2>
            </div>
            <ul className="space-y-2 text-base">
              <li>
                <strong>Hébergeur :</strong> Vercel Inc.
              </li>
              <li>
                <strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA
                91723, États-Unis
              </li>
              <li>
                <strong>Site :</strong>{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage underline underline-offset-2 hover:text-sage-dark"
                >
                  vercel.com
                </a>
              </li>
            </ul>
          </div>

          {/* Propriété intellectuelle */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose/10">
                <Scale className="h-5 w-5 text-rose" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-xl font-bold text-text">
                Propriété intellectuelle
              </h2>
            </div>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes,
              illustrations, photographies, vidéos, logos, marques) sont
              protégés par le droit d&apos;auteur et le droit de la propriété
              intellectuelle.
            </p>
            <p className="mt-3">
              Toute reproduction, représentation, modification ou adaptation,
              totale ou partielle, de tout ou partie du site ou de son contenu,
              par quelque procédé que ce soit, sans l&apos;autorisation
              préalable et écrite de l&apos;éditeur, est interdite et constitue
              une contrefaçon sanctionnée par les articles L.335-2 et suivants
              du Code de la propriété intellectuelle.
            </p>
          </div>

          {/* Protection des données */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/10">
                <Lock className="h-5 w-5 text-sage" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-xl font-bold text-text">
                Protection des données personnelles
              </h2>
            </div>
            <p>
              Conformément au Règlement Général sur la Protection des Données
              (RGPD) et à la loi Informatique et Libertés, vous disposez
              d&apos;un droit d&apos;accès, de rectification, de suppression et
              d&apos;opposition concernant vos données personnelles.
            </p>
            <p className="mt-3">
              Ce site ne collecte aucune donnée personnelle en dehors de celles
              que vous transmettez volontairement via le formulaire de contact.
              Aucun cookie de traçage publicitaire n&apos;est utilisé.
            </p>
            <p className="mt-3">
              Pour exercer vos droits ou pour toute question relative à vos
              données, contactez-nous à{" "}
              <a
                href="mailto:contact@parentsenor.fr"
                className="text-sage underline underline-offset-2 hover:text-sage-dark"
              >
                contact@parentsenor.fr
              </a>
              .
            </p>
          </div>

          {/* Droit applicable */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose/10">
                <Gavel className="h-5 w-5 text-rose" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-xl font-bold text-text">
                Droit applicable
              </h2>
            </div>
            <p>
              Les présentes mentions légales sont soumises au droit français.
              Tout litige relatif à l&apos;utilisation du site{" "}
              <strong>{siteConfig.name}</strong> sera soumis à la compétence
              exclusive des tribunaux français.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
