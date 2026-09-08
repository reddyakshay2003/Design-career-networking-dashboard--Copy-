import { useState } from "react";

// ── Mock Data ─────────────────────────────────────────────────────────────────
const INITIAL_CANDIDATES = [
  {
    id: "CAN-101",
    name: "Akshay Reddy",
    email: "akshay@example.com",
    program: "MSc Computer Science",
    focus: "Frontend & AI Systems",
    status: "Active Placement",
    portfolioStatus: "Audited & Approved",
    riskLevel: "Low",
  },
  {
    id: "CAN-102",
    name: "Elena Rostova",
    email: "elena@rostova.design",
    program: "BSc Product Design",
    focus: "UX Engineering",
    status: "Looking for Placement",
    portfolioStatus: "Pending Audit",
    riskLevel: "Medium",
  },
  {
    id: "CAN-103",
    name: "Marcus Thorne",
    email: "marcus@thorne.io",
    program: "BA Industrial Design",
    focus: "CAD & Prototyping",
    status: "In Review",
    portfolioStatus: "Revision Requested",
    riskLevel: "High",
  },
  {
    id: "CAN-104",
    name: "Sarah Jenkins",
    email: "sarah@acmestudios.com",
    program: "MSc UX Design",
    focus: "Design Systems",
    status: "Active Placement",
    portfolioStatus: "Audited & Approved",
    riskLevel: "Low",
  },
];

export default function CandidateOversight() {
  const [candidates, setCandidates] = useState(INITIAL_CANDIDATES);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCandidates = candidates.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.program.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.focus.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleStatusToggle = (id: string) => {
    setCandidates((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          const nextStatus =
            c.status === "Active Placement"
              ? "Looking for Placement"
              : "Active Placement";
          return { ...c, status: nextStatus };
        }
        return c;
      })
    );
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto selection:bg-indigo-500/20 selection:text-slate-900">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Candidate Oversight & Management
          </h1>
          <p className="mt-1.5 text-slate-500 text-sm md:text-base max-w-2xl">
            Monitor all registered student and professional candidate profiles across academic programs, placement statuses, and portfolio compliance.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-4 py-2 bg-indigo-50 text-indigo-700 font-bold text-xs rounded-xl border border-indigo-200">
            {candidates.length} Total Registered Candidates
          </span>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="w-full sm:max-w-md relative">
          <svg className="w-5 h-5 absolute left-3.5 top-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search by candidate name, program, or specialization..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-slate-800"
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end text-xs font-semibold text-slate-500">
          <span>Showing {filteredCandidates.length} of {candidates.length} candidates</span>
        </div>
      </div>

      {/* Candidates Table / Grid Container */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
          <h3 className="text-slate-900 font-bold text-base">Candidate Roster</h3>
          <span className="text-xs font-semibold text-slate-400">Supreme Administrative Control</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/30 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                <th className="py-3 px-6">Candidate Name</th>
                <th className="py-3 px-6">Program & Focus</th>
                <th className="py-3 px-6">Placement Status</th>
                <th className="py-3 px-6">Portfolio State</th>
                <th className="py-3 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredCandidates.length > 0 ? (
                filteredCandidates.map((can) => (
                  <tr key={can.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="font-bold text-slate-900">{can.name}</div>
                      <div className="text-xs text-slate-400">{can.email} • ID: {can.id}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="font-medium text-slate-800">{can.program}</div>
                      <div className="text-xs text-indigo-600">{can.focus}</div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold ${
                        can.status === "Active Placement"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : "bg-slate-100 text-slate-700 border border-slate-200"
                      }`}>
                        {can.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold ${
                        can.portfolioStatus === "Audited & Approved"
                          ? "bg-indigo-50 text-indigo-700 border border-indigo-200"
                          : "bg-amber-50 text-amber-700 border border-amber-200"
                      }`}>
                        {can.portfolioStatus}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right space-x-2">
                      <button
                        onClick={() => handleStatusToggle(can.id)}
                        className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold rounded-xl shadow-sm transition-all"
                      >
                        Toggle Status
                      </button>
                      <button
                        onClick={() => alert(`Reviewing candidate record for ${can.name}`)}
                        className="px-3.5 py-1.5 bg-indigo-600 text-white hover:bg-indigo-700 text-xs font-semibold rounded-xl shadow-sm transition-all"
                      >
                        Audit Profile
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-slate-500 text-sm">
                    No candidates found matching your search criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}