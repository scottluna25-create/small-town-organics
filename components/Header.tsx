import Image from "next/image";
import Link from "next/link";

const nav = [
  { href: "/about", label: "About" },
  { href: "/health", label: "Health" },
  { href: "/body", label: "Body" },
  { href: "/soul", label: "Soul" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="border-b border-forest/15 bg-cream/90 backdrop-blur-sm sticky top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3">
        <Link href="/" className="flex items-center gap-3 text-forest-deep">
          <Image
            src="/logo.png"
            alt="Small Town Organics"
            width={56}
            height={56}
            className="h-14 w-14"
            priority
          />
          <span className="hidden font-serif text-xl leading-tight sm:block">
            Small Town
            <br />
            Organics
          </span>
        </Link>
        <nav aria-label="Primary" className="flex flex-wrap items-center justify-end gap-x-5 gap-y-1 text-sm font-medium text-forest">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-forest-deep">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
