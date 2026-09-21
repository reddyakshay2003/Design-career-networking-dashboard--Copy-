import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import the icons from lucide-react
import { 
  Search,
  BadgeCheck, 
  Clock, 
  Target, 
  MonitorPlay, 
  Users, 
  FileText,
  ArrowRight
} from "lucide-react";

import heroVideo from "./hero-background.mp4";

const HERO_VIDEO = heroVideo;

const KEYWORDS = ["creative", "design", "engineering"];

const studentProfiles = [
  { name: "Alex P.", role: "Frontend Developer", degree: "BSc Computer Science", skills: ["React", "TypeScript", "Tailwind"], status: "Actively looking" },
  { name: "Sarah J.", role: "Data Analyst", degree: "MSc Data Science", skills: ["Python", "SQL", "Tableau"], status: "Placed" },
  { name: "David M.", role: "Backend Developer", degree: "BSc Software Engineering", skills: ["Node.js", "PostgreSQL", "Docker"], status: "Actively looking" },
  { name: "Elena R.", role: "Product Designer", degree: "BA Graphic Design", skills: ["Figma", "User Testing", "CSS"], status: "Interviewing" },
  { name: "James T.", role: "Mobile Developer", degree: "MSc Computer Science", skills: ["React Native", "Swift", "Firebase"], status: "Actively looking" },
  { name: "Maya K.", role: "Machine Learning", degree: "MSc Artificial Intelligence", skills: ["PyTorch", "TensorFlow", "Python"], status: "Actively looking" },
];

const testimonials = [
  {
    quote: "I got my summer placement sorted through here in April. The best part was not having to fill out the exact same massive application form 50 times. My uni advisor just checks my hours directly on the dashboard, so I don't have to email them a spreadsheet every Friday.",
    author: "Leo C.",
    role: "Third-year CS Student",
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "We brought on two frontend interns last month. Being able to just click through to their Vercel links and GitHub repos instead of reading a generic PDF CV saved us hours. It's straightforward and cuts out a lot of the usual recruitment noise.",
    author: "Amina Y.",
    role: "Engineering Lead @ Studio North",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?auto=format&fit=crop&q=80&w=200"
  }
];

