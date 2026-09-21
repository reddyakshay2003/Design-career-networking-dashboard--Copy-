import { Link, Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col selection:bg-pink-200 selection:text-pink-900 dark:selection:bg-pink-900 dark:selection:text-pink-100">
      
      {/* Global Public Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-pink-600 text-white flex items-center justify-center font-bold tracking-wider transition-transform group-hover:scale-105">
              DC<span className="text-pink-200">.</span>
            </div>
            <span className="text-lg font-bold text-zinc-900 dark:text-white tracking-tight">
              Docklands Creative
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            <Link to="/opportunities" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              Opportunities
            </Link>
            <Link to="/companies" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              Companies
            </Link>
            <Link to="/showcase" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              Showcase
            </Link>
            
            <div className="flex items-center gap-4 pl-6 border-l border-zinc-200 dark:border-zinc-800">
              <Link to="/login" className="text-zinc-900 dark:text-white hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                Sign in
              </Link>
              <Link
                to="/register"
                className="bg-pink-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
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
      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-8 text-xs text-zinc-500 dark:text-zinc-400 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Docklands Creative. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}