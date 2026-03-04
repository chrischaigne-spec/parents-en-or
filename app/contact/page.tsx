import { ContactForm } from "@/components/modules/contact-form";
import { Mail, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Une question, une suggestion ou simplement envie d'échanger ? Écrivez-moi, je serai ravie de vous lire.",
};

export default function ContactPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-2xl px-4">
        {/* En-tête */}
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sage/10 px-4 py-2 text-sm font-medium text-sage">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Parlons ensemble
          </div>
          <h1 className="font-heading text-4xl font-bold text-text md:text-5xl">
            Me contacter
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-lg text-text-light">
            Une question, une suggestion ou simplement envie
            d&apos;échanger ? Je serai ravie de vous lire.
          </p>
        </div>

        {/* Info email */}
        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-text-light">
          <Mail className="h-4 w-4" aria-hidden="true" />
          <span>contact@parents-en-or.fr</span>
        </div>

        {/* Formulaire */}
        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
