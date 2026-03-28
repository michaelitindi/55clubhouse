import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const communities = [
  {
    slug: "verdant-estate",
    name: "Verdant Estate",
    location: "Greenwich, Connecticut",
    price: "$2.5M - $8M",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    tags: ["Platinum Rated", "PGA Course"],
  },
  {
    slug: "shadow-creek-reserve",
    name: "Shadow Creek Reserve",
    location: "Scottsdale, Arizona",
    price: "$3.4M - $12M",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1531415080293-233a33d0ef18?q=80&w=2070&auto=format&fit=crop",
    tags: ["Desert Oasis", "Tom Fazio Design"],
  },
  {
    slug: "the-sanctuary",
    name: "The Sanctuary at Kiawah",
    location: "Kiawah Island, SC",
    price: "$1.8M - $6.5M",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
    tags: ["Oceanfront", "Nature Preserve"],
  },
  {
    slug: "oakmont-estates",
    name: "Oakmont Estates",
    location: "Pinehurst, NC",
    price: "$1.2M - $4M",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    tags: ["Historic", "Pinehurst #2"],
  },
];

export default function DiscoverPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 px-6 md:px-12 max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-72 flex-shrink-0">
          <div className="sticky top-32 space-y-10">
            <div>
              <h2 className="font-headline text-2xl -tracking-tight text-primary mb-6">Refine Search</h2>
              <p className="manrope text-xs font-bold uppercase tracking-widest text-on-surface-variant opacity-60 mb-8">Selected Criteria</p>
            </div>

            {/* Region Filter */}
            <div className="space-y-4">
              <label className="manrope text-sm font-bold text-on-surface">Region</label>
              <div className="space-y-2">
                {["Southeast Highlands", "Coastal Lowlands", "Desert Oases", "Mountain Escapes"].map((region) => (
                  <label key={region} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded-sm border-outline-variant text-primary focus:ring-secondary" />
                    <span className="manrope text-sm text-on-surface-variant group-hover:text-primary transition-colors">{region}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="space-y-4">
              <label className="manrope text-sm font-bold text-on-surface">Membership Entry</label>
              <div className="pt-4 px-2">
                <div className="h-0.5 bg-outline-variant/30 relative">
                  <div className="absolute inset-y-0 left-1/4 right-1/4 bg-secondary"></div>
                  <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-secondary shadow-sm"></div>
                  <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-secondary shadow-sm"></div>
                </div>
                <div className="flex justify-between mt-4">
                  <span className="manrope text-xs text-on-surface-variant font-medium">$50k</span>
                  <span className="manrope text-xs text-on-surface-variant font-medium">$250k+</span>
                </div>
              </div>
            </div>

            {/* Architecture Style */}
            <div className="space-y-4">
              <label className="manrope text-sm font-bold text-on-surface">Course Architecture</label>
              <div className="flex flex-wrap gap-2">
                {["Links", "Parkland", "Desert", "Coastal"].map((style) => (
                  <button key={style} className="px-3 py-1.5 rounded-full border border-outline-variant/30 text-xs manrope font-medium hover:border-secondary hover:text-secondary transition-all">
                    {style}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <section className="flex-1">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h1 className="noto-serif text-4xl font-bold text-primary mb-2">Heritage Communities</h1>
              <p className="manrope text-on-surface-variant">Showing 24 elite estates across North America</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="manrope text-xs font-bold text-on-surface-variant uppercase tracking-widest">Sort by:</span>
              <select className="bg-transparent border-none text-sm font-bold manrope text-primary focus:ring-0 p-0 cursor-pointer">
                <option>Featured First</option>
                <option>Price: High to Low</option>
                <option>Rating: Excellence</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {communities.map((community) => (
              <Link key={community.name} href={`/estates/${community.slug}`} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={community.image} 
                    alt={community.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {community.tags.map(tag => (
                      <span key={tag} className="bg-primary/90 text-white manrope text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="noto-serif text-2xl font-bold text-primary mb-1">{community.name}</h3>
                    <p className="manrope text-sm text-on-surface-variant">{community.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="noto-serif text-lg font-bold text-secondary">{community.price}</p>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="material-symbols-outlined text-secondary text-sm">star</span>
                      <span className="manrope text-xs font-bold text-primary">{community.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
