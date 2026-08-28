"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Send failed");
      setStatus("ok");
      setMessage("Got it. We will write back.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Could not send. Email us directly if this keeps happening.");
    }
  }

  const field = "w-full rounded-sm border border-forest/25 bg-cream px-3 py-2 outline-none focus:border-forest";

  return (
    <form onSubmit={onSubmit} className="flex max-w-lg flex-col gap-4">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-forest">Name</label>
        <input id="name" name="name" required autoComplete="name" className={`${field} mt-1`} />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-forest">Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" className={`${field} mt-1`} />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-forest">Message</label>
        <textarea id="message" name="message" required rows={5} className={`${field} mt-1`} />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="self-start rounded-sm bg-forest px-5 py-2 text-sm font-medium text-cream hover:bg-forest-deep disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send"}
      </button>
      {message ? (
        <p role="status" className={status === "error" ? "text-sm text-red-800" : "text-sm text-forest"}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
