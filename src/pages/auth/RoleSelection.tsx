import { Link } from "react-router-dom";

export default function RoleSelection() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 selection:bg-slate-200 selection:text-slate-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-3xl">
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 text-slate-900 flex items-center justify-center font-bold text-2xl tracking-wider shadow-sm">
            DC.
          </div>
        </div>
        <h2 className="text-center text-4xl font-extrabold tracking-tight text-slate-900">
          Choose your DCC path
        </h2>
        <p className="mt-3 text-center text-base text-slate-600 max-w-xl mx-auto">
          Select how you want to use Docklands Creative Connect. Don't worry, you can always request additional access later.
        </p>
      </div>

      <div className="mt-12 sm:mx-auto sm:w-full sm:max-w-6xl px-4 sm:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Candidate Path Card */}
          <Link
            to="/register/candidate"
            className="group relative bg-white rounded-3xl p-8 border-2 border-slate-200/80 hover:border-[#10B981] shadow-sm hover:shadow-xl hover:shadow-[#10B981]/10 transition-all duration-300 flex flex-col h-full overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-[#10B981]/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-[#10B981] mb-6 group-hover:bg-[#064E3B] group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-[#064E3B] mb-2">I am a Candidate</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Build your creative profile, showcase your portfolio, and apply for verified placements.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Create a dynamic portfolio showcase",
                  "Get verified by academic advisors",
                  "Track applications in real-time",
                  "Access exclusive creative briefs"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-700">
                    <svg className="w-5 h-5 text-[#10B981] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-auto relative z-10 pt-6 border-t border-slate-100">
              <span className="inline-flex items-center text-sm font-bold text-[#064E3B] group-hover:text-[#10B981] transition-colors">
                Join as Candidate
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Employer Path Card */}
          <Link
            to="/register/employer"
            className="group relative bg-white rounded-3xl p-8 border-2 border-slate-200/80 hover:border-[#FF6B6B] shadow-sm hover:shadow-xl hover:shadow-[#FF6B6B]/10 transition-all duration-300 flex flex-col h-full overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-bl from-[#FF6B6B]/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center text-[#FF6B6B] mb-6 group-hover:bg-[#0F172A] group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-[#0F172A] mb-2">I am an Employer</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Connect with verified emerging talent, post live opportunities, and manage recruitment pipelines.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Scout verified creative talent",
                  "Post jobs, internships & live briefs",
                  "Manage candidate pipelines easily",
                  "Collaborate with academic advisors"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-700">
                    <svg className="w-5 h-5 text-[#FF6B6B] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-auto relative z-10 pt-6 border-t border-slate-100">
              <span className="inline-flex items-center text-sm font-bold text-[#0F172A] group-hover:text-[#FF6B6B] transition-colors">
                Register Organisation
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Advisor Path Card */}
          <Link
            to="/register/advisor"
            className="group relative bg-white rounded-3xl p-8 border-2 border-slate-200/80 hover:border-indigo-500 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col h-full overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-bl from-indigo-500/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-900 group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2">I am an Advisor</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Supervise placements, audit candidate portfolios, and verify industry partner organizations.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Verify employer credentials",
                  "Audit student portfolios & CVs",
                  "Monitor timesheets & compliance",
                  "Oversee academic placement progress"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-700">
                    <svg className="w-5 h-5 text-indigo-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-auto relative z-10 pt-6 border-t border-slate-100">
              <span className="inline-flex items-center text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                Register as Advisor
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>

        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-slate-600">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-slate-900 hover:underline">
              Sign in to DCC
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}