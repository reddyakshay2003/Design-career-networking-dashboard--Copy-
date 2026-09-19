import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const backgroundVideos = [
  { src: "https://assets.mixkit.co/videos/preview/mixkit-creative-team-working-on-an-office-41584-large.mp4", keyword: "creative" },
  { src: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-woman-working-on-a-laptop-42998-large.mp4", keyword: "design" },
  { src: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-code-31910-large.mp4", keyword: "engineering" }
];

const studentProfiles = [
  { name: "Alex P.", role: "Frontend Developer", degree: "MSc Computer Science", skills: ["React Native", "TypeScript", "Expo"], status: "Looking for roles" },
  { name: "Sarah J.", role: "Data Engineer", degree: "BSc Data Science", skills: ["Kafka", "PySpark", "Azure"], status: "Placed" },
  { name: "David M.", role: "ML Researcher", degree: "MSc AI", skills: ["PyTorch", "YOLOv8", "Python"], status: "Looking for roles" },
  { name: "Elena R.", role: "Product Designer", degree: "BA Design", skills: ["Figma", "User Research"], status: "Looking for roles" },
];

const testimonials = [
  {
    quote: "Found a frontend gig at a local agency through DCC. Honestly, it was way easier than cold emailing hundreds of companies on LinkedIn.",
    author: "Elena R.",
    role: "Now @ Studio North",
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "Being able to see actual GitHub commits and Figma files right in the platform saves us so much time during the hiring process.",
    author: "Marcus T.",
    role: "Lead Engineer @ Meridian",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=200"
  }
];

export default function LandingPage() {
  const [isDark, setIsDark] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  // Properly toggles the Tailwind 'dark' class on the HTML root element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      // Fixes the scroll bounce color on macOS
      document.documentElement.style.backgroundColor = '#09090b'; 
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.backgroundColor = '#fafafa';
    }
  }, [isDark]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveVideoIndex((prev) => (prev + 1) % backgroundVideos.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-200 selection:bg-pink-200 dark:selection:bg-pink-900">
      
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-md hover:shadow-lg transition-all"
        aria-label="Toggle theme"
      >
        {isDark ? "☀️" : "🌙"}
      </button>

      {/* Hero */}
      <header className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
        <div className="absolute inset-0 z-0">
          <video 
            key={activeVideoIndex}
            autoPlay muted loop playsInline
            className="w-full h-full object-cover opacity-20 dark:opacity-10 saturate-50"
          >
            <source src={backgroundVideos[activeVideoIndex].src} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-50 dark:to-zinc-950" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full pt-20">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Start your <br />
            <span className="text-pink-600 dark:text-pink-400 inline-block min-w-[200px]">
              {backgroundVideos[activeVideoIndex].keyword}
            </span> 
            career.
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-10 leading-relaxed">
            The straightforward way for creative computing students to find verified industry placements, log hours, and build a real-world portfolio.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 max-w-2xl">
            <div className="relative w-full">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">🔍</span>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Try 'React developer' or 'UI Design'..." 
                className="w-full py-3.5 pl-11 pr-4 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all shadow-sm"
              />
            </div>
            <Link 
              to={`/opportunities?q=${searchQuery}`} 
              className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors whitespace-nowrap"
            >
              Search roles
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Quick Stats & Logos */}
        <section className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
          <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex gap-8 md:gap-12 text-sm">
              <div>
                <div className="text-2xl font-semibold mb-1">3.2k+</div>
                <div className="text-zinc-500">Students</div>
              </div>
              <div>
                <div className="text-2xl font-semibold mb-1">450+</div>
                <div className="text-zinc-500">Employers</div>
              </div>
              <div>
                <div className="text-2xl font-semibold mb-1">120k</div>
                <div className="text-zinc-500">Hours logged</div>
              </div>
            </div>
            
            <div className="hidden md:flex gap-8 text-zinc-400 dark:text-zinc-600 font-semibold items-center grayscale opacity-60">
              <span>Deliveroo</span>
              <span>ustwo</span>
              <span>Monzo</span>
              <span>VCCP</span>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-24 px-6 max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Why use DCC?</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">We handle the admin so you can focus on building stuff.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
              <div className="text-2xl mb-4">🎓</div>
              <h3 className="font-semibold text-lg mb-2">Verified Profiles</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Employers know your skills are legit. Profiles sync with your enrolled courses and github repos automatically.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
              <div className="text-2xl mb-4">⏱️</div>
              <h3 className="font-semibold text-lg mb-2">Easy Timesheets</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Log your weekly placement hours in two clicks. Advisors can review and approve them directly in the app.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
              <div className="text-2xl mb-4">🎯</div>
              <h3 className="font-semibold text-lg mb-2">Relevant Matches</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                No more scrolling through generic job boards. Get pinged for roles that actually match your current tech stack.
              </p>
            </div>
          </div>
        </section>

        {/* Student Roster */}
        <section className="py-20 px-6 bg-zinc-100 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-bold mb-2">Recent talent</h2>
                <p className="text-zinc-600 dark:text-zinc-400">Students actively looking for their next project.</p>
              </div>
              <Link to="/candidates" className="text-pink-600 dark:text-pink-400 font-medium hover:underline">
                Browse all &rarr;
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {studentProfiles.map((student, i) => (
                <div key={i} className="bg-white dark:bg-zinc-950 p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors group cursor-pointer">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-medium text-zinc-500">
                      {student.name.charAt(0)}
                    </div>
                    <span className={`text-[11px] px-2 py-1 rounded-full font-medium ${
                      student.status === 'Placed' 
                        ? 'bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400' 
                        : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                    }`}>
                      {student.status}
                    </span>
                  </div>
                  <h3 className="font-semibold mb-1">{student.name}</h3>
                  <p className="text-sm text-pink-600 dark:text-pink-400 mb-1">{student.role}</p>
                  <p className="text-xs text-zinc-500 mb-4">{student.degree}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {student.skills.map(skill => (
                      <span key={skill} className="text-xs bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-zinc-600 dark:text-zinc-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-12 text-center">Word on the street</h2>
          <div className="grid md:grid-cols-2 gap-12 md:gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="flex flex-col gap-4">
                <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-3 mt-auto pt-4">
                  <img src={t.img} alt={t.author} className="w-10 h-10 rounded-full object-cover bg-zinc-200" />
                  <div>
                    <div className="font-medium text-sm">{t.author}</div>
                    <div className="text-xs text-zinc-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto bg-pink-600 dark:bg-pink-600 rounded-2xl p-10 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-pink-100 mb-8 max-w-xl mx-auto">
              Set up your profile in 5 minutes. Sync your GitHub, add your coursework, and start applying.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/register" className="px-6 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-zinc-50 transition-colors">
                Create student account
              </Link>
              <Link to="/employer" className="px-6 py-3 bg-pink-700 text-white font-medium rounded-lg hover:bg-pink-800 transition-colors">
                I'm an employer
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-sm">
            <Link to="/" className="text-xl font-bold tracking-tight mb-2 block">DCC.</Link>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Docklands Creative Connect. Bridging the gap between creative computing studies and industry placements.
            </p>
          </div>
          
          <div className="flex gap-12 text-sm">
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">Platform</span>
              <Link to="/roles" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">Jobs</Link>
              <Link to="/students" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">Students</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">Support</span>
              <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">Guidelines</a>
              <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}