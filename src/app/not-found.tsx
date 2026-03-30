import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <span className="manrope text-xs uppercase font-extrabold text-secondary tracking-[0.4em] mb-6">Error 404</span>
        <h1 className="noto-serif text-5xl md:text-6xl font-bold text-primary mb-6">This path has not yet been curated.</h1>
        <p className="manrope text-lg text-on-surface-variant max-w-md mx-auto mb-12 leading-relaxed">
          The estate or briefing you are looking for is currently outside our collection. Allow us to guide you back to the fairways.
        </p>
        <Link 
          href="/" 
          className="bg-primary text-white px-10 py-4 rounded-xl font-bold manrope hover:scale-105 transition-transform shadow-xl"
        >
          Return to Clubhouse
        </Link>
      </main>
      <Footer />
    </>
  );
}
