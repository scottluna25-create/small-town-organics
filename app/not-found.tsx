import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="text-sm tracking-[0.2em] text-moss">404</p>
      <h1 className="mt-3 font-serif text-4xl text-forest-deep">That page is not here</h1>
      <p className="mt-4 text-forest">It may have moved, or it never existed. The barn is still this way.</p>
      <Link href="/" className="mt-8 inline-block rounded-sm bg-forest px-5 py-2 text-sm text-cream">
        Back home
      </Link>
    </div>
  );
}
