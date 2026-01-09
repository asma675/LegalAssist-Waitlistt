import MarketingShell from "../components/MarketingShell";

export const metadata = {
  title: "About • LegalAssist",
};

export default function AboutPage() {
  return (
    <MarketingShell
      active="about"
      title="About LegalAssist"
      subtitle="Built by a developer who loves both law and technology — and wanted one workspace that feels like a real firm system."
    >
      <div className="space-y-6 text-sm text-slate-700 dark:text-slate-200">
        <div>
          <p className="leading-relaxed">
            Hi, I’m <span className="font-semibold text-slate-900 dark:text-white">Asma Ahmed</span> — a Canadian citizen based in Toronto and
            an Honours Bachelor of Computer Science (Cloud Computing) student at Sheridan College.
          </p>
          <p className="mt-3 leading-relaxed">
            <span className="font-semibold text-slate-900 dark:text-white">Why LegalAssist?</span> I’ve always been fascinated by how legal work
            is structured: clients, matters, deadlines, documents, research, and strategy. At the same time, I love building
            modern software systems. LegalAssist is my way of combining those two worlds — a clean, workflow‑first platform
            that helps teams draft, review, and organize faster (while keeping proper disclaimers and attorney review in mind).
          </p>
        </div>

        <div className="glass-card glow-card rounded-2xl p-4">
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-300">What I’m building</div>
          <ul className="mt-3 space-y-2">
            <li>• Client & case management (CRM-style matters)</li>
            <li>• AI document generation (contracts, letters, memos, etc.)</li>
            <li>• Document analysis (beta) for clause/issue spotting</li>
            <li>• Case strategy outputs (strengths, risks, next steps)</li>
            <li>• Export, templates, and team workflows (planned)</li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900 dark:text-white">Quick bio</div>
          <ul className="mt-3 space-y-2">
            <li>• Founder & Lead Software Developer — LegalAssist (Jan 2026 – Present)</li>
            <li>• IBM Z Student Ambassador (Dec 2025 – Present)</li>
            <li>• Hackathon Team Lead & Software Engineer (Sept 2025 – Present)</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs text-amber-900">
          LegalAssist is an informational software tool. It does not provide legal advice and does not create an attorney‑client
          relationship. Always have qualified counsel review any output.
        </div>
      </div>
    </MarketingShell>
  );
}
