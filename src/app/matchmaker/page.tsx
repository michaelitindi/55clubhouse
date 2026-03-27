import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function MatchmakerPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
        {/* Progress Indicator */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="flex justify-between items-center relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-outline-variant/30 -z-10"></div>
            {/* Step 1 Active */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold ring-8 ring-background">1</div>
              <span className="manrope text-[10px] font-bold uppercase tracking-widest text-primary">Lifestyle</span>
            </div>
            {/* Step 2 Inactive */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-bold ring-8 ring-background">2</div>
              <span className="manrope text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">Property</span>
            </div>
            {/* Step 3 Inactive */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-bold ring-8 ring-background">3</div>
              <span className="manrope text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">Strategy</span>
            </div>
          </div>
        </div>

        {/* Hero Intro Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="noto-serif text-5xl md:text-6xl font-extrabold text-primary -tracking-tight mb-6">The Matchmaker</h1>
          <p className="manrope text-lg text-on-surface-variant max-w-2xl mx-auto">
            An exclusive alignment protocol to pair your legacy with the world's most distinguished estates and clubhouses.
          </p>
        </div>

        {/* Form Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 bg-surface-container-lowest p-10 md:p-16 rounded-xl shadow-[0px_20px_40px_rgba(22,29,27,0.06)]">
            <h2 className="noto-serif text-3xl font-bold text-primary mb-12">Phase 1: Your Lifestyle DNA</h2>
            <form className="space-y-16">
              {/* Golf Intensity Selection */}
              <div className="space-y-6">
                <label className="manrope text-xs font-bold uppercase tracking-widest text-secondary">Golfing Intensity</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { id: 'competitive', label: 'Competitive', desc: 'Tournament-ready courses and elite pro-shops.', icon: 'workspace_premium' },
                    { id: 'leisure', label: 'Leisure', desc: 'Relaxed atmosphere with scenic coastal views.', icon: 'beach_access' },
                    { id: 'social', label: 'Social', desc: 'Focus on clubhouse amenities and member events.', icon: 'groups' }
                  ].map((item) => (
                    <label key={item.id} className="cursor-pointer group">
                      <input type="radio" name="golf" className="hidden peer" defaultChecked={item.id === 'leisure'} />
                      <div className="p-6 border-b-2 border-outline-variant/40 peer-checked:border-secondary peer-checked:bg-surface-container-low transition-all group-hover:bg-surface-container-low/50">
                        <span className="material-symbols-outlined text-secondary block mb-3">{item.icon}</span>
                        <span className="manrope font-bold block text-primary">{item.label}</span>
                        <span className="manrope text-xs text-on-surface-variant">{item.desc}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Architectural Preference */}
              <div className="space-y-6">
                <label className="manrope text-xs font-bold uppercase tracking-widest text-secondary">Architectural Aesthetic</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {[
                    { id: 'heritage', label: 'Classic Heritage', desc: 'Traditional stone, wood, and historic charm.', icon: 'castle' },
                    { id: 'modern', label: 'Modern Minimalist', desc: 'Clean lines, large glass, and contemporary finish.', icon: 'architecture' }
                  ].map((item) => (
                    <label key={item.id} className="cursor-pointer group">
                      <input type="radio" name="architecture" className="hidden peer" />
                      <div className="p-6 border-b-2 border-outline-variant/40 peer-checked:border-secondary peer-checked:bg-surface-container-low transition-all group-hover:bg-surface-container-low/50">
                        <span className="material-symbols-outlined text-secondary block mb-3">{item.icon}</span>
                        <span className="manrope font-bold block text-primary">{item.label}</span>
                        <span className="manrope text-xs text-on-surface-variant">{item.desc}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-8 flex justify-between items-center">
                <button type="button" className="manrope text-sm font-bold text-on-surface-variant hover:text-primary transition-colors">
                  Save for Later
                </button>
                <button type="button" className="bg-primary text-white px-10 py-4 rounded-lg font-bold manrope hover:scale-[0.98] transition-transform shadow-xl">
                  Next: Property Profile
                </button>
              </div>
            </form>
          </div>

          {/* Right Sidebar: Expert Tip */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-surface-container-low p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white border border-outline-variant/20">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" alt="Curator" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="manrope font-bold text-primary">Julian's Insight</h4>
                  <p className="manrope text-[10px] uppercase font-bold text-secondary tracking-widest">Chief Curator</p>
                </div>
              </div>
              <p className="manrope text-sm text-on-surface-variant leading-relaxed italic">
                "The most important factor in a golf community isn't the difficulty of the course, but the culture of the clubhouse. Your golfing intensity choice helps us find a community that matches your pace of play and social rhythm."
              </p>
            </div>

            <div className="bg-primary text-white p-8 rounded-2xl relative overflow-hidden">
               <div className="relative z-10">
                <h4 className="noto-serif text-xl font-bold mb-4">Concierge Support</h4>
                <p className="manrope text-sm text-white/70 mb-6">Need assistance? Our lead curators are available for a private consultation.</p>
                <button className="w-full bg-secondary-fixed-dim text-primary py-3 rounded-lg font-bold manrope hover:scale-105 transition-transform">
                  Live Concierge
                </button>
               </div>
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
