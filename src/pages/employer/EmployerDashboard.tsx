import { Link, useNavigate } from "react-router-dom";

// ── Mock Data ─────────────────────────────────────────────────────────────────
const RECENT_APPLICANTS = [
  {
    id: "APP-1042",
    name: "Akshay Reddy",
    role: "Frontend Engineer (Creative Tech)",
    match: 96,
    status: "New",
    applied: "2 hours ago",
    initials: "AR",
    bg: "bg-blue-100 text-blue-700",
  },
  {
    id: "APP-1041",
    name: "Sarah Jenkins",
    role: "Senior Product Designer",
    match: 92,
    status: "Reviewed",
    applied: "5 hours ago",
    initials: "SJ",
    bg: "bg-purple-100 text-purple-700",
  },
  {
    id: "APP-1040",
    name: "Marcus Thorne",
    role: "Industrial Design Intern",
    match: 85,
    status: "Shortlisted",
    applied: "1 day ago",
    initials: "MT",
    bg: "bg-emerald-100 text-emerald-700",
  },
  {
    id: "APP-1039",
    name: "Elena Rostova",
    role: "Frontend Engineer (Creative Tech)",
    match: 78,
    status: "New",
    applied: "1 day ago",
    initials: "ER",
    bg: "bg-amber-100 text-amber-700",
  },
];

const ACTIVE_OPPORTUNITIES = [
  {
    id: "JOB-01",
    title: "Frontend Engineer (Creative Tech)",
    type: "Full-time",
    applicants: 24,
    newSinceLastVisit: 3,
    status: "Active",
  },
  {
    id: "JOB-02",
    title: "Senior Product Designer",
    type: "Full-time",
    applicants: 45,
    newSinceLastVisit: 0,
    status: "Active",
  },
  {
    id: "JOB-03",
    title: "Industrial Design Intern",
    type: "Placement (3 Months)",
    applicants: 17,
    newSinceLastVisit: 5,
    status: "Closing Soon",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function EmployerDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any simulated session data if needed, then route back to login
    navigate("/login");
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto selection:bg-[#FF6B6B]/20 selection:text-[#0F172A]">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Acme Studios Dashboard
          </h1>
          <p className="mt-1.5 text-slate-500 text-sm md:text-base">
            You have <strong className="text-[#FF6B6B]">8 new applications</strong> to review across 3 active roles.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/employer/post"
            className="px-5 py-2.5 bg-[#0F172A] text-white text-sm font-semibold rounded-xl hover:bg-[#1e293b] transition-all shadow-lg shadow-[#0F172A]/10 flex items-center gap-2 border border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-[#0F172A]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
            Post Opportunity
          </Link>
          <button
            onClick={handleLogout}
            className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl hover:bg-slate-50 transition-all shadow-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
            Sign Out
          </button>
        </div>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex items-center justify-between group hover:border-[#FF6B6B]/50 transition-colors">
          <div>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Open Opportunities</p>
            <p className="text-3xl font-bold text-[#0F172A]">12</p>
            <p className="text-xs font-medium text-emerald-600 mt-1">↑ 4 new this month</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-slate-50 text-[#0F172A] flex items-center justify-center group-hover:bg-[#0F172A] group-hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex items-center justify-between group hover:border-[#FF6B6B]/50 transition-colors">
          <div>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Active Candidates</p>
            <p className="text-3xl font-bold text-[#0F172A]">86</p>
            <p className="text-xs font-medium text-slate-500 mt-1">Across 5 roles</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#FF6B6B] flex items-center justify-center group-hover:bg-[#FF6B6B] group-hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex items-center justify-between group hover:border-[#FF6B6B]/50 transition-colors">
          <div>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Shortlisted</p>
            <p className="text-3xl font-bold text-[#0F172A]">24</p>
            <p className="text-xs font-medium text-amber-600 mt-1">8 require review</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Recent Applications Pipeline */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col">
          <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <h3 className="text-[#0F172A] font-bold text-base">Talent Pipeline (Recent)</h3>
            <Link to="/employer/pipeline" className="text-sm font-semibold text-[#FF6B6B] hover:text-[#0F172A] transition-colors">
              View all candidates
            </Link>
          </div>
          
          <div className="divide-y divide-slate-100 flex-1">
            {RECENT_APPLICANTS.map((candidate) => (
              <div key={candidate.id} className="px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:bg-slate-50 transition-colors group">
                
                <div className="flex items-center gap-4 flex-1">
                  {/* Avatar */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shadow-inner ${candidate.bg}`}>
                    {candidate.initials}
                  </div>
                  
                  {/* Info */}
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="text-[#0F172A] text-sm font-bold group-hover:text-[#FF6B6B] transition-colors">
                        {candidate.name}
                      </p>
                      {candidate.status === "New" && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-700 uppercase tracking-wider">New</span>
                      )}
                    </div>
                    <p className="text-slate-500 text-xs font-medium">{candidate.role}</p>
                    <p className="text-slate-400 text-[11px] mt-1 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      Applied {candidate.applied}
                    </p>
                  </div>
                </div>

                {/* Match Score & Action */}
                <div className="flex items-center justify-between sm:justify-end gap-5 sm:w-auto mt-2 sm:mt-0 pl-16 sm:pl-0">
                  <div className="text-center">
                    <p className="text-xl font-black text-[#0F172A] leading-none">{candidate.match}<span className="text-xs text-slate-400 font-medium">%</span></p>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mt-1">Match</p>
                  </div>
                  <button className="px-4 py-2 rounded-xl text-xs font-semibold text-[#0F172A] bg-slate-100 hover:bg-[#0F172A] hover:text-white transition-all shadow-sm">
                    Review
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Active Opportunities */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col">
          <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <h3 className="text-[#0F172A] font-bold text-base">Active Opportunities</h3>
            <Link to="/employer/opportunities" className="text-sm font-semibold text-slate-500 hover:text-[#0F172A] transition-colors">
              Manage
            </Link>
          </div>
          
          <div className="divide-y divide-slate-100 flex-1">
            {ACTIVE_OPPORTUNITIES.map((job) => (
              <div key={job.id} className="p-6 hover:bg-slate-50 transition-colors group cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-sm font-bold text-[#0F172A] group-hover:text-[#FF6B6B] transition-colors pr-4">
                    {job.title}
                  </h4>
                  <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider flex-shrink-0 ${
                    job.status === 'Active' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    {job.status}
                  </span>
                </div>
                
                <p className="text-xs text-slate-500 font-medium mb-4">{job.type}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {/* Mock applicant pile */}
                    <div className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[8px] font-bold text-slate-500">AB</div>
                    <div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-[8px] font-bold text-slate-600">CD</div>
                    <div className="w-6 h-6 rounded-full bg-[#0F172A] border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">+{job.applicants - 2}</div>
                  </div>
                  
                  {job.newSinceLastVisit > 0 ? (
                    <span className="text-xs font-bold text-[#FF6B6B]">
                      {job.newSinceLastVisit} new applicants
                    </span>
                  ) : (
                    <span className="text-xs font-medium text-slate-400">
                      Up to date
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t border-slate-100 text-center bg-slate-50/50">
            <button className="text-sm font-semibold text-slate-500 hover:text-[#0F172A] transition-colors flex items-center justify-center gap-1.5 mx-auto">
              View drafted roles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}