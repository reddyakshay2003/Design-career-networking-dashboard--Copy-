import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  Search, 
  Briefcase, 
  Calendar, 
  MapPin, 
  SlidersHorizontal,
  Clock,
  BadgeCheck,
  FileText,
  LayoutDashboard,
  Target,
  Check,
  AlertCircle
} from "lucide-react";

// Realistic sample data with parseable dates for sorting
const OPPORTUNITIES = [
  {
    id: 1,
    company: "Studio North",
    logo: "SN",
    role: "Frontend Developer (Placement Year)",
    type: "Placement",
    location: "London",
    workStyle: "Hybrid",
    salary: "£24,000 pro rata",
    tags: ["React", "TypeScript", "Tailwind"],
    deadlineDisplay: "15 Oct 2026",
    deadlineDate: "2026-10-15",
    dateAdded: "2026-09-01",
  },
  {
    id: 2,
    company: "Meridian",
    logo: "M",
    role: "Junior Product Designer",
    type: "Full-Time",
    location: "London",
    workStyle: "On-site",
    salary: "£32,000",
    tags: ["Figma", "User Research", "Prototyping"],
    deadlineDisplay: "20 Oct 2026",
    deadlineDate: "2026-10-20",
    dateAdded: "2026-09-10",
  },
  {
    id: 3,
    company: "VCCP",
    logo: "V",
    role: "Data & Insights Intern",
    type: "Internship",
    location: "London Docklands",
    workStyle: "Hybrid",
    salary: "£2,000 / month",
    tags: ["Python", "SQL", "Tableau"],
    deadlineDisplay: "28 Oct 2026",
    deadlineDate: "2026-10-28",
    dateAdded: "2026-09-12",
  },
  {
    id: 4,
    company: "ustwo",
    logo: "U",
    role: "Mobile App Developer",
    type: "Full-Time",
    location: "London",
    workStyle: "Remote",
    salary: "£40,000",
    tags: ["React Native", "iOS", "Firebase"],
    deadlineDisplay: "05 Nov 2026",
    deadlineDate: "2026-11-05",
    dateAdded: "2026-09-15",
  },
  {
    id: 5,
    company: "Deliveroo",
    logo: "D",
    role: "Backend Engineering Intern",
    type: "Internship",
    location: "London",
    workStyle: "Hybrid",
    salary: "£2,500 / month",
    tags: ["Node.js", "Go", "AWS"],
    deadlineDisplay: "12 Oct 2026",
    deadlineDate: "2026-10-12",
    dateAdded: "2026-09-18",
  },
  {
    id: 6,
    company: "Monzo",
    logo: "M",
    role: "UX Research Assistant",
    type: "Placement",
    location: "London",
    workStyle: "Hybrid",
    salary: "£25,000 pro rata",
    tags: ["User Testing", "Figma", "Analytics"],
    deadlineDisplay: "30 Oct 2026",
    deadlineDate: "2026-10-30",
    dateAdded: "2026-09-05",
  },
  {
    id: 7,
    company: "Vercel",
    logo: "V",
    role: "Developer Advocate Intern",
    type: "Internship",
    location: "Remote",
    workStyle: "Remote",
    salary: "£3,000 / month",
    tags: ["Next.js", "Content Creation", "React"],
    deadlineDisplay: "18 Nov 2026",
    deadlineDate: "2026-11-18",
    dateAdded: "2026-09-20",
  },
  {
    id: 8,
    company: "Stripe",
    logo: "S",
    role: "Junior Full-Stack Engineer",
    type: "Full-Time",
    location: "London",
    workStyle: "Hybrid",
    salary: "£45,000",
    tags: ["React", "Ruby", "PostgreSQL"],
    deadlineDisplay: "10 Nov 2026",
    deadlineDate: "2026-11-10",
    dateAdded: "2026-08-25",
  },
  {
    id: 9,
    company: "Tower Hamlets Council",
    logo: "TH",
    role: "IT Support & Ops Placement",
    type: "Placement",
    location: "London",
    workStyle: "On-site",
    salary: "£21,000 pro rata",
    tags: ["Networking", "Hardware", "Helpdesk"],
    deadlineDisplay: "22 Oct 2026",
    deadlineDate: "2026-10-22",
    dateAdded: "2026-09-08",
  },
  {
    id: 10,
    company: "Creative Circle",
    logo: "CC",
    role: "Graphic Design Intern",
    type: "Internship",
    location: "London",
    workStyle: "Hybrid",
    salary: "£1,800 / month",
    tags: ["Illustrator", "Photoshop", "Print"],
    deadlineDisplay: "01 Nov 2026",
    deadlineDate: "2026-11-01",
    dateAdded: "2026-09-14",
  }
];

