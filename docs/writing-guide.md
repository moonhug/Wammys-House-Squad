# Writing Guide

This project is a file-based Astro blog for collaborative tech and game articles.

## Where posts go

- Put every article under `src/content/posts/tech/` or `src/content/posts/game/`.
- Give each post its own folder.
- Use `index.md` for standard Markdown posts.
- Use `index.mdx` for richer posts that need components or shared templates.
- Put local images in the same folder as the post.

## Folder naming

- Use the folder name as the slug source.
- Recommended pattern: `YYYY-MM-DD-short-kebab-name`
- Examples:
- `src/content/posts/tech/2026-03-30-ida-string-pool/index.md`
- `src/content/posts/game/2026-03-30-steam-sale-picks/index.md`

## Required frontmatter

```yaml
---
title: "Post title"
description: "One sentence summary"
pubDate: 2026-03-30
author: "Your Name"
section: "tech"
tags:
  - reverse-engineering
  - ida
draft: false
heroImage: ./cover.svg
---
```

## Field rules

- `section` must be either `tech` or `game`.
- `tags` can be any string values, but keep them consistent.
- `heroImage` should point to a file in the same post folder when used.
- `draft: true` keeps a post out of normal listings.

## Images

- Put article images in the same folder as the post.
- Reference them relatively, such as `./cover.svg` or `./screenshot.png`.
- Keep filenames simple and descriptive.

## Which format to use

- Use Markdown for most posts.
- Use MDX when you need reusable components like callouts or figures.
- Use shared templates for advanced HTML-style article bodies.
- Do not create standalone full-page HTML documents with their own header or footer.

## Collaboration advice

- Keep paragraphs short and headings clear.
- Prefer additive edits over structural rewrites unless the PR is specifically for refactoring content.
- If you invent a new reusable article pattern, consider moving it into `src/components/` or `src/templates/`.
