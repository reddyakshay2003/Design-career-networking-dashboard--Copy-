import { useState } from "react";

// ── Mock Data ─────────────────────────────────────────────────────────────────
const PENDING_TIMESHEETS = [
  {
    id: "TS-092",
    candidateName: "Akshay Reddy",
    role: "Frontend Engineer (Creative Tech)",
    date: "Sep 7, 2026",
    hours: 7.5,
    task: "Developed interactive components for the new pricing page.",
    status: "Pending",
  },
  {
    id: "TS-091",
    candidateName: "Akshay Reddy",
    role: "Frontend Engineer (Creative Tech)",
    date: "Sep 6, 2026",
    hours: 8.0,
    task: "Code review and bug fixes for navigation sidebar.",
    status: "Pending",
  },
  {
    id: "TS-085",
    candidateName: "Elena Rostova",
    role: "UX Engineering Placement",
    date: "Sep 5, 2026",
    hours: 6.0,
    task: "User flow wireframing and accessibility audit.",
    status: "Pending",
  },
];

const AUDIT_HISTORY = [
  {
    id: "TS-080",
    candidateName: "Akshay Reddy",
    role: "Frontend Engineer (Creative Tech)",
    date: "Sep 4, 2026",
    hours: 6.5,
    task: "Design system audit and documentation updates.",
    status: "Approved",
    reviewedDate: "Sep 5, 2026",
  },
  {
    id: "TS-078",
    candidateName: "Marcus Thorne",
    role: "Industrial Design Intern",
    date: "Sep 2, 2026",
    hours: 8.0,
    task: "CAD modeling for new hardware enclosure.",
    status: "Approved",
    reviewedDate: "Sep 3, 2026",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function TimesheetAudit() {
  const [timesheets, setTimesheets] = useState(PENDING_TIMESHEETS);
  const [history, setHistory] = useState(AUDIT_HISTORY);

  const handleAction = (id: string, action: "Approved" | "Rejected") => {
    const item = timesheets.find(t => t.id === id);
    if (!item) return;

    // Remove from pending
    setTimesheets(prev => prev.filter(t => t.id !== id));

    // Add to history
    setHistory(prev => [
      { ...item, status: action, reviewedDate: "Today, 2:15 PM" },
      ...prev
    ]);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto selection:bg-[#FF6B6B]/20 selection:text-[#0F172A]">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] tracking-tight">
          Timesheet Audit
        </h1>
        <p className="mt-1.5 text-slate-500 text-sm md:text-base max-w-2xl">
          Approve reported candidate hours, monitor placement compliance, and maintain complete visibility over active student workloads.
        </p>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Pending Approval</p>
            <p className="text-3xl font-bold text-[#0F172A]">{timesheets.reduce((acc, t) => acc + t.hours, 0)}<span className="text-sm font-medium text-slate-400 ml-1">hrs</span></p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Audited This Month</p>
            <p className="text-3xl font-bold text-[#0F172A]">14.5<span className="text-sm font-medium text-slate-400 ml-1">hrs</span></p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Active Placements</p>
            <p className="text-3xl font-bold text-[#0F172A]">5</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#FF6B6B] flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </div>
        </div>
      </div>

      {/* Pending Audit Section */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <h3 className="text-[#0F172A] font-bold text-base flex items-center gap-2">
            Pending Timesheet Approvals
            <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
              {timesheets.length}
            </span>
          </h3>
          <button className="text-sm font-semibold text-[#FF6B6B] hover:text-[#0F172A] transition-colors">
            Approve All
          </button>
        </div>

        <div className="divide-y divide-slate-100">
          {timesheets.length > 0 ? (
            timesheets.map((ts) => (
              <div key={ts.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-slate-50/50 transition-colors">
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-3">
                    <h4 className="text-base font-bold text-[#0F172A]">{ts.candidateName}</h4>
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-slate-100 text-slate-600 border border-slate-200">
                      {ts.id}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-500">{ts.role}</p>
                  <p className="text-sm text-slate-700 font-medium pt-1">"{ts.task}"</p>
                  <p className="text-xs text-slate-400">Date logged: {ts.date}</p>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 min-w-[240px]">
                  <div className="text-left md:text-right">
                    <p className="text-2xl font-black text-[#0F172A]">{ts.hours}<span className="text-sm font-bold text-slate-400 ml-0.5">h</span></p>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Reported</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleAction(ts.id, "Rejected")}
                      className="px-4 py-2 bg-white border border-red-200 text-red-600 hover:bg-red-50 text-xs font-semibold rounded-xl transition-all shadow-sm"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => handleAction(ts.id, "Approved")}
                      className="px-4 py-2 bg-[#0F172A] text-white hover:bg-[#1e293b] text-xs font-semibold rounded-xl transition-all shadow-sm"
                    >
                      Approve
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="px-6 py-12 text-center">
              <p className="text-sm text-slate-500 font-medium">All caught up! No pending timesheets require your audit.</p>
            </div>
          )}
        </div>
      </div>

      {/* Audit History */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/50">
          <h3 className="text-[#0F172A] font-bold text-base">Audit Trail & History</h3>
        </div>

        <div className="divide-y divide-slate-100">
          {history.map((item) => (
            <div key={item.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                    item.status === "Approved" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-red-50 text-red-700 border border-red-200"
                  }`}>
                    {item.status}
                  </span>
                  <h4 className="text-sm font-bold text-[#0F172A]">{item.candidateName}</h4>
                  <span className="text-xs text-slate-400">• ID: {item.id}</span>
                </div>
                <p className="text-xs text-slate-500">{item.task}</p>
              </div>

              <div className="text-left md:text-right flex items-center justify-between md:justify-end gap-6">
                <div>
                  <p className="text-lg font-bold text-[#0F172A]">{item.hours}h</p>
                  <p className="text-[11px] text-slate-400">Reviewed: {item.reviewedDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}