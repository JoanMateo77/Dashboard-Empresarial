import type { Metadata } from "next";

export const metadata: Metadata = { title: "Calendar" };

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const events = [
  { when: "Today · 10:00", title: "Onboarding call — Stripe" },
  { when: "Tomorrow · 14:30", title: "Quarterly business review" },
  { when: "In 3 days · 09:15", title: "Invoice follow-up — Shopify" },
  { when: "Next week · 16:00", title: "Contract renewal — Mercado Libre" },
];

export default function CalendarPage() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const monthName = now.toLocaleString("en-US", { month: "long" });

  // getDay() es 0=Dom..6=Sab; lo pasamos a una semana que empieza en lunes.
  const startOffset = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = now.getDate();

  const cells: (number | null)[] = [
    ...Array<null>(startOffset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div>
      <h2 className="text-2xl mb-4">Calendar</h2>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="bg-background rounded-lg shadow-sm p-5 lg:col-span-2">
          <p className="font-medium mb-4">
            {monthName} {year}
          </p>
          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {WEEKDAYS.map((d) => (
              <div key={d} className="pb-2 text-slate-400">
                {d}
              </div>
            ))}
            {cells.map((day, i) => (
              <div
                key={i}
                className={`flex aspect-square items-center justify-center rounded-md ${
                  day === today
                    ? "bg-primary text-primary-foreground"
                    : day
                      ? "hover:bg-slate-300/20"
                      : ""
                }`}
              >
                {day ?? ""}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-background rounded-lg shadow-sm p-5">
          <p className="font-medium mb-4">Upcoming</p>
          <ul className="space-y-4">
            {events.map((e) => (
              <li key={e.title} className="flex flex-col">
                <span className="text-xs text-slate-400">{e.when}</span>
                <span className="text-sm">{e.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
