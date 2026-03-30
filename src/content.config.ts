import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({
    pattern: "**/index.{md,mdx}",
    base: "./src/content/posts"
  }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      author: z.string(),
      section: z.enum(["tech", "game"]),
      tags: z.array(z.string()),
      draft: z.boolean(),
      heroImage: z.string().optional(),
      updatedDate: z.coerce.date().optional(),
      series: z.string().optional(),
      featured: z.boolean().optional(),
      readingTime: z.string().optional(),
      template: z.string().optional()
    })
});

export const collections = { posts };
