import { useState } from "react";

// ── Mock Data ─────────────────────────────────────────────────────────────────
const RECENT_LOGS = [
  {
    id: "TS-092",
    date: "Sep 7, 2026",
    project: "Framer - Creative Tech Placement",
    hours: 7.5,
    task: "Developed interactive components for the new pricing page.",
    status: "Pending",
  },
  {
    id: "TS-091",
    date: "Sep 6, 2026",
    project: "Framer - Creative Tech Placement",
    hours: 8.0,
    task: "Code review and bug fixes for navigation sidebar.",
    status: "Pending",
  },
  {
    id: "TS-090",
    date: "Sep 4, 2026",
    project: "Framer - Creative Tech Placement",
    hours: 6.5,
    task: "Design system audit and documentation updates.",
    status: "Approved",
  },
  {
    id: "TS-089",
    date: "Sep 3, 2026",
    project: "Spotify - UX Engineering (Freelance)",
    hours: 4.0,
    task: "Prototyped micro-interactions for the playlist transition.",
    status: "Approved",
  },
  {
    id: "TS-088",
    date: "Aug 30, 2026",
    project: "Framer - Creative Tech Placement",
    hours: 8.0,
    task: "Initial setup of the animation library.",
    status: "Rejected",
    note: "Please split this entry into morning and afternoon tasks.",
  },
];

const STATUS_CONFIG: Record<string, { bg: string; text: string; border: string; icon: JSX.Element }> = {
  Approved: { 
    bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200",
    icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
  },
  Pending: { 
    bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200",
    icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  Rejected: { 
    bg: "bg-red-50", text: "text-red-700", border: "border-red-200",
    icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
  },
};

// ── Component ─────────────────────────────────────────────────────────────────
export default function TimesheetLog() {
  const [date, setDate] = useState("");
  const [project, setProject] = useState("");
  const [hours, setHours] = useState("");
  const [task, setTask] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to submit new timesheet would go here
    alert("Timesheet entry submitted for approval!");
    setDate(""); setHours(""); setTask(""); // Reset form
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          Timesheet Log
        </h1>
        <p className="mt-1.5 text-slate-500 text-sm md:text-base max-w-2xl">
          Record your placement and freelance project hours. All entries require employer or advisor approval.
        </p>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Hours This Week</p>
            <p className="text-3xl font-bold text-slate-900">15.5<span className="text-sm font-medium text-slate-400 ml-1">hrs</span></p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#10B981] flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Pending Approval</p>
            <p className="text-3xl font-bold text-slate-900">15.5<span className="text-sm font-medium text-slate-400 ml-1">hrs</span></p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Total Approved</p>
            <p className="text-3xl font-bold text-slate-900">124<span className="text-sm font-medium text-slate-400 ml-1">hrs</span></p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Log Entry Form */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm sticky top-6">
          <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-2">Log New Hours</h3>
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Date</label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:bg-white transition-all text-slate-700"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Placement / Project</label>
              <select
                required
                value={project}
                onChange={(e) => setProject(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:bg-white transition-all text-slate-700"
              >
                <option value="" disabled>Select project...</option>
                <option value="framer">Framer - Creative Tech Placement</option>
                <option value="spotify">Spotify - UX Engineering (Freelance)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Hours Worked</label>
              <input
                type="number"
                step="0.5"
                min="0.5"
                max="24"
                required
                placeholder="e.g. 7.5"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Tasks / Description</label>
              <textarea
                rows={3}
                required
                placeholder="Briefly describe the work completed..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:bg-white transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-[#064E3B] hover:bg-[#064E3B]/90 text-white font-semibold py-3.5 px-4 rounded-xl shadow-lg shadow-[#064E3B]/15 transition-all text-sm"
            >
              Submit Timesheet
            </button>
          </form>
        </div>

        {/* Right Column: Timesheet History */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col">
          <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <h3 className="text-slate-900 font-bold text-base">Recent Submissions</h3>
            <button className="text-sm font-semibold text-[#10B981] hover:text-[#064E3B] transition-colors flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Export CSV
            </button>
          </div>
          
          <div className="divide-y divide-slate-100 flex-1">
            {RECENT_LOGS.map((log) => {
              const cfg = STATUS_CONFIG[log.status];
              return (
                <div key={log.id} className="p-6 hover:bg-slate-50/50 transition-colors">
                  <div className="flex flex-col sm:flex-row justify-between gap-4">
                    
                    {/* Left details */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold border ${cfg.bg} ${cfg.text} ${cfg.border}`}>
                          {cfg.icon}
                          {log.status}
                        </span>
                        <span className="text-xs font-semibold text-slate-400">ID: {log.id}</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">{log.project}</h4>
                      <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">{log.task}</p>
                      
                      {/* Rejection Note if applicable */}
                      {log.note && (
                        <div className="mt-3 p-3 bg-red-50 border border-red-100 rounded-lg flex gap-2">
                          <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                          <p className="text-xs text-red-800 font-medium">{log.note}</p>
                        </div>
                      )}
                    </div>
                    
                    {/* Right details */}
                    <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-1 flex-shrink-0 min-w-[100px]">
                      <div className="text-left sm:text-right">
                        <p className="text-2xl font-black text-[#064E3B]">{log.hours}<span className="text-sm font-bold text-slate-400 ml-0.5">h</span></p>
                      </div>
                      <p className="text-xs font-medium text-slate-500 mt-1">{log.date}</p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 border-t border-slate-100 text-center bg-slate-50/50">
            <button className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">
              Load older entries...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}