"use client";

import type { TocItem } from "@/lib/markdown";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ArticleTocProps {
  items: TocItem[];
}

export function ArticleToc({ items }: ArticleTocProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (headings.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the first heading that is intersecting (visible)
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    headings.forEach((h) => observerRef.current?.observe(h));

    return () => observerRef.current?.disconnect();
  }, [items]);

  function handleClick(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
      setIsOpen(false);
    }
  }

  if (items.length === 0) return null;

  // Only show h2 in the TOC to keep it concise
  const tocH2 = items.filter((i) => i.level === 2);

  return (
    <>
      {/* Mobile: collapsible panel */}
      <nav className="toc-mobile lg:hidden" aria-label="Sommaire">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="toc-mobile-toggle"
          aria-expanded={isOpen}
        >
          <span>Sommaire</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
        {isOpen && (
          <ol className="toc-mobile-list">
            {tocH2.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleClick(item.id)}
                  className={activeId === item.id ? "toc-active" : ""}
                >
                  {item.text}
                </button>
              </li>
            ))}
          </ol>
        )}
      </nav>

      {/* Desktop: sticky sidebar */}
      <nav className="toc-desktop hidden lg:block" aria-label="Sommaire">
        <p className="toc-title">Sommaire</p>
        <ol className="toc-list">
          {tocH2.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={activeId === item.id ? "toc-active" : ""}
              >
                {item.text}
              </button>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
