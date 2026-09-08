import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PostOpportunity() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    type: "Full-time",
    location: "London Docklands • Hybrid",
    salary: "",
    department: "Design",
    description: "",
    requirements: "",
    deadline: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API submission
    setTimeout(() => {
      setLoading(false);
      alert("Opportunity published successfully to the DCC community!");
      navigate("/employer");
    }, 800);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-4xl mx-auto selection:bg-[#FF6B6B]/20 selection:text-[#0F172A]">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] tracking-tight">
          Post an Opportunity
        </h1>
        <p className="mt-1.5 text-slate-500 text-sm md:text-base max-w-2xl">
          Publish a clear, inclusive brief for the Docklands Creative Connect community to attract top emerging design and tech talent.
        </p>
      </div>

      {/* Form Container */}
      <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden p-6 sm:p-10 space-y-8">
        
        {/* Section 1: Basic Info */}
        <div className="space-y-6">
          <h2 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider border-b border-slate-100 pb-3">
            1. Role Details
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Opportunity Title *
              </label>
              <input
                type="text"
                name="title"
                required
                placeholder="e.g. Senior Product Designer or Creative Tech Intern"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:bg-white transition-all text-slate-800"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Opportunity Type *
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:bg-white transition-all text-slate-800"
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Placement">Placement / Internship</option>
                <option value="Freelance">Freelance / Contract</option>
                <option value="Live Brief">Live Academic Brief</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Department / Field *
              </label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:bg-white transition-all text-slate-800"
              >
                <option value="Design">Product & UX Design</option>
                <option value="Engineering">Software Engineering</option>
                <option value="AI & Data">AI, Data & Vision</option>
                <option value="Creative Tech">Creative Technologies</option>
                <option value="Industrial Design">Industrial Design</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Location & Workplace *
              </label>
              <input
                type="text"
                name="location"
                required
                placeholder="e.g. London Docklands • Hybrid / Remote"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:bg-white transition-all text-slate-800"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Salary / Compensation *
              </label>
              <input
                type="text"
                name="salary"
                required
                placeholder="e.g. £65K–£80K or £28K (Pro-rata)"
                value={formData.salary}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:bg-white transition-all text-slate-800"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Description & Requirements */}
        <div className="space-y-6 pt-6 border-t border-slate-100">
          <h2 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider border-b border-slate-100 pb-3">
            2. Role Scope & Requirements
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Role Description & Brief *
              </label>
              <textarea
                name="description"
                rows={5}
                required
                placeholder="Describe the team, the creative challenges, and what the candidate will be working on..."
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:bg-white transition-all resize-none text-slate-800"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Key Requirements & Skills *
              </label>
              <textarea
                name="requirements"
                rows={4}
                required
                placeholder="List technical stack, portfolio expectations, or qualification criteria (bullet points recommended)..."
                value={formData.requirements}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:bg-white transition-all resize-none text-slate-800"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Application Deadline *
              </label>
              <input
                type="date"
                name="deadline"
                required
                value={formData.deadline}
                onChange={handleChange}
                className="w-full sm:w-1/2 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:bg-white transition-all text-slate-800"
              />
            </div>
          </div>
        </div>

        {/* Submit Actions */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-end gap-4">
          <button
            type="button"
            onClick={() => navigate("/employer")}
            className="px-6 py-3 bg-white border border-slate-200 text-slate-700 font-semibold text-sm rounded-xl hover:bg-slate-50 transition-colors shadow-sm"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 bg-[#0F172A] hover:bg-[#1e293b] text-white font-semibold text-sm rounded-xl shadow-lg shadow-[#0F172A]/15 transition-all flex items-center gap-2 disabled:opacity-50"
          >
            {loading ? "Publishing..." : "Publish Opportunity"}
          </button>
        </div>

      </form>
    </div>
  );
}