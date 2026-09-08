import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  // State to track which role the user is simulating
  const [role, setRole] = useState<"candidate" | "employer" | "advisor">("candidate");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Dynamic routing based on the selected role
    if (role === "candidate") {
      navigate("/candidate");
    } else if (role === "employer") {
      navigate("/employer");
    } else {
      navigate("/advisor");
    }
  };

  const getAccentColor = () => {
    if (role === "candidate") return "#064E3B";
    if (role === "employer") return "#0F172A";
    return "indigo";
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center mb-4">
          <div className={`w-12 h-12 rounded-2xl text-white flex items-center justify-center font-bold text-xl tracking-wider shadow-md transition-colors ${
            role === 'candidate' ? 'bg-[#064E3B]' : role === 'employer' ? 'bg-[#0F172A]' : 'bg-indigo-600'
          }`}>
            DC<span className={
              role === 'candidate' ? 'text-[#10B981]' : role === 'employer' ? 'text-[#FF6B6B]' : 'text-indigo-200'
            }>.</span>
          </div>
        </div>
        <h2 className={`text-center text-3xl font-extrabold tracking-tight transition-colors ${
          role === 'candidate' ? 'text-[#064E3B]' : role === 'employer' ? 'text-[#0F172A]' : 'text-indigo-950'
        }`}>
          Welcome back to DCC
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600 capitalize">
          Sign in to your {role} workspace
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        <div className="bg-white py-8 px-6 shadow-xl border border-slate-200/80 rounded-2xl sm:px-10 space-y-6">
          
          {/* Role Toggle Tabs */}
          <div className="flex p-1 bg-slate-100 rounded-xl">
            <button
              type="button"
              onClick={() => setRole("candidate")}
              className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                role === "candidate"
                  ? "bg-white text-[#064E3B] shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Candidate
            </button>
            <button
              type="button"
              onClick={() => setRole("employer")}
              className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                role === "employer"
                  ? "bg-white text-[#0F172A] shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Employer
            </button>
            <button
              type="button"
              onClick={() => setRole("advisor")}
              className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                role === "advisor"
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Advisor
            </button>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder={
                  role === "candidate" ? "akshay@example.com" : role === "employer" ? "sarah@acmestudios.com" : "advisor@university.ac.uk"
                }
                className={`w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                  role === 'candidate' ? 'focus:ring-[#10B981]' : role === 'employer' ? 'focus:ring-[#FF6B6B]' : 'focus:ring-indigo-500'
                }`}
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                className={`w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                  role === 'candidate' ? 'focus:ring-[#10B981]' : role === 'employer' ? 'focus:ring-[#FF6B6B]' : 'focus:ring-indigo-500'
                }`}
              />
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                <input 
                  type="checkbox" 
                  className={`rounded border-slate-300 ${
                    role === 'candidate' ? 'text-[#064E3B] focus:ring-[#10B981]' : role === 'employer' ? 'text-[#0F172A] focus:ring-[#FF6B6B]' : 'text-indigo-600 focus:ring-indigo-500'
                  }`} 
                />
                Remember me
              </label>
              <a href="#" className={`font-semibold hover:underline ${
                role === 'candidate' ? 'text-[#064E3B]' : role === 'employer' ? 'text-[#0F172A]' : 'text-indigo-600'
              }`}>
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className={`w-full mt-2 text-white font-semibold py-3.5 px-4 rounded-xl shadow-lg transition-all capitalize ${
                role === 'candidate' 
                  ? 'bg-[#064E3B] hover:bg-[#064E3B]/90 shadow-[#064E3B]/15' 
                  : role === 'employer'
                  ? 'bg-[#0F172A] hover:bg-[#1e293b] shadow-[#0F172A]/10'
                  : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/15'
              }`}
            >
              Sign in as {role}
            </button>
          </form>

          <div className="pt-4 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-600">
              New to Docklands Creative Connect?{" "}
              <Link to="/register" className={`font-semibold hover:underline ${
                role === 'candidate' ? 'text-[#064E3B]' : role === 'employer' ? 'text-[#0F172A]' : 'text-indigo-600'
              }`}>
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}