import type { Metadata } from "next";
import { WaitlistForm } from "@/components/WaitlistForm";
import { absUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Soul",
  description:
    "The slower layer of Small Town Organics: rituals, rooms, and goods that make a house feel lived in.",
  alternates: { canonical: absUrl("/soul") },
};

export default function SoulPage() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <p className="text-sm tracking-[0.2em] text-moss">SOUL</p>
      <h1 className="mt-3 font-serif text-4xl text-forest-deep">The slower layer</h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-forest">
        <p>
          Soul is the part of wellness catalogs usually fill with candles and copy.
          We mean the slower layer: a table, a porch, a Saturday that does not need
          optimizing.
        </p>
        <p>
          Small-town life already knows this. You show up. You make the coffee.
          You keep one good thing on the counter instead of seventeen.
        </p>
        <p>
          Goods in this lane will be few, useful, and built to be left out. Not
          accessories for a lifestyle shoot. Things that make a house smell like
          people live there.
        </p>
      </div>
      <div className="mt-12">
        <WaitlistForm source="soul" />
      </div>
    </article>
  );
}
