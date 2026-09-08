import { useState } from "react";
import { Link } from "react-router-dom";

const COMPANIES = [
  {
    id: 1,
    name: "Spotify Design",
    logo: "SF",
    logoColor: "#10B981",
    industry: "Music & Creative Tech",
    location: "London Docklands • Hybrid",
    activeJobs: 4,
    verified: true,
    description: "Building the future of audio interaction and immersive creator tools.",
  },
  {
    id: 2,
    name: "Microsoft",
    logo: "MS",
    logoColor: "#0078D4",
    industry: "Enterprise Software & AI",
    location: "London • Remote",
    activeJobs: 12,
    verified: true,
    description: "Empowering every person and organization on the planet to achieve more.",
  },
  {
    id: 3,
    name: "IBM",
    logo: "IBM",
    logoColor: "#1F70C1",
    industry: "Cloud & Big Data Analytics",
    location: "London Docklands • On-site",
    activeJobs: 7,
    verified: true,
    description: "Integrating hybrid cloud infrastructure and advanced enterprise intelligence.",
  },
  {
    id: 4,
    name: "Framer",
    logo: "Fr",
    logoColor: "#0066FF",
    industry: "Web Design & Prototyping",
    location: "Remote",
    activeJobs: 3,
    verified: true,
    description: "The web builder for creative designers. Design and publish sites in one canvas.",
  },
];

export default function CompaniesDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const filteredCompanies = COMPANIES.filter((company) => {
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          company.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = selectedIndustry === "All" || company.industry.includes(selectedIndustry);
    return matchesSearch && matchesIndustry;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-[#064E3B] tracking-tight">Companies Directory</h1>
          <p className="text-slate-600 text-sm mt-1">Discover creative studios and verified employers building the next generation of work.</p>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search studios or tech stacks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] w-72 shadow-2xs"
          />
        </div>
      </div>

      {/* Industry Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
        {["All", "Creative Tech", "Enterprise", "Cloud", "Web Design"].map((ind) => (
          <button
            key={ind}
            onClick={() => setSelectedIndustry(ind)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedIndustry === ind
                ? "bg-[#064E3B] text-white shadow-sm"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            {ind}
          </button>
        ))}
      </div>

      {/* Companies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCompanies.map((company) => (
          <div key={company.id} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm shadow-2xs" style={{ backgroundColor: `${company.logoColor}15`, color: company.logoColor }}>
                    {company.logo}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-slate-900 text-base">{company.name}</h4>
                      {company.verified && (
                        <span className="px-1.5 py-0.5 bg-emerald-50 text-[#10B981] text-[10px] font-bold rounded">
                          Verified
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500">{company.location}</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">
                  {company.activeJobs} Open Roles
                </span>
              </div>

              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                {company.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                {company.industry}
              </span>
              <Link
                to={`/companies/${company.id}`}
                className="px-5 py-2 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-all"
              >
                View Profile & Jobs →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}