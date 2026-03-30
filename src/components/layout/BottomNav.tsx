'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Explore', icon: 'explore', href: '/' },
  { label: 'Discover', icon: 'travel_explore', href: '/discover' },
  { label: 'Match', icon: 'handshake', href: '/matchmaker' },
  { label: 'Profile', icon: 'person', href: '/login' },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 md:hidden bg-white/90 backdrop-blur-xl shadow-[0px_-10px_30px_rgba(22,29,27,0.04)] rounded-t-3xl border-t border-outline-variant/15">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link 
            key={item.href}
            href={item.href} 
            className={`flex flex-col items-center justify-center rounded-xl px-6 py-2 transition-all duration-300 ${
              isActive 
                ? 'text-primary bg-surface-container-low font-bold' 
                : 'text-on-surface-variant opacity-70 hover:opacity-100'
            }`}
          >
            <span className={`material-symbols-outlined ${isActive ? 'fill-1' : ''}`} style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>
              {item.icon}
            </span>
            <span className="manrope text-[10px] uppercase tracking-widest mt-1">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
