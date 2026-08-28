import type { Metadata } from "next";
import { absUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${site.name} handles the emails and messages you send us.`,
  alternates: { canonical: absUrl("/privacy") },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-serif text-4xl text-forest-deep">Privacy</h1>
      <div className="mt-8 space-y-4 text-forest">
        <p>Small Town Organics is a new company. We collect as little as we can.</p>
        <p>
          If you join the waitlist, we store your email and the page you signed up from
          so we can tell you when goods are ready. If you use the contact form, we store
          your name, email, and message so we can reply.
        </p>
        <p>
          We do not sell this information. We do not run a maze of ad trackers on this
          site.
        </p>
        <p>
          Waitlist and contact records currently live on the server that hosts this site.
          Ask us to delete your email and we will.
        </p>
        <p>Last updated August 28, 2026.</p>
      </div>
    </article>
  );
}
