import { Link, Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-[#10B981]/20 selection:text-[#064E3B]">
      {/* Global Public Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#064E3B] text-white flex items-center justify-center font-bold tracking-wider shadow-sm">
              DC<span className="text-[#10B981]">.</span>
            </div>
            <span className="text-lg font-bold text-[#064E3B] tracking-tight">
              Docklands Creative Connect
            </span>
          </Link>
          <nav className="flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link to="/opportunities" className="hover:text-[#064E3B] transition-colors">
              Opportunities
            </Link>
            <Link to="/companies" className="hover:text-[#064E3B] transition-colors">
              Companies
            </Link>
            <Link to="/showcase" className="hover:text-[#064E3B] transition-colors">
              Creative Showcase
            </Link>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <Link to="/login" className="text-slate-700 hover:text-[#064E3B] transition-colors">
                Sign in
              </Link>
              <Link
                to="/register"
                className="bg-[#064E3B] text-white px-4 py-2.5 rounded-xl font-semibold shadow-sm hover:bg-[#064E3B]/90 transition-all"
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
      <footer className="border-t border-slate-200 bg-white py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Docklands Creative Connect. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}