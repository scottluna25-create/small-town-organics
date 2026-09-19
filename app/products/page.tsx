import Image from "next/image";
import type { Metadata } from "next";
import { WaitlistForm } from "@/components/WaitlistForm";
import { absUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Barnlight Botanicals, the body line from Small Town Organics. Morning Cleanse, Daily Cream, and Evening Oil. A preview — not for sale yet.",
  alternates: { canonical: absUrl("/products") },
};

const products = [
  {
    name: "Morning Cleanse",
    form: "Cream tube",
    note: "The morning cleanse. Quiet, simple, meant to start the day.",
  },
  {
    name: "Daily Cream",
    form: "Jar",
    note: "The daytime cream. A small jar for everyday skin.",
  },
  {
    name: "Evening Oil",
    form: "Amber dropper",
    note: "The evening oil. A few drops, then lights down.",
  },
];

export default function ProductsPage() {
  return (
    <article>
      <header className="mx-auto max-w-2xl px-6 pt-16 text-center">
        <p className="text-sm tracking-[0.2em] text-moss">BY SMALL TOWN ORGANICS</p>
        <h1 className="mt-3 font-serif text-4xl text-forest-deep sm:text-5xl">
          Barnlight Botanicals
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-forest">
          The first body line. Three pieces, shown as packaging only. Formulas are
          still being felt. Nothing here is for sale yet.
        </p>
      </header>

      <figure className="mx-auto mt-12 max-w-6xl px-6">
        <Image
          src="/products/barnlight-trio.png"
          alt="Barnlight Botanicals packaging: Morning Cleanse cream tube, Daily Cream jar, and Evening Oil amber dropper"
          width={1600}
          height={1000}
          className="h-auto w-full"
          priority
        />
        <figcaption className="mt-3 text-center text-sm text-moss">
          Morning Cleanse, Daily Cream, and Evening Oil.
        </figcaption>
      </figure>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-3">
        {products.map((product) => (
          <section
            key={product.name}
            className="rounded-sm border border-forest/15 bg-cream p-8"
          >
            <p className="text-sm tracking-[0.18em] text-moss">{product.form.toUpperCase()}</p>
            <h2 className="mt-2 font-serif text-3xl text-forest-deep">{product.name}</h2>
            <p className="mt-3 text-forest">{product.note}</p>
            <p className="mt-3 text-sm text-forest/80">Preview only. Not for sale.</p>
          </section>
        ))}
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-20 text-center">
        <h2 className="font-serif text-2xl text-forest-deep">Stay close</h2>
        <p className="mt-2 text-forest">
          Leave an email if you want word when these are real. There is nothing to buy today.
        </p>
        <div className="mt-6 flex justify-center">
          <WaitlistForm source="products" />
        </div>
      </section>
    </article>
  );
}
