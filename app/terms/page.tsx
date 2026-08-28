import type { Metadata } from "next";
import { absUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms of use for the ${site.name} website.`,
  alternates: { canonical: absUrl("/terms") },
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-serif text-4xl text-forest-deep">Terms</h1>
      <div className="mt-8 space-y-4 text-forest">
        <p>
          This website is a brand and information site for Small Town Organics. It is
          not a store yet. Nothing here is an offer to sell a product until we say it is.
        </p>
        <p>
          Writing on the journal is ours. You are welcome to read it and share a link.
          Do not copy it wholesale and put your name on it.
        </p>
        <p>
          The badge, name, and tagline Health, Body, and Soul belong to Small Town
          Organics. Please do not use them as if they were yours.
        </p>
        <p>
          These terms are the simple version while we are early. If we add a shop,
          payments, or accounts, we will rewrite this so it matches reality.
        </p>
        <p>Last updated August 28, 2026.</p>
      </div>
    </article>
  );
}
