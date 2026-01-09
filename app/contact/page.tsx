import Link from "next/link";

import MarketingShell from "../components/MarketingShell";
import { WAITLIST_FORM_URL } from "../lib/constants";

export const metadata = {
  title: "Contact • LegalAssist",
};

export default function ContactPage() {
  return (
    <MarketingShell
      active="contact"
      title="Contact"
      subtitle="Questions, feedback, or early access requests — reach out anytime."
    >
      <div className="space-y-6 text-sm text-slate-700 dark:text-slate-200">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="glass-card glow-card rounded-3xl p-5">
            <div className="text-sm font-semibold text-slate-900 dark:text-white">Email</div>
            <p className="mt-2 text-slate-600 dark:text-slate-300">For product questions, partnerships, and early access:</p>
            <a
              className="mt-3 inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-glow hover:opacity-95"
              href="mailto:asma.ahmed.work@gmail.com"
            >
              asma.ahmed.work@gmail.com
            </a>
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">Typical response: 1–2 business days.</p>
          </div>

          <div className="glass-card glow-card rounded-3xl p-5">
            <div className="text-sm font-semibold text-slate-900 dark:text-white">Join the waitlist</div>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Want early access? Join the waitlist — invites go out in small batches.
            </p>
            <a
              href={WAITLIST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-ink-600 to-ink-800 px-5 py-3 text-sm font-semibold text-white shadow-glow hover:opacity-95"
            >
              Join Waitlist (Google Form)
            </a>
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">No spam — just early access updates.</p>
          </div>
        </div>

        <div className="glass-card glow-card rounded-3xl p-5">
          <div className="text-sm font-semibold text-slate-900 dark:text-white">Links</div>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link className="rounded-xl bg-white/70 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white dark:bg-white/5 dark:text-white dark:hover:bg-white/10" href="/about">
              About
            </Link>
            <Link className="rounded-xl bg-white/70 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white dark:bg-white/5 dark:text-white dark:hover:bg-white/10" href="/privacy">
              Privacy
            </Link>
            <Link className="rounded-xl bg-white/70 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white dark:bg-white/5 dark:text-white dark:hover:bg-white/10" href="/terms">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </MarketingShell>
  );
}
