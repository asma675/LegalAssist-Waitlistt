import Link from "next/link";
import AnimatedText from "../components/AnimatedText";
import ThemeToggle from "../components/ThemeToggle";
import { WAITLIST_FORM_URL } from "../lib/constants";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#06070d] dark:via-[#070915] dark:to-[#05060b]">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-white/40 bg-white/60 backdrop-blur dark:border-white/10 dark:bg-slate-950/40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-ink-500 to-ink-700 text-white shadow-glow transition group-hover:scale-[1.03]">
              ⚖️
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                LegalAssist
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-300">
                AI Legal Platform
              </div>
            </div>
          </Link>

          {/* Nav */}
          <div className="flex items-center gap-2">
            <nav className="hidden items-center gap-2 md:flex">
              <Link className="nav-btn" href="/">Home</Link>
              <Link className="nav-btn" href="/contact">Contact</Link>
              <Link className="nav-btn" href="/privacy">Privacy</Link>
              <Link className="nav-btn" href="/terms">Terms</Link>
            </nav>

            <ThemeToggle />

            {/* Sign In */}
            <a
              href="https://legal-assist.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white/70 px-3 py-2 text-sm font-semibold text-slate-900 shadow-soft backdrop-blur hover:bg-white dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              Sign In
            </a>

            {/* Waitlist */}
            <a
              href={WAITLIST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-gradient-to-r from-ink-600 to-ink-800 px-4 py-2 text-sm font-semibold text-white shadow-soft hover:opacity-95"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-10">
        <section className="rounded-[28px] border border-white/50 bg-white/70 p-6 shadow-soft backdrop-blur md:p-8 dark:border-white/10 dark:bg-white/5">
          {/* Hero */}
          <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-br from-slate-950 via-ink-900 to-ink-700 p-7 text-white ring-1 ring-white/10 md:p-10">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-ink-500/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />

            <div className="relative inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 ring-1 ring-white/10">
              ✨ About LegalAssist
            </div>

            <AnimatedText
              as="h1"
              variant="type"
              speedMs={18}
              className="relative mt-4 text-3xl font-semibold tracking-tight md:text-4xl"
              text="Built by a love for law + technology."
            />

            <AnimatedText
              as="p"
              variant="reveal"
              delayMs={120}
              className="relative mt-3 max-w-3xl text-sm text-white/80 md:text-base"
              text="LegalAssist is an AI-powered legal workflow platform designed to feel like a real firm system — organized, structured, and professional."
            />
          </div>

          {/* Content */}
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="glass-card glow-card rounded-3xl p-5">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                Built by
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                <strong>Asma Ahmed</strong> — inspired by a lifelong interest in
                law and technology, LegalAssist brings structure and speed to
                modern legal work.
              </p>
            </div>

            <div className="glass-card glow-card rounded-3xl p-5">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                What it solves
              </h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>• Client & case organization</li>
                <li>• AI-powered document drafting</li>
                <li>• Clause extraction & summaries</li>
                <li>• Structured case strategy</li>
              </ul>
            </div>

            <div className="glass-card glow-card rounded-3xl p-5">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                Core values
              </h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>• Clean UI with glow & motion</li>
                <li>• Responsible AI boundaries</li>
                <li>• Firm-style workflow clarity</li>
                <li>• Accessibility-first design</li>
              </ul>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-900 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-100">
            LegalAssist does not provide legal advice and does not create an
            attorney-client relationship. AI-generated content is for
            informational purposes only.
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-soft hover:opacity-95 dark:bg-white/10 dark:text-white"
            >
              ← Back to Home
            </Link>
            <a
              href={WAITLIST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-gradient-to-r from-ink-600 to-ink-800 px-5 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95"
            >
              Join Early Access
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 text-xs text-slate-500 dark:text-slate-300">
          Built by Asma Ahmed •{" "}
          <Link className="underline" href="/privacy">Privacy</Link> •{" "}
          <Link className="underline" href="/terms">Terms</Link> • © 2026 LegalAssist
        </footer>
      </div>
    </main>
  );
}
