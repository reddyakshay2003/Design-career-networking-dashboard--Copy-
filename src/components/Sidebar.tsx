import { NavLink } from "react-router-dom";

interface SidebarProps { links: Array<{ label: string; to: string }>; theme?: "candidate" | "employer" | "advisor"; }

export default function Sidebar({ links, theme = "candidate" }: SidebarProps) {
  const dark = theme === "employer" || theme === "advisor";
  return <aside className={`w-64 shrink-0 p-5 ${dark ? "bg-slate-900" : "bg-emerald-950"}`}><NavLink to="/" className="mb-10 block text-lg font-bold tracking-tight text-white">DCC<span className={dark ? "text-rose-400" : "text-emerald-400"}>.</span></NavLink><nav className="space-y-1">{links.map((link) => <NavLink key={link.to} to={link.to} className={({ isActive }) => `block rounded-lg px-3 py-2.5 text-sm font-medium transition ${isActive ? (dark ? "bg-rose-500/15 text-rose-300" : "bg-emerald-500/20 text-emerald-300") : "text-white/60 hover:bg-white/10 hover:text-white"}`}>{link.label}</NavLink>)}</nav></aside>;
}
