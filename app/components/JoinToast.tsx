"use client";

import { useEffect, useState } from "react";

export default function JoinToast() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.get("joined") === "1") {
      setOpen(true);
      const t = setTimeout(() => setOpen(false), 4500);
      return () => clearTimeout(t);
    }
  }, []);

  if (!open) return null;

  return (
    <div className="fixed top-5 right-5 z-50">
      <div className="rounded-2xl border border-ink-200 bg-white/90 px-4 py-3 shadow-soft backdrop-blur">
        <div className="text-sm font-semibold text-slate-900">You're on the list ✅</div>
        <div className="mt-0.5 text-xs text-slate-600">
          We'll email you when early access opens.
        </div>
      </div>
    </div>
  );
}
