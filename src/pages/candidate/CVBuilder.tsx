import { useState } from "react";

export default function CVBuilder() {
  const [activeTemplate, setActiveTemplate] = useState<"minimal" | "modern" | "creative">("modern");
  
  // Toggle states for CV sections
  const [sections, setSections] = useState({
    summary: true,
    experience: true,
    education: true,
    projects: true,
    skills: true,
  });

  const toggleSection = (key: keyof typeof sections) => {
    setSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            CV Builder
          </h1>
          <p className="mt-1.5 text-slate-500 text-sm md:text-base max-w-2xl">
            Generate a focused CV using your DCC profile. Customize the layout and content before exporting.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl hover:bg-slate-50 transition-colors shadow-sm">
            Sync from Profile
          </button>
          <button className="px-5 py-2.5 bg-[#064E3B] text-white text-sm font-semibold rounded-xl hover:bg-[#064E3B]/90 transition-all shadow-sm flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Export PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Controls */}
        <div className="lg:col-span-4 space-y-6 sticky top-6">
          
          {/* Template Selection */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              1. Choose Layout
            </h3>
            <div className="space-y-3">
              {[
                { id: "minimal", name: "Minimalist", desc: "Clean, traditional structure" },
                { id: "modern", name: "Modern", desc: "Two-column with accent colors" },
                { id: "creative", name: "Creative", desc: "Bold typography for design roles" }
              ].map((tpl) => (
                <button
                  key={tpl.id}
                  onClick={() => setActiveTemplate(tpl.id as any)}
                  className={`w-full flex items-start text-left p-3 rounded-xl border transition-all ${
                    activeTemplate === tpl.id 
                      ? "border-[#10B981] bg-emerald-50/50 shadow-sm" 
                      : "border-slate-100 hover:border-slate-200 bg-white"
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full mt-0.5 mr-3 flex-shrink-0 border flex items-center justify-center ${
                    activeTemplate === tpl.id ? "border-[#10B981]" : "border-slate-300"
                  }`}>
                    {activeTemplate === tpl.id && <div className="w-2 h-2 rounded-full bg-[#10B981]" />}
                  </div>
                  <div>
                    <p className={`text-sm font-bold ${activeTemplate === tpl.id ? "text-[#064E3B]" : "text-slate-700"}`}>
                      {tpl.name}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">{tpl.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Content Toggles */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              2. Included Sections
            </h3>
            <div className="space-y-3">
              {[
                { id: "summary", label: "Professional Summary" },
                { id: "experience", label: "Work Experience" },
                { id: "education", label: "Education & Certifications" },
                { id: "projects", label: "Selected Projects" },
                { id: "skills", label: "Core Skills & Tools" },
              ].map((section) => (
                <label key={section.id} className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={sections[section.id as keyof typeof sections]}
                    onChange={() => toggleSection(section.id as keyof typeof sections)}
                    className="w-4 h-4 rounded border-slate-300 text-[#064E3B] focus:ring-[#10B981] cursor-pointer"
                  />
                  <span className="text-sm font-medium text-slate-700 select-none">
                    {section.label}
                  </span>
                </label>
              ))}
            </div>
            
            <div className="mt-6 pt-5 border-t border-slate-100">
              <button className="text-sm font-semibold text-[#10B981] hover:text-[#064E3B] transition-colors flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                Add Custom Section
              </button>
            </div>
          </div>

        </div>

        {/* Right Column: Live A4 Preview */}
        <div className="lg:col-span-8 bg-slate-200/60 rounded-3xl p-6 sm:p-10 flex justify-center overflow-hidden border border-slate-200 shadow-inner">
          {/* A4 Paper Container */}
          <div className="bg-white w-full max-w-[210mm] min-h-[297mm] shadow-xl rounded-sm transition-all duration-500 origin-top transform scale-[0.85] sm:scale-100">
            
            {/* --- CV CONTENT PREVIEW --- */}
            {activeTemplate === "modern" ? (
              // MODERN TEMPLATE (2-Column)
              <div className="flex h-full min-h-[297mm]">
                {/* Left Sidebar */}
                <div className="w-[35%] bg-slate-50 p-8 border-r border-slate-100 flex flex-col gap-8">
                  <div>
                    <h1 className="text-3xl font-extrabold text-[#064E3B] tracking-tight leading-none mb-2">
                      Akshay Reddy
                    </h1>
                    <p className="text-sm font-bold text-[#10B981]">Software Engineer</p>
                  </div>

                  <div className="space-y-2 text-xs text-slate-500">
                    <p className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      akshay@example.com
                    </p>
                    <p className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                      github.com/akshay
                    </p>
                    <p className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      London, UK
                    </p>
                  </div>

                  {sections.education && (
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-3 border-b border-slate-200 pb-1">Education</h3>
                      <p className="text-sm font-bold text-slate-800">MSc Computer Science</p>
                      <p className="text-xs text-slate-500">University of East London</p>
                      <p className="text-[10px] font-semibold text-[#10B981] mt-0.5">Expected Jan 2027</p>
                    </div>
                  )}

                  {sections.skills && (
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-3 border-b border-slate-200 pb-1">Core Skills</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {["React Native", "Node.js", "TypeScript", "Apache Kafka", "YOLOv8", "Docker", "MongoDB"].map(skill => (
                          <span key={skill} className="px-2 py-1 bg-slate-200 text-slate-700 rounded text-[10px] font-semibold">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Main Content */}
                <div className="w-[65%] p-8 flex flex-col gap-6">
                  {sections.summary && (
                    <div className="space-y-2">
                      <h3 className="text-xs font-bold text-[#064E3B] uppercase tracking-widest">Profile</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Detail-oriented software engineer with expertise in cross-platform mobile and web application development, big data architectures, and computer vision. Passionate about building scalable systems and intuitive user interfaces.
                      </p>
                    </div>
                  )}

                  {sections.experience && (
                    <div className="space-y-4">
                      <h3 className="text-xs font-bold text-[#064E3B] uppercase tracking-widest border-b border-slate-100 pb-1">Experience</h3>
                      
                      <div>
                        <div className="flex justify-between items-baseline mb-1">
                          <h4 className="text-sm font-bold text-slate-900">Mobile App Developer</h4>
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Jul 2026 - Aug 2026</span>
                        </div>
                        <p className="text-xs font-semibold text-[#10B981] mb-2">Creative Industries Festival</p>
                        <ul className="list-disc list-outside ml-3 text-xs text-slate-600 space-y-1">
                          <li>Developed a cross-platform mobile application using React Native and Expo.</li>
                          <li>Built a React-based web admin panel and configured Firebase authentication.</li>
                        </ul>
                      </div>

                      <div>
                        <div className="flex justify-between items-baseline mb-1">
                          <h4 className="text-sm font-bold text-slate-900">Big Data Architect (Academic)</h4>
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Jan 2026 - Jun 2026</span>
                        </div>
                        <p className="text-xs font-semibold text-[#10B981] mb-2">University of East London</p>
                        <ul className="list-disc list-outside ml-3 text-xs text-slate-600 space-y-1">
                          <li>Designed a big data architecture integrating real-time traffic APIs and STATS19 data.</li>
                          <li>Utilized Apache Kafka, Apache Spark, and Microsoft Azure for scalable processing.</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {sections.projects && (
                    <div className="space-y-4">
                      <h3 className="text-xs font-bold text-[#064E3B] uppercase tracking-widest border-b border-slate-100 pb-1">Selected Projects</h3>
                      
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Computer Vision Analysis (YOLOv8)</h4>
                        <p className="text-xs text-slate-600 mt-1">
                          Researched lightweight CNN architectures and data augmentation techniques. Trained YOLOv8 models to compare weak, moderate, and strong image augmentations.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-slate-900">BookCycle (MERN Stack)</h4>
                        <p className="text-xs text-slate-600 mt-1">
                          Contributed to an open-source peer-to-peer book trading web application leveraging MongoDB, Express, React, and Node.js.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              // MINIMAL / CREATIVE FALLBACK (Placeholder for other layouts)
              <div className="p-12 h-full flex flex-col items-center justify-center text-slate-400 text-sm">
                <svg className="w-12 h-12 mb-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                {activeTemplate === "minimal" ? "Minimalist" : "Creative"} template preview loading...
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}