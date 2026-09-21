import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  Search, 
  MapPin, 
  SlidersHorizontal,
  BadgeCheck,
  Building2,
  ShieldCheck,
  Users
} from "lucide-react";

// Realistic sample data matching the Opportunities board context
const COMPANIES = [
  {
    id: 1,
    name: "Studio North",
    logo: "SN",
    industry: "Digital Agency",
    location: "London • Hybrid",
    activeJobs: 2,
    verified: true,
    description: "An independent digital product studio building platforms for arts, culture, and education sectors.",
  },
  {
    id: 2,
    name: "Meridian",
    logo: "M",
    industry: "Digital Agency",
    location: "London • On-site",
    activeJobs: 1,
    verified: true,
    description: "A strategic design agency focusing on brand identity, complex UI/UX, and creative web development.",
  },
  {
    id: 3,
    name: "VCCP",
    logo: "V",
    industry: "Advertising & Media",
    location: "London Docklands",
    activeJobs: 3,
    verified: true,
    description: "Global advertising agency with a heavy focus on data insights, digital campaigns, and creative tech.",
  },
  {
    id: 4,
    name: "ustwo",
    logo: "U",
    industry: "Product Studio",
    location: "London • Remote",
    activeJobs: 4,
    verified: true,
    description: "Digital product studio famous for Monument Valley. They build mobile apps and services for global brands.",
  },
  {
    id: 5,
    name: "Deliveroo",
    logo: "D",
    industry: "Tech Enterprise",
    location: "London • Hybrid",
    activeJobs: 5,
    verified: true,
    description: "Engineering and data science teams managing high-volume logistics, real-time mapping, and consumer apps.",
  },
  {
    id: 6,
    name: "Monzo",
    logo: "M",
    industry: "Fintech",
    location: "London • Hybrid",
    activeJobs: 2,
    verified: true,
    description: "Challenger bank known for its transparent engineering culture, Go microservices, and user-centric app design.",
  },
  {
    id: 7,
    name: "Vercel",
    logo: "V",
    industry: "Cloud & DevTools",
    location: "Remote",
    activeJobs: 1,
    verified: true,
    description: "The creators of Next.js. Frontend cloud platform focused on developer experience and site performance.",
  },
  {
    id: 8,
    name: "Stripe",
    logo: "S",
    industry: "Fintech",
    location: "London • Hybrid",
    activeJobs: 3,
    verified: true,
    description: "Financial infrastructure platform. Their London office focuses heavily on API development and European integration.",
  },
  {
    id: 9,
    name: "Tower Hamlets Council",
    logo: "TH",
    industry: "Public Sector",
    location: "London • On-site",
    activeJobs: 1,
    verified: true,
    description: "Local government IT and digital transformation team, managing infrastructure and services for the borough.",
  },
  {
    id: 10,
    name: "Creative Circle",
    logo: "CC",
    industry: "Digital Agency",
    location: "London • Hybrid",
    activeJobs: 2,
    verified: true,
    description: "Boutique design collective working primarily with sustainable brands and non-profit organizations.",
  }
];

