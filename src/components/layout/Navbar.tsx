import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto bg-background/80 backdrop-blur-md z-50">
      <Link href="/" className="text-2xl font-headline font-bold text-primary tracking-tighter">
        55clubhouse
      </Link>
      <nav className="hidden md:flex items-center space-x-10">
        <Link href="/discover" className="text-secondary font-semibold border-b-2 border-secondary-fixed-dim pb-1 manrope text-sm tracking-wide">
          Discover
        </Link>
        <Link href="/estates/shadow-creek-reserve" className="text-on-surface-variant font-medium hover:text-primary transition-colors manrope text-sm tracking-wide">
          Estates
        </Link>
        <Link href="/concierge" className="text-on-surface-variant font-medium hover:text-primary transition-colors manrope text-sm tracking-wide">
          Concierge
        </Link>
        <Link href="/about" className="text-on-surface-variant font-medium hover:text-primary transition-colors manrope text-sm tracking-wide">
          About
        </Link>
      </nav>
      <div className="flex items-center space-x-6">
        <div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/15">
          <span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
          <input 
            className="bg-transparent border-none focus:ring-0 text-sm manrope w-32 placeholder:text-on-surface-variant/60" 
            placeholder="Find an estate..." 
            type="text"
          />
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="material-symbols-outlined text-primary cursor-pointer hover:scale-95 transition-transform">
            account_circle
          </Link>
        </div>
      </div>
    </header>
  );
}
