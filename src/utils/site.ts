export const SITE_TITLE = "Wammy's House Squad";
export const SITE_DESCRIPTION =
  "Notes on games, systems, and the curious ways we read them.";

export function withBase(path: string) {
  const normalizedPath = path === "/" ? "/" : `/${path.replace(/^\/+/, "")}`;
  const base = import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL.replace(/\/$/, "");

  return `${base}${normalizedPath}`;
}

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/tech", label: "Tech" },
  { href: "/game", label: "Game" },
  { href: "/tags", label: "Tags" },
  { href: "/about", label: "About" }
];
