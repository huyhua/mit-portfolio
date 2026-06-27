import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-paper px-5 text-center text-ink">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-cobalt">
          404
        </p>
        <h1 className="mt-3 text-3xl font-black">Page not found</h1>
        <p className="mt-4 text-slate-600">
          The page you are looking for does not exist.
        </p>
        <Link
          className="mt-7 inline-flex min-h-11 items-center rounded-full bg-ink px-5 py-2 text-sm font-bold text-white transition hover:bg-cobalt focus:outline-none focus:ring-4 focus:ring-cobalt/25"
          href="/"
        >
          Back to portfolio
        </Link>
      </div>
    </main>
  );
}
