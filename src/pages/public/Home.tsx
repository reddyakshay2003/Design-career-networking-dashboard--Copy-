import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#10B981]/20 selection:text-[#064E3B]">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
        {/* Background decorative gradient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-tr from-[#10B981]/10 via-[#064E3B]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#064E3B]/5 border border-[#064E3B]/10">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#064E3B]">
                  East London's Creative Hub
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-[#064E3B] leading-[1.1]">
                Build a creative career with the right people behind you.
              </h1>

              <p className="text-lg lg:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
                A shared collaborative space connecting emerging candidates, forward-thinking employers, and academic advisors to discover meaningful creative and technical work[cite: 1].
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  to="/opportunities"
                  className="inline-flex items-center justify-center font-semibold text-white bg-[#064E3B] hover:bg-[#064E3B]/90 px-7 py-4 rounded-xl shadow-lg shadow-[#064E3B]/15 transition-all transform hover:-translate-y-0.5"
                >
                  Explore opportunities
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/80 px-7 py-4 rounded-xl shadow-sm transition-all"
                >
                  Join DCC free
                </Link>
              </div>

              {/* Trust stats */}
              <div className="pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-6">
                <div>
                  <p className="text-2xl font-bold text-[#064E3B]">250+</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Active Partners</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#064E3B]">1,400+</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Placed Candidates</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#064E3B]">98%</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Satisfaction Rate</p>
                </div>
              </div>
            </div>

            {/* Right Interactive Preview Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-[#064E3B] to-[#10B981] rounded-3xl blur-xl opacity-20" />
                <div className="relative bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xl space-y-6">
                  
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#10B981] flex items-center justify-center font-bold">
                        SF
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Spotify Design</h4>
                        <p className="text-xs text-slate-500">London Docklands • Hybrid</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 bg-emerald-50 text-[#10B981] text-xs font-semibold rounded-full">
                      Shortlisted
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-xs font-semibold text-slate-500">
                      <span>ROLE MATCH SCORE</span>
                      <span className="text-[#064E3B]">96%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#10B981] h-full rounded-full w-[96%]" />
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2">
                    <p className="text-xs font-bold text-slate-700">Required Stack & Skills</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["React Native", "TypeScript", "UI/UX", "Tailwind"].map((tag) => (
                        <span key={tag} className="px-2 py-0.5 bg-white border border-slate-200 text-slate-600 text-[11px] font-medium rounded-md shadow-2xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
                    <span>Applied 2 days ago</span>
                    <span className="font-semibold text-[#064E3B] hover:underline cursor-pointer">View pipeline →</span>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}