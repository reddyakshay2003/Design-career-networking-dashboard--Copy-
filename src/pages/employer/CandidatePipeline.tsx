import { useState } from "react";
import { Link } from "react-router-dom";

// ── Mock Data ─────────────────────────────────────────────────────────────────
const PIPELINE_CANDIDATES = [
  {
    id: "CAND-01",
    name: "Akshay Reddy",
    role: "Frontend Engineer (Creative Tech)",
    stage: "New",
    match: 96,
    applied: "2 hours ago",
    initials: "AR",
    bg: "bg-blue-100 text-blue-700",
    skills: ["React Native", "TypeScript", "Node.js"],
  },
  {
    id: "CAND-02",
    name: "Sarah Jenkins",
    role: "Senior Product Designer",
    stage: "New",
    match: 92,
    applied: "5 hours ago",
    initials: "SJ",
    bg: "bg-purple-100 text-purple-700",
    skills: ["Figma", "Design Systems", "UX Research"],
  },
  {
    id: "CAND-03",
    name: "Marcus Thorne",
    role: "Industrial Design Intern",
    stage: "Shortlisted",
    match: 85,
    applied: "1 day ago",
    initials: "MT",
    bg: "bg-emerald-100 text-emerald-700",
    skills: ["SolidWorks", "Prototyping", "KeyShot"],
  },
  {
    id: "CAND-04",
    name: "Elena Rostova",
    role: "Frontend Engineer (Creative Tech)",
    stage: "Interview",
    match: 88,
    applied: "3 days ago",
    initials: "ER",
    bg: "bg-amber-100 text-amber-700",
    skills: ["React", "Tailwind CSS", "GraphQL"],
  },
  {
    id: "CAND-05",
    name: "Liam O'Connor",
    role: "Senior Product Designer",
    stage: "Offered",
    match: 97,
    applied: "1 week ago",
    initials: "LO",
    bg: "bg-teal-100 text-teal-700",
    skills: ["UI/UX", "Motion Design", "Framer"],
  },
];

const STAGES = ["New", "Shortlisted", "Interview", "Offered", "Archived"];

// ── Component ─────────────────────────────────────────────────────────────────
export default function CandidatePipeline() {
  const [selectedStage, setSelectedStage] = useState("All");

  const filteredCandidates = selectedStage === "All"
    ? PIPELINE_CANDIDATES
    : PIPELINE_CANDIDATES.filter(c => c.stage === selectedStage);

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto selection:bg-[#FF6B6B]/20 selection:text-[#0F172A]">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Candidate Pipeline
          </h1>
          <p className="mt-1.5 text-slate-500 text-sm md:text-base max-w-2xl">
            Review, shortlist, and move candidates through your recruitment stages. Manage feedback and schedule interviews.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl hover:bg-slate-50 transition-colors shadow-sm">
            Export Pipeline CSV
          </button>
        </div>
      </div>

      {/* Stage Filter Tabs */}
      <div className="flex space-x-1 overflow-x-auto scrollbar-hide border-b border-slate-200 pb-2">
        <button
          onClick={() => setSelectedStage("All")}
          className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
            selectedStage === "All"
              ? "bg-[#0F172A] text-white shadow-sm"
              : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
          }`}
        >
          All Candidates ({PIPELINE_CANDIDATES.length})
        </button>
        {STAGES.map((stage) => {
          const count = PIPELINE_CANDIDATES.filter(c => c.stage === stage).length;
          return (
            <button
              key={stage}
              onClick={() => setSelectedStage(stage)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                selectedStage === stage
                  ? "bg-[#0F172A] text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {stage}
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                selectedStage === stage ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Candidates Grid / List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCandidates.map((candidate) => (
          <div
            key={candidate.id}
            className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:border-[#FF6B6B]/40 transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Top Row: Avatar + Stage Badge */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shadow-inner ${candidate.bg}`}>
                    {candidate.initials}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#FF6B6B] transition-colors">
                      {candidate.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">{candidate.role}</p>
                  </div>
                </div>

                <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                  candidate.stage === "Offered" ? "bg-teal-50 text-teal-700 border border-teal-200" :
                  candidate.stage === "Interview" ? "bg-amber-50 text-amber-700 border border-amber-200" :
                  candidate.stage === "Shortlisted" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" :
                  "bg-blue-50 text-blue-700 border border-blue-200"
                }`}>
                  {candidate.stage}
                </span>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {candidate.skills.map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-slate-100 text-slate-600 rounded-lg text-[10px] font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Row: Match Score + Action */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-xl font-black text-[#0F172A]">{candidate.match}%</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider ml-1.5">Match</span>
              </div>
              
              <div className="flex items-center gap-2">
                <button className="px-3.5 py-1.5 bg-slate-100 text-[#0F172A] text-xs font-semibold rounded-xl hover:bg-[#0F172A] hover:text-white transition-all">
                  Review Profile
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}