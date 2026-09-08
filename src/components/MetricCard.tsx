interface MetricCardProps {
  label: string;
  value: string;
  detail?: string;
  accent?: "green" | "coral";
}

export default function MetricCard({ label, value, detail, accent = "green" }: MetricCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className={`mt-3 text-3xl font-bold ${accent === "coral" ? "text-rose-500" : "text-emerald-600"}`}>{value}</p>
      {detail && <p className="mt-1 text-xs text-slate-400">{detail}</p>}
    </article>
  );
}
