import Link from "next/link";
import AnimatedText from "../components/AnimatedText";
import ThemeToggle from "../components/ThemeToggle";
import { WAITLIST_FORM_URL } from "../lib/constants";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#06070d] dark:via-[#070915] dark:to-[#05060b]">
      {/* Top header */}
      <header className="sticky top-0 z-30 border-b border-white/40 bg-white/60 backdrop-blur dark:border-white/10 dark:bg-slate-950/40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
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

          <div className="flex items-center gap-2">
            <nav className="hidden items-center gap-2 md:flex">
              <Link
                href="/"
                className="rounded-xl bg-white/70 px-3 py-2 text-sm font-semibold text-slate-900 shadow-soft backdrop-blur hover:bg-white dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                Home
              </Link>
              <Link
                href="/contact"
                className="rounded-xl bg-white/70 px-3 py-2 text-sm font-semibold text-slate-900 shadow-soft backdrop-blur hover:bg-white dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="rounded-xl bg-white/70 px-3 py-2 text-sm font-semibold text-slate-900 shadow-soft backdrop-blur hover:bg-white dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="rounded-xl bg-white/70 px-3 py-2 text-sm font-semibold text-slate-900 shadow-soft backdrop-blur hover:bg-white dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                Terms
              </Link>
            </nav>

            <ThemeToggle />

            {/* ✅ SIGN IN (ADDED – nothing else changed) */}
            <a
              href="https://legal-assist.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white/70 px-3 py-2 text-sm font-semibold text-slate-900 shadow-soft backdrop-blur hover:bg-white dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              Sign In
            </a>

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

      {/* Page body */}
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-10">
        <section className="rounded-[28px] border border-white/50 bg-white/70 p-6 shadow-soft backdrop-blur md:p-8 dark:border-white/10 dark:bg-white/5">
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
              text="Built to combine law + technology into one clean AI workflow."
            />

            <AnimatedText
              as="p"
              variant="reveal"
              delayMs={120}
              className="relative mt-3 max-w-3xl text-sm text-white/80 md:text-base"
              text="LegalAssist is an AI-powered platform designed to mirror real legal workflows — intake, case organization, document drafting, and structured analysis — all in one place."
            />
          </div>

          {/* Content grid */}
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="glass-card glow-card rounded-3xl p-5 transition hover:-translate-y-0.5">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                Why I built it
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                I’m{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  Asma Ahmed
                </span>{" "}
                — and I’ve always loved both{" "}
                <span className="font-semibold">law</span> and{" "}
                <span className="font-semibold">tech</span>. LegalAssist was
                inspired by that intersection: bringing structure, speed, and
                clarity to legal work.
              </p>
            </div>

            <div className="glass-card glow-card rounded-3xl p-5 transition hover:-translate-y-0.5">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                What it helps with
              </div>
              <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>• Client & case organization (firm-style workspace)</li>
                <li>• Drafting documents faster with templates + AI</li>
                <li>• Summarizing and extracting key clauses from uploads</li>
                <li>• Producing structured case strategy outputs</li>
              </ul>
            </div>

            <div className="glass-card glow-card rounded-3xl p-5 transition hover:-translate-y-0.5">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                Design principles
              </div>
              <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>• Clean, modern UI with glow + motion</li>
                <li>• Fast iteration, deploy-friendly architecture</li>
                <li>• Clear disclaimers and responsible boundaries</li>
                <li>• Accessibility-first mindset (WCAG-friendly)</li>
              </ul>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-900 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-100">
            Disclaimer: LegalAssist does not provide legal advice and does not
            create an attorney-client relationship. AI-generated content is
            informational and must be reviewed by a qualified attorney.
          </div>

          {/* Bottom actions */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
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
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>Built by Asma Ahmed</span>
            <span className="text-slate-400">•</span>
            <Link className="underline hover:text-slate-700 dark:hover:text-white" href="/privacy">
              Privacy
            </Link>
            <span className="text-slate-400">•</span>
            <Link className="underline hover:text-slate-700 dark:hover:text-white" href="/terms">
              Terms
            </Link>
            <span className="ml-auto">© 2026 LegalAssist</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
