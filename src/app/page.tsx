import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const featuredCommunities = [
  {
    slug: "shadow-creek-reserve",
    name: "Shadow Creek Reserve",
    location: "Scottsdale, Arizona",
    price: "$3.4M - $12M",
    design: "Tom Fazio Signature Design",
    image: "https://images.unsplash.com/photo-1531415080293-233a33d0ef18?q=80&w=2070&auto=format&fit=crop",
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
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center px-8 mb-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/10 z-10"></div>
            <img 
              alt="Luxury Golf Course Hero" 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070&auto=format&fit=crop" 
            />
          </div>
          <div className="relative z-20 text-center max-w-4xl mx-auto py-12">
            <h1 className="noto-serif text-5xl md:text-7xl font-bold text-white mb-8 -tracking-tight leading-tight">
              Where Heritage Meets the Green
            </h1>
            <p className="manrope text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Curated discovery of elite golf course communities designed for a life of quiet luxury and sporting excellence.
            </p>
            <div className="bg-white p-2 rounded-xl shadow-2xl flex flex-col md:flex-row gap-2 max-w-3xl mx-auto">
              <div className="flex-1 px-6 py-4 flex flex-col items-start border-b md:border-b-0 md:border-r border-outline-variant/20">
                <label className="manrope text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-1">Destination</label>
                <input 
                  className="w-full bg-transparent border-none p-0 focus:ring-0 manrope font-medium text-on-surface outline-none" 
                  placeholder="Where would you like to reside?" 
                  type="text"
                />
              </div>
              <div className="flex-1 px-6 py-4 flex flex-col items-start">
                <label className="manrope text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-1">Amenities</label>
                <select className="w-full bg-transparent border-none p-0 focus:ring-0 manrope font-medium text-on-surface outline-none cursor-pointer">
                  <option>PGA Championship Course</option>
                  <option>Private Clubhouse</option>
                  <option>Wellness Sanctuary</option>
                </select>
              </div>
              <button className="bg-primary text-white px-10 py-4 rounded-lg font-bold manrope hover:scale-[0.98] transition-transform flex items-center justify-center">
                Explore Now
              </button>
            </div>
          </div>
        </section>

        {/* Featured Golf Communities */}
        <section className="max-w-7xl mx-auto px-8 py-24 mb-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="manrope text-xs uppercase font-extrabold text-secondary tracking-[0.3em] mb-4 block">The Collection</span>
              <h2 className="noto-serif text-4xl md:text-5xl font-bold text-primary leading-tight">Featured Golf Communities</h2>
            </div>
            <Link href="/discover" className="text-primary font-bold manrope border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors">
              View All Estates
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {featuredCommunities.map((community) => (
              <Link key={community.slug} href={`/estates/${community.slug}`} className="group cursor-pointer block">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 shadow-sm border border-outline-variant/10">
                  <img 
                    alt={community.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    src={community.image} 
                  />
                  {community.isPlatinum && (
                    <div className="absolute top-6 left-6">
                      <span className="bg-primary/90 text-white manrope text-[10px] uppercase font-bold tracking-widest px-4 py-2 rounded-full backdrop-blur-sm">Platinum Rated</span>
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="noto-serif text-3xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{community.name}</h3>
                    <p className="manrope text-on-surface-variant">{community.location} • {community.design}</p>
                  </div>
                  <div className="text-right">
                    <p className="noto-serif text-xl font-bold text-secondary">{community.price}</p>
                    <p className="manrope text-xs text-on-surface-variant uppercase tracking-widest font-bold">Residences</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Expert-Led Consultation Section */}
        <section className="max-w-7xl mx-auto px-8 py-24 mb-24 bg-surface-container-low rounded-[2rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  alt="Luxury Concierge" 
                  className="w-full h-full object-cover" 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" 
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-xl shadow-lg max-w-xs hidden md:block border border-outline-variant/10">
                <p className="noto-serif text-2xl font-bold text-primary mb-2 italic">"A home is the anchor of your legacy."</p>
                <p className="manrope text-sm text-on-surface-variant">— Julian Vane, Chief Curator</p>
              </div>
            </div>
            <div>
              <span className="manrope text-xs uppercase font-extrabold text-secondary tracking-[0.3em] mb-4 block">Personalized Guidance</span>
              <h2 className="noto-serif text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">Expert-Led Consultation for the Discerning Member</h2>
              <p className="manrope text-lg text-on-surface-variant mb-10 leading-relaxed">
                Our curators are more than real estate agents; they are lifestyle architects. We provide private, one-on-one consultations to map your personal passions to the world’s most exclusive golf enclaves.
              </p>
              <ul className="space-y-6 mb-12">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary">verified</span>
                  <div>
                    <h4 className="manrope font-bold text-primary">Unlisted Portfolio Access</h4>
                    <p className="manrope text-sm text-on-surface-variant">View estates before they ever reach the public market.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary">insights</span>
                  <div>
                    <h4 className="manrope font-bold text-primary">Agronomy Reports</h4>
                    <p className="manrope text-sm text-on-surface-variant">Deep technical analysis of turf conditions and course design.</p>
                  </div>
                </li>
              </ul>
              <button className="bg-primary text-white px-8 py-4 rounded-md font-bold manrope hover:opacity-90 transition-opacity">
                Schedule a Call
              </button>
            </div>
          </div>
        </section>

        {/* Matchmaker CTA Section */}
        <section className="max-w-7xl mx-auto px-8 py-24 mb-32">
          <div className="bg-primary rounded-[3rem] p-12 md:p-24 relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary-fixed-dim via-transparent to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-2xl">
              <span className="manrope text-xs uppercase font-extrabold text-secondary-fixed-dim tracking-[0.4em] mb-6 block">The Heritage Matchmaker</span>
              <h2 className="noto-serif text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">Find Your Perfect Green</h2>
              <p className="manrope text-lg text-white/70 mb-12">
                Take our 2-minute lifestyle assessment. We analyze your handicap, social preferences, and architectural taste to match you with the community that mirrors your soul.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/matchmaker" className="bg-secondary-fixed-dim text-primary px-10 py-5 rounded-lg font-bold manrope hover:scale-105 transition-transform shadow-xl">
                  Start Assessment
                </Link>
                <Link href="/about" className="border border-white/20 text-white px-10 py-5 rounded-lg font-bold manrope hover:bg-white/10 transition-colors">
                  How it Works
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 md:hidden bg-white/90 backdrop-blur-xl shadow-[0px_-10px_30px_rgba(22,29,27,0.04)] rounded-t-3xl border-t border-outline-variant/15">
        <Link href="/discover" className="flex flex-col items-center justify-center text-primary bg-surface-container-low rounded-xl px-6 py-2">
          <span className="material-symbols-outlined">explore</span>
          <span className="manrope text-[10px] uppercase tracking-widest font-bold mt-1">Explore</span>
        </Link>
        <Link href="/login" className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 transition-opacity">
          <span className="material-symbols-outlined">hotel_class</span>
          <span className="manrope text-[10px] uppercase tracking-widest font-bold mt-1">Curated</span>
        </Link>
        <Link href="/matchmaker" className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 transition-opacity">
          <span className="material-symbols-outlined">handshake</span>
          <span className="manrope text-[10px] uppercase tracking-widest font-bold mt-1">Match</span>
        </Link>
        <Link href="/login" className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 transition-opacity">
          <span className="material-symbols-outlined">person</span>
          <span className="manrope text-[10px] uppercase tracking-widest font-bold mt-1">Profile</span>
        </Link>
      </nav>
    </>
  );
}
