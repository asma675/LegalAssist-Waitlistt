import { NextResponse } from "next/server";

type Payload = {
  name: string;
  email: string;
  role?: string;
  firmSize?: string;
  note?: string;
  createdAt: string;
  source: "landing";
};

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  const form = await req.formData();

  const name = String(form.get("name") || "").trim();
  const email = String(form.get("email") || "").trim();
  const role = String(form.get("role") || "").trim();
  const firmSize = String(form.get("firmSize") || "").trim();
  const note = String(form.get("note") || "").trim();

  if (!name || !email || !isEmail(email)) {
    return NextResponse.redirect(new URL("/?joined=0#waitlist", req.url));
  }

  const payload: Payload = {
    name,
    email,
    role,
    firmSize,
    note,
    createdAt: new Date().toISOString(),
    source: "landing"
  };

  const webhook = process.env.WAITLIST_WEBHOOK_URL;

  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload)
      });
    } catch {
      // Ignore webhook failures
    }
  } else {
    console.log("WAITLIST_SIGNUP", payload);
  }

  return NextResponse.redirect(new URL("/?joined=1#waitlist", req.url));
}
