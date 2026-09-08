import { Link, useNavigate } from "react-router-dom";
import MetricCard from "../../components/MetricCard";

const RECOMMENDED_JOBS = [
  {
    company: "Framer",
    role: "Senior Product Designer",
    location: "Remote",
    salary: "£75K–£90K",
    logo: "Fr",
    logoColor: "#0066FF",
    match: 97,
  },
  {
    company: "Spotify",
    role: "UX Engineer (Creative Tech)",
    location: "London, UK",
    salary: "£65K–£85K",
    logo: "SF",
    logoColor: "#10B981",
    match: 94,
  },
  {
    company: "Nothing",
    role: "Industrial Design Intern",
    location: "London, UK",
    salary: "£28K (Pro-rata)",
    logo: "No",
    logoColor: "#000000",
    match: 88,
  },
];

const UPCOMING_EVENTS = [
  {
    title: "Technical Interview — Spotify",
    time: "Tomorrow, 10:00 AM",
    type: "Interview",
    color: "#10B981",
    bg: "#D1FAE5",
  },
  {
    title: "Portfolio Review Call — Framer",
    time: "Sep 12, 2:30 PM",
    type: "Call",
    color: "#064E3B",
    bg: "#ECFDF5",
  },
  {
    title: "Application Deadline — Linear",
    time: "Sep 18, 11:59 PM",
    type: "Deadline",
    color: "#EF4444",
    bg: "#FEE2E2",
  },
];

export default function CandidateDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any session tokens or user state here if needed, then route to login
    navigate("/login");
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Good morning, Akshay 👋
          </h2>
          <p className="mt-1.5 text-slate-500 text-sm md:text-base">
            You have <strong className="text-[#064E3B]">3 new matches</strong> and{" "}
            <strong className="text-[#064E3B]">1 interview</strong> scheduled this week.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleLogout}
            className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl hover:bg-slate-50 transition-all shadow-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Sign Out
          </button>
        </div>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <MetricCard
          label="Saved opportunities"
          value="47"
          detail="↑ 12 added this week"
        />
        <MetricCard
          label="Active applications"
          value="8"
          detail="3 awaiting response"
        />
        <MetricCard
          label="Profile views"
          value="312"
          detail="↑ 28% above last month"
        />
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Recommended Opportunities */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col">
          <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <h3 className="text-slate-900 font-bold text-base">Recommended for You</h3>
            <Link
              to="/opportunities"
              className="text-sm font-semibold text-[#10B981] hover:text-[#064E3B] transition-colors"
            >
              View all
            </Link>
          </div>
          
          <div className="divide-y divide-slate-100 flex-1">
            {RECOMMENDED_JOBS.map((job) => (
              <div
                key={job.company}
                className="px-6 py-5 flex items-center gap-4 hover:bg-slate-50 transition-colors group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-sm"
                  style={{ backgroundColor: job.logoColor }}
                >
                  {job.logo}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-900 text-sm font-bold truncate group-hover:text-[#064E3B] transition-colors">
                    {job.role}
                  </p>
                  <p className="text-slate-500 text-xs mt-1 truncate">
                    {job.company} • {job.location} • {job.salary}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-end sm:items-center gap-3 flex-shrink-0">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-[#10B981]">
                    {job.match}% match
                  </span>
                  <button className="opacity-0 group-hover:opacity-100 px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#064E3B] hover:bg-[#064E3B]/90 transition-all shadow-sm hidden sm:block">
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Upcoming Events & Tasks */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col">
          <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <h3 className="text-slate-900 font-bold text-base">Upcoming Schedule</h3>
            <button className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">
              Sync Calendar
            </button>
          </div>
          
          <div className="p-6 space-y-4 flex-1">
            {UPCOMING_EVENTS.map((ev) => (
              <div
                key={ev.title}
                className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all bg-slate-50/50 hover:bg-white cursor-pointer group"
              >
                <div
                  className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0 shadow-sm"
                  style={{ backgroundColor: ev.color }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-slate-900 text-sm font-semibold leading-snug group-hover:text-[#064E3B] transition-colors">
                    {ev.title}
                  </p>
                  <p className="text-slate-500 text-xs mt-1.5 font-medium flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {ev.time}
                  </p>
                </div>
                <span
                  className="text-[10px] font-bold px-2.5 py-1 rounded-md flex-shrink-0"
                  style={{ backgroundColor: ev.bg, color: ev.color }}
                >
                  {ev.type}
                </span>
              </div>
            ))}

            <button className="w-full mt-2 py-3 rounded-xl border-2 border-dashed border-slate-200 text-slate-500 text-sm font-semibold hover:border-[#10B981] hover:text-[#10B981] hover:bg-emerald-50/30 transition-all">
              + Add personal reminder
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}