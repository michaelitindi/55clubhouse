'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useState } from "react";

export default function ConsultationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSchedule = () => {
    setIsSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
        <div className="max-w-3xl">
          <span className="manrope text-xs uppercase font-extrabold text-secondary tracking-[0.3em] mb-4 block">Private Service</span>
          <h1 className="noto-serif text-5xl md:text-6xl font-bold text-primary mb-8 leading-tight">Talk to an Expert</h1>
          <p className="manrope text-lg text-on-surface-variant leading-relaxed mb-12">
            Our Heritage Experts are available to assist members with estate tours, membership applications, and personalized lifestyle strategy.
          </p>
          
          {isSubmitted ? (
            <div className="bg-surface-container-low p-12 rounded-[2rem] border border-secondary/20 text-center animate-in fade-in zoom-in duration-500">
              <span className="material-symbols-outlined text-5xl text-secondary mb-4">check_circle</span>
              <h3 className="noto-serif text-2xl font-bold text-primary mb-2">Request Received</h3>
              <p className="manrope text-on-surface-variant">A Heritage Expert will contact you within 24 hours to schedule your briefing.</p>
            </div>
          ) : (
            <div className="bg-surface-container-low p-12 rounded-[2rem] border border-outline-variant/10">
              <h3 className="noto-serif text-2xl font-bold text-primary mb-6">Request a Private Briefing</h3>
              <div className="space-y-4">
                <button 
                  onClick={handleSchedule}
                  className="bg-primary text-white px-8 py-4 rounded-xl font-bold manrope hover:opacity-90 transition-opacity"
                >
                  Schedule a Call
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
