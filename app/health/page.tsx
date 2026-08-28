import type { Metadata } from "next";
import { WaitlistForm } from "@/components/WaitlistForm";
import { absUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Health",
  description:
    "Organic wellness for what you take in. Small Town Organics on everyday nourishment without the protocol noise.",
  alternates: { canonical: absUrl("/health") },
};

export default function HealthPage() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <p className="text-sm tracking-[0.2em] text-moss">HEALTH</p>
      <h1 className="mt-3 font-serif text-4xl text-forest-deep">What you take in</h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-forest">
        <p>
          Health, here, is not a challenge. It is breakfast, a cup of something honest,
          and food grown without a chemistry set riding along.
        </p>
        <p>
          Organic wellness starts in the soil. Rotate the crops. Feed the ground.
          Leave room for the rest of the living world. You taste that before you ever
          read a label.
        </p>
        <p>
          We are not launching a fake pantry. When Small Town Organics puts food or
          daily nourishment on the table, it will be organic, short-listed, and meant
          for repeats, not for a two-week reset.
        </p>
      </div>
      <div className="mt-12">
        <WaitlistForm source="health" />
      </div>
    </article>
  );
}
