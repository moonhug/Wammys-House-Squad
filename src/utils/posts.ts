import type { CollectionEntry } from "astro:content";
import { withBase } from "./site";

export type PostEntry = CollectionEntry<"posts">;

const postAssets = import.meta.glob("../content/posts/**/*.{png,jpg,jpeg,webp,avif,gif,svg}", {
  eager: true,
  import: "default",
  query: "?url"
});

export function isPublishedPost(post: PostEntry) {
  return !post.data.draft;
}

export function sortPosts(posts: PostEntry[]) {
  return [...posts].sort(
    (left, right) =>
      right.data.pubDate.getTime() - left.data.pubDate.getTime()
  );
}

export function getVisibleSortedPosts(posts: PostEntry[]) {
  return sortPosts(posts.filter(isPublishedPost));
}

export function getPostSlug(post: PostEntry) {
  const normalized = post.id.replace(/\\/g, "/").replace(/\/index(?:\.(md|mdx))?$/, "");
  const parts = normalized.split("/");
  return parts[parts.length - 1];
}

export function getPostUrl(post: PostEntry) {
  return withBase(`/${post.data.section}/${getPostSlug(post)}`);
}

export function resolvePostAsset(post: PostEntry, assetPath?: string) {
  if (!assetPath) {
    return undefined;
  }

  if (assetPath.startsWith("/") || assetPath.startsWith("http://") || assetPath.startsWith("https://")) {
    return assetPath;
  }

  const basePath = post.id
    .replace(/\\/g, "/")
    .replace(/\/index(?:\.(md|mdx))?$/, "");
  const relativePath = assetPath.replace(/^\.\//, "");
  const key = `../content/posts/${basePath}/${relativePath}`;

  return postAssets[key] as string | undefined;
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);
}

export function normalizeTag(tag: string) {
  return tag
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
}

export function getAllTags(posts: PostEntry[]) {
  const tagMap = new Map<
    string,
    { label: string; slug: string; count: number; posts: PostEntry[] }
  >();

  for (const post of posts) {
    for (const tag of post.data.tags) {
      const slug = normalizeTag(tag);

      if (!tagMap.has(slug)) {
        tagMap.set(slug, {
          label: tag,
          slug,
          count: 0,
          posts: []
        });
      }

      const current = tagMap.get(slug);

      if (!current) {
        continue;
      }

      current.count += 1;
      current.posts.push(post);
    }
  }

  return [...tagMap.values()].sort((left, right) => {
    if (right.count === left.count) {
      return left.label.localeCompare(right.label);
    }

    return right.count - left.count;
  });
}

export function getPostsBySection(posts: PostEntry[], section: "tech" | "game") {
  return getVisibleSortedPosts(posts).filter((post) => post.data.section === section);
}

export function getFeaturedPosts(posts: PostEntry[]) {
  return getVisibleSortedPosts(posts).filter((post) => post.data.featured);
}

export function getRecentPosts(posts: PostEntry[], limit = 5) {
  return getVisibleSortedPosts(posts).slice(0, limit);
}

export function getRelatedPosts(post: PostEntry, posts: PostEntry[], limit = 3) {
  return getVisibleSortedPosts(posts)
    .filter((candidate) => candidate.id !== post.id)
    .map((candidate) => {
      const sharedTags = candidate.data.tags.filter((tag) =>
        post.data.tags.some((currentTag) => normalizeTag(currentTag) === normalizeTag(tag))
      ).length;
      const sectionBonus = candidate.data.section === post.data.section ? 2 : 0;

      return {
        post: candidate,
        score: sharedTags + sectionBonus
      };
    })
    .filter((item) => item.score > 0)
    .sort((left, right) => right.score - left.score)
    .slice(0, limit)
    .map((item) => item.post);
}
