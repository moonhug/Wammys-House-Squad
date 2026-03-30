import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserSite = repository === "moonhug.github.io";

export default defineConfig({
  integrations: [mdx()],
  output: "static",
  site: "https://moonhug.github.io",
  base: repository && !isUserSite ? `/${repository}` : undefined,
  trailingSlash: "never"
});
