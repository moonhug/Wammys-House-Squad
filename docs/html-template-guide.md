# HTML Template Guide

HTML-style article bodies are for advanced use only.

If you need the full workflow, image rules, and copyable starter template, read:

- `docs/post-authoring-spec.md`
- `docs/templates/html-style-post-template.mdx`

## The main rule

- Do not build standalone HTML pages with custom site chrome.
- Do not create custom headers, navigation bars, sidebars, or footers inside a post.
- Do use the shared layouts and templates in `src/templates/`.

## What is safe to edit

- The body content inside a shared template.
- Local sections, lists, figures, callouts, and small info blocks.
- Template props such as intro text, quick facts, or checklist items.

## What should stay shared

- Site header
- Main navigation
- Two-column page shell
- Post metadata area
- Sidebar
- Footer

## Available shared templates

- `src/templates/ClassicArticleTemplate.astro`
- `src/templates/CasualArticleTemplate.astro`
- `src/templates/TechArticleTemplate.astro`

## Casual game article example

```mdx
---
title: "Diary Example"
description: "Shared template example"
pubDate: 2026-03-27
author: "Your Name"
section: "game"
tags: ["action-rpg", "diary"]
draft: false
template: "casual"
---
import CasualArticleTemplate from "../../../../templates/CasualArticleTemplate.astro";

<CasualArticleTemplate
  hook="Short opener"
  quickFacts={[{ label: "Mood", value: "Relaxed" }]}
>
  <section class="template-panel">
    <h2>Body block</h2>
    <p>Use shared body structure and shared site chrome.</p>
  </section>
</CasualArticleTemplate>
```

## Tech article example

```mdx
---
title: "Tech Template Example"
description: "Structured field notes"
pubDate: 2026-03-29
author: "Your Name"
section: "tech"
tags: ["reverse-engineering", "mdx"]
draft: false
template: "tech"
---
import TechArticleTemplate from "../../../../templates/TechArticleTemplate.astro";

<TechArticleTemplate
  context="Explain the setup."
  checklist={["Step one", "Step two"]}
  warning="Keep the layout shared."
>
  <section>
    <h2>Body section</h2>
    <p>Write normal content here.</p>
  </section>
</TechArticleTemplate>
```

## Copyable body structure

Use this when you want an HTML-like article body inside the shared layout.

```mdx
<section class="template-panel">
  <h2>Section title</h2>
  <p>Body copy goes here.</p>
</section>

<Figure src={image} alt="Description" caption="Caption text" />

<Callout title="Note" tone="info">
  Reusable callout box content.
</Callout>

<section class="template-panel">
  <h2>Simple list block</h2>
  <ul class="template-list">
    <li>First item</li>
    <li>Second item</li>
  </ul>
</section>
```
