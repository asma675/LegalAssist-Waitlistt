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
          <div className="sticky top-6">
            <div className="rounded-3xl bg-slate-950/95 p-5 text-white shadow-soft ring-1 ring-white/10">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-ink-500 to-ink-700 shadow-glow">
                  ⚖️
                </div>
                <div>
                  <div className="text-base font-semibold">LegalAssist</div>
                  <div className="text-xs text-white/70">AI Legal Platform</div>
                </div>
              </div>

              <nav className="mt-5 space-y-2 text-sm">
                {[
                  ["Overview", "#overview"],
                  ["Features", "#features"],
                  ["Demo", "#demo"],
                  ["Pricing", "#pricing"],
                  ["FAQ", "#faq"],
                  ["Screens", "#screens"],
                  ["Waitlist", "#waitlist"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-3 rounded-2xl px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white"
                  >
                    ✨ {label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </aside>

        {/* Content */}
        <div className="flex-1 space-y-6">
          {/* Top Bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:hidden">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-ink-500 to-ink-700 text-white shadow-glow">
                ⚖️
              </div>
              <span className="font-semibold">LegalAssist</span>
            </div>

            <div className="ml-auto flex items-center gap-3">
              <ThemeToggle />
              <a
                href={WAITLIST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-gradient-to-r from-ink-600 to-ink-800 px-4 py-2 text-sm font-semibold text-white shadow-soft"
              >
                Join Waitlist
              </a>
            </div>
          </div>

          {/* Hero */}
          <section
            id="overview"
            className="rounded-[28px] bg-gradient-to-br from-slate-950 via-ink-900 to-ink-700 p-8 text-white shadow-soft"
          >
            <AnimatedText
              as="h1"
              variant="type"
              speedMs={18}
              className="text-3xl font-semibold md:text-4xl"
              text="Your intelligent legal assistant — built like a real firm system."
            />

            <AnimatedText
              as="p"
              variant="reveal"
              delayMs={120}
              className="mt-3 max-w-2xl text-sm text-white/80 md:text-base"
              text="Manage clients, cases, tasks, documents, and AI workflows in one place."
            />
          </section>

          {/* Features */}
          <section id="features" className="rounded-[28px] bg-white/70 p-6 shadow-soft backdrop-blur">
            <AnimatedText
              as="h2"
              variant="type"
              speedMs={18}
              className="text-2xl font-semibold tracking-tight text-slate-900"
              text="What LegalAssist helps you do"
            />

            <AnimatedText
              as="p"
              variant="reveal"
              delayMs={80}
              className="mt-2 text-sm text-slate-600"
              text="Built to mirror real legal workflows from intake to case strategy."
            />
          </section>

          {/* Demo */}
          <section id="demo" className="rounded-[28px] bg-white/70 p-6 shadow-soft backdrop-blur">
            <AnimatedText
              as="h2"
              variant="type"
              speedMs={18}
              className="text-2xl font-semibold text-slate-900"
              text="Demo video"
            />

            <div className="mt-4 aspect-video overflow-hidden rounded-3xl">
              <iframe
                className="h-full w-full"
                src={YOUTUBE_EMBED_URL}
                title="LegalAssist Demo"
                allowFullScreen
              />
            </div>

            <a
              href={YOUTUBE_DEMO_URL}
              target="_blank"
              className="mt-3 inline-block text-sm font-semibold text-ink-700 underline"
            >
              Watch on YouTube →
            </a>
          </section>

          {/* Screens */}
          <section id="screens" className="rounded-[28px] bg-white/70 p-6 shadow-soft backdrop-blur">
            <AnimatedText
              as="h2"
              variant="type"
              speedMs={18}
              className="text-2xl font-semibold text-slate-900"
              text="App screenshots"
            />

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {screens.map((s) => (
                <div key={s.src} className="overflow-hidden rounded-3xl shadow-soft">
                  <Image
                    src={s.src}
                    alt={s.title}
                    width={1200}
                    height={675}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Pricing */}
          <PricingSection />

          {/* Footer / Waitlist */}
          <section id="waitlist" className="rounded-[28px] bg-white/70 p-6 shadow-soft backdrop-blur">
            <AnimatedText
              as="h2"
              variant="type"
              speedMs={18}
              className="text-2xl font-semibold text-slate-900"
              text="Join the waitlist"
            />

            <a
              href={WAITLIST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-xl bg-gradient-to-r from-ink-600 to-ink-800 px-5 py-3 text-sm font-semibold text-white"
            >
              Join Early Access
            </a>

            <div className="mt-6 text-xs text-slate-500">
              © 2026 LegalAssist • Built by Asma Ahmed •{" "}
              <Link href="/privacy" className="underline">
                Privacy
              </Link>{" "}
              •{" "}
              <Link href="/terms" className="underline">
                Terms
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
