import type { Metadata } from "next";

import { SettingsView } from "./SettingsView";

export const metadata: Metadata = { title: "Settings" };

export default function SettingsPage() {
  return (
    <div>
      <h2 className="text-2xl mb-4">Settings</h2>
      <SettingsView />
    </div>
  );
}
