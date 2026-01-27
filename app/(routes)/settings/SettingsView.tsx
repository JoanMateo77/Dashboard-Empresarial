"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const THEMES = ["light", "dark", "system"] as const;

export function SettingsView() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [profile, setProfile] = useState({ name: "", company: "" });

  // next-themes solo conoce el tema en el cliente; evitamos mismatch de hidratacion.
  useEffect(() => setMounted(true), []);

  return (
    <div className="grid gap-6 max-w-2xl">
      <section className="bg-background rounded-lg shadow-sm p-5">
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-slate-500 mb-4">Update your account details.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium">Name</span>
            <Input
              value={profile.name}
              onChange={(e) =>
                setProfile((p) => ({ ...p, name: e.target.value }))
              }
              placeholder="Your name"
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium">Company</span>
            <Input
              value={profile.company}
              onChange={(e) =>
                setProfile((p) => ({ ...p, company: e.target.value }))
              }
              placeholder="Company name"
            />
          </label>
        </div>
        <div className="mt-4">
          <Button>Save changes</Button>
        </div>
      </section>

      <section className="bg-background rounded-lg shadow-sm p-5">
        <h3 className="text-lg font-medium">Appearance</h3>
        <p className="text-sm text-slate-500 mb-4">Choose how the dashboard looks.</p>
        <div className="flex gap-2">
          {THEMES.map((t) => (
            <Button
              key={t}
              variant={mounted && theme === t ? "default" : "outline"}
              onClick={() => setTheme(t)}
              className="capitalize"
            >
              {t}
            </Button>
          ))}
        </div>
      </section>
    </div>
  );
}
