import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/articles";
import { absUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes from Small Town Organics on organic wellness, body care without the junk, and building a small-town brand slowly.",
  alternates: { canonical: absUrl("/journal") },
};

export default function JournalPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm tracking-[0.2em] text-moss">JOURNAL</p>
      <h1 className="mt-3 font-serif text-4xl text-forest-deep">Notes from the porch</h1>
      <p className="mt-4 max-w-xl text-forest">
        Honest writing on organic wellness. No fabricated studies. No launch-week filler.
      </p>
      <ul className="mt-12 space-y-8">
        {articles.map((article) => (
          <li key={article.slug} className="border-t border-forest/15 pt-8">
            <p className="text-sm text-moss">
              {article.date} · {article.readingTime}
            </p>
            <h2 className="mt-2 font-serif text-2xl text-forest-deep">
              <Link href={`/journal/${article.slug}`} className="hover:underline">
                {article.title}
              </Link>
            </h2>
            <p className="mt-2 text-forest">{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
