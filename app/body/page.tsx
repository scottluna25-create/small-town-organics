import type { Metadata } from "next";
import { WaitlistForm } from "@/components/WaitlistForm";
import { absUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Body",
  description:
    "Organic body care without the junk. Short lists, quiet scent, formulas you can picture as plants, fats, and minerals.",
  alternates: { canonical: absUrl("/body") },
};

export default function BodyPage() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <p className="text-sm tracking-[0.2em] text-moss">BODY</p>
      <h1 className="mt-3 font-serif text-4xl text-forest-deep">What you put on</h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-forest">
        <p>
          Skin is not a marketing channel. Organic body care should cleanse without
          stripping and moisturize with oils the skin already understands.
        </p>
        <p>
          We are allergic to long fragrance labels and twelve-step sinks. A honest soap.
          A oil or lotion. A balm for the dry spots. That is a shelf, not a shrine.
        </p>
        <p>
          When the first body care lands, the list on the back will be short enough to
          read out loud. If we cannot picture the ingredient as a plant, a fat, or a
          mineral, it does not go in.
        </p>
      </div>
      <div className="mt-12">
        <WaitlistForm source="body" />
      </div>
    </article>
  );
}
