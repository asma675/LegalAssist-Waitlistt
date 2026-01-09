import MarketingShell from "../components/MarketingShell";

export const metadata = {
  title: "Terms • LegalAssist",
};

export default function TermsPage() {
  return (
    <MarketingShell
      active="terms"
      title="Terms of Service"
      subtitle="Last updated: January 8, 2026"
    >
      <div className="prose prose-slate max-w-none dark:prose-invert">
        <p>
          These Terms govern your use of LegalAssist (the “Service”). By accessing or using the Service,
          you agree to these Terms.
        </p>

        <h3>1) No legal advice</h3>
        <p>
          LegalAssist is an informational platform. It does not provide legal advice and does not create
          an attorney‑client relationship. Any AI‑generated output must be reviewed by a qualified
          attorney before use.
        </p>

        <h3>2) Acceptable use</h3>
        <ul>
          <li>Do not upload content you do not have the right to use.</li>
          <li>Do not attempt to compromise the Service (e.g., probing, scraping, or abuse).</li>
          <li>Do not use the Service for unlawful activities.</li>
        </ul>

        <h3>3) Accounts and access</h3>
        <p>
          If you create an account (when available), you are responsible for maintaining the
          confidentiality of your credentials and for all activity under your account.
        </p>

        <h3>4) Beta features</h3>
        <p>
          The Service may include beta features. Beta features are provided “as is” and may change,
          pause, or be removed at any time.
        </p>

        <h3>5) Intellectual property</h3>
        <p>
          LegalAssist and its branding are owned by LegalAssist. You retain rights to the content you
          upload. By uploading content, you grant us permission to process it to provide the Service.
        </p>

        <h3>6) Disclaimers</h3>
        <p>
          To the maximum extent permitted by law, the Service is provided without warranties of any
          kind, including merchantability, fitness for a particular purpose, and non‑infringement.
        </p>

        <h3>7) Limitation of liability</h3>
        <p>
          To the maximum extent permitted by law, LegalAssist will not be liable for any indirect,
          incidental, special, consequential, or punitive damages, or any loss of data, profits, or
          revenue.
        </p>

        <h3>8) Contact</h3>
        <p>
          Questions? Email <a href="mailto:asma.ahmed.work@gmail.com">asma.ahmed.work@gmail.com</a>.
        </p>
      </div>
    </MarketingShell>
  );
}
