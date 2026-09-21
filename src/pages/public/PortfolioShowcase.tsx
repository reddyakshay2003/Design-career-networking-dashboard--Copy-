import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  Search, 
  SlidersHorizontal,
  Heart,
  Eye,
  BadgeCheck,
  FolderOpen,
  LayoutTemplate,
  Database,
  Smartphone,
  BrainCircuit,
  ArrowRight,
  Code2
} from "lucide-react";

// Expanded sample data incorporating realistic, highly specific technical projects
const PROJECTS = [
  {
    id: 1,
    title: "Creative Industries Festival App",
    creator: "Akshay Reddy Panumati",
    discipline: "Mobile App Development",
    icon: Smartphone,
    colorClass: "text-blue-500 bg-blue-50 dark:text-blue-400 dark:bg-blue-500/10",
    likes: 142,
    views: "1.2k",
    tags: ["React Native", "Expo", "Firebase", "Appwrite"],
    date: "Aug 2026"
  },
  {
    id: 2,
    title: "Book Loop: Peer-to-Peer Exchange",
    creator: "Akshay Reddy Panumati",
    discipline: "Full-Stack Web",
    icon: Code2,
    colorClass: "text-pink-600 bg-pink-50 dark:text-pink-400 dark:bg-pink-500/10",
    likes: 98,
    views: "850",
    tags: ["Next.js", "Firebase", "UML Architecture"],
    date: "Nov 2025"
  },
  {
    id: 3,
    title: "Big Data for Road Safety (STATS19)",
    creator: "Akshay Reddy Panumati",
    discipline: "Data Engineering",
    icon: Database,
    colorClass: "text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-500/10",
    likes: 215,
    views: "2.4k",
    tags: ["Apache Kafka", "Apache Spark", "Azure", "PySpark"],
    date: "Jun 2026"
  },
  {
    id: 4,
    title: "Lightweight CNN Data Augmentation",
    creator: "Akshay Reddy Panumati",
    discipline: "Machine Learning",
    icon: BrainCircuit,
    colorClass: "text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-purple-500/10",
    likes: 176,
    views: "1.8k",
    tags: ["PyTorch", "YOLOv8", "CutMix", "MLX"],
    date: "May 2026"
  },
  {
    id: 5,
    title: "EcoSync: Carbon Tracking Architecture",
    creator: "Sarah Jenkins",
    discipline: "Data Engineering",
    icon: Database,
    colorClass: "text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-500/10",
    likes: 84,
    views: "620",
    tags: ["PostgreSQL", "Python", "AWS"],
    date: "Jul 2026"
  },
  {
    id: 6,
    title: "Fintech Dashboard Redesign",
    creator: "Elena Vance",
    discipline: "UI/UX Design",
    icon: LayoutTemplate,
    colorClass: "text-orange-500 bg-orange-50 dark:text-orange-400 dark:bg-orange-500/10",
    likes: 310,
    views: "4.1k",
    tags: ["Figma", "User Research", "Prototyping"],
    date: "Sep 2026"
  },
  {
    id: 7,
    title: "Local Council Services Portal",
    creator: "David Mensah",
    discipline: "Full-Stack Web",
    icon: Code2,
    colorClass: "text-pink-600 bg-pink-50 dark:text-pink-400 dark:bg-pink-500/10",
    likes: 56,
    views: "430",
    tags: ["React", "Node.js", "Accessibility"],
    date: "Aug 2026"
  },
  {
    id: 8,
    title: "Immersive Audio Visualizer",
    creator: "Priya Sharma",
    discipline: "Creative Computing",
    icon: Smartphone,
    colorClass: "text-blue-500 bg-blue-50 dark:text-blue-400 dark:bg-blue-500/10",
    likes: 189,
    views: "2.1k",
    tags: ["Three.js", "WebAudio API", "TypeScript"],
    date: "Mar 2026"
  },
  {
    id: 9,
    title: "Automated Accessibility Auditor",
    creator: "James Thorne",
    discipline: "Machine Learning",
    icon: BrainCircuit,
    colorClass: "text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-purple-500/10",
    likes: 112,
    views: "940",
    tags: ["Python", "Playwright", "Computer Vision"],
    date: "Feb 2026"
  },
  {
    id: 10,
    title: "Sustainable Packaging E-commerce",
    creator: "Maya Patel",
    discipline: "UI/UX Design",
    icon: LayoutTemplate,
    colorClass: "text-orange-500 bg-orange-50 dark:text-orange-400 dark:bg-orange-500/10",
    likes: 245,
    views: "3.2k",
    tags: ["Figma", "Design Systems", "Framer"],
    date: "Jan 2026"
  }
];

