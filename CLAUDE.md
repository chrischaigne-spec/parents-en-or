# CLAUDE.md — Parents en Or

## Projet

Site éducatif sur la parentalité bienveillante et scientifique, créé par Sandra. Blog d'articles, page à propos, ateliers (à venir), mentions légales.

## Stack technique

- **Framework** : Next.js 16 (App Router) + React 19 + TypeScript 5 (strict)
- **Styling** : Tailwind CSS v4 (`@theme inline` dans `globals.css`) + classes custom pour les articles (`.prose-article`, `.callout`, `.stat-card`, `.timeline-block`, etc.)
- **Polices** : Quicksand (titres) et Inter (corps) — self-hosted via `next/font`
- **Icônes** : Lucide React
- **Formulaires** : React Hook Form + Zod
- **Analytics** : Umami Cloud (website ID: `e53e746e-a734-43ed-952a-e411cf2d4a0d`, script chargé via `next/script` dans `app/layout.tsx`)
- **Déploiement** : Vercel (génération statique, pas de SSR ni d'API routes)

## Structure du projet

```
app/                    # Pages (App Router)
  blog/[slug]/          # Articles dynamiques (generateStaticParams)
  a-propos/             # Page à propos
  ateliers/             # Page ateliers (placeholder)
  mentions-legales/     # Mentions légales
  favicon.ico           # Favicon (P blanc sur fond sage, 48x48)
  icon.png              # App icon (512x512)
  apple-icon.png        # Apple touch icon (180x180)
components/
  ui/                   # Primitives réutilisables (Button, Input, Textarea)
  modules/              # Composants métier (Hero, Navbar, Footer, ArticleCard, etc.)
lib/
  articles.ts           # Données des articles (tableau TypeScript, pas de CMS)
  constants.ts          # Config du site, liens nav, infos auteur, réseaux sociaux
  markdown.ts           # Parser markdown custom (:::summary, :::callout, :::timeline, :::stats, :::compare)
  utils.ts              # cn() (clsx + tailwind-merge)
types/
  index.ts              # Interfaces TypeScript (Article, NavLink)
public/images/          # Images statiques (covers, hero, portrait, logo)
vercel.json             # 40+ redirections depuis l'ancien WordPress
```

## Commandes

- `npm run dev` — serveur de dev
- `npm run build` — build de production
- `npm run start` — serveur de production
- `npm run lint` — ESLint (flat config, Next.js core-web-vitals + TypeScript)

## Conventions

- **Nommage des fichiers** : kebab-case pour les routes (`a-propos/`), PascalCase dans les noms de composants exportés
- **Alias d'import** : `@/*` pointe vers la racine du projet
- **Composants** : React Server Components par défaut ; `"use client"` uniquement si nécessaire (Navbar, formulaires)
- **Articles** : stockés dans `lib/articles.ts` comme tableau d'objets. Le contenu est en markdown custom parsé par `lib/markdown.ts`
- **SEO** : chaque page a `generateMetadata()`. JSON-LD via `components/modules/json-ld.tsx`
- **Images** : formats AVIF + WebP (configuré dans `next.config.ts`), utiliser `next/image`
- **Langue** : le contenu du site est en français, le code (variables, composants) est en anglais

## Syntaxe markdown custom (lib/markdown.ts)

- `:::summary` — bloc "En bref"
- `:::callout[info|warning|quote]` — encadrés stylisés
- `:::timeline` — liste chronologique
- `:::stats` — grille de cartes statistiques
- `:::compare` — tableau mythe vs science

## Charte graphique

### Palette de couleurs

Univers « Naturel & Apaisant » — tons terreux et végétaux, jamais criards.

| Token              | Hex       | Usage                                                    |
|--------------------|-----------|----------------------------------------------------------|
| `cream`            | `#FCF9F5` | Fond de page principal (body), fond menu mobile          |
| `sage`             | `#7D8C7C` | Couleur primaire — boutons, liens actifs, badge catégorie, puces, numérotation |
| `sage-dark`        | `#5F6D5E` | Titres H2/H3, texte bouton hover, TOC active             |
| `sage-light`       | `#A3B1A2` | Bordure H3, fond décoratif, TOC numérotation             |
| `rose`             | `#D9AD9B` | Couleur secondaire — bordure blockquote, accent stat, bouton secondaire |
| `rose-dark`        | `#C4917B` | Callout warning, en-tête compare mythes                  |
| `rose-light`       | `#E8C8BA` | Badges décoratifs, guillemet callout quote                |
| `text`             | `#3A3A3A` | Texte courant                                            |
| `text-light`       | `#6B6B6B` | Texte secondaire, métadonnées, excerpts                  |
| `white`            | `#FFFFFF` | Cartes, footer, stat-cards, timeline-cards                |

Règle : ne jamais utiliser de noir pur (`#000`). Le texte le plus foncé est `text` (`#3A3A3A`).

### Typographie

| Élément                    | Police      | Poids      | Taille       | Détails                                         |
|----------------------------|-------------|------------|--------------|--------------------------------------------------|
| **Titres (h1–h4)**        | Quicksand   | 700–800    | Variable     | `font-heading` dans Tailwind                     |
| **Corps de texte**         | Inter        | 400–600    | 1.05rem      | `font-body`, line-height 1.85                    |
| **H1 page**               | Quicksand   | bold       | 3xl → 5xl    | Responsive (sm:4xl, lg:5xl)                      |
| **H2 article**            | Quicksand   | 800        | 1.85rem      | Numéroté auto (01., 02...) + séparateur en haut  |
| **H3 article**            | Quicksand   | 700        | 1.3rem       | Barre verticale sage-light à gauche (3px)        |
| **Paragraphe article**    | Inter        | 400        | 1.05rem      | line-height: 1.85, couleur `text`                |
| **Boutons**               | Quicksand   | semibold   | sm/base/lg   | Toujours `rounded-full`                          |
| **Labels/badges**         | Quicksand   | 800        | 0.7–0.85rem  | uppercase, letter-spacing large                  |
| **TOC desktop**           | —            | 400–600    | 0.75rem      | Sidebar sticky, numérotation 01., 02...          |
| **Lien article**          | —            | —          | —            | Underline sage-light, offset 3px, épaisseur 1.5px|

Fallback toujours `system-ui, sans-serif`.

### Boutons

4 variantes, toujours `rounded-full` :

| Variante     | Style                                                     |
|--------------|-----------------------------------------------------------|
| `primary`    | Fond sage, texte blanc, hover sage-dark                   |
| `secondary`  | Fond rose, texte blanc, hover rose-dark                   |
| `outline`    | Bordure 2px sage, texte sage, hover fond sage + texte blanc|
| `ghost`      | Texte sage, hover fond sage/10                            |

3 tailles : `sm` (px-4 py-2), `md` (px-6 py-2.5), `lg` (px-8 py-3).

### Images

**Style visuel cohérent : aquarelle douce.** Toutes les images de couverture d'articles et le hero suivent le même style :
- Illustrations à l'aquarelle, aux tons pastel chauds (sage, rose, crème, touches de lumière dorée)
- Scènes familiales ou éducatives, figures humaines stylisées (pas de visages détaillés)
- Atmosphère chaleureuse, douce, rassurante — jamais clinique ni froide
- Format de couverture : ratio 16/10 pour les cards, 16/9 pour la page article
- Format WebP (optimisé via `next/image`, formats AVIF + WebP configurés dans `next.config.ts`)
- Alt text descriptif en français, décrivant la scène illustrée
- Le hero utilise un mask CSS avec fondu transparent en haut et à droite

**Portrait de Sandra** (`sandra-portrait.webp`) : photo réelle, cadré rond avec bordure sage/20.

**Nommage** : kebab-case descriptif dans `public/images/` (ex: `regression-sommeil.webp`, `feliciter-enfants.webp`).

### Logo & identité visuelle

**Illustration** (`logo-icon.webp`) : dessin line-art d'une mère avec ses deux enfants enlacés, style aquarelle en couleurs sage/rose. Utilisée dans :
- **Navbar** : illustration + texte "Parents en Or" en Quicksand bold. Tailles responsive : h-10 (mobile), h-12 (sm), h-16 (md+).
- **Footer** : même illustration + texte + slogan "La parentalité éclairée par la science".

**Slogan** : "La parentalité éclairée par la science" — affiché dans le footer, pas dans la navbar (pour éviter la redondance avec le badge hero).

**Favicon** : lettre "P" blanche arrondie (style Quicksand) sur fond sage (`#7D8C7C`) en carré arrondi. Fichiers auto-détectés par Next.js dans `app/` : `favicon.ico` (48x48), `icon.png` (512x512), `apple-icon.png` (180x180).

### Structure d'un article

**Layout responsive :**
- Mobile : contenu pleine largeur (`max-w-3xl`), TOC collapsible en haut
- Desktop (lg+) : grille `[1fr_240px]` — contenu + sidebar TOC sticky (`top-24`)
- La TOC ne s'affiche que si l'article a plus de 2 sections H2

**Anatomie d'une page article (`app/blog/[slug]/page.tsx`) :**

1. **Bouton retour** — `ghost`, icône ArrowLeft
2. **Badge catégorie** — pill sage/10 + texte sage
3. **Titre H1** — Quicksand bold, 3xl → 5xl responsive
4. **Métadonnées** — auteur (User icon), date (Calendar), temps de lecture (Clock)
5. **Image de couverture** — ratio 16/9, rounded-2xl, priority
6. **TOC mobile** (lg:hidden) — collapsible, numérotée
7. **Corps de l'article** (`.prose-article`) — rendu HTML depuis markdown custom
8. **TOC desktop** (sidebar sticky) — numérotée, suivi de scroll active
9. **CTA retour** — séparateur + bouton "Découvrir d'autres articles"

**Éléments typographiques dans les articles :**

- **H2** : numérotation auto `01.`, `02.`... au-dessus du titre, séparateur `border-top` entre sections (sauf le premier), margin-top 4rem
- **H3** : barre sage-light à gauche (3px), padding-left 1rem
- **Listes à puces** : puces rondes sage (8px, opacity 0.45), pas de `list-style`
- **Listes numérotées** : cercles sage avec numéro blanc, font Quicksand
- **Blockquote** : bordure gauche rose (4px), fond rose/6%, italique, coins arrondis droits
- **Liens** : underline sage-light, offset 3px, hover vers sage plein

**Blocs custom (syntaxe `:::bloc`) :**

- **`:::summary`** — encadré gradient sage/rose, coins arrondis 1.25rem, titre "En bref" avec barre verte, puces avec "✓" sage
- **`:::callout[info]`** — bordure gauche sage, fond sage/8%, label "À retenir" en uppercase
- **`:::callout[warning]`** — bordure gauche rose-dark, fond rose-dark/8%, label "Attention" en uppercase
- **`:::callout[quote]`** — bordure gauche rose, fond rose/7%, guillemet décoratif géant, italique
- **`:::stats`** — grille responsive `auto-fit minmax(220px, 1fr)`, stat-cards blanches avec ombre, chiffre sage 3.25rem, accent rose sous le chiffre, hover lift
- **`:::stat`** — stat-card individuelle (même style)
- **`:::timeline`** — frise verticale avec trait gradient sage→rose, pastilles sage, dates en pill sage, cartes blanches avec ombre
- **`:::compare`** — grille 2 colonnes (1 col sur mobile), en-têtes colorés (rose-dark pour mythes, sage-dark pour science), alternance de fond sur les lignes

**Card article (grille blog) :**
- Carte blanche `rounded-2xl`, ombre légère, hover ombre plus forte
- Image cover 16/10 avec badge catégorie en haut à gauche
- Titre Quicksand bold, hover → couleur sage
- Excerpt 2 lignes max (`line-clamp-2`)
- Métadonnées : date + temps de lecture avec icônes Lucide
- Hover image : zoom léger (scale-105, 300ms)

### Ton éditorial de Sandra

**Voix :** Sandra écrit à la première personne, en tant que maman et vulgarisatrice scientifique. Elle tutoie implicitement le lecteur ou utilise le "vous" inclusif.

**Caractéristiques du ton :**
- **Scientifique mais accessible** — elle cite des études (auteur, année, revue, taille d'échantillon) mais les vulgarise avec des mots simples et des analogies du quotidien
- **Combative et directe** — elle déconstruit les mythes sans ménagement ("Faites le calcul", "Étrange paradoxe, non ?", "Spoiler :")
- **Rassurante** — elle normalise les difficultés parentales ("c'est normal", "respirez", "ne vous inquiétez pas")
- **Honnête sur les limites de la science** — chaque article se termine par un disclaimer : "La science n'est pas parfaite... les études ne sont que des indices... ce contenu ne se substitue pas à un suivi professionnel"
- **Anti-dogmatique** — elle refuse les vérités absolues, promeut le doute et l'esprit critique
- **Émotionnellement engagée** — elle parle de son vécu personnel sans filtre (deuil, doutes, transformation)

**Structure rédactionnelle d'un article type :**
1. Bloc `:::summary` — les points clés en 4–5 bullets, en haut de l'article
2. Introduction empathique — "Votre bébé fait X ? Vous avez cherché sur Google..."
3. Déconstruction du mythe — historique, études, chiffres
4. Ce que dit vraiment la science — données objectives, études récentes
5. Implications concrètes pour les parents — "Que faire ?"
6. FAQ — questions pratiques en H3
7. Résumé en bullets
8. Section Sources — références académiques numérotées (auteur, année, revue)
9. Disclaimer scientifique — en blockquote finale

**Formules récurrentes :**
- "Que dit la science ?"
- "Spoiler : ..."
- "Respirez."
- "Ce n'est pas une régression. C'est une construction."
- Utilisation de **gras** pour les points clés dans chaque paragraphe

### Responsive design

| Breakpoint | Comportement                                                   |
|------------|----------------------------------------------------------------|
| Mobile     | Navigation hamburger plein écran, TOC collapsible, images 100vw, grilles 1 col |
| md (768px) | Navbar desktop, hero grille 2fr/3fr, cards grille 2 col        |
| lg (1024px)| Article : sidebar TOC sticky, max-w-5xl avec grille `[1fr_240px]` |

- Navbar et hero utilisent `max-w-7xl` pour un alignement cohérent des bords
- Navbar sticky avec `backdrop-blur-md` et `bg-cream/80`
- Menu mobile : panneau fixe sous le header (hauteur mesurée dynamiquement via `useRef`), fond cream plein, liens centrés en Quicksand 2xl, focus trap + fermeture Escape
- Le scroll du body est bloqué quand le menu mobile est ouvert
- Les blocs `:::compare` passent de 2 colonnes à 1 colonne sous 640px
- Les `:::stats` utilisent `auto-fit minmax(220px, 1fr)` — s'adaptent automatiquement

### Accessibilité

- HTML sémantique (`<main>`, `<section>`, `<article>`, `<aside>`, `<nav>`)
- **Skip link** ("Sauter au contenu principal") dans `app/layout.tsx`
- **Focus trap** natif sur le menu mobile (Tab cyclique + Escape pour fermer)
- `aria-label` sur la navigation, les résumés, les callouts
- `aria-expanded` sur le toggle du menu mobile
- `aria-current="location"` sur les items TOC actifs
- `aria-hidden="true"` sur toutes les icônes décoratives
- `role="alert"` sur les callouts warning, `role="note"` sur les autres
- `focus-visible:ring-2 ring-sage ring-offset-2` sur les boutons
- `prefers-reduced-motion: reduce` — désactive animations et transitions
- Alt text descriptif en français sur toutes les images
- Liens externes : `target="_blank" rel="noopener noreferrer"` (automatique dans le parser markdown)

## Catégories d'articles

Catégories existantes (à réutiliser, ne pas en inventer sans raison) :

- **Sommeil** — tout ce qui touche au sommeil du bébé/enfant
- **Éducation** — parentalité, limites, félicitations, méthodes éducatives (la plus fréquente)
- **Famille** — dynamiques familiales, fratrie, jalousie
- **Bien-être** — stress parental, épuisement, émotions
- **Neurosciences** — impact sur le cerveau, développement neurologique
- **Sexualité** — nudité, corps, éducation au corps
- **Anthropologie** — approche culturelle, comparée
- **Ressources** — outils pratiques, fiches, exercices

## Modèle de données d'un article

Interface `Article` (`types/index.ts`) :

| Champ         | Format                          | Exemple                                      |
|---------------|---------------------------------|----------------------------------------------|
| `slug`        | kebab-case français             | `"regressions-du-sommeil-mythe-ou-realite"`  |
| `title`       | Titre complet avec ponctuation  | `"Régressions du sommeil : mythe ou réalité scientifique ?"` |
| `excerpt`     | 1–3 phrases, ~200 caractères    | Résumé accrocheur pour les cards et meta description |
| `content`     | Markdown custom (voir syntaxe)  | Commence par `:::summary`, finit par disclaimer |
| `coverImage`  | `/images/slug-court.webp`       | `"/images/regression-sommeil.webp"`          |
| `category`    | Une des catégories existantes   | `"Sommeil"`                                  |
| `publishedAt` | `YYYY-MM-DD`                    | `"2026-03-04"`                               |
| `readingTime` | `"X min"` (12–18 typiquement)  | `"18 min"`                                   |
| `author`      | Toujours `"Sandra"`             | `"Sandra"`                                   |

## Procédure d'ajout d'un article

1. **Créer l'image de couverture** en style aquarelle cohérent (tons pastel sage/rose/crème, scène familiale, format WebP). La placer dans `public/images/` avec un nom kebab-case descriptif.
2. **Ajouter l'objet article** dans le tableau `articles` de `lib/articles.ts`. Respecter le modèle de données ci-dessus.
3. **Rédiger le contenu** en markdown custom. Structure obligatoire :
   - `:::summary` en tout premier (4–5 bullets, points clés)
   - Sections H2 numérotées automatiquement (pas besoin de numéroter manuellement)
   - Utiliser les blocs custom (`:::callout`, `:::stats`, `:::timeline`, `:::compare`) pour varier la mise en forme
   - Terminer par une section "Sources" (références académiques numérotées)
   - Dernière ligne : le **disclaimer scientifique** en blockquote :
     ```
     > *La science n'est pas parfaite et n'a pas pour rôle de dicter vos vies. Une étude à elle seule n'a que peu de poids en termes de niveau de preuves. Les études scientifiques ne sont que des indices. Elles sont toujours critiquables et ne reflètent pas la vérité qui restera toujours insaisissable. Ce contenu n'a pas pour but de se substituer à un suivi avec des professionnels de la santé physique ou mentale.*
     ```
4. **Ajouter les redirections** dans `vercel.json` si l'article remplace un ancien article WordPress (toujours les deux variantes : avec et sans trailing slash, `statusCode: 301`).
5. **Vérifier** que `generateStaticParams` dans `app/blog/[slug]/page.tsx` prend automatiquement le nouvel article (c'est automatique car il itère sur le tableau `articles`).

## SEO

### Métadonnées

- **Title template** : `%s | Parents en Or` (défini dans `app/layout.tsx`)
- **Title par défaut** : `Parents en Or — Parentalité bienveillante`
- **Locale** : `fr_FR`
- **metadataBase** : `https://parents-en-or.fr`
- **Chaque page** définit son propre `generateMetadata()` ou `export const metadata` avec title, description, openGraph, twitter
- **Articles** : Open Graph type `article`, image de couverture 1200x630, `publishedTime`, `authors`

### JSON-LD (Schema.org)

4 schémas déployés (`components/modules/json-ld.tsx`) :

| Schéma           | Page           | Données                                           |
|------------------|----------------|----------------------------------------------------|
| `WebSite`        | Layout global  | Nom, URL, description, publisher (Person)          |
| `Person`         | `/a-propos`    | Sandra, jobTitle, knowsAbout, sameAs (réseaux)     |
| `Article`        | `/blog/[slug]` | headline, description, datePublished, author, image|
| `BreadcrumbList` | `/blog/[slug]` | Accueil → Blog → Titre de l'article               |

### Robots

Toutes les pages sont indexables (`index: true, follow: true`). Configuration googleBot avec `max-image-preview: large`.

## Maillage interne

- **Page à propos** → liens vers 3 articles recommandés (en dur) + lien "Voir tous les articles"
- **Page article** → bouton retour vers `/blog` + CTA "Découvrir d'autres articles" en bas
- **Homepage** → composant `AboutPreview` qui renvoie vers `/a-propos` + articles récents vers `/blog`
- **Footer** → liens de navigation (Accueil, Articles, Ateliers, Qui suis-je) + réseaux sociaux + mentions légales
- **Navbar** → 4 liens : Accueil, Articles, Ateliers, Qui suis-je

Les articles peuvent contenir des liens internes vers d'autres articles ou vers `/a-propos` dans leur contenu markdown.

## Redirections Vercel (migration WordPress)

Le site a été migré depuis WordPress. `vercel.json` contient ~45 redirections 301 permanentes.

**Convention :**
- Toujours ajouter la version **avec** et **sans** trailing slash (WordPress utilisait les trailing slashes)
- Toujours `"statusCode": 301` (redirection permanente)
- Anciennes URLs WordPress niveau racine → nouvelles URLs sous `/blog/`
- Les anciennes routes WordPress génériques (`/category/`, `/author/`, `/feed/`, `/wp-admin/`, `/wp-content/`) sont redirigées vers les pages appropriées ou la racine

## Points d'attention

- Pas de tests configurés
- Pas de Prettier (uniquement ESLint)
- Pas de hooks git (ni Husky ni lint-staged)
- Toutes les données sont statiques (pas de base de données, pas de CMS)
- Les redirections WordPress → Next.js sont dans `vercel.json`
