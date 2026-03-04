"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

/* ─── Schéma de validation Zod ─── */
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères.")
    .max(50, "Le nom ne peut pas dépasser 50 caractères."),
  email: z.string().email("Veuillez entrer une adresse email valide."),
  subject: z
    .string()
    .min(3, "Le sujet doit contenir au moins 3 caractères.")
    .max(100, "Le sujet ne peut pas dépasser 100 caractères."),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères.")
    .max(2000, "Le message ne peut pas dépasser 2000 caractères."),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  /* Simulation d'envoi — à connecter à un backend ou service email */
  async function onSubmit(data: ContactFormData) {
    // Simule un délai réseau
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Formulaire soumis :", data);
    setIsSubmitted(true);
  }

  /* État de succès */
  if (isSubmitted) {
    return (
      <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage/10">
          <CheckCircle className="h-8 w-8 text-sage" aria-hidden="true" />
        </div>
        <h3 className="mt-6 font-heading text-2xl font-bold text-text">
          Message envoyé !
        </h3>
        <p className="mt-3 text-text-light">
          Merci pour votre message. Je vous répondrai dans les plus brefs
          délais.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl bg-white p-8 shadow-sm md:p-10"
      noValidate
    >
      <div className="space-y-6">
        {/* Nom */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-text"
          >
            Votre nom
          </label>
          <Input
            id="name"
            placeholder="Marie Dupont"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-sm text-rose-dark">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-text"
          >
            Votre email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="marie@exemple.fr"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-sm text-rose-dark">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Sujet */}
        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-medium text-text"
          >
            Sujet
          </label>
          <Input
            id="subject"
            placeholder="Question sur un article..."
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            {...register("subject")}
          />
          {errors.subject && (
            <p id="subject-error" className="mt-1.5 text-sm text-rose-dark">
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-text"
          >
            Votre message
          </label>
          <Textarea
            id="message"
            rows={5}
            placeholder="Écrivez votre message ici..."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message")}
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 text-sm text-rose-dark">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Bouton d'envoi */}
        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
              Envoi en cours...
            </>
          ) : (
            "Envoyer le message"
          )}
        </Button>
      </div>
    </form>
  );
}
