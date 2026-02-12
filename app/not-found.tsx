import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
      <p className="text-6xl font-bold">404</p>
      <h1 className="text-xl font-medium">Page not found</h1>
      <p className="max-w-sm text-sm text-slate-500">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button asChild>
        <Link href="/">Back to dashboard</Link>
      </Button>
    </div>
  );
}
