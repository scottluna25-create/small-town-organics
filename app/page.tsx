import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { WaitlistForm } from "@/components/WaitlistForm";
import { absUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} · ${site.tagline}`,
  description: site.description,
  alternates: { canonical: absUrl("/") },
};

const pillars = [
  {
    href: "/health",
    title: "Health",
    copy: "What you take in. Organic food and daily nourishment without the performance.",
  },
  {
    href: "/body",
    title: "Body",
    copy: "What you put on. Quiet care for skin and hair, with lists you can read.",
  },
  {
    href: "/soul",
    title: "Soul",
    copy: "The slower layer. Rituals and rooms that make a house feel lived in.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="px-6 pb-16 pt-10 text-center">
        <Image
          src="/logo.png"
          alt="Small Town Organics circular badge: a barn and tree, Health, Body, and Soul"
          width={360}
          height={240}
          className="mx-auto h-auto w-72 sm:w-80"
          priority
        />
        <p className="mt-6 text-sm tracking-[0.25em] text-moss">{site.tagline.toUpperCase()}</p>
        <h1 className="mx-auto mt-4 max-w-2xl font-serif text-4xl leading-tight text-forest-deep sm:text-5xl">
          Organic goods for a quieter kind of wellness
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-forest">
          Small Town Organics is just getting started. Honest products are on the way.
          This site is the front porch.
        </p>
      </section>

      <section className="border-y border-forest/10 bg-cream-dark/40 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <Link
              key={pillar.href}
              href={pillar.href}
              className="rounded-sm border border-forest/15 bg-cream p-8 hover:border-forest/40"
            >
              <h2 className="font-serif text-3xl text-forest-deep">{pillar.title}</h2>
              <p className="mt-3 text-forest">{pillar.copy}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-20 text-center">
        <h2 className="font-serif text-3xl text-forest-deep">Be first in line</h2>
        <p className="mt-3 text-forest">
          No fake shop. No invented catalog. Leave your email and we will tell you when
          the first goods are real.
        </p>
        <div className="mx-auto mt-8 flex justify-center">
          <WaitlistForm source="home" />
        </div>
      </section>
    </>
  );
}
