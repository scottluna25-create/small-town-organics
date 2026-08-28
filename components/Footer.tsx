import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-forest/15 bg-forest text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-serif text-2xl">{site.name}</p>
          <p className="mt-1 text-sm tracking-wide text-cream/80">{site.tagline}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/journal" className="hover:underline">Journal</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/privacy" className="hover:underline">Privacy</Link>
          <Link href="/terms" className="hover:underline">Terms</Link>
        </nav>
      </div>
      <p className="mx-auto max-w-6xl px-6 pb-8 text-xs text-cream/70">
        © {new Date().getFullYear()} {site.name}. Grown slowly on purpose.
      </p>
    </footer>
  );
}
