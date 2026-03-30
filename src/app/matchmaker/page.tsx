'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useState } from "react";

const steps = [
  { id: 1, label: 'Lifestyle', title: 'Phase 1: Your Lifestyle DNA' },
  { id: 2, label: 'Property', title: 'Phase 2: Architectural Taste' },
  { id: 3, label: 'Strategy', title: 'Phase 3: Secure Your Matches' },
];

export default function MatchmakerPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selections, setSelections] = useState({ golf: 'leisure', architecture: 'heritage' });

  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-32 pb-24 px-4 md:px-12 max-w-7xl mx-auto min-h-screen">
        {/* Progress Indicator */}
        <div className="max-w-xl mx-auto mb-12 md:mb-16">
          <div className="flex justify-between items-center relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-outline-variant/30 -z-10"></div>
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center gap-2 md:gap-3 bg-background px-2">
                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold transition-all duration-500 ${
                  currentStep >= step.id ? 'bg-primary text-white ring-4 md:ring-8 ring-primary/10' : 'bg-surface-container-high text-on-surface-variant/40'
                }`}>
                  {step.id}
                </div>
                <span className={`manrope text-[8px] md:text-[10px] font-bold uppercase tracking-widest ${
                  currentStep >= step.id ? 'text-primary' : 'text-on-surface-variant/40'
                }`}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Intro Section (Only on Step 1) */}
        {currentStep === 1 && (
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
            <h1 className="noto-serif text-4xl md:text-6xl font-extrabold text-primary -tracking-tight mb-4 md:mb-6">The Matchmaker</h1>
            <p className="manrope text-sm md:text-lg text-on-surface-variant max-w-2xl mx-auto px-4">
              An exclusive alignment protocol to pair your legacy with the world's most distinguished estates.
            </p>
          </div>
        )}

        {/* Form Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="lg:col-span-7 bg-surface-container-lowest p-6 md:p-16 rounded-2xl md:rounded-xl shadow-xl border border-outline-variant/10">
            <h2 className="noto-serif text-2xl md:text-3xl font-bold text-primary mb-8 md:mb-12">{steps[currentStep - 1].title}</h2>
            
            <form className="space-y-10 md:space-y-16">
              {currentStep === 1 && (
                <div className="space-y-6">
                  <label className="manrope text-[10px] md:text-xs font-bold uppercase tracking-widest text-secondary">Golfing Intensity</label>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { id: 'competitive', label: 'Competitive', desc: 'Tournament-ready courses and elite pro-shops.', icon: 'workspace_premium' },
                      { id: 'leisure', label: 'Leisure', desc: 'Relaxed atmosphere with scenic coastal views.', icon: 'beach_access' },
                      { id: 'social', label: 'Social', desc: 'Focus on clubhouse amenities and member events.', icon: 'groups' }
                    ].map((item) => (
                      <div 
                        key={item.id} 
                        onClick={() => setSelections({...selections, golf: item.id})}
                        className={`p-5 md:p-6 border-2 rounded-xl cursor-pointer transition-all ${
                          selections.golf === item.id 
                            ? 'border-secondary bg-surface-container-low shadow-md' 
                            : 'border-outline-variant/20 hover:bg-surface-container-low/30'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span className={`material-symbols-outlined ${selections.golf === item.id ? 'text-secondary' : 'text-on-surface-variant/40'}`}>
                            {item.icon}
                          </span>
                          <div>
                            <span className="manrope font-bold block text-primary text-sm md:text-base">{item.label}</span>
                            <span className="manrope text-xs text-on-surface-variant">{item.desc}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <label className="manrope text-[10px] md:text-xs font-bold uppercase tracking-widest text-secondary">Architectural Aesthetic</label>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { id: 'heritage', label: 'Classic Heritage', desc: 'Traditional stone, wood, and historic charm.', icon: 'castle' },
                      { id: 'modern', label: 'Modern Minimalist', desc: 'Clean lines, large glass, and contemporary finish.', icon: 'architecture' }
                    ].map((item) => (
                      <div 
                        key={item.id} 
                        onClick={() => setSelections({...selections, architecture: item.id})}
                        className={`p-5 md:p-6 border-2 rounded-xl cursor-pointer transition-all ${
                          selections.architecture === item.id 
                            ? 'border-secondary bg-surface-container-low shadow-md' 
                            : 'border-outline-variant/20 hover:bg-surface-container-low/30'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span className={`material-symbols-outlined ${selections.architecture === item.id ? 'text-secondary' : 'text-on-surface-variant/40'}`}>
                            {item.icon}
                          </span>
                          <div>
                            <span className="manrope font-bold block text-primary text-sm md:text-base">{item.label}</span>
                            <span className="manrope text-xs text-on-surface-variant">{item.desc}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-8">
                  <div className="bg-surface-container-low p-6 rounded-xl border border-secondary/20">
                    <p className="manrope text-sm text-primary font-medium leading-relaxed">
                      Based on your preferences for <span className="font-bold text-secondary uppercase tracking-wider text-xs">{selections.golf}</span> living and <span className="font-bold text-secondary uppercase tracking-wider text-xs">{selections.architecture}</span> architecture, we have found 3 matching communities.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <label className="manrope text-[10px] font-bold uppercase tracking-widest text-secondary">Secure Your Private Report</label>
                    <input type="email" placeholder="Enter your email" className="w-full bg-transparent border-b border-outline-variant/40 focus:border-secondary focus:ring-0 py-3 font-body outline-none" />
                  </div>
                </div>
              )}

              <div className="pt-8 flex flex-col md:flex-row gap-4 justify-between items-center">
                {currentStep > 1 ? (
                  <button 
                    type="button" 
                    onClick={() => setCurrentStep(prev => prev - 1)}
                    className="manrope text-sm font-bold text-on-surface-variant hover:text-primary transition-colors underline underline-offset-4 order-2 md:order-1"
                  >
                    Previous Step
                  </button>
                ) : (
                  <div className="order-2 md:order-1" />
                )}
                
                <button 
                  type="button" 
                  onClick={() => currentStep < 3 ? setCurrentStep(prev => prev + 1) : null}
                  className="w-full md:w-auto bg-primary text-white px-10 py-4 rounded-xl font-bold manrope hover:scale-[0.98] transition-transform shadow-xl order-1 md:order-2"
                >
                  {currentStep === 3 ? 'Reveal My Matches' : 'Next Step'}
                </button>
              </div>
            </form>
          </div>

          {/* Right Sidebar: Expert Tip (Hidden on mobile for focus) */}
          <div className="hidden lg:block lg:col-span-5 space-y-8 sticky top-32">
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
                "The most important factor in a golf community isn't the difficulty of the course, but the culture of the clubhouse."
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
