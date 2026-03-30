import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

const featuredCommunities = [
  {
    slug: "shadow-creek-reserve",
    name: "Shadow Creek Reserve",
    location: "Scottsdale, Arizona",
    price: "$3.4M - $12M",
    design: "Tom Fazio Signature Design",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop",
    isPlatinum: true,
  },
  {
    slug: "the-sanctuary",
    name: "The Sanctuary at Kiawah",
    location: "Kiawah Island, SC",
    price: "$1.8M - $6.5M",
    design: "Oceanfront Greens",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
    isPlatinum: false,
  },
  {
    slug: "oakmont-estates",
    name: "Oakmont Estates",
    location: "Pinehurst, NC",
    price: "$1.2M - $4M",
    design: "Historic Pinehurst #2 Access",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    isPlatinum: false,
  },
  {
    slug: "emerald-links",
    name: "Emerald Links",
    location: "Jupiter, Florida",
    price: "$2.1M - $9M",
    design: "Jack Nicklaus Signature",
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2070&auto=format&fit=crop",
    isPlatinum: true,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] md:min-h-[95vh] flex items-center justify-center px-6 md:px-8 pb-12 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-primary/10 z-10"></div>
            <Image 
              alt="Luxury Golf Course Hero" 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070&auto=format&fit=crop" 
              fill
              priority
            />
          </div>
          <div className="relative z-20 text-center max-w-4xl mx-auto pt-12 md:pt-0">
            <h1 className="noto-serif text-4xl md:text-7xl font-bold text-white mb-6 md:mb-8 -tracking-tight leading-tight px-4">
              Where Heritage Meets the Green
            </h1>
            <p className="manrope text-base md:text-xl text-white/90 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-6">
              Curated discovery of elite golf course communities designed for a life of quiet luxury.
            </p>
            <div className="bg-white/95 backdrop-blur-md p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2 max-w-3xl mx-auto mx-4">
              <div className="flex-1 px-6 py-4 flex flex-col items-start border-b md:border-b-0 md:border-r border-outline-variant/20">
                <label className="manrope text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-1">Destination</label>
                <input 
                  className="w-full bg-transparent border-none p-0 focus:ring-0 manrope font-medium text-on-surface outline-none placeholder:text-on-surface/40" 
                  placeholder="Search regions..." 
                  type="text"
                />
              </div>
              <Link href="/discover" className="bg-primary text-white px-10 py-4 rounded-xl font-bold manrope hover:scale-[0.98] transition-transform flex items-center justify-center m-1">
                Explore Now
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Golf Communities */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
            <div className="max-w-xl">
              <span className="manrope text-xs uppercase font-extrabold text-secondary tracking-[0.3em] mb-4 block">The Collection</span>
              <h2 className="noto-serif text-3xl md:text-5xl font-bold text-primary leading-tight">Featured Communities</h2>
            </div>
            <Link href="/discover" className="text-primary font-bold manrope border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors text-sm">
              View All Estates
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {featuredCommunities.map((community) => (
              <Link key={community.slug} href={`/estates/${community.slug}`} className="group cursor-pointer block">
                <div className="relative aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden mb-4 md:mb-6 shadow-sm border border-outline-variant/10">
                  <Image 
                    alt={community.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    src={community.image} 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {community.isPlatinum && (
                    <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
                      <span className="bg-primary/90 text-white manrope text-[9px] md:text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 md:px-4 md:py-2 rounded-full backdrop-blur-sm">Platinum Rated</span>
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-start px-1">
                  <div>
                    <h3 className="noto-serif text-xl md:text-3xl font-bold text-primary mb-1 md:mb-2 group-hover:text-secondary transition-colors">{community.name}</h3>
                    <p className="manrope text-xs md:text-base text-on-surface-variant">{community.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="noto-serif text-base md:text-xl font-bold text-secondary">{community.price}</p>
                    <p className="manrope text-[10px] md:text-xs text-on-surface-variant uppercase tracking-widest font-bold">Residences</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Expert-Led Consultation Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 mb-16 md:mb-24 bg-surface-container-low md:rounded-[2rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative px-2 md:px-0">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl relative">
                <Image 
                  alt="Luxury Expert" 
                  className="w-full h-full object-cover" 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-2 md:-bottom-10 md:-right-10 bg-white p-6 md:p-8 rounded-xl shadow-lg max-w-[240px] md:max-w-xs border border-outline-variant/10 z-10">
                <p className="noto-serif text-lg md:text-2xl font-bold text-primary mb-2 italic">"A home is the anchor of your legacy."</p>
                <p className="manrope text-[10px] md:text-sm text-on-surface-variant">— Julian Vane, Chief Curator</p>
              </div>
            </div>
            <div className="px-4 md:px-0 mt-8 md:mt-0">
              <span className="manrope text-xs uppercase font-extrabold text-secondary tracking-[0.3em] mb-4 block">Personalized Guidance</span>
              <h2 className="noto-serif text-3xl md:text-5xl font-bold text-primary mb-6 md:mb-8 leading-tight">Expert-Led Consultation</h2>
              <p className="manrope text-base md:text-lg text-on-surface-variant mb-8 md:mb-10 leading-relaxed">
                Our curators are lifestyle architects. We provide private consultations to map your passions to the world’s most exclusive golf enclaves.
              </p>
              <Link href="/consultation" className="inline-block w-full md:w-auto text-center bg-primary text-white px-8 py-4 rounded-xl font-bold manrope hover:opacity-90 transition-opacity shadow-lg text-sm">
                Schedule a Call
              </Link>
            </div>
          </div>
        </section>

        {/* Matchmaker CTA Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 mb-32">
          <div className="bg-primary rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-24 relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary-fixed-dim via-transparent to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-2xl">
              <span className="manrope text-xs uppercase font-extrabold text-secondary-fixed-dim tracking-[0.4em] mb-6 block">The Heritage Matchmaker</span>
              <h2 className="noto-serif text-3xl md:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">Find Your Perfect Green</h2>
              <p className="manrope text-base md:text-lg text-white/70 mb-10 md:mb-12">
                Take our lifestyle assessment. We analyze your handicap and architectural taste to match you with the community that mirrors your soul.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center w-full">
                <Link href="/matchmaker" className="bg-secondary-fixed-dim text-primary px-10 py-4 md:py-5 rounded-xl font-bold manrope hover:scale-105 transition-transform shadow-xl">
                  Start Assessment
                </Link>
                <Link href="/about" className="border border-white/20 text-white px-10 py-4 md:py-5 rounded-xl font-bold manrope hover:bg-white/10 transition-colors">
                  How it Works
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
