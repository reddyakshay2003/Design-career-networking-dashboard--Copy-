import { Link } from "react-router-dom";

export default function CandidateRegister() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 selection:bg-[#10B981]/20 selection:text-[#064E3B]">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#064E3B] text-white flex items-center justify-center font-bold text-xl tracking-wider shadow-md">
            DC<span className="text-[#10B981]">.</span>
          </div>
        </div>
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-[#064E3B]">
          Build your candidate profile
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          Join Docklands Creative Connect to showcase your projects and discover opportunities.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-3xl px-4 sm:px-0">
        <div className="bg-white py-8 px-6 shadow-xl border border-slate-200/80 rounded-2xl sm:px-10">
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); window.location.href = "/dashboard"; }}>
            
            {/* 1. Personal & Academic Details */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">1. Core Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Akshay Reddy"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    University / Institution
                  </label>
                  <input
                    type="text"
                    placeholder="University of East London"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Expected Graduation
                  </label>
                  <input
                    type="text"
                    placeholder="Jan 2027"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:bg-white transition-all"
                  />
                </div>
              </div>
            </div>

            {/* 2. Professional Profile */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">2. Professional Profile</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Primary Specialization
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:bg-white transition-all text-slate-700"
                  >
                    <option>Software Engineering & Web</option>
                    <option>Data Engineering & Big Data</option>
                    <option>Computer Vision & AI</option>
                    <option>UI/UX Design & Product</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    GitHub / Portfolio URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://github.com/username"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:bg-white transition-all"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Top Skills & Technologies (Comma separated)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., React Native, Node.js, Apache Kafka, YOLOv8"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:bg-white transition-all"
                  />
                </div>
              </div>
            </div>

            {/* 3. Resume Upload */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Upload CV / Resume
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-xl hover:border-[#10B981] hover:bg-emerald-50/50 transition-colors cursor-pointer">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-slate-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex text-sm text-slate-600 justify-center">
                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-[#064E3B] hover:text-[#10B981] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#10B981]">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-slate-500">PDF, DOCX up to 5MB</p>
                </div>
              </div>
            </div>

            {/* 4. Security */}
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
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:bg-white transition-all"
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
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:bg-white transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Terms and Submit */}
            <div className="pt-2">
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input id="terms" type="checkbox" required className="w-4 h-4 rounded border-slate-300 text-[#064E3B] focus:ring-[#10B981] cursor-pointer" />
                </div>
                <label htmlFor="terms" className="ml-2 text-xs text-slate-600 cursor-pointer">
                  I agree to the <a href="#" className="font-semibold text-[#064E3B] hover:underline">Terms of Service</a> and <a href="#" className="font-semibold text-[#064E3B] hover:underline">Privacy Policy</a>.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#064E3B] hover:bg-[#064E3B]/90 text-white font-semibold py-4 px-4 rounded-xl shadow-lg shadow-[#064E3B]/15 transition-all text-sm tracking-wide"
              >
                Create Candidate Account
              </button>
            </div>
          </form>

          <div className="pt-6 mt-6 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-600">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-[#064E3B] hover:underline">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}