export default function LandingPage() {
  const [isDark, setIsDark] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeKeywordIndex, setActiveKeywordIndex] = useState(0);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.backgroundColor = '#09090b'; 
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.backgroundColor = '#fafafa';
    }
  }, [isDark]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveKeywordIndex((prev) => (prev + 1) % KEYWORDS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-200 selection:bg-pink-200 selection:text-pink-900 dark:selection:bg-pink-900 dark:selection:text-pink-100">
      
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-md hover:shadow-lg transition-all"
        aria-label="Toggle theme"
      >
        {isDark ? "☀️" : "🌙"}
      </button>

      {/* FULL-SCREEN Hero Section */}
      <header className="relative h-screen flex flex-col justify-center overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video 
            autoPlay muted loop playsInline
            className="w-full h-full object-cover"
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
            Start your <br />
            <span className="text-pink-400 inline-block min-w-[200px] transition-all duration-300">
              {KEYWORDS[activeKeywordIndex]}
            </span> 
            career.
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            The straightforward way for creative computing students to find verified industry placements, log hours, and build a real-world portfolio.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto">
            <div className="relative w-full">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400">
                <Search size={22} strokeWidth={2} />
              </div>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Try 'React developer' or 'UI Design'..." 
                className="w-full py-4 pl-14 pr-4 bg-white text-zinc-900 border-none rounded-lg focus:outline-none focus:ring-4 focus:ring-pink-500/50 transition-all shadow-xl text-lg placeholder-zinc-400"
              />
            </div>
            <Link 
              to={`/opportunities?q=${searchQuery}`} 
              className="w-full sm:w-auto px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-lg transition-colors whitespace-nowrap shadow-xl text-lg"
            >
              Search roles
            </Link>
          </div>
        </div>
      </header>

      <main>
        
        {/* Stats & Trust Section */}
        <section className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30">
          <div className="max-w-6xl mx-auto px-6 py-24">
            
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-20">
              <div className="max-w-md">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white leading-snug">
                  Trusted by London's top creative agencies and tech teams.
                </h2>
              </div>
              <div className="flex flex-wrap gap-8 md:gap-12 text-zinc-600 dark:text-zinc-400 font-bold text-xl md:text-2xl grayscale opacity-90">
                <span className="hover:opacity-100 transition-opacity cursor-default">Deliveroo</span>
                <span className="hover:opacity-100 transition-opacity cursor-default">ustwo</span>
                <span className="hover:opacity-100 transition-opacity cursor-default">Monzo</span>
                <span className="hover:opacity-100 transition-opacity cursor-default">VCCP</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-zinc-200 dark:border-zinc-800/60">
              <div>
                <div className="text-5xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-3">
                  3,200+
                </div>
                <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 mb-2">
                  Verified Students
                </div>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                  From top university programs across the UK, actively looking for placement years and graduate roles.
                </p>
              </div>

              <div>
                <div className="text-5xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-3">
                  450+
                </div>
                <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 mb-2">
                  Active Employers
                </div>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                  Ranging from fast-growing fintech startups to established enterprise technology companies.
                </p>
              </div>

              <div>
                <div className="text-5xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-3">
                  120k
                </div>
                <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 mb-2">
                  Hours Logged
                </div>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                  Successfully audited academic placement hours tracked directly through the platform ecosystem.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Core Features */}
        <section className="py-24 px-6 max-w-6xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Why use DCC?</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
              We built this to replace messy spreadsheets and lost email threads. We handle the admin so you can actually focus on your work.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
              <div className="mb-4 text-pink-600 dark:text-pink-400">
                <BadgeCheck size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Verified Profiles</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Employers know exactly who they are talking to. We cross-check student accounts with university enrollment and pull in live GitHub activity so your skills are backed up by actual code.
              </p>
            </div>
            
            <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
              <div className="mb-4 text-pink-600 dark:text-pink-400">
                <Clock size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Easy Timesheets</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Logging hours used to be a pain. Now you just drop in your weekly time, add a quick note on what you did, and your advisor approves it with one click.
              </p>
            </div>
            
            <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
              <div className="mb-4 text-pink-600 dark:text-pink-400">
                <Target size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Relevant Matches</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Job boards are usually full of noise. If you write React Native and Node, you'll only get pinged for frontend or full-stack roles, not generic IT support gigs.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
              <div className="mb-4 text-pink-600 dark:text-pink-400">
                <MonitorPlay size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Live Portfolios</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                A list of skills doesn't tell the whole story. You can hook up your Figma files, Vercel deployments, or live app links so teams can immediately see what you've built.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
              <div className="mb-4 text-pink-600 dark:text-pink-400">
                <Users size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Advisor Oversight</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                University staff get their own dashboard to see who is placed, who is still looking, and who is falling behind on their hours. It makes catching problems early much easier.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
              <div className="mb-4 text-pink-600 dark:text-pink-400">
                <FileText size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Clear Placement Records</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                When it's time to get your degree signed off, all your placement compliance, health and safety checks, and review forms are sitting right there in one neat folder.
              </p>
            </div>
          </div>
        </section>

        {/* Available Students Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2">
                  Available students
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                  A snapshot of the people currently looking for placement years or summer internships.
                </p>
              </div>
              
              <Link 
                to="/candidates" 
                className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 flex items-center transition-colors group"
              >
                View full directory 
                <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {studentProfiles.map((student, i) => (
                <div key={i} className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 flex flex-col">
                  
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-medium text-zinc-600 dark:text-zinc-300 text-sm">
                      {student.name.charAt(0)}
                    </div>
                    <span className={`text-[11px] px-2.5 py-1 rounded-md font-medium border ${
                      student.status === 'Placed' 
                        ? 'bg-zinc-50 text-zinc-500 border-zinc-200 dark:bg-zinc-800/50 dark:text-zinc-400 dark:border-zinc-700/50' 
                        : student.status === 'Interviewing'
                        ? 'bg-amber-50 text-amber-700 border-amber-200/60 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20'
                        : 'bg-green-50 text-green-700 border-green-200/60 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20'
                    }`}>
                      {student.status}
                    </span>
                  </div>
                  
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100 mb-0.5">{student.name}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">{student.role}</p>
                  <p className="text-xs text-zinc-500 mb-5">{student.degree}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto pt-2">
                    {student.skills.map(skill => (
                      <span key={skill} className="text-[11px] bg-zinc-100 dark:bg-zinc-800/80 px-2 py-1 rounded-md text-zinc-600 dark:text-zinc-300 font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feedback / Testimonials */}
        <section className="py-24 px-6 max-w-4xl mx-auto border-t border-zinc-200 dark:border-zinc-800/60">
          <h2 className="text-2xl font-bold mb-12 text-center text-zinc-900 dark:text-zinc-100">
            Feedback from people using it.
          </h2>
          <div className="grid md:grid-cols-2 gap-12 md:gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="flex flex-col gap-4">
                <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-3 mt-auto pt-4">
                  <img src={t.img} alt={t.author} className="w-10 h-10 rounded-full object-cover bg-zinc-200 dark:bg-zinc-800" />
                  <div>
                    <div className="font-medium text-sm text-zinc-900 dark:text-zinc-100">{t.author}</div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto bg-pink-600 rounded-2xl p-10 md:p-14 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get on the platform.</h2>
            <p className="text-pink-100 mb-8 max-w-xl mx-auto text-lg leading-relaxed">
              Students can set up a profile to log hours and apply for roles. Employers and university staff can log in to manage applications and approve timesheets.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register" className="px-6 py-3.5 bg-white text-pink-600 font-semibold rounded-lg hover:bg-pink-50 transition-colors">
                Student sign up
              </Link>
              <Link to="/employer" className="px-6 py-3.5 bg-pink-700 text-white font-medium rounded-lg hover:bg-pink-800 transition-colors">
                Employer & staff login
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* REWRITTEN: Minimal Footer */}
      <footer className="py-12 px-6 border-t border-zinc-200 dark:border-zinc-800/60 mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
            
            <div className="max-w-sm">
              <Link to="/" className="text-xl font-bold tracking-tight mb-3 block text-zinc-900 dark:text-white">
                Docklands Creative
              </Link>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                The internal placement platform for Docklands Creative students and partners. Built to make logging hours and finding roles straightforward.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-12 sm:gap-16 text-sm">
              <div className="flex flex-col gap-3.5">
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">Directory</span>
                <Link to="/roles" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">Available roles</Link>
                <Link to="/candidates" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">Student profiles</Link>
                <Link to="/employer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">Employer access</Link>
              </div>
              <div className="flex flex-col gap-3.5">
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">Legal & Support</span>
                <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">Platform guidelines</a>
                <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy policy</a>
                <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">Contact staff</a>
              </div>
            </div>

          </div>
          
          <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800/60 text-sm text-zinc-500 dark:text-zinc-500 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Docklands Creative. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}