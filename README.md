# Wammy's House Squad

Wammy's House Squad is an Astro-based collaborative article blog starter built around a classic old-school portal layout. It is designed for public GitHub writing with file-based content only.

Game notes, tech breakdowns, and field reports by L and the squad.

## Setup

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

If your local Node installation is conflicting with an older Homebrew Node on macOS, run commands with:

```bash
PATH=/usr/local/bin:/opt/homebrew/bin:$PATH npm run dev
```

## What this starter is for

- General game writing
- Technical posts about tools, debugging, reverse engineering, and analysis
- Collaborative writing with juniors in a public repository
- File-based publishing with no database and no CMS

## Folder structure

```text
src/
  components/
  content/
    posts/
      tech/
      game/
  layouts/
  pages/
  styles/
  templates/
  utils/
docs/
```

## Where contributors add posts

- Add tech posts under `src/content/posts/tech/`
- Add game posts under `src/content/posts/game/`
- Create one folder per post
- Put `index.md` or `index.mdx` inside that folder
- Put local images in the same folder

Examples:

- `src/content/posts/tech/2026-03-30-ida-string-pool/index.md`
- `src/content/posts/tech/2026-03-30-ida-string-pool/cover.svg`
- `src/content/posts/game/2026-03-30-steam-sale-picks/index.md`

## Writing formats

- Use Markdown for the default workflow.
- Use MDX when you need reusable components such as callouts, figures, or comparison blocks.
- Use shared HTML-style templates for advanced custom article bodies.
- Do not create standalone full-page HTML documents with custom navigation or footer.

Shared templates:

- `src/templates/ClassicArticleTemplate.astro`
- `src/templates/CasualArticleTemplate.astro`
- `src/templates/TechArticleTemplate.astro`

## Content model

Each post uses frontmatter with these main fields:

- `title`
- `description`
- `pubDate`
- `author`
- `section` with only `tech` or `game`
- `tags`
- `draft`
- `heroImage`
- `updatedDate`

Optional fields:

- `series`
- `featured`
- `readingTime`
- `template`

## Available routes

- `/`
- `/tech`
- `/game`
- `/tags`
- `/tags/[tag]`
- `/tech/[slug]`
- `/game/[slug]`
- `/about`
- `/template-examples`

## Contributor docs

- `docs/writing-guide.md`
- `docs/tag-style-guide.md`
- `docs/html-template-guide.md`

## GitHub Pages deployment

This project includes a GitHub Pages workflow at `.github/workflows/deploy.yml`.

- Recommended repository name: `wammys-house-squad`
- Recommended Pages URL: `https://moonhug.github.io/wammys-house-squad/`
- The Astro config derives the `base` path automatically in GitHub Actions from the repository name.

### Custom domain

If you are using a custom domain such as `wammys.uk`:

1. Add the domain to `public/CNAME`.
2. Configure the GitHub Pages custom domain in repository settings.
3. Add the required DNS records in your DNS provider.
4. Push to `main` again so the site rebuilds with the root domain path instead of the repository path.

High-level deployment flow:

1. Create a GitHub repository.
2. Push the local `main` branch.
3. In the repository settings, open `Pages`.
4. Set `Source` to `GitHub Actions`.
5. Pushes to `main` will build and deploy automatically.

## Recommended workflow

1. Copy an existing post folder that matches your format.
2. Rename the folder using the date plus a short kebab-case slug.
3. Update frontmatter.
4. Add images next to the post file.
5. Open a pull request.

If you have to choose between visual polish and maintainable content structure, keep the structure.
