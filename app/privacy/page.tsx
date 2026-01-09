import MarketingShell from "../components/MarketingShell";

export const metadata = {
  title: "Privacy Policy • LegalAssist",
};

export default function PrivacyPage() {
  return (
    <MarketingShell
      active="privacy"
      title="Privacy Policy"
      subtitle="Last updated: January 8, 2026"
    >
      <div className="prose prose-slate max-w-none text-slate-700 dark:prose-invert dark:text-slate-200">
        <p>
          When you use LegalAssist, you trust us with information related to your legal workflows. This Privacy Policy explains what we collect, why we collect it, and the choices you have.
        </p>

        <h3>1) Scope</h3>
        <p>
          This Policy applies to the LegalAssist website and any beta product experiences we operate (collectively, the “Services”). It does not apply to third‑party sites that you may access through links.
        </p>

        <h3>2) Information we collect</h3>
        <ul>
          <li>
            <strong>Waitlist data:</strong> information you submit via our waitlist form (e.g., name, email, role, and feature requests).
          </li>
          <li>
            <strong>Usage data:</strong> basic analytics like page views and performance metrics to help improve reliability and UX.
          </li>
          <li>
            <strong>Communications:</strong> messages you send us (support, feedback, partnership inquiries).
          </li>
        </ul>

        <h3>3) How we use information</h3>
        <ul>
          <li>To operate and improve the Services (performance, bug fixes, UX improvements).</li>
          <li>To respond to your requests and provide support.</li>
          <li>To invite you to beta access and send product updates (you can opt out anytime).</li>
        </ul>

        <h3>4) Sharing</h3>
        <p>
          We do not sell your personal information. We may share information with service providers that help us run the website (hosting, analytics, email), under confidentiality and security obligations.
        </p>

        <h3>5) Security</h3>
        <p>
          We use reasonable safeguards to protect data (e.g., access controls and encrypted connections). No system is 100% secure, so avoid submitting sensitive information you would not want processed.
        </p>

        <h3>6) Your choices</h3>
        <ul>
          <li>You can request access, correction, or deletion of your waitlist information by emailing us.</li>
          <li>You can unsubscribe from non‑essential emails using the unsubscribe link (where available).</li>
        </ul>

        <h3>7) Contact</h3>
        <p>
          Questions about privacy? Email <a href="mailto:asma.ahmed.work@gmail.com">asma.ahmed.work@gmail.com</a>.
        </p>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-900">
          LegalAssist does not provide legal advice and does not create an attorney-client relationship.
        </div>
      </div>
    </MarketingShell>
  );
}
