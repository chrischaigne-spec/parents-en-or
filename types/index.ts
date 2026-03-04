/** Représente un article de blog */
export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  author: string;
}

/** Props d'un lien de navigation */
export interface NavLink {
  href: string;
  label: string;
}
