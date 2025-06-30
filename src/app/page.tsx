// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-1 flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Flex <span className="text-blue-600">Stack</span>
        </h1>
        <p className="mt-4 max-w-xl text-lg md:text-2xl text-gray-300">
          Build custom stretch & mobility routines, walk through them step by
          step, and track your progress—all in one streamlined app.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/dashboard"
            className="rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold shadow hover:bg-blue-700 transition">
            Get Started
          </Link>
          <a
            href="https://github.com/DanSias/flex-stack"
            className="rounded-xl border border-blue-600 px-6 py-3 text-blue-600 font-semibold shadow hover:bg-blue-50 transition"
            target="_blank"
            rel="noopener noreferrer">
            Star on GitHub
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold text-center text-gray-600">
            Why Flex Stack?
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="p-6 rounded-2xl bg-white shadow">
              <h3 className="text-xl font-semibold text-gray-600">
                Routine Builder
              </h3>
              <p className="mt-2 text-gray-600">
                Drag‑and‑drop exercises to craft personalized mobility sessions
                for neck, shoulders, hips, and beyond.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow">
              <h3 className="text-xl font-semibold text-gray-600">
                Guided Walkthrough
              </h3>
              <p className="mt-2 text-gray-600">
                Step‑by‑step interface keeps you on pace and in proper form,
                whether at a desk or on the mat.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow">
              <h3 className="text-xl font-semibold text-gray-600">
                Progress Tracking
              </h3>
              <p className="mt-2 text-gray-600">
                Log sets, reps, RPE, and more—then visualize volume and
                consistency over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        Built with Next.js & Tailwind • © {new Date().getFullYear()} Daniel Sias
      </footer>
    </main>
  );
}
