import { mkdir, readFile, writeFile } from "fs/promises";
import { dirname, join } from "path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function storePath() {
  return process.env.VERCEL
    ? join("/tmp", "contact.json")
    : join(process.cwd(), "data", "contact.json");
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = String(body?.name ?? "").trim();
  const email = String(body?.email ?? "").trim().toLowerCase();
  const message = String(body?.message ?? "").trim();
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  const file = storePath();
  await mkdir(dirname(file), { recursive: true });
  let entries: unknown[] = [];
  try {
    entries = JSON.parse(await readFile(file, "utf8"));
  } catch {
    entries = [];
  }
  entries.push({ name, email, message, at: new Date().toISOString() });
  await writeFile(file, JSON.stringify(entries, null, 2));
  return NextResponse.json({ ok: true });
}
