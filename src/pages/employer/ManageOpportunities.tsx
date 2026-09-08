import { useState } from "react";
import { Link } from "react-router-dom";

// ── Mock Data ─────────────────────────────────────────────────────────────────
const MANAGED_OPPORTUNITIES = [
  {
    id: "JOB-01",
    title: "Frontend Engineer (Creative Tech)",
    type: "Full-time",
    department: "Software Engineering",
    location: "London Docklands • Hybrid",
    salary: "£65K–£85K",
    applicants: 24,
    status: "Active",
    postedDate: "Aug 15, 2026",
    deadline: "Sep 30, 2026",
  },
  {
    id: "JOB-02",
    title: "Senior Product Designer",
    type: "Full-time",
    department: "Product & UX Design",
    location: "Remote / London",
    salary: "£75K–£90K",
    applicants: 45,
    status: "Active",
    postedDate: "Aug 10, 2026",
    deadline: "Sep 25, 2026",
  },
  {
    id: "JOB-03",
    title: "Industrial Design Intern",
    type: "Placement (3 Months)",
    department: "Industrial Design",
    location: "London, UK",
    salary: "£28K (Pro-rata)",
    applicants: 17,
    status: "Closing Soon",
    postedDate: "Aug 01, 2026",
    deadline: "Sep 12, 2026",
  },
  {
    id: "JOB-04",
    title: "Creative Technologist (Contract)",
    type: "Freelance",
    department: "Creative Technologies",
    location: "Remote",
    salary: "£450 / day",
    applicants: 8,
    status: "Draft",
    postedDate: "Saved as draft",
    deadline: "Oct 15, 2026",
  },
];

const TABS = ["All Roles", "Active", "Closing Soon", "Drafts"];

// ── Component ─────────────────────────────────────────────────────────────────
export default function ManageOpportunities() {
  const [activeTab, setActiveTab] = useState("All Roles");

  const filteredOpportunities = MANAGED_OPPORTUNITIES.filter(job => {
    if (activeTab === "Active") return job.status === "Active";
    if (activeTab === "Closing Soon") return job.status === "Closing Soon";
    if (activeTab === "Drafts") return job.status === "Draft";
    return true;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto selection:bg-[#FF6B6B]/20 selection:text-[#0F172A]">
      
      {/* Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Manage Opportunities
          </h1>
          <p className="mt-1.5 text-slate-500 text-sm md:text-base max-w-2xl">
            Edit listings, review performance metrics, and keep your organisational roles current for the DCC community.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/employer/post"
            className="px-5 py-2.5 bg-[#0F172A] text-white text-sm font-semibold rounded-xl hover:bg-[#1e293b] transition-all shadow-lg shadow-[#0F172A]/10 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
            Post New Role
          </Link>
        </div>
      </div>

      {/* Tabs & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === tab
                  ? "bg-slate-100 text-[#0F172A]"
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="relative">
          <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <input 
            type="text" 
            placeholder="Search listings..." 
            className="w-full md:w-64 pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] transition-all"
          />
        </div>
      </div>

      {/* Opportunities List / Cards */}
      <div className="space-y-4">
        {filteredOpportunities.map((job) => (
          <div 
            key={job.id} 
            className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:border-[#FF6B6B]/40 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            {/* Left Details */}
            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                  job.status === "Active" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" :
                  job.status === "Closing Soon" ? "bg-amber-50 text-amber-700 border border-amber-200" :
                  "bg-slate-100 text-slate-600 border border-slate-200"
                }`}>
                  {job.status}
                </span>
                <span className="text-xs font-semibold text-slate-400">ID: {job.id}</span>
                <span className="text-xs font-semibold text-slate-400">•</span>
                <span className="text-xs font-semibold text-slate-500">{job.department}</span>
              </div>

              <h3 className="text-lg font-bold text-[#0F172A] hover:text-[#FF6B6B] transition-colors">
                {job.title}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
                <span>{job.type}</span>
                <span>•</span>
                <span>{job.location}</span>
                <span>•</span>
                <span className="font-semibold text-slate-700">{job.salary}</span>
              </div>
            </div>

            {/* Right Metrics & Actions */}
            <div className="flex items-center justify-between md:justify-end gap-6 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
              <div className="text-left md:text-right">
                <p className="text-xl font-black text-[#0F172A]">{job.applicants}</p>
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Applicants</p>
              </div>

              <div className="flex items-center gap-2">
                <Link 
                  to={`/employer/pipeline`}
                  className="px-4 py-2 bg-slate-100 text-[#0F172A] text-xs font-semibold rounded-xl hover:bg-[#0F172A] hover:text-white transition-all shadow-sm"
                >
                  View Pipeline
                </Link>
                <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-xl hover:bg-slate-50 transition-all shadow-sm">
                  Edit
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}