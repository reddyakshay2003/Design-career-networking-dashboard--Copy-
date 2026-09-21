import { Link } from "react-router-dom";
import { UploadCloud } from "lucide-react";

export default function CandidateRegister() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-32 pb-12 px-4 sm:px-6 lg:px-8 selection:bg-[#10B981]/20 selection:text-[#064E3B] transition-colors duration-200">
      
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="flex justify-center mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#064E3B] text-white flex items-center justify-center font-bold tracking-wider shadow-sm">
            DC<span className="text-[#10B981]">.</span>
          </div>
        </div>
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#064E3B]">
          Build your candidate profile
        </h2>
        <p className="mt-3 text-center text-slate-600">
          Join Docklands Creative Connect to showcase your projects and discover opportunities.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-3xl">
        <div className="bg-white py-8 px-6 shadow-sm border border-slate-200/80 rounded-2xl sm:px-10 transition-colors duration-200">
          <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); window.location.href = "/dashboard"; }}>
            
            {/* 1. Core Information */}
            <div>
              <h3 className="text-base font-semibold text-slate-900 mb-5 border-b border-slate-100 pb-3">
                1. Core details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    First name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="First name"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]/50 focus:border-[#10B981]/50 transition-all text-slate-900 placeholder-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Last name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Last name"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]/50 focus:border-[#10B981]/50 transition-all text-slate-900 placeholder-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Email address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="mail@gmail.com"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]/50 focus:border-[#10B981]/50 transition-all text-slate-900 placeholder-slate-400"
                  />
                </div>
                <div className="hidden sm:block"></div> {/* Spacer for grid alignment */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    University / Institution
                  </label>
                  <input
                    type="text"
                    placeholder="University name"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]/50 focus:border-[#10B981]/50 transition-all text-slate-900 placeholder-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Expected graduation
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. June 2027"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]/50 focus:border-[#10B981]/50 transition-all text-slate-900 placeholder-slate-400"
                  />
                </div>
              </div>
            </div>

            {/* 2. Professional Profile */}
            <div>
              <h3 className="text-base font-semibold text-slate-900 mb-5 border-b border-slate-100 pb-3">
                2. Professional profile
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Primary focus
                  </label>
                  <select
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]/50 focus:border-[#10B981]/50 transition-all text-slate-900 appearance-none"
                    style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239ca3af%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '.65rem auto' }}
                  >
                    <option>Software Engineering & Web</option>
                    <option>Data Engineering & Big Data</option>
                    <option>Computer Vision & AI</option>
                    <option>UI/UX Design & Product</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Portfolio / GitHub URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://github.com/username"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]/50 focus:border-[#10B981]/50 transition-all text-slate-900 placeholder-slate-400"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Top skills (Comma separated)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. React, TypeScript, Figma"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]/50 focus:border-[#10B981]/50 transition-all text-slate-900 placeholder-slate-400"
                  />
                </div>
              </div>
            </div>

            {/* 3. Resume Upload */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Upload CV / Resume
              </label>
              <div className="mt-1 flex justify-center px-6 pt-6 pb-7 border border-slate-300 border-dashed rounded-xl hover:border-[#10B981]/60 hover:bg-[#10B981]/5 transition-colors cursor-pointer group">
                <div className="space-y-2 text-center">
                  <UploadCloud className="mx-auto h-8 w-8 text-slate-400 group-hover:text-[#10B981] transition-colors" strokeWidth={1.5} />
                  <div className="flex text-sm text-slate-600 justify-center">
                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-[#064E3B] hover:text-[#10B981] focus-within:outline-none">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-slate-500">PDF or DOCX up to 5MB</p>
                </div>
              </div>
            </div>

            {/* 4. Security */}
            <div>
              <h3 className="text-base font-semibold text-slate-900 mb-5 border-b border-slate-100 pb-3 mt-4">
                3. Security
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]/50 focus:border-[#10B981]/50 transition-all text-slate-900 placeholder-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]/50 focus:border-[#10B981]/50 transition-all text-slate-900 placeholder-slate-400"
                  />
                </div>
              </div>
            </div>

            {/* Terms and Submit */}
            <div className="pt-4">
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input 
                    id="terms" 
                    type="checkbox" 
                    required 
                    className="w-4 h-4 rounded border-slate-300 text-[#064E3B] focus:ring-[#10B981] cursor-pointer" 
                  />
                </div>
                <label htmlFor="terms" className="ml-2.5 text-sm text-slate-600 cursor-pointer">
                  I agree to the <a href="#" className="font-medium text-slate-900 hover:text-[#064E3B] hover:underline">Terms of Service</a> and <a href="#" className="font-medium text-slate-900 hover:text-[#064E3B] hover:underline">Privacy Policy</a>.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#064E3B] hover:bg-[#064E3B]/90 text-white font-medium py-3 px-4 rounded-lg transition-colors text-sm"
              >
                Create Candidate Account
              </button>
            </div>
          </form>

          <div className="pt-6 mt-8 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-600">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-[#064E3B] hover:underline">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}