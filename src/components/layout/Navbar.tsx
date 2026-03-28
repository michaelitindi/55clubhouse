'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      router.push(`/discover?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-8 py-4 h-20 max-w-screen-2xl mx-auto bg-background/80 backdrop-blur-md z-50">
      <Link href="/" className="text-2xl font-headline font-bold text-primary tracking-tighter">
        55clubhouse
      </Link>
      <nav className="hidden md:flex items-center space-x-10 h-full">
        <Link href="/discover" className="text-primary font-bold manrope text-sm tracking-wide hover:opacity-70 transition-opacity flex items-center">
          Discover
        </Link>
        <Link href="/estates/shadow-creek-reserve" className="text-primary font-bold manrope text-sm tracking-wide hover:opacity-70 transition-opacity flex items-center">
          Estates
        </Link>
        <Link href="/concierge" className="text-primary font-bold manrope text-sm tracking-wide hover:opacity-70 transition-opacity flex items-center">
          Concierge
        </Link>
        <Link href="/about" className="text-primary font-bold manrope text-sm tracking-wide hover:opacity-70 transition-opacity flex items-center">
          About
        </Link>
      </nav>
      <div className="flex items-center space-x-6">
        <div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/15">
          <span className="material-symbols-outlined text-primary text-sm mr-2">search</span>
          <input 
            className="bg-transparent border-none outline-none focus:outline-none focus:ring-0 text-sm manrope w-32 placeholder:text-primary text-primary font-medium" 
            placeholder="Find an estate..." 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="material-symbols-outlined text-primary cursor-pointer hover:scale-95 transition-transform flex items-center">
            account_circle
          </Link>
        </div>
      </div>
    </header>
  );
}
