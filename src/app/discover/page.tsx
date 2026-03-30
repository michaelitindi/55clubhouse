'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { useState, useMemo } from "react";

const allCommunities = [
  {
    slug: "verdant-estate",
    name: "Verdant Estate",
    location: "Greenwich, Connecticut",
    region: "Southeast Highlands",
    price: 2500000,
    priceLabel: "$2.5M - $8M",
    rating: 4.9,
    architecture: "Parkland",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    tags: ["Platinum Rated", "PGA Course"],
  },
  {
    slug: "shadow-creek-reserve",
    name: "Shadow Creek Reserve",
    location: "Scottsdale, Arizona",
    region: "Desert Oases",
    price: 3400000,
    priceLabel: "$3.4M - $12M",
    rating: 4.8,
    architecture: "Desert",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop",
    tags: ["Desert Oasis", "Tom Fazio Design"],
  },
  {
    slug: "the-sanctuary",
    name: "The Sanctuary at Kiawah",
    location: "Kiawah Island, SC",
    region: "Coastal Lowlands",
    price: 1800000,
    priceLabel: "$1.8M - $6.5M",
    rating: 4.7,
    architecture: "Coastal",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
    tags: ["Oceanfront", "Nature Preserve"],
  },
  {
    slug: "oakmont-estates",
    name: "Oakmont Estates",
    location: "Pinehurst, NC",
    region: "Southeast Highlands",
    price: 1200000,
    priceLabel: "$1.2M - $4M",
    rating: 4.6,
    architecture: "Links",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    tags: ["Historic", "Pinehurst #2"],
  },
];

const regions = ["Southeast Highlands", "Coastal Lowlands", "Desert Oases", "Mountain Escapes"];
const architectures = ["Links", "Parkland", "Desert", "Coastal"];

