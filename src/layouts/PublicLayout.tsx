import { Link, Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-[#030712] flex flex-col selection:bg-pink-500/30 selection:text-pink-200">
      {/* Global Public Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-pink-500 text-white flex items-center justify-center font-bold tracking-wider shadow-[0_0_15px_rgba(236,72,153,0.4)]">
              DC<span className="text-cyan-300">.</span>
            </div>
            <span className="text-lg font-bold text-white tracking-tight drop-shadow-md">
              Docklands Creative Connect
            </span>
          </Link>
          <nav className="flex items-center gap-8 text-sm font-medium text-slate-300">
            <Link to="/opportunities" className="hover:text-pink-400 transition-colors drop-shadow-sm">
              Opportunities
            </Link>
            <Link to="/companies" className="hover:text-pink-400 transition-colors drop-shadow-sm">
              Companies
            </Link>
            <Link to="/showcase" className="hover:text-pink-400 transition-colors drop-shadow-sm">
              Creative Showcase
            </Link>
            <div className="flex items-center gap-3 pl-4 border-l border-white/20">
              <Link to="/login" className="text-white hover:text-pink-400 transition-colors drop-shadow-sm">
                Sign in
              </Link>
              <Link
                to="/register"
                className="bg-pink-500 text-white px-4 py-2.5 rounded-xl font-semibold shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:bg-pink-600 transition-all"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Professional Footer */}
      <footer className="border-t border-white/10 bg-[#020408] py-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Docklands Creative Connect. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-pink-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-pink-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-pink-400 transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}