import { Link } from "react-router-dom";

export default function EmployerRegister() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 selection:bg-[#FF6B6B]/20 selection:text-[#0F172A]">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#0F172A] text-white flex items-center justify-center font-bold text-xl tracking-wider shadow-md">
            DC<span className="text-[#FF6B6B]">.</span>
          </div>
        </div>
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-[#0F172A]">
          Register your organisation
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          Join Docklands Creative Connect to hire top emerging creative and technical talent.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-3xl px-4 sm:px-0">
        <div className="bg-white py-8 px-6 shadow-xl border border-slate-200/80 rounded-2xl sm:px-10">
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); window.location.href = "/employer/dashboard"; }}>
            
            {/* 1. Company Information */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">1. Company Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Acme Studios Ltd."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Website URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://acmestudios.com"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Industry Sector
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:bg-white transition-all text-slate-700"
                  >
                    <option>Creative Agency & Advertising</option>
                    <option>Software & Technology</option>
                    <option>Media, Film & Entertainment</option>
                    <option>Architecture & Interior Design</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Company Size
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:bg-white transition-all text-slate-700"
                  >
                    <option>1 - 10 employees (Startup)</option>
                    <option>11 - 50 employees</option>
                    <option>51 - 200 employees</option>
                    <option>201 - 500 employees</option>
                    <option>500+ employees (Enterprise)</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Brief Company Description
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell candidates about your company mission, culture, and the kind of work you do..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:bg-white transition-all resize-none"
                  />
                </div>
              </div>
            </div>

            {/* 2. Administrator Details */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">2. Administrator Account</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Sarah Jenkins"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Job Title
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Head of Talent Acquisition"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:bg-white transition-all"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Work Email Address (Must match company domain)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@acmestudios.com"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:bg-white transition-all"
                  />
                </div>
              </div>
            </div>

            {/* 3. Security */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">3. Security</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:bg-white transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Terms and Submit */}
            <div className="pt-4">
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input id="terms" type="checkbox" required className="w-4 h-4 rounded border-slate-300 text-[#0F172A] focus:ring-[#FF6B6B] cursor-pointer" />
                </div>
                <label htmlFor="terms" className="ml-2 text-xs text-slate-600 cursor-pointer leading-relaxed">
                  I confirm that I am authorised to create an account on behalf of this organisation. I agree to the <a href="#" className="font-semibold text-[#FF6B6B] hover:underline">Employer Terms of Service</a>, <a href="#" className="font-semibold text-[#FF6B6B] hover:underline">Data Processing Agreement</a>, and <a href="#" className="font-semibold text-[#FF6B6B] hover:underline">Privacy Policy</a>.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0F172A] hover:bg-[#1e293b] text-white font-semibold py-4 px-4 rounded-xl shadow-lg shadow-[#0F172A]/10 transition-all text-sm tracking-wide border border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-[#0F172A]"
              >
                Create Employer Account
              </button>
            </div>
          </form>

          <div className="pt-6 mt-6 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-600">
              Already have an employer account?{" "}
              <Link to="/login" className="font-semibold text-[#FF6B6B] hover:underline">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}