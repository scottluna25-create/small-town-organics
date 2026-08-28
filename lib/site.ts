export const site = {
  name: "Small Town Organics",
  tagline: "Health, Body, and Soul",
  description:
    "Small Town Organics is an organic wellness company making honest goods for health, body, and soul.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://small-town-organics.vercel.app",
  founder: "Scott Luna",
} as const;

export function absUrl(path = "/") {
  const base = site.url.replace(/\/$/, "");
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
