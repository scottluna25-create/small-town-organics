import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { absUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Write to ${site.name}. Questions, wholesale, or just hello.`,
  alternates: { canonical: absUrl("/contact") },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <p className="text-sm tracking-[0.2em] text-moss">CONTACT</p>
      <h1 className="mt-3 font-serif text-4xl text-forest-deep">Write us</h1>
      <p className="mt-4 text-forest">
        Founder questions, press, or a hello. We read everything.
      </p>
      <div className="mt-10">
        <ContactForm />
      </div>
    </div>
  );
}
