import { useState } from "react";
import { Link } from "react-router-dom";

// ── Mock Data ─────────────────────────────────────────────────────────────────
const PORTFOLIO_PROJECTS = [
  {
    id: "PRJ-001",
    title: "YOLOv8 Object Detection Analysis",
    category: "Computer Vision & AI",
    status: "Published",
    lastModified: "Sep 5, 2026",
    views: 142,
    gradient: "from-blue-500 to-indigo-600",
    icon: (
      <svg className="w-8 h-8 text-white opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    )
  },
  {
    id: "PRJ-002",
    title: "BookCycle Peer-to-Peer Platform",
    category: "Full Stack (MERN)",
    status: "Published",
    lastModified: "Aug 28, 2026",
    views: 89,
    gradient: "from-emerald-400 to-teal-600",
    icon: (
      <svg className="w-8 h-8 text-white opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
    )
  },
  {
    id: "PRJ-003",
    title: "STATS19 Big Data Pipeline",
    category: "Data Engineering",
    status: "Published",
    lastModified: "Jul 15, 2026",
    views: 215,
    gradient: "from-purple-500 to-pink-600",
    icon: (
      <svg className="w-8 h-8 text-white opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
    )
  },
  {
    id: "PRJ-004",
    title: "Creative Festival Admin App",
    category: "React Native & Firebase",
    status: "Draft",
    lastModified: "Today, 11:30 AM",
    views: 0,
    gradient: "from-amber-400 to-orange-500",
    icon: (
      <svg className="w-8 h-8 text-white opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
    )
  },
];

const TABS = ["All Projects", "Published", "Drafts"];

// ── Component ─────────────────────────────────────────────────────────────────
export default function PortfolioManager() {
  const [activeTab, setActiveTab] = useState("All Projects");

  const filteredProjects = PORTFOLIO_PROJECTS.filter(p => {
    if (activeTab === "Published") return p.status === "Published";
    if (activeTab === "Drafts") return p.status === "Draft";
    return true;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto">
      
      {/* Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Portfolio Manager
          </h1>
          <p className="mt-1.5 text-slate-500 text-sm md:text-base max-w-2xl">
            Organise your projects, case studies, and code repositories to showcase your technical and creative expertise.
          </p>
        </div>
        <div className="flex flex-shrink-0 items-center gap-3">
          <button className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
            Import Repository
          </button>
          <button className="px-5 py-2.5 bg-[#064E3B] text-white text-sm font-semibold rounded-xl hover:bg-[#064E3B]/90 transition-all shadow-sm flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
            New Project
          </button>
        </div>
      </div>

      {/* Tabs & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === tab
                  ? "bg-slate-100 text-[#064E3B]"
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="relative">
          <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <input 
            type="text" 
            placeholder="Search projects..." 
            className="w-full md:w-64 pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] transition-all"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md hover:border-[#10B981]/50 transition-all duration-300 flex flex-col h-full">
            
            {/* Thumbnail / Header Area */}
            <div className={`h-40 w-full bg-gradient-to-br ${project.gradient} relative p-4 flex items-center justify-center`}>
              <div className="absolute top-4 left-4">
                <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${
                  project.status === "Published" 
                    ? "bg-white/20 text-white border border-white/30" 
                    : "bg-black/30 text-white/90 border border-black/20"
                }`}>
                  {project.status}
                </span>
              </div>
              
              {/* Abstract Icon representing the project type */}
              <div className="transform group-hover:scale-110 transition-transform duration-500">
                {project.icon}
              </div>

              {/* Hover Actions Overlay */}
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-sm">
                <button className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-[#10B981] hover:text-white transition-colors shadow-lg">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-[#10B981] hover:text-white transition-colors shadow-lg">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-5 flex flex-col flex-1">
              <span className="text-xs font-bold text-[#10B981] uppercase tracking-wider mb-2">
                {project.category}
              </span>
              <h3 className="text-lg font-bold text-slate-900 leading-tight mb-4 group-hover:text-[#064E3B] transition-colors">
                {project.title}
              </h3>
              
              <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {project.lastModified}
                </span>
                {project.status === "Published" && (
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    {project.views}
                  </span>
                )}
              </div>
            </div>
            
          </div>
        ))}
      </div>

    </div>
  );
}