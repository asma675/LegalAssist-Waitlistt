import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import AnimatedText from "./AnimatedText";
import { WAITLIST_FORM_URL } from "../lib/constants";

const NavLink = ({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active?: boolean;
}) => (
  <Link
    href={href}
    className={
      active
        ? "flex items-center gap-3 rounded-2xl bg-white/10 px-3 py-2 hover:bg-white/15"
        : "flex items-center gap-3 rounded-2xl px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white"
    }
  >
    {label}
  </Link>
);

export default function MarketingShell({
  active,
  title,
  subtitle,
  children,
}: {
  active?: "about" | "contact" | "privacy" | "terms";
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6 md:px-6 md:py-8">
        {/* Sidebar */}
        <aside className="hidden w-[270px] shrink-0 md:block">
          <div className="sticky top-6 space-y-4">
            <div className="rounded-3xl bg-slate-950/95 p-5 text-white shadow-soft glow-card">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-ink-500 to-ink-700 shadow-glow">
                  <span className="text-lg">⚖️</span>
                </div>
                <div>
                  <div className="text-base font-semibold leading-tight">LegalAssist</div>
                  <div className="text-xs text-white/70">AI Legal Platform</div>
                </div>
              </div>

              <nav className="mt-5 space-y-2 text-sm">
                <NavLink href="/" label="🏠 Home" />
                <NavLink href="/about" label="👋 About" active={active === "about"} />
                <NavLink href="/contact" label="✉️ Contact" active={active === "contact"} />
                <NavLink href="/privacy" label="🔒 Privacy" active={active === "privacy"} />
                <NavLink href="/terms" label="📄 Terms" active={active === "terms"} />
              </nav>

              <div className="mt-5 rounded-2xl bg-gradient-to-br from-ink-600/60 to-ink-900/40 p-4">
                <div className="text-sm font-semibold">Get early access</div>
                <div className="mt-1 text-xs text-white/75">Join the official LegalAssist waitlist.</div>
                <a
                  href={WAITLIST_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-slate-950 hover:opacity-95"
                >
                  Join Waitlist
                </a>
              </div>
            </div>

          </div>
        </aside>

        {/* Content */}
        <div className="flex-1 space-y-6">
          {/* Top bar */}
          <div className="flex items-center justify-between gap-4">
            <div className="md:hidden flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-ink-500 to-ink-700 text-white shadow-glow">
                ⚖️
              </div>
              <div>
                <div className="font-semibold leading-tight text-slate-900 dark:text-slate-100">LegalAssist</div>
                <div className="text-xs text-slate-600 dark:text-slate-300">AI Legal Platform</div>
              </div>
            </div>

            <div className="ml-auto flex items-center gap-3">
              <div className="hidden items-center gap-2 md:flex">
                <Link href="/about" className="rounded-xl bg-white/60 px-3 py-2 text-sm font-semibold text-slate-900 shadow-soft backdrop-blur hover:bg-white dark:bg-slate-900/40 dark:text-slate-100 dark:hover:bg-slate-900/55">
                  About
                </Link>
                <Link href="/contact" className="rounded-xl bg-white/60 px-3 py-2 text-sm font-semibold text-slate-900 shadow-soft backdrop-blur hover:bg-white dark:bg-slate-900/40 dark:text-slate-100 dark:hover:bg-slate-900/55">
                  Contact
                </Link>
                <Link href="/privacy" className="rounded-xl bg-white/60 px-3 py-2 text-sm font-semibold text-slate-900 shadow-soft backdrop-blur hover:bg-white dark:bg-slate-900/40 dark:text-slate-100 dark:hover:bg-slate-900/55">
                  Privacy
                </Link>
                <Link href="/terms" className="rounded-xl bg-white/60 px-3 py-2 text-sm font-semibold text-slate-900 shadow-soft backdrop-blur hover:bg-white dark:bg-slate-900/40 dark:text-slate-100 dark:hover:bg-slate-900/55">
                  Terms
                </Link>
              </div>
              <a
                href={WAITLIST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-gradient-to-r from-ink-600 to-ink-800 px-4 py-2 text-sm font-semibold text-white shadow-glow hover:opacity-95"
              >
                Join Waitlist
              </a>
              <ThemeToggle />
            </div>
          </div>

          <section className="rounded-[28px] border border-white/50 bg-white/70 p-6 shadow-soft backdrop-blur md:p-8 dark:border-white/10 dark:bg-slate-950/30">
            <AnimatedText
              as="h1"
              variant="type"
              text={title}
              className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl dark:text-slate-100"
              typeSpeedMs={18}
            />
            {subtitle ? (
              <AnimatedText
                as="p"
                variant="reveal"
                text={subtitle}
                className="mt-2 text-sm text-slate-600 md:text-base dark:text-slate-300"
                delayMs={120}
              />
            ) : null}

            <div className="mt-6 glass-card glow-card p-5 md:p-6">
              {children}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
              <div>
                © 2026 LegalAssist • Built by Asma Ahmed • LegalAssist does not provide legal advice and does not create an attorney-client relationship.
              </div>
              <div className="flex items-center gap-3">
                <Link href="/about" className="hover:text-slate-700 dark:hover:text-slate-200">
                  About
                </Link>
                <Link href="/contact" className="hover:text-slate-700 dark:hover:text-slate-200">
                  Contact
                </Link>
                <Link href="/privacy" className="hover:text-slate-700 dark:hover:text-slate-200">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-slate-700 dark:hover:text-slate-200">
                  Terms
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
