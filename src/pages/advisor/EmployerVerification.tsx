import { useState } from "react";

// ── Mock Data ─────────────────────────────────────────────────────────────────
const PENDING_EMPLOYERS = [
  {
    id: "EMP-401",
    companyName: "Acme Studios",
    sector: "Product & UX Design",
    contactName: "Sarah Jenkins",
    email: "sarah@acmestudios.com",
    location: "London Docklands, UK",
    website: "www.acmestudios.design",
    submittedDate: "Sep 7, 2026",
    status: "Pending",
  },
  {
    id: "EMP-402",
    companyName: "Vortex Interactive",
    sector: "Creative Technology",
    contactName: "Marcus Vance",
    email: "m.vance@vortex.io",
    location: "London Tech City, UK",
    website: "www.vortex.io",
    submittedDate: "Sep 6, 2026",
    status: "Pending",
  },
  {
    id: "EMP-403",
    companyName: "Meridian Labs",
    sector: "AI & Data Systems",
    contactName: "Dr. Elena Rostova",
    email: "elena@meridianlabs.ai",
    location: "Canary Wharf, London",
    website: "www.meridianlabs.ai",
    submittedDate: "Sep 4, 2026",
    status: "Pending",
  },
];

const VERIFIED_EMPLOYERS = [
  {
    id: "EMP-390",
    companyName: "Framer",
    sector: "Product Design Tools",
    contactName: "Liam O'Connor",
    location: "Remote / London",
    verifiedDate: "Aug 15, 2026",
    activeRoles: 4,
  },
  {
    id: "EMP-388",
    companyName: "Spotify Creative",
    sector: "Audio & Tech",
    contactName: "Chloe Bennett",
    location: "London, UK",
    verifiedDate: "Aug 10, 2026",
    activeRoles: 2,
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function EmployerVerification() {
  const [pendingList, setPendingList] = useState(PENDING_EMPLOYERS);
  const [verifiedList, setVerifiedList] = useState(VERIFIED_EMPLOYERS);

  const handleAction = (id: string, decision: "Verified" | "Declined") => {
    const item = pendingList.find(e => e.id === id);
    if (!item) return;

    // Remove from pending queue
    setPendingList(prev => prev.filter(e => e.id !== id));

    // If verified, add to verified list
    if (decision === "Verified") {
      setVerifiedList(prev => [
        {
          id: item.id,
          companyName: item.companyName,
          sector: item.sector,
          contactName: item.contactName,
          location: item.location,
          verifiedDate: "Today, 3:00 PM",
          activeRoles: 1,
        },
        ...prev,
      ]);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto selection:bg-indigo-500/20 selection:text-slate-900">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Employer Verification
          </h1>
          <p className="mt-1.5 text-slate-500 text-sm md:text-base max-w-2xl">
            Review incoming organisation profiles, vet credentials, and approve trusted partners for the Docklands Creative Connect community.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-4 py-2 bg-indigo-50 text-indigo-700 font-bold text-xs rounded-xl border border-indigo-200">
            {pendingList.length} Pending Vetting
          </span>
        </div>
      </div>

      {/* Pending Verification Queue */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <h3 className="text-slate-900 font-bold text-base flex items-center gap-2">
            Pending Organisation Requests
            <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
              {pendingList.length}
            </span>
          </h3>
          <span className="text-xs font-semibold text-slate-400">Action required</span>
        </div>

        <div className="divide-y divide-slate-100">
          {pendingList.length > 0 ? (
            pendingList.map((emp) => (
              <div key={emp.id} className="p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-slate-50/50 transition-colors">
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-3">
                    <h4 className="text-base font-bold text-slate-900">{emp.companyName}</h4>
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-slate-100 text-slate-600 border border-slate-200">
                      {emp.id}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                      {emp.status}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-500">
                    Sector: <span className="text-slate-700">{emp.sector}</span> • Location: <span className="text-slate-700">{emp.location}</span>
                  </p>
                  <p className="text-xs text-slate-600">
                    Primary Contact: <strong className="text-slate-800">{emp.contactName}</strong> ({emp.email})
                  </p>
                  <p className="text-xs text-indigo-600 font-medium pt-0.5">
                    Website: <a href={`https://${emp.website}`} target="_blank" rel="noreferrer" className="underline hover:text-indigo-800">{emp.website}</a>
                  </p>
                </div>

                <div className="flex items-center justify-between lg:justify-end gap-4 min-w-[220px]">
                  <button
                    onClick={() => handleAction(emp.id, "Declined")}
                    className="px-4 py-2.5 bg-white border border-rose-200 text-rose-600 hover:bg-rose-50 text-xs font-semibold rounded-xl transition-all shadow-sm"
                  >
                    Decline Request
                  </button>
                  <button
                    onClick={() => handleAction(emp.id, "Verified")}
                    className="px-5 py-2.5 bg-indigo-600 text-white hover:bg-indigo-700 text-xs font-semibold rounded-xl transition-all shadow-sm shadow-indigo-600/15"
                  >
                    Verify Partner
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="px-6 py-12 text-center">
              <p className="text-sm text-slate-500 font-medium">All employer requests have been successfully vetted!</p>
            </div>
          )}
        </div>
      </div>

      {/* Verified Partners List */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
          <h3 className="text-slate-900 font-bold text-base">Verified Partner Directory ({verifiedList.length})</h3>
          <span className="text-xs font-semibold text-emerald-600">Active & Trusted</span>
        </div>

        <div className="divide-y divide-slate-100">
          {verifiedList.map((partner) => (
            <div key={partner.id} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Verified
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">{partner.companyName}</h4>
                  <span className="text-xs text-slate-400">• ID: {partner.id}</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  {partner.sector} • {partner.location} • Lead: {partner.contactName}
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-left sm:text-right">
                  <p className="text-sm font-bold text-slate-900">{partner.activeRoles} Active Roles</p>
                  <p className="text-[11px] text-slate-400">Verified: {partner.verifiedDate}</p>
                </div>
                <button className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-all">
                  Manage
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}