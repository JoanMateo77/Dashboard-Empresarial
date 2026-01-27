import type { Metadata } from "next";
import { History, KeyRound, Smartphone } from "lucide-react";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Security" };

const items = [
  {
    icon: KeyRound,
    title: "Password",
    desc: "Last changed 3 months ago.",
    action: "Change",
  },
  {
    icon: Smartphone,
    title: "Two-factor authentication",
    desc: "Add an extra layer of security to your account.",
    action: "Enable",
  },
  {
    icon: History,
    title: "Active sessions",
    desc: "2 devices currently signed in.",
    action: "Review",
  },
];

export default function SecurityPage() {
  return (
    <div>
      <h2 className="text-2xl mb-4">Security</h2>
      <div className="bg-background rounded-lg shadow-sm divide-y max-w-2xl">
        {items.map(({ icon: Icon, title, desc, action }) => (
          <div key={title} className="flex items-center gap-4 p-5">
            <div className="p-2 bg-slate-400/20 rounded-lg">
              <Icon className="h-5 w-5" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <p className="font-medium">{title}</p>
              <p className="text-sm text-slate-500">{desc}</p>
            </div>
            <Button variant="outline" size="sm">
              {action}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
