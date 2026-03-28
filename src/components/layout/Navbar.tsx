'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-8 py-4 h-20 max-w-screen-2xl mx-auto bg-background/80 backdrop-blur-md z-50">
      <Link href="/" className="text-2xl font-headline font-bold text-primary tracking-tighter">
        55clubhouse
      </Link>
      <nav className="hidden md:flex items-center space-x-10 h-full">
        <Link href="/discover" className="text-primary font-bold manrope text-sm tracking-wide hover:opacity-70 transition-opacity flex items-center">
          Discover
        </Link>
        <Link href="/consultation" className="text-primary font-bold manrope text-sm tracking-wide hover:opacity-70 transition-opacity flex items-center">
          Talk to an Expert
        </Link>
        <Link href="/about" className="text-primary font-bold manrope text-sm tracking-wide hover:opacity-70 transition-opacity flex items-center">
          About
        </Link>
      </nav>
      <div className="flex items-center space-x-6">
        <Link 
          href="/consultation" 
          className="hidden lg:flex items-center bg-primary text-white px-6 py-2.5 rounded-full font-bold manrope text-sm hover:scale-95 transition-transform"
        >
          Schedule Call
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="material-symbols-outlined text-primary cursor-pointer hover:scale-95 transition-transform flex items-center">
            account_circle
          </Link>
        </div>
      </div>
    </header>
  );
}
