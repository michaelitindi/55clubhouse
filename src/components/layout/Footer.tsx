import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-16 px-12 grid grid-cols-1 md:grid-cols-3 gap-12 bg-primary text-background">
      <div className="flex flex-col space-y-6">
        <Link href="/" className="text-xl font-headline text-secondary-fixed-dim">55clubhouse</Link>
        <p className="manrope text-sm opacity-80 max-w-xs leading-loose">
          Dedicated to the preservation and promotion of world-class residential golf communities for the global elite.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col space-y-4">
          <h4 className="manrope text-[10px] uppercase font-bold tracking-widest text-secondary-fixed-dim">Destinations</h4>
          <Link href="/discover" className="manrope text-sm text-background/80 hover:text-white transition-all">North America</Link>
          <Link href="/discover" className="manrope text-sm text-background/80 hover:text-white transition-all">European Links</Link>
          <Link href="/discover" className="manrope text-sm text-background/80 hover:text-white transition-all">Asian Highlands</Link>
        </div>
        <div className="flex flex-col space-y-4">
          <h4 className="manrope text-[10px] uppercase font-bold tracking-widest text-secondary-fixed-dim">Legal</h4>
          <Link href="/privacy" className="manrope text-sm text-background/80 hover:text-white transition-all">Privacy Policy</Link>
          <Link href="/terms" className="manrope text-sm text-background/80 hover:text-white transition-all">Terms of Service</Link>
        </div>
      </div>
      <div className="flex flex-col space-y-8 md:items-end">
        <div className="flex space-x-6">
          <button className="material-symbols-outlined text-secondary-fixed-dim hover:text-white transition-colors">share</button>
          <Link href="mailto:concierge@55clubhouse.com" className="material-symbols-outlined text-secondary-fixed-dim hover:text-white transition-colors">mail</Link>
          <Link href="tel:+1555000000" className="material-symbols-outlined text-secondary-fixed-dim hover:text-white transition-colors">call</Link>
        </div>
        <div className="manrope text-[10px] opacity-60 md:text-right">
          © 2024 55clubhouse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
