import type { Metadata } from "next";

export const metadata: Metadata = { title: "FAQs" };

const faqs = [
  {
    q: "How do I create a new company?",
    a: 'Go to the Companies page and click "Create Company". Fill in the form and submit it.',
  },
  {
    q: "Where is my data stored?",
    a: "Companies are stored in your browser (localStorage), so the demo works with no backend.",
  },
  {
    q: "How do I switch to dark mode?",
    a: "Use the theme toggle in the top navbar, or the Appearance section in Settings.",
  },
  {
    q: "Can I rebrand the dashboard?",
    a: "Yes, it is white-label. Set NEXT_PUBLIC_APP_NAME in your environment to change the product name.",
  },
  {
    q: "How is authentication handled?",
    a: "Authentication uses Clerk. Add your keys to .env.local to enable sign in and sign up.",
  },
];

export default function FaqsPage() {
  return (
    <div>
      <h2 className="text-2xl mb-4">FAQs</h2>
      <div className="bg-background rounded-lg shadow-sm divide-y max-w-2xl">
        {faqs.map(({ q, a }) => (
          <details key={q} className="group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              {q}
              <span className="ml-4 text-xl text-slate-400 transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-2 text-sm text-slate-500">{a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