export default function PortfolioShowcase() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDiscipline, setSelectedDiscipline] = useState("All");
  const [sortBy, setSortBy] = useState("most-viewed");

  // Filter and sort logic
  const filteredAndSortedProjects = useMemo(() => {
    let result = PROJECTS.filter((proj) => {
      const matchesSearch = proj.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            proj.creator.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDiscipline = selectedDiscipline === "All" || proj.discipline === selectedDiscipline;
      
      return matchesSearch && matchesDiscipline;
    });

    result.sort((a, b) => {
      if (sortBy === "most-viewed") {
        // Simple parse to sort "k" values correctly
        const parseViews = (v) => v.includes('k') ? parseFloat(v) * 1000 : parseInt(v);
        return parseViews(b.views) - parseViews(a.views);
      } else if (sortBy === "most-liked") {
        return b.likes - a.likes;
      } else if (sortBy === "newest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return 0;
    });

    return result;
  }, [searchQuery, selectedDiscipline, sortBy]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedDiscipline("All");
    setSortBy("most-viewed");
  };

  const disciplines = ["All", "Full-Stack Web", "Mobile App Development", "Data Engineering", "Machine Learning", "UI/UX Design", "Creative Computing"];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans text-zinc-900 dark:text-zinc-100 transition-colors duration-200 selection:bg-pink-200 selection:text-pink-900 dark:selection:bg-pink-900 dark:selection:text-pink-100">
      
      {/* Full-width introductory header section */}
      <header className="bg-white dark:bg-zinc-950 pt-32 pb-20 px-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto w-full">
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start lg:items-center">
            
            {/* Left Column: Title and Description */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6 leading-[1.15]">
                Student showcase
              </h1>
              
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-4">
                Explore technical case studies, live repositories, and design portfolios from the Docklands Creative community.
              </p>
              
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                This board gives hiring managers and partner agencies a direct look at the actual code, datasets, and design systems our students are building.
              </p>
            </div>

            {/* Right Column: Practical note block */}
            <div className="w-full lg:w-1/2">
              <div className="bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800/60 rounded-2xl p-8 lg:p-10">
                <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                  <FolderOpen size={20} className="text-pink-600 dark:text-pink-400" />
                  What you are looking at
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0"></span>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      <strong className="text-zinc-900 dark:text-zinc-200 font-medium">Verified academic work:</strong> Projects tied directly to university modules, dissertations, and supervised placements.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0"></span>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      <strong className="text-zinc-900 dark:text-zinc-200 font-medium">Beyond just screenshots:</strong> Most case studies include links to live GitHub repositories, interactive Figma prototypes, or deployed applications.
                    </p>
                  </li>
                </ul>
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
                placeholder="Search projects, technologies, or creators..."
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
                <option value="most-viewed">Sort by: Most viewed</option>
                <option value="most-liked">Sort by: Most liked</option>
                <option value="newest">Sort by: Newest</option>
              </select>
            </div>
          </div>

          <hr className="border-zinc-100 dark:border-zinc-800" />

          {/* Bottom row: Discipline filters */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider w-20 shrink-0">Field</span>
            <div className="flex flex-wrap gap-2">
              {disciplines.map((disc) => (
                <button
                  key={disc}
                  onClick={() => setSelectedDiscipline(disc)}
                  className={`px-3 py-1.5 rounded-md text-sm transition-colors border ${
                    selectedDiscipline === disc
                      ? "bg-zinc-900 text-white border-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 dark:border-zinc-100 font-medium"
                      : "bg-transparent border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-600"
                  }`}
                >
                  {disc}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Results count */}
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Showing {filteredAndSortedProjects.length} {filteredAndSortedProjects.length === 1 ? 'project' : 'projects'}
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAndSortedProjects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col overflow-hidden transition-colors hover:border-zinc-300 dark:hover:border-zinc-700 group">
              
              {/* Clean, Editorial Thumbnail Treatment */}
              <div className="h-48 bg-zinc-50 dark:bg-zinc-900/50 border-b border-zinc-100 dark:border-zinc-800 flex flex-col items-center justify-center p-6 relative">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${project.colorClass}`}>
                  <project.icon size={28} strokeWidth={1.5} />
                </div>
                <div className="text-center px-4 max-w-sm">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400 dark:text-zinc-500 mb-1.5 block">
                    {project.discipline}
                  </span>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 leading-snug line-clamp-2">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Metadata & Content */}
              <div className="p-6 flex flex-col flex-grow">
                
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-[10px] font-medium text-zinc-600 dark:text-zinc-300">
                      {project.creator.charAt(0)}
                    </div>
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{project.creator}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                    <span className="flex items-center gap-1.5"><Eye size={14} /> {project.views}</span>
                    <span className="flex items-center gap-1.5"><Heart size={14} /> {project.likes}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[11px] bg-zinc-100 dark:bg-zinc-800/80 px-2.5 py-1 rounded-md text-zinc-600 dark:text-zinc-300 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Actions */}
                <div className="mt-auto pt-5 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                    <BadgeCheck size={14} className="text-pink-600 dark:text-pink-400" />
                    Verified Case Study
                  </span>
                  
                  <Link
                    to={`/showcase/${project.id}`}
                    className="flex items-center gap-1.5 text-sm font-medium text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300 transition-colors"
                  >
                    View project <ArrowRight size={14} />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAndSortedProjects.length === 0 && (
          <div className="text-center py-24 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900">
            <Search className="mx-auto mb-4 text-zinc-300 dark:text-zinc-700" size={40} />
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-2">No projects found</h3>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto mb-6">
              We couldn't find any case studies matching your current search and filters.
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