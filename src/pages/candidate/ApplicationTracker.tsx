import { useState } from "react";
import { Link } from "react-router-dom";

// ── Mock Data ─────────────────────────────────────────────────────────────────
const APPLICATIONS = [
  {
    id: "APP-001",
    company: "Spotify Design",
    logo: "SF",
    logoColor: "#10B981",
    role: "Senior Product Designer",
    location: "London Docklands • Hybrid",
    appliedDate: "Sep 2, 2026",
    lastUpdated: "Today, 10:30 AM",
    status: "Shortlisted",
    nextStep: "Technical Interview on Sep 10",
  },
  {
    id: "APP-002",
    company: "Framer",
    logo: "Fr",
    logoColor: "#0066FF",
    role: "Frontend Engineer (Creative Tech)",
    location: "Remote",
    appliedDate: "Aug 28, 2026",
    lastUpdated: "Sep 5, 2026",
    status: "Interview",
    nextStep: "Portfolio Presentation",
  },
  {
    id: "APP-003",
    company: "Linear",
    logo: "L",
    logoColor: "#5E6AD2",
    role: "Product Designer",
    location: "London, UK • On-site",
    appliedDate: "Aug 25, 2026",
    lastUpdated: "Sep 1, 2026",
    status: "Under Review",
    nextStep: "Awaiting feedback from hiring manager",
  },
  {
    id: "APP-004",
    company: "Vercel",
    logo: "V",
    logoColor: "#000000",
    role: "DevRel Engineer",
    location: "Remote",
    appliedDate: "Aug 15, 2026",
    lastUpdated: "Aug 20, 2026",
    status: "Offered",
    nextStep: "Review offer letter by Sep 12",
  },
  {
    id: "APP-005",
    company: "Nothing",
    logo: "No",
    logoColor: "#000000",
    role: "Industrial Design Intern",
    location: "London, UK",
    appliedDate: "Aug 10, 2026",
    lastUpdated: "Aug 18, 2026",
    status: "Rejected",
    nextStep: "Role closed",
  },
];

const STATUS_CONFIG: Record<string, { bg: string; text: string; border: string }> = {
  Applied: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  "Under Review": { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
  Shortlisted: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  Interview: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
  Offered: { bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-200" },
  Rejected: { bg: "bg-red-50", text: "text-red-700", border: "border-red-200" },
};

const TABS = ["All", "Applied", "Under Review", "Shortlisted", "Interview", "Offered", "Rejected"];

// ── Component ─────────────────────────────────────────────────────────────────
export default function ApplicationTracker() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredApps = activeTab === "All" 
    ? APPLICATIONS 
    : APPLICATIONS.filter(app => app.status === activeTab);

  // Calculate high-level metrics
  const activeCount = APPLICATIONS.filter(a => !["Offered", "Rejected"].includes(a.status)).length;
  const interviewCount = APPLICATIONS.filter(a => a.status === "Interview" || a.status === "Shortlisted").length;
  const offerCount = APPLICATIONS.filter(a => a.status === "Offered").length;

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-6xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          Application Tracker
        </h1>
        <p className="mt-1.5 text-slate-500 text-sm md:text-base max-w-2xl">
          Track every application from first submission through offer. Keep your pipeline organized and never miss a follow-up.
        </p>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Active Pipeline</p>
            <p className="text-3xl font-bold text-slate-900">{activeCount}</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Interviews Scheduled</p>
            <p className="text-3xl font-bold text-slate-900">{interviewCount}</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Total Offers</p>
            <p className="text-3xl font-bold text-slate-900">{offerCount}</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </div>
        </div>
      </div>

      {/* Main Tracker Area */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col">
        
        {/* Tabs */}
        <div className="px-6 border-b border-slate-100 flex overflow-x-auto scrollbar-hide">
          <div className="flex space-x-1 py-4">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === tab
                    ? "bg-[#064E3B] text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Application List */}
        <div className="divide-y divide-slate-100">
          {filteredApps.length > 0 ? (
            filteredApps.map((app) => {
              const cfg = STATUS_CONFIG[app.status] || STATUS_CONFIG["Applied"];
              return (
                <div key={app.id} className="p-6 hover:bg-slate-50/50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6">
                  
                  {/* Left: Company & Role */}
                  <div className="flex items-start gap-4 flex-1">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-sm mt-1"
                      style={{ backgroundColor: app.logoColor }}
                    >
                      {app.logo}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-base font-bold text-slate-900 leading-none">{app.role}</h3>
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${cfg.bg} ${cfg.text} ${cfg.border}`}>
                          {app.status}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-slate-600">{app.company}</p>
                      <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                          {app.location}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          Applied: {app.appliedDate}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Next Steps & Actions */}
                  <div className="flex flex-col md:items-end justify-between gap-3 min-w-[200px]">
                    <div className="bg-slate-100/50 rounded-lg p-3 w-full md:w-auto text-left md:text-right">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Next Step / Note</p>
                      <p className="text-xs font-semibold text-slate-700">{app.nextStep}</p>
                    </div>
                    <div className="flex items-center justify-between w-full md:justify-end md:gap-4">
                      <p className="text-[11px] text-slate-400 font-medium">Updated: {app.lastUpdated}</p>
                      <button className="text-xs font-bold text-[#10B981] hover:text-[#064E3B] transition-colors">
                        View Details →
                      </button>
                    </div>
                  </div>

                </div>
              );
            })
          ) : (
            /* Empty State */
            <div className="px-6 py-16 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">No applications found</h3>
              <p className="text-sm text-slate-500 mb-4 max-w-sm mx-auto">
                You don't have any applications currently in the "{activeTab}" stage. 
              </p>
              <Link to="/opportunities" className="px-5 py-2.5 bg-[#064E3B] text-white text-sm font-semibold rounded-xl hover:bg-[#064E3B]/90 transition-all shadow-sm">
                Explore Opportunities
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}