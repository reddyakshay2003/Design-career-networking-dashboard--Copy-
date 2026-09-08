import { useState } from "react";

// ── Mock Data ─────────────────────────────────────────────────────────────────
const PORTFOLIO_SUBMISSIONS = [
  {
    id: "AUD-205",
    candidateName: "Akshay Reddy",
    program: "MSc Computer Science",
    focus: "Frontend & AI Systems",
    submissionDate: "Sep 5, 2026",
    status: "Pending Review",
    items: "5 Projects, 2 Case Studies",
  },
  {
    id: "AUD-206",
    candidateName: "Elena Rostova",
    program: "BSc Product Design",
    focus: "UX Engineering & Accessibility",
    submissionDate: "Sep 4, 2026",
    status: "Pending Review",
    items: "4 Case Studies, Interactive Prototyping",
  },
  {
    id: "AUD-201",
    candidateName: "Marcus Thorne",
    program: "BA Industrial Design",
    focus: "CAD & Physical Prototyping",
    submissionDate: "Aug 29, 2026",
    status: "Changes Requested",
    items: "3 Projects",
  },
];

const COMPLETED_AUDITS = [
  {
    id: "AUD-198",
    candidateName: "Sarah Jenkins",
    program: "MSc UX Design",
    focus: "Design Systems & Mobile Apps",
    auditDate: "Sep 1, 2026",
    status: "Approved",
    rating: "Distinction",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function PortfolioAudit() {
  const [pendingSubmissions, setPendingSubmissions] = useState(PORTFOLIO_SUBMISSIONS);
  const [completed, setCompleted] = useState(COMPLETED_AUDITS);

  const handleAuditAction = (id: string, decision: "Approved" | "Changes Requested") => {
    const item = pendingSubmissions.find(p => p.id === id);
    if (!item) return;

    // Remove from pending
    setPendingSubmissions(prev => prev.filter(p => p.id !== id));

    // Add to completed
    setCompleted(prev => [
      {
        id: item.id,
        candidateName: item.candidateName,
        program: item.program,
        focus: item.focus,
        auditDate: "Today, 4:15 PM",
        status: decision,
        rating: decision === "Approved" ? "Approved" : "Revision Needed",
      },
      ...prev,
    ]);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto selection:bg-indigo-500/20 selection:text-slate-900">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Portfolio Audit & Mentorship
          </h1>
          <p className="mt-1.5 text-slate-500 text-sm md:text-base max-w-2xl">
            Help candidates strengthen their portfolios, provide structured feedback, and verify work readiness for Docklands Creative Connect partners.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-4 py-2 bg-indigo-50 text-indigo-700 font-bold text-xs rounded-xl border border-indigo-200">
            {pendingSubmissions.length} Portfolios Awaiting Audit
          </span>
        </div>
      </div>

      {/* Pending Submissions Section */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <h3 className="text-slate-900 font-bold text-base flex items-center gap-2">
            Pending Portfolio Submissions
            <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800">
              {pendingSubmissions.length}
            </span>
          </h3>
          <span className="text-xs font-semibold text-slate-400">Review queue</span>
        </div>

        <div className="divide-y divide-slate-100">
          {pendingSubmissions.length > 0 ? (
            pendingSubmissions.map((sub) => (
              <div key={sub.id} className="p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-slate-50/50 transition-colors">
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-3">
                    <h4 className="text-base font-bold text-slate-900">{sub.candidateName}</h4>
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-slate-100 text-slate-600 border border-slate-200">
                      {sub.id}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                      {sub.status}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-500">
                    Program: <span className="text-slate-700">{sub.program}</span> • Focus: <span className="text-slate-700">{sub.focus}</span>
                  </p>
                  <p className="text-xs text-slate-600 font-medium">
                    Content: <span className="text-slate-800">{sub.items}</span>
                  </p>
                  <p className="text-xs text-slate-400">Submitted: {sub.submissionDate}</p>
                </div>

                <div className="flex items-center justify-between lg:justify-end gap-3 min-w-[280px]">
                  <button
                    onClick={() => handleAuditAction(sub.id, "Changes Requested")}
                    className="px-4 py-2.5 bg-white border border-amber-200 text-amber-700 hover:bg-amber-50 text-xs font-semibold rounded-xl transition-all shadow-sm"
                  >
                    Request Revision
                  </button>
                  <button
                    onClick={() => handleAuditAction(sub.id, "Approved")}
                    className="px-5 py-2.5 bg-indigo-600 text-white hover:bg-indigo-700 text-xs font-semibold rounded-xl transition-all shadow-sm shadow-indigo-600/15"
                  >
                    Approve & Verify
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="px-6 py-12 text-center">
              <p className="text-sm text-slate-500 font-medium">Fantastic job! All candidate portfolios have been successfully audited.</p>
            </div>
          )}
        </div>
      </div>

      {/* Completed Audits History */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
          <h3 className="text-slate-900 font-bold text-base">Completed Audits ({completed.length})</h3>
          <span className="text-xs font-semibold text-emerald-600">Archived Feedbacks</span>
        </div>

        <div className="divide-y divide-slate-100">
          {completed.map((item) => (
            <div key={item.id} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                    item.status === "Approved" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-amber-50 text-amber-700 border border-amber-200"
                  }`}>
                    {item.status}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">{item.candidateName}</h4>
                  <span className="text-xs text-slate-400">• ID: {item.id}</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">{item.program} • {item.focus}</p>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-left sm:text-right">
                  <p className="text-sm font-bold text-slate-900">{item.rating}</p>
                  <p className="text-[11px] text-slate-400">Audited: {item.auditDate}</p>
                </div>
                <button className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-all">
                  View Feedback
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}