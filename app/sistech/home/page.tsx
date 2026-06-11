// app/sistech/home/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-8 bg-background">
      {/* title */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-primary tracking-wide mb-4">
        SISTECH CAFE
      </h1>
      {/* description */}
      <p className="text-gray-600 text-sm md:text-base mb-8">
        Local Coffee brewed by Extraordinary Women in Indonesia
      </p>
      {/* button */}
      <Link
        href="/sistech/menu"
        className="bg-primary hover:bg-primary/75 text-white font-bold px-6 py-2.5 rounded-full transition-colors text-sm"
      >
        See our Menu
      </Link>
    </section>
  );
}