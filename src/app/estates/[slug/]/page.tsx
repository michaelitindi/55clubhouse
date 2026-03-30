'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import VirtualTourModal from "@/components/shared/VirtualTourModal";

export default function CommunityDetailPage() {
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [tourUrl, setTourUrl] = useState("https://my.matterport.com/show/?m=aSAt7ncSndS"); // Example Matterport URL

  const handleFeatureSoon = (feature: string) => {
    alert(`${feature} is currently being curated for our members. Please check back soon.`);
  };

  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24 pb-24 md:pb-32 max-w-screen-2xl mx-auto px-4 md:px-12">
        {/* Hero Section: Curated Gallery */}
        <section className="mb-12 md:mb-20 -mx-4 md:mx-0">
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 h-[500px] md:h-[600px]">
            <div className="relative w-full md:w-2/3 h-full overflow-hidden md:rounded-2xl group">
              <Image 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070&auto=format&fit=crop" 
                alt="Whispering Pines Estates"
                fill
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-10">
                <span className="bg-secondary-fixed-dim text-primary px-3 py-1 rounded-full text-[9px] md:text-[10px] manrope font-bold uppercase tracking-widest mb-3 md:mb-4 inline-block">
                  Platinum Rated
                </span>
                <h1 className="noto-serif text-3xl md:text-6xl text-white font-bold -tracking-tight leading-tight">Whispering Pines Estates</h1>
              </div>
              <button 
                onClick={() => setIsTourOpen(true)}
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-md text-primary px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-white transition-all shadow-xl border border-white/50 z-10 scale-90 md:scale-100"
              >
                <span className="material-symbols-outlined text-sm">view_in_ar</span>
                <span className="manrope text-[10px] md:text-xs font-bold uppercase tracking-wider">Virtual Tour</span>
              </button>
            </div>
            <div className="hidden md:flex flex-col w-1/3 gap-4 h-full">
              <div className="relative h-1/2 rounded-2xl overflow-hidden group">
                <Image 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
                  alt="Clubhouse Interior"
                  fill
                  sizes="33vw"
                />
              </div>
              <div className="relative h-1/2 rounded-2xl overflow-hidden group">
                <Image 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2070&auto=format&fit=crop" 
                  alt="Pool Area"
                  fill
                  sizes="33vw"
                />
                <div 
                  onClick={() => handleFeatureSoon("Photo Gallery")}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer z-10"
                >
                  <span className="manrope text-white font-bold tracking-widest uppercase text-xs">View All 42 Photos</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          {/* Left Content Area */}
          <div className="lg:col-span-8 space-y-12 md:space-y-20">
            {/* Community Overview */}
            <section id="overview">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <h2 className="noto-serif text-2xl md:text-3xl font-bold text-primary shrink-0">Overview</h2>
                <div className="h-px flex-1 bg-outline-variant/30"></div>
              </div>
              <div className="prose prose-lg text-on-surface-variant font-light leading-relaxed">
                <p className="mb-6 text-base md:text-lg">
                  Nestled within the ancient coastal redwoods, Whispering Pines Estates represents the pinnacle of heritage living. This exclusive enclave offers more than just a residence; it provides a meticulously curated lifestyle for those who appreciate the finer nuances of architectural integrity.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12">
                  <div className="p-5 md:p-6 bg-surface-container-low rounded-2xl">
                    <span className="material-symbols-outlined text-secondary mb-2 md:mb-3">gate</span>
                    <h4 className="manrope font-bold text-primary text-[10px] md:text-sm uppercase tracking-wider">Security</h4>
                    <p className="text-[11px] md:text-xs mt-1 text-on-surface-variant">24/7 Concierge Guarded</p>
                  </div>
                  <div className="p-5 md:p-6 bg-surface-container-low rounded-2xl">
                    <span className="material-symbols-outlined text-secondary mb-2 md:mb-3">diversity_3</span>
                    <h4 className="manrope font-bold text-primary text-[10px] md:text-sm uppercase tracking-wider">Residents</h4>
                    <p className="text-[11px] md:text-xs mt-1 text-on-surface-variant">Exclusive 55+ Community</p>
                  </div>
                  <div className="p-5 md:p-6 bg-surface-container-low rounded-2xl">
                    <span className="material-symbols-outlined text-secondary mb-2 md:mb-3">restaurant</span>
                    <h4 className="manrope font-bold text-primary text-[10px] md:text-sm uppercase tracking-wider">Dining</h4>
                    <p className="text-[11px] md:text-xs mt-1 text-on-surface-variant">Michelin Starred On-site</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Golf Course Specs (Bento Grid) */}
            <section id="golf-specs">
              <h2 className="noto-serif text-2xl md:text-3xl font-bold text-primary mb-8 md:mb-10">The Heritage Course</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                <div className="bg-primary text-white p-6 md:p-8 rounded-2xl flex flex-col justify-between aspect-square">
                  <span className="manrope text-[10px] font-bold tracking-widest uppercase opacity-60">Slope</span>
                  <span className="noto-serif text-4xl md:text-6xl font-bold">142</span>
                </div>
                <div className="bg-white border border-outline-variant/15 p-6 md:p-8 rounded-2xl flex flex-col justify-between aspect-square">
                  <span className="manrope text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Rating</span>
                  <span className="noto-serif text-4xl md:text-6xl font-bold text-secondary">74.8</span>
                </div>
                <div className="col-span-2 bg-surface-container-low p-6 md:p-8 rounded-2xl flex flex-col justify-center relative overflow-hidden">
                  <div className="relative z-10">
                    <span className="manrope text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Total Yardage</span>
                    <div className="noto-serif text-4xl md:text-6xl font-bold text-primary mt-1 md:mt-2">7,142 <span className="text-base md:text-xl">Yds</span></div>
                  </div>
                  <span className="material-symbols-outlined absolute -right-2 -bottom-2 md:-right-4 md:-bottom-4 text-7xl md:text-9xl text-primary/5 select-none">golf_course</span>
                </div>
                <div className="col-span-2 bg-surface-container-low p-6 md:p-8 rounded-2xl flex items-center justify-between">
                  <div>
                    <span className="manrope text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Par</span>
                    <div className="noto-serif text-2xl md:text-4xl font-bold text-primary">72</div>
                  </div>
                  <div className="text-right">
                    <span className="manrope text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Designer</span>
                    <div className="manrope text-[11px] md:text-sm font-bold text-primary italic">MacKenzie inspired</div>
                  </div>
                </div>
                <div className="bg-secondary-fixed-dim text-primary p-6 md:p-8 rounded-2xl flex flex-col justify-between aspect-square">
                  <span className="manrope text-[10px] font-bold tracking-widest uppercase text-primary/60">Holes</span>
                  <span className="noto-serif text-4xl md:text-6xl font-bold">18</span>
                </div>
                <div className="bg-white border border-outline-variant/15 p-6 md:p-8 rounded-2xl flex flex-col justify-between aspect-square">
                  <span className="manrope text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Cart Path</span>
                  <span className="material-symbols-outlined text-3xl md:text-4xl text-primary mt-2 md:mt-4">check_circle</span>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="md:sticky md:top-32 space-y-6 md:space-y-8">
              <div className="bg-primary-container text-white p-8 rounded-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="noto-serif text-2xl font-bold mb-4">Curate Your Future</h3>
                  <p className="manrope text-on-primary-container text-sm mb-8 leading-relaxed">
                    Speak with a Heritage Consultant to receive a personalized community dossier and private tour invitation.
                  </p>
                  <div className="space-y-4">
                    <Link href="/consultation" className="block w-full text-center bg-secondary-fixed-dim text-primary py-4 rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-secondary-container transition-colors">
                      Talk to an Expert
                    </Link>
                    <button 
                      onClick={() => handleFeatureSoon("Brochure Download")}
                      className="w-full border border-outline-variant/30 py-4 rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-white/5 transition-colors"
                    >
                      Download Brochure
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low p-6 rounded-2xl">
                <h4 className="manrope font-bold text-primary text-[10px] uppercase tracking-widest mb-4">Location</h4>
                <div className="relative w-full h-40 md:h-48 rounded-xl overflow-hidden mb-4 grayscale hover:grayscale-0 transition-all duration-500">
                  <Image 
                    className="w-full h-full object-cover" 
                    src="https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=2000&auto=format&fit=crop" 
                    alt="Map"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span className="text-xs md:text-sm">142 Heritage Way, Pebble Beach, CA</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
      
      <VirtualTourModal 
        isOpen={isTourOpen} 
        onClose={() => setIsTourOpen(false)} 
        tourUrl={tourUrl} 
      />
      
      <Footer />
    </>
  );
}
