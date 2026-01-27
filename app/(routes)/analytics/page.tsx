import type { Metadata } from "next";

import { SalesDistributor } from "../components/SalesDistributors";
import { TotalSuscribers } from "../components/TotalSuscribers";

export const metadata: Metadata = { title: "Analytics" };

const stats = [
  { label: "Visitors", value: "48.2k", delta: "+12.5% vs last month" },
  { label: "Conversion", value: "3.8%", delta: "+0.4% vs last month" },
  { label: "Avg. session", value: "4m 12s", delta: "-8s vs last month" },
  { label: "Churn", value: "1.2%", delta: "-0.3% vs last month" },
];

export default function AnalyticsPage() {
  return (
    <div>
      <h2 className="text-2xl mb-4">Analytics</h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="bg-background rounded-lg shadow-sm p-4">
            <p className="text-sm text-slate-500">{s.label}</p>
            <p className="text-2xl mt-1">{s.value}</p>
            <p className="text-xs text-slate-400 mt-1">{s.delta}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
        <SalesDistributor />
        <TotalSuscribers />
      </div>
    </div>
  );
}