export default function OpportunitiesHub() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedWorkStyle, setSelectedWorkStyle] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  // Filter and sort logic
  const filteredAndSortedOpportunities = useMemo(() => {
    let result = OPPORTUNITIES.filter((opp) => {
      const matchesSearch = opp.role.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            opp.company.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = selectedType === "All" || opp.type === selectedType;
      const matchesStyle = selectedWorkStyle === "All" || opp.workStyle === selectedWorkStyle;
      
      return matchesSearch && matchesType && matchesStyle;
    });

    result.sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
      } else if (sortBy === "deadline") {
        return new Date(a.deadlineDate).getTime() - new Date(b.deadlineDate).getTime();
      }
      return 0;
    });

    return result;
  }, [searchQuery, selectedType, selectedWorkStyle, sortBy]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedType("All");
    setSelectedWorkStyle("All");
    setSortBy("newest");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans text-zinc-900 dark:text-zinc-100 transition-colors duration-200 selection:bg-pink-200 selection:text-pink-900 dark:selection:bg-pink-900 dark:selection:text-pink-100">
      
      {/* Light mode, full-screen/hero height intro section with structural panels */}
      <header className="min-h-[85vh] flex flex-col justify-center bg-white dark:bg-zinc-950 pt-32 pb-20 px-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto w-full">
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Title, Description, and Checklist */}
            <div className="w-full lg:w-5/12">

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6 leading-[1.15]">
                Opportunities Board
              </h1>
              
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-4">
                This is the directory for placement years, summer internships, and graduate roles. Every position listed here is posted directly by the engineering and design teams at our partner companies.
              </p>
              
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-10">
                We’ve removed the usual recruitment friction. No scraped job listings or vague requirements—just verified roles with clear expectations.
              </p>

              {/* Practical checklist with soft styling */}
              <div className="bg-zinc-50/50 dark:bg-zinc-900/30 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800/80">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                  <AlertCircle size={18} className="text-zinc-400" />
                  Before you start applying
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                    <Check size={16} className="text-pink-600 dark:text-pink-400 shrink-0 mt-0.5" />
                    <span>Ensure your university enrollment status is verified.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                    <Check size={16} className="text-pink-600 dark:text-pink-400 shrink-0 mt-0.5" />
                    <span>Sync your GitHub account to show active commits.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                    <Check size={16} className="text-pink-600 dark:text-pink-400 shrink-0 mt-0.5" />
                    <span>Add at least one live project to your platform portfolio.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: 2x2 Feature Grid housed in a soft container block to fill space */}
            <div className="w-full lg:w-7/12 bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800/60 rounded-[2rem] p-8 md:p-12 lg:p-14">
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
                
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center mb-4 shadow-sm">
                    <BadgeCheck size={20} className="text-pink-600 dark:text-pink-400" />
                  </div>
                  <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 mb-2">Direct access</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Roles are managed by the people actually hiring. No external recruiters, generic job boards, or black-hole application portals.
                  </p>
                </div>
                
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center mb-4 shadow-sm">
                    <FileText size={20} className="text-pink-600 dark:text-pink-400" />
                  </div>
                  <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 mb-2">No cover letters</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Applying simply forwards your vetted platform profile, synced GitHub activity, and portfolio links straight to the team.
                  </p>
                </div>
                
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center mb-4 shadow-sm">
                    <LayoutDashboard size={20} className="text-pink-600 dark:text-pink-400" />
                  </div>
                  <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 mb-2">Track everything</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Once you apply, you can monitor your application status, interview schedules, and university approvals directly from your dashboard.
                  </p>
                </div>

                <div>
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center mb-4 shadow-sm">
                    <Target size={20} className="text-pink-600 dark:text-pink-400" />
                  </div>
                  <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 mb-2">Relevant matches</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    The board filters out noise. If your stack is React and Node, you'll only see frontend and full-stack roles—not generic IT support gigs.
                  </p>
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
                placeholder="Search roles or companies..."
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
                <option value="newest">Sort by: Newest</option>
                <option value="deadline">Sort by: Deadline soon</option>
              </select>
            </div>
          </div>

          <hr className="border-zinc-100 dark:border-zinc-800" />

          {/* Bottom row: Type and Location toggles */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider w-16">Type</span>
              <div className="flex flex-wrap gap-2">
                {["All", "Full-Time", "Internship", "Placement"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-3 py-1.5 rounded-md text-sm transition-colors border ${
                      selectedType === type
                        ? "bg-zinc-900 text-white border-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 dark:border-zinc-100 font-medium"
                        : "bg-transparent border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-600"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden lg:block w-px h-8 bg-zinc-200 dark:bg-zinc-800"></div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider w-16">Style</span>
              <div className="flex flex-wrap gap-2">
                {["All", "Remote", "Hybrid", "On-site"].map((style) => (
                  <button
                    key={style}
                    onClick={() => setSelectedWorkStyle(style)}
                    className={`px-3 py-1.5 rounded-md text-sm transition-colors border ${
                      selectedWorkStyle === style
                        ? "bg-zinc-900 text-white border-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 dark:border-zinc-100 font-medium"
                        : "bg-transparent border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-600"
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Results count */}
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Showing {filteredAndSortedOpportunities.length} {filteredAndSortedOpportunities.length === 1 ? 'role' : 'roles'}
          </span>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredAndSortedOpportunities.map((opp) => (
            <div key={opp.id} className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col transition-colors hover:border-zinc-300 dark:hover:border-zinc-700">
              
              <div className="flex justify-between items-start mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-medium text-zinc-600 dark:text-zinc-300 text-sm">
                    {opp.logo}
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-900 dark:text-zinc-100">{opp.company}</h3>
                  </div>
                </div>
                <span className="text-[11px] px-2.5 py-1 rounded-md font-medium border bg-zinc-50 text-zinc-500 border-zinc-200 dark:bg-zinc-800/50 dark:text-zinc-400 dark:border-zinc-700/50">
                  {opp.type}
                </span>
              </div>

              <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4 leading-snug">
                {opp.role}
              </h4>
              
              <div className="flex flex-col gap-2.5 mb-6">
                <span className="text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                  <MapPin size={16} className="text-zinc-400" /> 
                  {opp.location} &bull; {opp.workStyle}
                </span>
                <span className="text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                  <Briefcase size={16} className="text-zinc-400" /> 
                  {opp.salary}
                </span>
                <span className="text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                  <Calendar size={16} className="text-zinc-400" /> 
                  Apply by {opp.deadlineDisplay}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {opp.tags.map((tag) => (
                  <span key={tag} className="text-[11px] bg-zinc-100 dark:bg-zinc-800/80 px-2.5 py-1 rounded-md text-zinc-600 dark:text-zinc-300 font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-5 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                <span className="text-xs text-zinc-500 flex items-center gap-1.5">
                  <Clock size={14} />
                  Added {new Date(opp.dateAdded).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                </span>
                <Link
                  to={`/opportunities/${opp.id}`}
                  className="px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  View details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAndSortedOpportunities.length === 0 && (
          <div className="text-center py-24 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900">
            <Search className="mx-auto mb-4 text-zinc-300 dark:text-zinc-700" size={40} />
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-2">No roles found</h3>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto mb-6">
              We couldn't find any opportunities that exactly match your current filters.
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