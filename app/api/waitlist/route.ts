import { mkdir, readFile, writeFile } from "fs/promises";
import { dirname, join } from "path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function storePath() {
  return process.env.VERCEL
    ? join("/tmp", "waitlist.json")
    : join(process.cwd(), "data", "waitlist.json");
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = String(body?.email ?? "").trim().toLowerCase();
  const source = String(body?.source ?? "unknown");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
  }

  const file = storePath();
  await mkdir(dirname(file), { recursive: true });
  let entries: { email: string; source: string; at: string }[] = [];
  try {
    entries = JSON.parse(await readFile(file, "utf8"));
  } catch {
    entries = [];
  }
  if (!entries.some((row) => row.email === email)) {
    entries.push({ email, source, at: new Date().toISOString() });
    await writeFile(file, JSON.stringify(entries, null, 2));
  }
  return NextResponse.json({ ok: true });
}
