import { useState } from "react";

// ── Mock Data ─────────────────────────────────────────────────────────────────
const INITIAL_PLACEMENTS = [
  {
    id: "PLC-301",
    candidateName: "Akshay Reddy",
    company: "Acme Studios",
    role: "Frontend Engineer Intern",
    hoursLogged: "37.5 / 40 hrs",
    timesheetStatus: "Pending Audit",
    complianceStatus: "Compliant",
    startDate: "Jul 1, 2026",
  },
  {
    id: "PLC-302",
    candidateName: "Elena Rostova",
    company: "Vortex Interactive",
    role: "UX Design Apprentice",
    hoursLogged: "40.0 / 40 hrs",
    timesheetStatus: "Approved",
    complianceStatus: "Compliant",
    startDate: "Jun 15, 2026",
  },
  {
    id: "PLC-303",
    candidateName: "Marcus Thorne",
    company: "Meridian Labs",
    role: "Creative Tech Intern",
    hoursLogged: "28.0 / 40 hrs",
    timesheetStatus: "Flagged (Under hours)",
    complianceStatus: "Review Required",
    startDate: "Aug 1, 2026",
  },
  {
    id: "PLC-304",
    candidateName: "Sarah Jenkins",
    company: "Framer",
    role: "Design Systems Resident",
    hoursLogged: "42.0 / 40 hrs",
    timesheetStatus: "Approved",
    complianceStatus: "Compliant",
    startDate: "May 10, 2026",
  },
];

export default function PlacementCompliance() {
  const [placements, setPlacements] = useState(INITIAL_PLACEMENTS);
  const [filter, setFilter] = useState<"all" | "flagged" | "pending">("all");

  const filteredPlacements = placements.filter((p) => {
    if (filter === "flagged") return p.complianceStatus === "Review Required";
    if (filter === "pending") return p.timesheetStatus.includes("Pending");
    return true;
  });

  const handleTimesheetAction = (id: string, newStatus: string) => {
    setPlacements((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          return {
            ...p,
            timesheetStatus: newStatus,
            complianceStatus: newStatus.includes("Approved") ? "Compliant" : p.complianceStatus,
          };
        }
        return p;
      })
    );
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto selection:bg-indigo-500/20 selection:text-slate-900">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Placement Timesheet & Compliance Oversight
          </h1>
          <p className="mt-1.5 text-slate-500 text-sm md:text-base max-w-2xl">
            Audit weekly candidate timesheets, enforce institutional placement hour rules, and monitor workplace compliance across active partner firms.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-4 py-2 bg-indigo-50 text-indigo-700 font-bold text-xs rounded-xl border border-indigo-200">
            {placements.length} Active Monitored Placements
          </span>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Compliance Rate</p>
            <p className="text-3xl font-bold text-slate-900">92.5%</p>
            <p className="text-xs font-medium text-emerald-600 mt-1">Within target threshold</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Pending Timesheets</p>
            <p className="text-3xl font-bold text-slate-900">
              {placements.filter((p) => p.timesheetStatus.includes("Pending")).length}
            </p>
            <p className="text-xs font-medium text-indigo-600 mt-1">Awaiting advisor sign-off</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Flagged Issues</p>
            <p className="text-3xl font-bold text-slate-900">
              {placements.filter((p) => p.complianceStatus === "Review Required").length}
            </p>
            <p className="text-xs font-medium text-rose-600 mt-1">Requires intervention</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          </div>
        </div>
      </div>

      {/* Filter Tabs & Content Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <h3 className="text-slate-900 font-bold text-base">Active Placements & Timesheets</h3>
          
          <div className="flex p-1 bg-slate-200/70 rounded-xl w-full sm:w-auto">
            <button
              onClick={() => setFilter("all")}
              className={`flex-1 sm:flex-initial px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                filter === "all" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All Placements
            </button>
            <button
              onClick={() => setFilter("pending")}
              className={`flex-1 sm:flex-initial px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                filter === "pending" ? "bg-white text-indigo-600 shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Pending Audit
            </button>
            <button
              onClick={() => setFilter("flagged")}
              className={`flex-1 sm:flex-initial px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                filter === "flagged" ? "bg-white text-rose-600 shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Flagged
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/30 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                <th className="py-3 px-6">Candidate & Role</th>
                <th className="py-3 px-6">Host Employer</th>
                <th className="py-3 px-6">Logged Hours</th>
                <th className="py-3 px-6">Timesheet State</th>
                <th className="py-3 px-6">Compliance</th>
                <th className="py-3 px-6 text-right">Audit Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredPlacements.length > 0 ? (
                filteredPlacements.map((plc) => (
                  <tr key={plc.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="font-bold text-slate-900">{plc.candidateName}</div>
                      <div className="text-xs text-slate-500">{plc.role} • Started {plc.startDate}</div>
                    </td>
                    <td className="py-4 px-6 font-semibold text-slate-800">
                      {plc.company}
                    </td>
                    <td className="py-4 px-6 font-mono text-xs text-slate-700">
                      {plc.hoursLogged}
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold ${
                        plc.timesheetStatus === "Approved"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : plc.timesheetStatus.includes("Flagged")
                          ? "bg-rose-50 text-rose-700 border border-rose-200"
                          : "bg-amber-50 text-amber-700 border border-amber-200"
                      }`}>
                        {plc.timesheetStatus}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold ${
                        plc.complianceStatus === "Compliant"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : "bg-rose-50 text-rose-700 border border-rose-200"
                      }`}>
                        {plc.complianceStatus}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right space-x-2">
                      {plc.timesheetStatus !== "Approved" && (
                        <button
                          onClick={() => handleTimesheetAction(plc.id, "Approved")}
                          className="px-3 py-1.5 bg-indigo-600 text-white hover:bg-indigo-700 text-xs font-semibold rounded-xl shadow-sm transition-all"
                        >
                          Approve Hours
                        </button>
                      )}
                      <button
                        onClick={() => alert(`Opening full compliance audit log for ${plc.candidateName}`)}
                        className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold rounded-xl shadow-sm transition-all"
                      >
                        Inspect Log
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-500 text-sm">
                    No placements found matching the selected filter.
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