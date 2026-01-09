import Image from "next/image";
import Link from "next/link";

import JoinToast from "./components/JoinToast";
import PricingSection from "./components/PricingSection";
import WaitlistModal from "./components/WaitlistModal";
import ThemeToggle from "./components/ThemeToggle";
import AnimatedText from "./components/AnimatedText";
import {
  WAITLIST_FORM_URL,
  YOUTUBE_DEMO_URL,
  YOUTUBE_EMBED_URL,
} from "./lib/constants";

const screens = [
  { src: "/screens/app-1.png", title: "LegalAssist screen 1" },
  { src: "/screens/app-2.png", title: "LegalAssist screen 2" },
  { src: "/screens/app-3.png", title: "LegalAssist screen 3" },
  { src: "/screens/app-4.png", title: "LegalAssist screen 4" },
  { src: "/screens/app-5.png", title: "LegalAssist screen 5" },
  { src: "/screens/app-6.png", title: "LegalAssist screen 6" },
  { src: "/screens/app-7.png", title: "LegalAssist screen 7" },
];

export default function Page() {
  return (
    <main className="min-h-screen">
      <JoinToast />
      <WaitlistModal waitlistUrl={WAITLIST_FORM_URL} />

      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6 md:px-6 md:py-8">
        {/* Sidebar */}
        <aside className="hidden w-[270px] shrink-0 md:block">
          <div className="sticky top-6 space-y-4">
            <div className="rounded-3xl bg-slate-950/95 p-5 text-white shadow-soft ring-1 ring-white/10">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-ink-500 to-ink-700 shadow-glow">
                  <span className="text-lg">⚖️</span>
                </div>
                <div>
                  <div className="text-base font-semibold leading-tight">
                    LegalAssist
                  </div>
                  <div className="text-xs text-white/70">AI Legal Platform</div>
                </div>
              </div>

              <nav className="mt-5 space-y-2 text-sm">
                <a
                  className="flex items-center gap-3 rounded-2xl bg-white/10 px-3 py-2 hover:bg-white/15"
                  href="#overview"
                >
                  <span className="opacity-80">🏠</span> Overview
                </a>
                <a
                  className="flex items-center gap-3 rounded-2xl px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white"
                  href="#features"
                >
                  <span className="opacity-80">✨</span> Features
                </a>
                <a
                  className="flex items-center gap-3 rounded-2xl px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white"
                  href="#demo"
                >
                  <span className="opacity-80">🎥</span> Demo Video
                </a>
                <a
                  className="flex items-center gap-3 rounded-2xl px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white"
                  href="#pricing"
                >
                  <span className="opacity-80">💎</span> Pricing
                </a>
                <a
                  className="flex items-center gap-3 rounded-2xl px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white"
                  href="#faq"
                >
                  <span className="opacity-80">❓</span> FAQ
                </a>
                <a
                  className="flex items-center gap-3 rounded-2xl px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white"
                  href="#screens"
                >
                  <span className="opacity-80">🖼️</span> Screens
                </a>
                <a
                  className="flex items-center gap-3 rounded-2xl px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white"
                  href="#waitlist"
                >
                  <span className="opacity-80">📝</span> Waitlist
                </a>
              </nav>

              <div className="mt-5 rounded-2xl bg-gradient-to-br from-ink-600/60 to-ink-900/40 p-4 ring-1 ring-white/10">
                <div className="text-sm font-semibold">Go Premium</div>
                <div className="mt-1 text-xs text-white/75">
                  Unlimited documents &amp; priority support
                </div>
                <a
                  href={WAITLIST_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-slate-950 hover:opacity-95"
                >
                  Get Early Access
                </a>
              </div>

              <div className="mt-5 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-xs text-white/70">Built by</div>
                <div className="text-sm font-semibold">Asma Ahmed</div>
                <div className="mt-2 text-xs text-white/70">
                  Inspired by a love for law + tech — combining both into one AI
                  legal workflow platform.
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-white/70">
                <Link className="underline hover:text-white" href="/about">
                  About
                </Link>
                <span>•</span>
                <Link className="underline hover:text-white" href="/contact">
                  Contact
                </Link>
                <span>•</span>
                <Link className="underline hover:text-white" href="/privacy">
                  Privacy
                </Link>
                <span>•</span>
                <Link className="underline hover:text-white" href="/terms">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </aside>

        {/* Content */}
        <div className="flex-1 space-y-6">
          {/* Top bar */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 md:hidden">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-ink-500 to-ink-700 text-white shadow-glow">
                ⚖️
              </div>
              <div>
                <div className="font-semibold leading-tight">LegalAssist</div>
                <div className="text-xs text-slate-600">AI Legal Platform</div>
              </div>
            </div>

            <div className="ml-auto flex items-center gap-3">
              <div className="hidden items-center gap-2 md:flex">
                <Link className="nav-btn" href="/about">
                  About
                </Link>
                <Link className="nav-btn" href="/contact">
                  Contact
                </Link>
                <Link className="nav-btn" href="/privacy">
                  Privacy
                </Link>
                <Link className="nav-btn" href="/terms">
                  Terms
                </Link>
              </div>

              <ThemeToggle />

              <a
                href={WAITLIST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-gradient-to-r from-ink-600 to-ink-800 px-4 py-2 text-sm font-semibold text-white shadow-soft hover:opacity-95"
              >
                Join Waitlist
              </a>

              <a
                href="https://legal-assist.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden rounded-xl bg-white/70 px-4 py-2 text-sm font-semibold text-slate-900 shadow-soft backdrop-blur hover:bg-white md:inline-flex dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                title="Go to LegalAssist app"
              >
                Sign In
              </a>
            </div>
          </div>

          {/* Hero */}
          <section
            id="overview"
            className="rounded-[28px] border border-white/50 bg-white/70 p-6 shadow-soft backdrop-blur md:p-8"
          >
            <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-br from-slate-950 via-ink-900 to-ink-700 p-7 text-white ring-1 ring-white/10 md:p-10">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-ink-500/30 blur-3xl" />
              <div className="absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />

              <div className="relative flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 shadow-glow">
                  ⚖️
                </div>
                <div>
                  <div className="text-lg font-semibold leading-tight">
                    LegalAssist
                  </div>
                  <div className="text-xs text-white/70">AI Legal Platform</div>
                </div>
              </div>

              <div className="relative mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 ring-1 ring-white/10">
                ✨ AI-Powered Legal Platform
              </div>

              <AnimatedText
                as="h1"
                variant="type"
                speedMs={18}
                className="relative mt-4 text-3xl font-semibold tracking-tight md:text-4xl"
                text="Your intelligent legal assistant — built like a real firm system."
              />
              <AnimatedText
                as="p"
                variant="reveal"
                delayMs={120}
                className="relative mt-3 max-w-2xl text-sm text-white/80 md:text-base"
                text="Manage clients, cases, tasks, documents, and AI workflows in one place. Generate legal documents, analyze uploaded files, and get structured case strategy outputs — faster and more organized."
              />

              <div className="relative mt-6 flex flex-wrap gap-3">
                <a
                  href={WAITLIST_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:opacity-95"
                >
                  Get Early Access
                </a>
                <a
                  href="#demo"
                  className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
                >
                  Watch Demo
                </a>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {[
                { k: "Clients", v: "CRM-style" },
                { k: "Cases", v: "Matter tracking" },
                { k: "Docs", v: "Generate + store" },
                { k: "AI", v: "Analyze + strategy" },
              ].map((c) => (
                <div
                  key={c.k}
                  className="glass-card glow-card group rounded-2xl p-4 transition hover:-translate-y-0.5"
                >
                  <div className="text-xs text-slate-600 dark:text-white/70">
                    {c.k}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                    {c.v}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section
            id="features"
            className="rounded-[28px] border border-white/50 bg-white/70 p-6 shadow-soft backdrop-blur md:p-8"
          >
            <AnimatedText
              as="h2"
              variant="type"
              speedMs={18}
              text="What LegalAssist helps you do"
              className="text-2xl font-semibold tracking-tight text-slate-900"
            />
            <AnimatedText
              as="p"
              variant="reveal"
              delayMs={80}
              text="Built to mirror end-to-end legal workflows: intake → case workspace → documents → analysis."
              className="mt-2 text-sm text-slate-600"
            />

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Client & Case Management",
                  desc: "CRM-style clients and matters with clean navigation — just like a firm system.",
                },
                {
                  title: "Document Generator",
                  desc: "Generate contracts, NDAs, agreements, letters, memos, briefs, motions, and more.",
                },
                {
                  title: "Document Analyzer (Beta)",
                  desc: "Upload PDFs/images and extract key clauses + insights to speed up review.",
                },
                {
                  title: "AI Case Strategy",
                  desc: "Strengths/weaknesses + strategic recommendations in a professional format.",
                },
                {
                  title: "Tasks & Calendar",
                  desc: "Organize work with tasks and scheduling (great for matter deadlines).",
                },
                {
                  title: "Professional Disclaimers",
                  desc: "Clear boundaries: informational only, attorney review required.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="glass-card glow-card rounded-3xl p-5 transition hover:-translate-y-0.5"
                >
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    {f.title}
                  </div>
                  <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {f.desc}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-900">
              Disclaimer: LegalAssist does not provide legal advice and does not
              create an attorney-client relationship. AI outputs are
              informational and must be reviewed by a qualified attorney.
            </div>
          </section>

          {/* Demo Video */}
          <section
            id="demo"
            className="rounded-[28px] border border-white/50 bg-white/70 p-6 shadow-soft backdrop-blur md:p-8"
          >
            <AnimatedText
              as="h2"
              variant="type"
              speedMs={18}
              className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100"
              text="Demo video"
            />
            <AnimatedText
              as="p"
              variant="reveal"
              className="mt-2 text-sm text-slate-600 dark:text-slate-300"
              text="Full walkthrough: dashboard → document analysis → research → case strategy."
            />

            <div className="glass-card glow-card mt-5 overflow-hidden rounded-3xl shadow-soft">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={YOUTUBE_EMBED_URL}
                  title="LegalAssist Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="mt-4 text-sm text-slate-600">
              Prefer opening in YouTube?{" "}
              <a
                className="font-semibold text-ink-700 underline decoration-ink-300 underline-offset-4 hover:text-ink-900"
                href={YOUTUBE_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch here.
              </a>
            </div>
          </section>

          {/* Screens */}
          <section
            id="screens"
            className="rounded-[28px] border border-white/50 bg-white/70 p-6 shadow-soft backdrop-blur md:p-8 dark:border-white/10 dark:bg-slate-950/30"
          >
            <AnimatedText
              as="h2"
              variant="type"
              speedMs={18}
              className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100"
              text="App screenshots"
            />
            <AnimatedText
              as="p"
              variant="reveal"
              delayMs={80}
              className="mt-2 text-sm text-slate-600 dark:text-slate-300"
              text="Add/remove images in /public/screens."
            />
            <p className="sr-only">
              Add/remove images in{" "}
              <code className="rounded bg-slate-100 px-1">/public/screens</code>.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {screens.map((s) => (
                <div
                  key={s.src}
                  className="glass-card glow-card group overflow-hidden rounded-3xl shadow-soft transition hover:-translate-y-0.5"
                >
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={s.src}
                      alt={s.title}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing */}
          <PricingSection />

          {/* FAQ */}
          <section
            id="faq"
            className="rounded-[28px] border border-white/50 bg-white/70 p-6 shadow-soft backdrop-blur md:p-8 dark:border-white/10 dark:bg-slate-950/30"
          >
            <AnimatedText
              as="h2"
              variant="type"
              speedMs={18}
              className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100"
              text="FAQ"
            />
            <AnimatedText
              as="p"
              variant="reveal"
              delayMs={80}
              className="mt-2 text-sm text-slate-600 dark:text-slate-300"
              text="Quick answers to common questions."
            />

            <div className="mt-6 grid gap-4">
              {[
                {
                  q: "Is this legal advice?",
                  a: "No. LegalAssist does not provide legal advice and does not create an attorney-client relationship. All AI outputs are informational and must be reviewed by a qualified attorney before use.",
                },
                {
                  q: "Who is LegalAssist for?",
                  a: "Lawyers, solo practices, paralegals, and legal operations teams that want a clean workspace to manage clients/cases and accelerate drafting + review with AI.",
                },
                {
                  q: "Can I upload documents for analysis?",
                  a: "Yes — the Document Analyzer (Beta) supports uploads and returns AI-generated clause/insight summaries. Always validate results with attorney review.",
                },
                {
                  q: "How do you handle data privacy?",
                  a: "During early access, we minimize stored data and use secure infrastructure. For production, we plan clear data controls, retention policies, and firm-level settings.",
                },
                {
                  q: "When will invites go out?",
                  a: "Invites roll out in batches. Join the waitlist and we’ll email you when early access opens.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="glass-card glow-card group rounded-3xl p-5 transition"
                >
                  <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900 dark:text-white">
                    <span className="mr-2 inline-block rounded-lg bg-ink-600/10 px-2 py-1 text-xs font-semibold text-ink-800">
                      Q
                    </span>
                    {item.q}
                    <span className="float-right text-slate-400 transition-transform group-open:rotate-180">
                      ⌄
                    </span>
                  </summary>
                  <div className="mt-3 text-sm text-slate-600 dark:text-slate-200">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Waitlist */}
          <section
            id="waitlist"
            className="rounded-[28px] border border-white/50 bg-white/70 p-6 shadow-soft backdrop-blur md:p-8 dark:border-white/10 dark:bg-white/5"
          >
            <AnimatedText
              as="h2"
              variant="type"
              speedMs={18}
              className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white"
              text="Join the waitlist"
            />
            <AnimatedText
              as="p"
              variant="reveal"
              delayMs={80}
              className="mt-2 text-sm text-slate-600 dark:text-slate-200"
              text="Join the official LegalAssist early access waitlist. It takes less than a minute."
            />

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={WAITLIST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-gradient-to-r from-ink-600 to-ink-800 px-5 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95"
              >
                Join Waitlist (Google Form)
              </a>
              <div className="text-xs text-slate-500">
                No spam — just early access updates.
              </div>
            </div>

            <div className="glass-card glow-card mt-6 rounded-2xl px-4 py-3 text-xs text-slate-600 dark:text-slate-200">
              LegalAssist does not provide legal advice and does not create an
              attorney-client relationship. AI-generated content is for
              informational purposes only and must be reviewed by a qualified
              attorney.
              <span className="text-slate-500 dark:text-slate-300">
                {" "}
                © 2026 LegalAssist • Built by Asma Ahmed
              </span>
              <span className="mx-2 text-slate-400">•</span>
              <Link
                className="text-ink-700 underline decoration-ink-300 underline-offset-4 hover:text-ink-900 dark:text-ink-200 dark:hover:text-white"
                href="/privacy"
              >
                Privacy
              </Link>
              <span className="mx-2 text-slate-400">•</span>
              <Link
                className="text-ink-700 underline decoration-ink-300 underline-offset-4 hover:text-ink-900 dark:text-ink-200 dark:hover:text-white"
                href="/terms"
              >
                Terms
              </Link>
              <span className="mx-2 text-slate-400">•</span>
              <Link
                className="text-ink-700 underline decoration-ink-300 underline-offset-4 hover:text-ink-900 dark:text-ink-200 dark:hover:text-white"
                href="/contact"
              >
                Contact
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
