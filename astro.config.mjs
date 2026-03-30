import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import { readFileSync } from "node:fs";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserSite = repository === "moonhug.github.io";
let customDomain;

try {
  customDomain = readFileSync(new URL("./public/CNAME", import.meta.url), "utf8").trim();
} catch {
  customDomain = undefined;
}

export default defineConfig({
  integrations: [mdx()],
  output: "static",
  site: customDomain ? `https://${customDomain}` : "https://moonhug.github.io",
  base: customDomain ? undefined : repository && !isUserSite ? `/${repository}` : undefined,
  trailingSlash: "never"
});
