export default function Loading() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 w-40 rounded bg-slate-300/30" />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-24 rounded-lg bg-slate-300/30" />
        ))}
      </div>
      <div className="h-72 rounded-lg bg-slate-300/30" />
    </div>
  );
}
