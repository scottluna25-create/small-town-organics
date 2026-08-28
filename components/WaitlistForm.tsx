"use client";

import { useState } from "react";

export function WaitlistForm({ source = "home" }: { source?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not join");
      setStatus("ok");
      setMessage("You are on the list. We will write when the first goods are ready.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("That did not go through. Try again, or email us from the contact page.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md flex-col gap-3">
      <label htmlFor={`email-${source}`} className="text-sm font-medium text-forest">
        Email
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id={`email-${source}`}
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="flex-1 rounded-sm border border-forest/25 bg-cream px-3 py-2 text-ink outline-none focus:border-forest"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-sm bg-forest px-5 py-2 text-sm font-medium text-cream hover:bg-forest-deep disabled:opacity-60"
        >
          {status === "loading" ? "Joining…" : "Join the list"}
        </button>
      </div>
      {message ? (
        <p role="status" className={status === "error" ? "text-sm text-red-800" : "text-sm text-forest"}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