export default function CompaniesDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [sortBy, setSortBy] = useState("most-jobs");

  // Filter and sort logic
  const filteredAndSortedCompanies = useMemo(() => {
    let result = COMPANIES.filter((company) => {
      const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            company.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesIndustry = selectedIndustry === "All" || company.industry === selectedIndustry;
      return matchesSearch && matchesIndustry;
    });

    result.sort((a, b) => {
      if (sortBy === "most-jobs") {
        return b.activeJobs - a.activeJobs;
      } else if (sortBy === "a-z") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

    return result;
  }, [searchQuery, selectedIndustry, sortBy]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedIndustry("All");
    setSortBy("most-jobs");
  };

  const industries = ["All", "Digital Agency", "Tech Enterprise", "Fintech", "Product Studio", "Cloud & DevTools"];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans text-zinc-900 dark:text-zinc-100 transition-colors duration-200 selection:bg-pink-200 selection:text-pink-900 dark:selection:bg-pink-900 dark:selection:text-pink-100">
      
      {/* Light mode, full-width header section mirroring the Opportunities page */}
      <header className="bg-white dark:bg-zinc-950 pt-32 pb-20 px-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto w-full">
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start lg:items-center">
            
            {/* Left Column: Title and Description */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6 leading-[1.15]">
                Partner network
              </h1>
              
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-4">
                Explore the design studios, product teams, and engineering departments currently taking on students for placement years and internships. 
              </p>
              
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                We work directly with these teams to ensure their roles are relevant to creative computing students and meet the university's academic standards.
              </p>
            </div>

            {/* Right Column: Vetting explanation block */}
            <div className="w-full lg:w-1/2">
              <div className="bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800/60 rounded-2xl p-8 lg:p-10">
                <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 mb-6 flex items-center gap-2">
                  <ShieldCheck size={20} className="text-pink-600 dark:text-pink-400" />
                  How companies are vetted
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center shrink-0">
                      <BadgeCheck size={16} className="text-zinc-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-zinc-900 dark:text-zinc-100 mb-1">Academic alignment</h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Roles must involve actual engineering, research, or design work—not just making coffee.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center shrink-0">
                      <Users size={16} className="text-zinc-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-zinc-900 dark:text-zinc-100 mb-1">Direct communication</h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">We require companies to assign a dedicated hiring manager to review applications directly.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Main Page Content */}
      <div className="max-w-7xl mx-auto px-6 py-10 lg:py-16">
        
        {/* Search and Filters */}
        <div className="bg-white dark:bg-zinc-900 p-4 md:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 mb-8 space-y-4 md:space-y-6 shadow-sm">
          
          {/* Top row: Search & Sort */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative w-full md:w-96">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                <Search size={18} strokeWidth={2} />
              </div>
              <input
                type="text"
                placeholder="Search studios or tech stacks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2.5 pl-10 pr-4 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all text-zinc-900 dark:text-zinc-100 placeholder-zinc-400"
              />
            </div>

            <div className="flex items-center gap-2 self-start md:self-auto">
              <SlidersHorizontal size={16} className="text-zinc-400" />
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="py-2 pl-2 pr-8 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm focus:outline-none cursor-pointer text-zinc-700 dark:text-zinc-300 appearance-none"
                style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239ca3af%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right .7rem top 50%', backgroundSize: '.65rem auto' }}
              >
                <option value="most-jobs">Sort by: Most active roles</option>
                <option value="a-z">Sort by: A-Z</option>
              </select>
            </div>
          </div>

          <hr className="border-zinc-100 dark:border-zinc-800" />

          {/* Bottom row: Industry filters */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider w-20 shrink-0">Industry</span>
            <div className="flex flex-wrap gap-2">
              {industries.map((ind) => (
                <button
                  key={ind}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`px-3 py-1.5 rounded-md text-sm transition-colors border ${
                    selectedIndustry === ind
                      ? "bg-zinc-900 text-white border-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 dark:border-zinc-100 font-medium"
                      : "bg-transparent border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-600"
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Results count */}
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Showing {filteredAndSortedCompanies.length} {filteredAndSortedCompanies.length === 1 ? 'partner' : 'partners'}
          </span>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredAndSortedCompanies.map((company) => (
            <div key={company.id} className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col transition-colors hover:border-zinc-300 dark:hover:border-zinc-700">
              
              {/* Card Header */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 flex items-center justify-center font-medium text-zinc-600 dark:text-zinc-300 text-base shrink-0">
                  {company.logo}
                </div>
                <div className="pt-1">
                  <div className="flex items-center gap-1.5 mb-1">
                    <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 leading-none">{company.name}</h3>
                    {company.verified && (
                      <BadgeCheck size={18} className="text-pink-600 dark:text-pink-400" />
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
                    <MapPin size={14} />
                    {company.location}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 flex-grow">
                {company.description}
              </p>

              {/* Card Footer */}
              <div className="pt-5 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 text-xs font-medium bg-zinc-100 dark:bg-zinc-800/80 px-2.5 py-1.5 rounded-md text-zinc-600 dark:text-zinc-300">
                  <Building2 size={14} />
                  {company.industry}
                </div>
                
                <Link
                  to={`/companies/${company.id}`}
                  className="flex items-center gap-1.5 text-sm font-medium text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300 transition-colors"
                >
                  {company.activeJobs > 0 ? (
                    <>View {company.activeJobs} active {company.activeJobs === 1 ? 'role' : 'roles'}</>
                  ) : (
                    <>View company profile</>
                  )}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAndSortedCompanies.length === 0 && (
          <div className="text-center py-24 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900">
            <Search className="mx-auto mb-4 text-zinc-300 dark:text-zinc-700" size={40} />
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-2">No companies found</h3>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto mb-6">
              We couldn't find any partners matching your current search and filters.
            </p>
            <button 
              onClick={clearFilters}
              className="px-5 py-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white font-medium rounded-lg transition-colors text-sm"
            >
              Clear all filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}