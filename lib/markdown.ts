/* ─── Parseur Markdown étendu avec TOC et blocs custom ─── */

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface ParsedArticle {
  toc: TocItem[];
  contentHtml: string;
}

/** Génère un slug à partir d'un texte (accents normalisés) */
function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Formate le texte inline : gras, italique, liens */
function formatInline(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    );
}

/** Parse un bloc :::compare en HTML (titres de colonnes dynamiques) */
function parseCompareBlock(lines: string[]): string {
  const left: string[] = [];
  const right: string[] = [];
  let current: "left" | "right" | null = null;
  let leftTitle = "❌ Mythes";
  let rightTitle = "✅ Science";

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("### Mythes") || trimmed.startsWith("### ❌")) {
      current = "left";
      leftTitle = trimmed.slice(4);
    } else if (trimmed.startsWith("### Science") || trimmed.startsWith("### ✅")) {
      current = "right";
      rightTitle = trimmed.slice(4);
    } else if (trimmed.startsWith("- ") && current) {
      (current === "left" ? left : right).push(formatInline(trimmed.slice(2)));
    }
  }

  return `<div class="compare-block">
  <div class="compare-col compare-mythes">
    <h4>${leftTitle}</h4>
    <ul>${left.map((m) => `<li>${m}</li>`).join("")}</ul>
  </div>
  <div class="compare-col compare-science">
    <h4>${rightTitle}</h4>
    <ul>${right.map((s) => `<li>${s}</li>`).join("")}</ul>
  </div>
</div>`;
}

/** Parse un bloc :::timeline en HTML */
function parseTimelineBlock(lines: string[]): string {
  const events: { date: string; text: string }[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    const match = trimmed.match(/^-\s*\*\*(.+?)\*\*\s*[:\-–—]\s*(.+)$/);
    if (match) {
      events.push({ date: match[1], text: formatInline(match[2]) });
    }
  }

  const items = events
    .map(
      (e) =>
        `<div class="timeline-item"><span class="timeline-date">${e.date}</span><div class="timeline-card">${e.text}</div></div>`
    )
    .join("");

  return `<div class="timeline-block">${items}</div>`;
}

/** Parse un bloc :::stat en HTML (format: "valeur | label | description") */
function parseStatBlock(lines: string[]): string {
  const text = lines
    .map((l) => l.trim())
    .filter(Boolean)
    .join(" ");

  const parts = text.split("|").map((p) => p.trim());
  const value = parts[0] || "";
  const label = parts[1] || "";
  const desc = parts[2] || "";

  return `<div class="stat-card">
  <span class="stat-value">${value}</span>
  <span class="stat-label">${label}</span>
  ${desc ? `<span class="stat-desc">${formatInline(desc)}</span>` : ""}
</div>`;
}

/** Parse un bloc :::stats (grille de stats) */
function parseStatsBlock(lines: string[]): string {
  const cards: string[] = [];
  let currentLines: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed === "---") {
      if (currentLines.length > 0) {
        cards.push(parseStatBlock(currentLines));
        currentLines = [];
      }
    } else if (trimmed !== "") {
      currentLines.push(trimmed);
    }
  }
  if (currentLines.length > 0) {
    cards.push(parseStatBlock(currentLines));
  }

  return `<div class="stats-row">${cards.join("")}</div>`;
}

/** Parse un bloc :::summary en HTML */
function parseSummaryBlock(lines: string[]): string {
  const content = lines
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => {
      if (l.startsWith("- ")) {
        return `<li>${formatInline(l.slice(2))}</li>`;
      }
      return `<p>${formatInline(l)}</p>`;
    });

  // Wrap consecutive <li> in <ul>
  const html: string[] = [];
  let inList = false;
  for (const item of content) {
    if (item.startsWith("<li>")) {
      if (!inList) {
        html.push("<ul>");
        inList = true;
      }
      html.push(item);
    } else {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      html.push(item);
    }
  }
  if (inList) html.push("</ul>");

  return `<aside class="summary-block" role="note" aria-label="Résumé">
  <h4>En bref</h4>
  ${html.join("\n  ")}
</aside>`;
}

