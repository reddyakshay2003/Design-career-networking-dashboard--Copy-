import { useState } from "react";
import { Link } from "react-router-dom";

const OPPORTUNITIES = [
  {
    id: 1,
    company: "Spotify Design",
    logo: "SF",
    logoColor: "#10B981",
    role: "Senior Product Designer",
    type: "Full-Time",
    location: "London Docklands • Hybrid",
    salary: "£65,000 – £80,000",
    match: 96,
    tags: ["React Native", "TypeScript", "UI/UX", "Tailwind"],
    deadline: "15 Aug 2026",
  },
  {
    id: 2,
    company: "Microsoft",
    logo: "MS",
    logoColor: "#0078D4",
    role: "UX Research Internship",
    type: "Internship",
    location: "London • Remote",
    salary: "£2,500 / month",
    match: 91,
    tags: ["User Research", "Figma", "Prototyping"],
    deadline: "20 Aug 2026",
  },
  {
    id: 3,
    company: "IBM",
    logo: "IBM",
    logoColor: "#1F70C1",
    role: "Data & AI Analyst Placement",
    type: "Placement",
    location: "London Docklands • On-site",
    salary: "£38,000",
    match: 88,
    tags: ["Python", "Big Data", "Spark", "Kafka"],
    deadline: "28 Aug 2026",
  },
  {
    id: 4,
    company: "Framer",
    logo: "Fr",
    logoColor: "#0066FF",
    role: "Frontend Engineer (Creative Tech)",
    type: "Full-Time",
    location: "Remote",
    salary: "£70,000 – £90,000",
    match: 94,
    tags: ["React", "TypeScript", "Tailwind", "Animation"],
    deadline: "05 Sep 2026",
  },
];

export default function OpportunitiesHub() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  const filteredOpportunities = OPPORTUNITIES.filter((opp) => {
    const matchesSearch = opp.role.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          opp.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "All" || opp.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-[#064E3B] tracking-tight">Opportunities Hub</h1>
          <p className="text-slate-600 text-sm mt-1">Browse creative roles, verified placements, and live projects from top industry partners.</p>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search roles or companies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] w-72"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
        {["All", "Full-Time", "Internship", "Placement"].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedType === type
                ? "bg-[#064E3B] text-white shadow-sm"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredOpportunities.map((opp) => (
          <div key={opp.id} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#10B981] flex items-center justify-center font-bold text-sm" style={{ backgroundColor: `${opp.logoColor}15`, color: opp.logoColor }}>
                    {opp.logo}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">{opp.company}</h4>
                    <p className="text-xs text-slate-500">{opp.location}</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-emerald-50 text-[#10B981] text-xs font-semibold rounded-full">
                  {opp.match}% Match
                </span>
              </div>

              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-bold text-[#064E3B]">{opp.role}</h3>
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                  <span>💼 {opp.type}</span>
                  <span>💰 {opp.salary}</span>
                  <span>⏳ Deadline: {opp.deadline}</span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {opp.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[11px] font-medium rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">Verified Partner</span>
              <Link
                to={`/opportunities/${opp.id}`}
                className="px-5 py-2.5 rounded-xl bg-[#064E3B] text-white text-xs font-semibold hover:bg-[#064E3B]/90 transition-all shadow-sm"
              >
                View Details & Apply
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}