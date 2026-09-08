import { useState } from "react";
import { Link } from "react-router-dom";

const PROJECTS = [
  {
    id: 1,
    title: "EcoSync: Real-Time Carbon Tracking Architecture",
    creator: "Akshay Reddy",
    discipline: "Full-Stack & Big Data",
    thumbnail: "bg-emerald-900",
    likes: 142,
    views: "1.2k",
    tags: ["Apache Kafka", "React Native", "Azure", "TypeScript"],
  },
  {
    id: 2,
    title: "NeonPulse: Immersive Audio Visualizer App",
    creator: "Elena Vance",
    discipline: "Motion & UI/UX",
    thumbnail: "bg-indigo-900",
    likes: 98,
    views: "850",
    tags: ["Figma", "Tailwind", "Framer Motion"],
  },
  {
    id: 3,
    title: "Docklands Autonomous Delivery Logistics",
    creator: "Marcus Thorne",
    discipline: "Computer Vision & AI",
    thumbnail: "bg-slate-800",
    likes: 215,
    views: "2.4k",
    tags: ["YOLOv8", "Python", "PyTorch", "FastAPI"],
  },
  {
    id: 4,
    title: "Aura: Decentralized Peer-to-Peer Book Exchange",
    creator: "Priya Sharma",
    discipline: "Web3 & MERN Stack",
    thumbnail: "bg-teal-800",
    likes: 76,
    views: "640",
    tags: ["React", "Node.js", "MongoDB", "Firebase"],
  },
];

export default function PortfolioShowcase() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDiscipline, setSelectedDiscipline] = useState("All");

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesSearch = proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proj.creator.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDiscipline = selectedDiscipline === "All" || proj.discipline.includes(selectedDiscipline);
    return matchesSearch && matchesDiscipline;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-[#064E3B] tracking-tight">Creative Portfolio Showcase</h1>
          <p className="text-slate-600 text-sm mt-1">Explore selected work, technical case studies, and creative projects from the DCC community.</p>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search projects or creators..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] w-72 shadow-2xs"
          />
        </div>
      </div>

      {/* Discipline Filters */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
        {["All", "Full-Stack", "UI/UX", "Computer Vision", "MERN"].map((disc) => (
          <button
            key={disc}
            onClick={() => setSelectedDiscipline(disc)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedDiscipline === disc
                ? "bg-[#064E3B] text-white shadow-sm"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            {disc}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            {/* Thumbnail Box */}
            <div className={`h-56 ${project.thumbnail} relative flex items-center justify-center p-6 text-white`}>
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10 text-center space-y-2">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full">
                  {project.discipline}
                </span>
                <h3 className="text-xl font-bold tracking-tight px-4">{project.title}</h3>
              </div>
            </div>

            {/* Content & Metadata */}
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500 pb-3 border-b border-slate-100">
                <span className="font-semibold text-slate-900">By {project.creator}</span>
                <div className="flex items-center gap-4">
                  <span>❤️ {project.likes}</span>
                  <span>👁️ {project.views}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[11px] font-medium rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-[#10B981] font-semibold">Verified Case Study</span>
                <Link
                  to={`/showcase/${project.id}`}
                  className="px-4 py-2 bg-[#064E3B] text-white text-xs font-semibold rounded-xl hover:bg-[#064E3B]/90 transition-all shadow-sm"
                >
                  View Case Study →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}