import { useState } from "react";
import { Link } from "react-router-dom";

// ── Mock Data ─────────────────────────────────────────────────────────────────
const PENDING_VERIFICATIONS = [
  {
    id: "EMP-401",
    companyName: "Acme Studios",
    sector: "Product & UX Design",
    contactName: "Sarah Jenkins",
    email: "sarah@acmestudios.com",
    submittedDate: "Sep 7, 2026",
    status: "Pending",
  },
  {
    id: "EMP-402",
    companyName: "Vortex Interactive",
    sector: "Creative Technology",
    contactName: "Marcus Vance",
    email: "m.vance@vortex.io",
    submittedDate: "Sep 6, 2026",
    status: "Pending",
  },
];

const PORTFOLIO_AUDITS = [
  {
    id: "AUD-205",
    candidateName: "Akshay Reddy",
    program: "MSc Computer Science",
    focus: "Frontend & AI Systems",
    submissionDate: "Sep 5, 2026",
    status: "Requires Review",
  },
  {
    id: "AUD-206",
    candidateName: "Elena Rostova",
    program: "BSc Product Design",
    focus: "UX Engineering",
    submissionDate: "Sep 4, 2026",
    status: "Approved",
  },
];

export default function AdvisorDashboard() {
  const [employers, setEmployers] = useState(PENDING_VERIFICATIONS);
  const [portfolios, setPortfolios] = useState(PORTFOLIO_AUDITS);

  const handleEmployerAction = (id: string, decision: "Verified" | "Rejected") => {
    setEmployers(prev => prev.filter(e => e.id !== id));
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto selection:bg-indigo-500/20 selection:text-slate-900">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Academic Supervisor Dashboard
          </h1>
          <p className="mt-1.5 text-slate-500 text-sm md:text-base">
            Support candidates, verify industry employers, and help maintain rigorous pathway standards.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/advisor/employers"
            className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/15 flex items-center gap-2"
          >
            Review Employers ({employers.length})
          </Link>
        </div>
      </div>

      {/* Top Metrics Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Pending Employers</p>
            <p className="text-3xl font-bold text-slate-900">{employers.length}</p>
            <p className="text-xs font-medium text-amber-600 mt-1">Requires vetting</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Portfolio Audits</p>
            <p className="text-3xl font-bold text-slate-900">{portfolios.length}</p>
            <p className="text-xs font-medium text-indigo-600 mt-1">1 pending review</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Active Placements</p>
            <p className="text-3xl font-bold text-slate-900">42</p>
            <p className="text-xs font-medium text-emerald-600 mt-1">100% compliant</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Employer Verification Queue */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col">
          <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <h3 className="text-slate-900 font-bold text-base">Employer Verification Queue</h3>
            <Link to="/advisor/employers" className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
              View all
            </Link>
          </div>

          <div className="divide-y divide-slate-100 flex-1">
            {employers.length > 0 ? (
              employers.map((emp) => (
                <div key={emp.id} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h4 className="text-sm font-bold text-slate-900">{emp.companyName}</h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200 uppercase tracking-wider">
                        {emp.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">{emp.sector} • Contact: {emp.contactName} ({emp.email})</p>
                    <p className="text-[11px] text-slate-400">Submitted: {emp.submittedDate}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEmployerAction(emp.id, "Rejected")}
                      className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold rounded-xl shadow-sm"
                    >
                      Decline
                    </button>
                    <button
                      onClick={() => handleEmployerAction(emp.id, "Verified")}
                      className="px-3 py-1.5 bg-indigo-600 text-white hover:bg-indigo-700 text-xs font-semibold rounded-xl shadow-sm"
                    >
                      Verify
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-12 text-center text-slate-500 text-sm">
                All employer verification requests have been cleared.
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Portfolio Audits */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col">
          <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <h3 className="text-slate-900 font-bold text-base">Candidate Portfolio Audits</h3>
            <Link to="/advisor/portfolios" className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">
              Manage
            </Link>
          </div>

          <div className="divide-y divide-slate-100 flex-1">
            {portfolios.map((port) => (
              <div key={port.id} className="p-6 hover:bg-slate-50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-sm font-bold text-slate-900">{port.candidateName}</h4>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                    port.status === 'Approved' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                  }`}>
                    {port.status}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium mb-1">{port.program} • {port.focus}</p>
                <p className="text-[11px] text-slate-400 mb-4">Submitted: {port.submissionDate}</p>

                <button className="w-full py-2 bg-slate-100 hover:bg-indigo-600 hover:text-white text-slate-700 text-xs font-semibold rounded-xl transition-all shadow-sm">
                  Review Submission
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}