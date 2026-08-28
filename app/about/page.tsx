import type { Metadata } from "next";
import { WaitlistForm } from "@/components/WaitlistForm";
import { absUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Small Town Organics is a new organic wellness company founded by Scott Luna. Health, body, and soul, grown slowly on purpose.",
  alternates: { canonical: absUrl("/about") },
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <p className="text-sm tracking-[0.2em] text-moss">ABOUT</p>
      <h1 className="mt-3 font-serif text-4xl text-forest-deep">A company that still fits on a porch</h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-forest">
        <p>
          Small Town Organics is a new organic wellness company. Scott Luna founded it
          because a lot of “wellness” had gotten loud, expensive, and hard to trust.
        </p>
        <p>
          We have an LLC and a clear map: health, body, and soul. We do not have a
          warehouse of products yet, and we will not pretend otherwise. The badge, the
          barn and the tree, is the standard. Rooted. Useful. A little quiet.
        </p>
        <p>
          Organic is the farming and making rule, not a personality. Short lists. Soil
          that stays alive. Goods you would hand to a neighbor without a speech.
        </p>
        <p>
          When the first things are ready, they will live on this site. Until then, we
          are writing, ranking for the right searches, and keeping a list of people who
          actually want this.
        </p>
      </div>
      <div className="mt-12 border-t border-forest/15 pt-10">
        <h2 className="font-serif text-2xl text-forest-deep">Stay close</h2>
        <p className="mt-2 text-forest">We will only write when there is something real to say.</p>
        <div className="mt-6">
          <WaitlistForm source="about" />
        </div>
      </div>
    </article>
  );
}