export default function DiscoverPage() {
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [selectedArchitectures, setSelectedArchitectures] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("Featured First");

  const toggleRegion = (region: string) => {
    setSelectedRegions(prev => 
      prev.includes(region) ? prev.filter(r => r !== region) : [...prev, region]
    );
  };

  const toggleArchitecture = (style: string) => {
    setSelectedArchitectures(prev => 
      prev.includes(style) ? prev.filter(s => s !== style) : [...prev, style]
    );
  };

  const filteredCommunities = useMemo(() => {
    return allCommunities
      .filter(c => selectedRegions.length === 0 || selectedRegions.includes(c.region))
      .filter(c => selectedArchitectures.length === 0 || selectedArchitectures.includes(c.architecture))
      .sort((a, b) => {
        if (sortBy === "Price: High to Low") return b.price - a.price;
        if (sortBy === "Rating: Excellence") return b.rating - a.rating;
        return 0;
      });
  }, [selectedRegions, selectedArchitectures, sortBy]);

  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-28 pb-20 px-4 md:px-12 max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Mobile Filters (Horizontal Chips) */}
        <div className="md:hidden flex flex-col gap-4 sticky top-20 bg-background/95 backdrop-blur-md z-40 py-4 -mx-4 px-4 border-b border-outline-variant/10">
          <div className="flex overflow-x-auto gap-2 no-scrollbar pb-2">
            {regions.map((region) => (
              <button 
                key={region}
                onClick={() => toggleRegion(region)}
                className={`flex-shrink-0 px-4 py-2 rounded-full border text-[11px] font-bold uppercase tracking-widest transition-all ${
                  selectedRegions.includes(region) 
                    ? 'bg-primary border-primary text-white' 
                    : 'bg-white border-outline-variant/30 text-on-surface-variant'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <span className="manrope text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              {filteredCommunities.length} Estates Found
            </span>
            {(selectedRegions.length > 0 || selectedArchitectures.length > 0) && (
              <button onClick={() => { setSelectedRegions([]); setSelectedArchitectures([]); }} className="text-[10px] font-bold text-secondary uppercase underline">
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Sidebar Filters (Desktop) */}
        <aside className="hidden md:block w-72 flex-shrink-0">
          <div className="sticky top-32 space-y-10">
            <div>
              <h2 className="font-headline text-2xl -tracking-tight text-primary mb-6">Refine Search</h2>
              <p className="manrope text-xs font-bold uppercase tracking-widest text-on-surface-variant opacity-60 mb-8">Selected Criteria</p>
            </div>

            <div className="space-y-4">
              <label className="manrope text-sm font-bold text-on-surface">Region</label>
              <div className="space-y-2">
                {regions.map((region) => (
                  <label key={region} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 rounded-sm border-outline-variant text-primary focus:ring-secondary cursor-pointer" 
                      checked={selectedRegions.includes(region)}
                      onChange={() => toggleRegion(region)}
                    />
                    <span className={`manrope text-sm transition-colors ${selectedRegions.includes(region) ? 'text-primary font-bold' : 'text-on-surface-variant group-hover:text-primary'}`}>
                      {region}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <label className="manrope text-sm font-bold text-on-surface">Course Architecture</label>
              <div className="flex flex-wrap gap-2">
                {architectures.map((style) => (
                  <button 
                    key={style} 
                    onClick={() => toggleArchitecture(style)}
                    className={`px-3 py-1.5 rounded-full border text-xs manrope font-medium transition-all ${
                      selectedArchitectures.includes(style) 
                        ? 'border-primary bg-primary text-white' 
                        : 'border-outline-variant/30 text-on-surface-variant hover:border-secondary hover:text-secondary'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <section className="flex-1">
          <div className="hidden md:flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h1 className="noto-serif text-4xl font-bold text-primary mb-2">Heritage Communities</h1>
              <p className="manrope text-on-surface-variant">Showing {filteredCommunities.length} elite estates</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="manrope text-xs font-bold text-on-surface-variant uppercase tracking-widest">Sort by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-none text-sm font-bold manrope text-primary focus:ring-0 p-0 cursor-pointer outline-none"
              >
                <option>Featured First</option>
                <option>Price: High to Low</option>
                <option>Rating: Excellence</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 md:gap-y-12">
            {filteredCommunities.map((community) => (
              <Link key={community.slug} href={`/estates/${community.slug}`} className="group cursor-pointer block">
                <div className="relative aspect-[16/10] md:aspect-[4/3] rounded-2xl overflow-hidden mb-4 md:mb-6 shadow-sm">
                  <img 
                    src={community.image} 
                    alt={community.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute top-3 left-3 md:top-4 md:left-4 flex gap-2">
                    {community.tags.slice(0, 1).map(tag => (
                      <span key={tag} className="bg-primary/90 text-white manrope text-[8px] md:text-[10px] uppercase font-bold tracking-widest px-2 py-1 md:px-3 md:py-1.5 rounded-full backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-start px-1">
                  <div>
                    <h3 className="noto-serif text-lg md:text-2xl font-bold text-primary mb-0.5 md:mb-1 group-hover:text-secondary transition-colors">{community.name}</h3>
                    <p className="manrope text-[11px] md:text-sm text-on-surface-variant">{community.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="noto-serif text-sm md:text-lg font-bold text-secondary">{community.priceLabel}</p>
                    <div className="flex items-center justify-end gap-1 mt-0.5 md:mt-1">
                      <span className="material-symbols-outlined text-secondary text-[14px] md:text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="manrope text-[10px] md:text-xs font-bold text-primary">{community.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredCommunities.length === 0 && (
            <div className="py-24 text-center">
              <h3 className="noto-serif text-2xl text-primary mb-4 px-6">No estates match your selected criteria.</h3>
              <button 
                onClick={() => { setSelectedRegions([]); setSelectedArchitectures([]); }}
                className="text-secondary font-bold hover:underline underline-offset-4"
              >
                Clear all filters
              </button>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
