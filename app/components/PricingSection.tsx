import { WAITLIST_FORM_URL } from "../lib/constants";
import AnimatedText from "./AnimatedText";

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="rounded-[28px] border border-white/50 bg-white/70 p-6 shadow-soft backdrop-blur md:p-8 dark:border-white/10 dark:bg-white/5"
    >
      <AnimatedText
        as="h2"
        variant="type"
        speedMs={18}
        className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100"
        text="Simple, Transparent Pricing"
      />
      <AnimatedText
        as="p"
        variant="reveal"
        delayMs={80}
        className="mt-2 text-sm text-slate-600 dark:text-slate-300"
        text="Choose the plan that fits your practice. All plans include a 14-day free trial."
      />

      {/* Toggle (visual only) */}
      <div className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-white/60 bg-white/60 p-1 backdrop-blur dark:border-white/10 dark:bg-white/5">
        <button
          type="button"
          className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-soft dark:bg-white/10 dark:text-slate-100"
        >
          Monthly
        </button>
        <button
          type="button"
          className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-white/60 dark:text-slate-200 dark:hover:bg-white/10"
          title="Pricing shown below reflects annual billing"
        >
          Annual{" "}
          <span className="ml-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-200">
            Save 20%
          </span>
        </button>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {/* Starter */}
        <div className="glass-card glow-card p-6">
          <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">Starter</div>
          <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">Perfect for solo practitioners</div>

          <div className="mt-5 flex items-end gap-2">
            <div className="text-4xl font-semibold text-slate-900 dark:text-slate-100">$39</div>
            <div className="pb-1 text-sm font-semibold text-slate-600 dark:text-slate-300">/month</div>
          </div>
          <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">Billed $468/year</div>

          <a
            href={WAITLIST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border border-ink-200 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-slate-100 dark:hover:bg-white/15"
          >
            Start Free Trial
          </a>

          <ul className="mt-6 space-y-2 text-sm text-slate-700 dark:text-slate-200">
            <li>• 50 document generations/month</li>
            <li>• 20 document analyses/month</li>
            <li>• Unlimited case analyses</li>
            <li>• Basic legal research</li>
            <li>• Email support</li>
            <li>• HTML export</li>
          </ul>
        </div>

        {/* Professional (Most Popular) */}
        <div className="glass-card glow-card relative overflow-hidden p-6">
          <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-ink-500/25 blur-2xl" />
          <div className="inline-flex items-center gap-2 rounded-full bg-ink-600/10 px-3 py-1 text-xs font-semibold text-ink-800 dark:bg-ink-500/15 dark:text-ink-200">
            Most Popular
          </div>

          <div className="mt-3 text-sm font-semibold text-slate-900 dark:text-slate-100">Professional</div>
          <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">Best for small law firms</div>

          <div className="mt-5 flex items-end gap-2">
            <div className="text-4xl font-semibold text-slate-900 dark:text-slate-100">$119</div>
            <div className="pb-1 text-sm font-semibold text-slate-600 dark:text-slate-300">/month</div>
          </div>
          <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">Billed $1428/year</div>

          <a
            href={WAITLIST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-ink-600 to-ink-800 px-4 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95"
          >
            Start Free Trial
          </a>

          <ul className="mt-6 space-y-2 text-sm text-slate-700 dark:text-slate-200">
            <li>• 100 document generations/month</li>
            <li>• 50 document analyses/month</li>
            <li>• Unlimited case analyses</li>
            <li>• Advanced legal research</li>
            <li>• Priority support</li>
            <li>• PDF &amp; DOCX export</li>
            <li>• Custom templates</li>
            <li>• Team collaboration (3 users)</li>
          </ul>
        </div>

        {/* Enterprise */}
        <div className="glass-card glow-card p-6">
          <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">Enterprise</div>
          <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">For large firms &amp; legal departments</div>

          <div className="mt-5 flex items-end gap-2">
            <div className="text-4xl font-semibold text-slate-900 dark:text-slate-100">$399</div>
            <div className="pb-1 text-sm font-semibold text-slate-600 dark:text-slate-300">/month</div>
          </div>
          <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">Billed $4788/year</div>

          <a
            href={WAITLIST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border border-ink-200 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-slate-100 dark:hover:bg-white/15"
          >
            Contact Sales
          </a>

          <ul className="mt-6 space-y-2 text-sm text-slate-700 dark:text-slate-200">
            <li>• Unlimited document generations</li>
            <li>• Unlimited document analyses</li>
            <li>• Unlimited case analyses</li>
            <li>• Priority AI processing</li>
            <li>• Dedicated support manager</li>
            <li>• All export formats</li>
            <li>• Custom integrations</li>
            <li>• Unlimited team members</li>
            <li>• SSO &amp; advanced security</li>
            <li>• Custom AI training</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 text-xs text-slate-500 dark:text-slate-400">
        * Pricing shown reflects annual billing (14-day free trial included). Waitlist members get early access and launch offers.
      </div>
    </section>
  );
}
