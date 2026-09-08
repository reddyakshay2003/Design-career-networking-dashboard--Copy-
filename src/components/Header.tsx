interface HeaderProps {
  title: string;
  theme?: "candidate" | "employer" | "advisor";
}

export default function Header({ title, theme = "candidate" }: HeaderProps) {
  const accent = theme === "employer" ? "text-rose-500" : "text-emerald-600";
  return <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4"><div><h1 className="text-xl font-bold text-slate-900">{title}</h1><p className="mt-1 text-sm text-slate-500">Docklands Creative Connect</p></div><div className={`flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-sm font-bold ${accent}`}>DC</div></header>;
}
