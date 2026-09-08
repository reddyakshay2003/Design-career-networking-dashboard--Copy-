interface RolePageProps { title: string; description?: string; }

export default function RolePage({ title, description = "This workspace is ready for the next DCC workflow." }: RolePageProps) {
  return <section><p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">DCC platform</p><h2 className="mt-2 text-3xl font-bold text-slate-900">{title}</h2><p className="mt-3 max-w-2xl text-slate-500">{description}</p><div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-white p-8 text-sm text-slate-500">Module scaffolded and ready for data integration.</div></section>;
}