/** Parse un bloc :::callout[type] en HTML */
function parseCalloutBlock(variant: string, lines: string[]): string {
  const content = lines
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => `<p>${formatInline(l)}</p>`)
    .join("\n  ");

  return `<aside class="callout callout-${variant}" role="note">
  ${content}
</aside>`;
}

/** Parse le markdown complet et retourne HTML + TOC */
export function parseMarkdown(markdown: string): ParsedArticle {
  const toc: TocItem[] = [];
  const lines = markdown.split("\n");
  const htmlParts: string[] = [];
  let inList: "ul" | "ol" | null = null;

  // Collect custom blocks
  let inBlock: string | null = null;
  let blockVariant = "";
  let blockLines: string[] = [];

  function closeList() {
    if (inList) {
      htmlParts.push(inList === "ul" ? "</ul>" : "</ol>");
      inList = null;
    }
  }

  function flushBlock() {
    if (!inBlock) return;

    switch (inBlock) {
      case "summary":
        htmlParts.push(parseSummaryBlock(blockLines));
        break;
      case "callout":
        htmlParts.push(parseCalloutBlock(blockVariant || "info", blockLines));
        break;
      case "stat":
        htmlParts.push(parseStatBlock(blockLines));
        break;
      case "stats":
        htmlParts.push(parseStatsBlock(blockLines));
        break;
      case "compare":
        htmlParts.push(parseCompareBlock(blockLines));
        break;
      case "timeline":
        htmlParts.push(parseTimelineBlock(blockLines));
        break;
    }

    inBlock = null;
    blockVariant = "";
    blockLines = [];
  }

  for (const line of lines) {
    const trimmed = line.trim();

    // Handle block open/close
    if (trimmed.startsWith(":::") && inBlock === null) {
      closeList();
      const blockMatch = trimmed.match(/^:::(\w+)(?:\[(\w+)\])?/);
      if (blockMatch) {
        inBlock = blockMatch[1];
        blockVariant = blockMatch[2] || "";
        blockLines = [];
        continue;
      }
    }

    if (trimmed === ":::" && inBlock !== null) {
      flushBlock();
      continue;
    }

    if (inBlock !== null) {
      blockLines.push(line);
      continue;
    }

    // Standard markdown parsing
    const isUl = trimmed.startsWith("- ");
    const isOl = /^\d+\.\s/.test(trimmed);

    // Close list if leaving list context
    if (inList && !isUl && !isOl && trimmed !== "") {
      closeList();
    }

    if (trimmed === "") {
      closeList();
      continue;
    }

    if (trimmed.startsWith("### ")) {
      const text = trimmed.slice(4);
      const id = slugify(text.replace(/\*\*/g, "").replace(/\*/g, ""));
      toc.push({ id, text: text.replace(/\*\*/g, "").replace(/\*/g, ""), level: 3 });
      htmlParts.push(`<h3 id="${id}">${formatInline(text)}</h3>`);
    } else if (trimmed.startsWith("## ")) {
      const text = trimmed.slice(3);
      const id = slugify(text.replace(/\*\*/g, "").replace(/\*/g, ""));
      toc.push({ id, text: text.replace(/\*\*/g, "").replace(/\*/g, ""), level: 2 });
      htmlParts.push(`<h2 id="${id}">${formatInline(text)}</h2>`);
    } else if (trimmed.startsWith("> ")) {
      htmlParts.push(
        `<blockquote><p>${formatInline(trimmed.slice(2))}</p></blockquote>`
      );
    } else if (isUl) {
      if (inList !== "ul") {
        if (inList) htmlParts.push("</ol>");
        htmlParts.push("<ul>");
        inList = "ul";
      }
      htmlParts.push(`<li>${formatInline(trimmed.slice(2))}</li>`);
    } else if (isOl) {
      if (inList !== "ol") {
        if (inList) htmlParts.push("</ul>");
        htmlParts.push("<ol>");
        inList = "ol";
      }
      htmlParts.push(`<li>${formatInline(trimmed.replace(/^\d+\.\s/, ""))}</li>`);
    } else {
      htmlParts.push(`<p>${formatInline(trimmed)}</p>`);
    }
  }

  closeList();
  flushBlock();

  return {
    toc,
    contentHtml: htmlParts.join("\n"),
  };
}
