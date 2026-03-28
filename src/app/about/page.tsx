import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
        <div className="max-w-3xl">
          <span className="manrope text-xs uppercase font-extrabold text-secondary tracking-[0.3em] mb-4 block">Our Heritage</span>
          <h1 className="noto-serif text-5xl md:text-6xl font-bold text-primary mb-8 leading-tight">Preserving the Spirit of the Game</h1>
          <p className="manrope text-lg text-on-surface-variant leading-relaxed mb-8">
            55clubhouse was founded on a simple principle: that your home should be as distinguished as the fairways you walk. We are a collection of curators, architects, and golf enthusiasts dedicated to matching the world's elite with their perfect green.
          </p>
          <div className="aspect-video rounded-2xl overflow-hidden bg-surface-container-low mb-12">
            <img src="https://images.unsplash.com/photo-1592919016381-f07ecd53633a?q=80&w=2070&auto=format&fit=crop" alt="Heritage Golf" className="w-full h-full object-cover" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
