import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen">
      {/* Visual Anchor: High-Quality Imagery Side */}
      <section className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 z-10"></div>
        <img 
          alt="Heritage Course View" 
          className="absolute inset-0 w-full h-full object-cover scale-105" 
          src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop" 
        />
        {/* Branding Overlay */}
        <div className="relative z-20 flex flex-col justify-between p-16 w-full text-white">
          <div>
            <Link href="/" className="font-headline text-4xl font-bold tracking-tighter">55CLUBHOUSE</Link>
            <p className="font-body text-sm uppercase tracking-widest mt-2 opacity-80">The Heritage Curator</p>
          </div>
          <div className="max-w-md">
            <span className="inline-block px-3 py-1 bg-secondary text-white font-label text-[10px] tracking-widest uppercase mb-6">Platinum Rated Collective</span>
            <h2 className="font-headline text-5xl leading-tight mb-6">Step into the sanctuary of modern tradition.</h2>
            <p className="font-body text-lg text-surface-variant leading-relaxed opacity-90">
              Join an elite assembly of global members dedicated to the preservation and progress of the heritage game.
            </p>
          </div>
        </div>
      </section>

      {/* Login Form Side */}
      <section className="w-full lg:w-1/2 flex flex-col justify-center items-center px-8 md:px-24 bg-surface relative">
        <div className="max-w-md w-full">
          <div className="mb-12">
            <h3 className="font-headline text-3xl font-bold text-primary mb-4">Member Access</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">Please authenticate to access the Curator's collection and your private matchmaking profile.</p>
          </div>

          <form className="space-y-8">
            <div className="space-y-6">
              <div className="relative">
                <label className="font-label text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-2 block">Username or Email</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-outline-variant/40 focus:border-secondary focus:ring-0 px-0 py-3 font-body text-primary transition-all placeholder:text-on-surface-variant/40" 
                  placeholder="curator@55clubhouse.com"
                />
              </div>
              <div className="relative">
                <label className="font-label text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-2 block">Private Key</label>
                <input 
                  type="password" 
                  className="w-full bg-transparent border-b border-outline-variant/40 focus:border-secondary focus:ring-0 px-0 py-3 font-body text-primary transition-all placeholder:text-on-surface-variant/40" 
                  placeholder="••••••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded-sm border-outline-variant text-primary focus:ring-secondary" />
                <span className="font-body text-xs text-on-surface-variant group-hover:text-primary transition-colors">Remember Curator</span>
              </label>
              <Link href="#" className="font-body text-xs text-secondary font-bold hover:underline transition-all underline-offset-4">Forgotten Access?</Link>
            </div>

            <button className="w-full bg-primary text-white py-5 rounded-lg font-bold font-body hover:scale-[0.98] transition-all shadow-xl bg-gradient-to-br from-primary to-primary-container">
              Enter Clubhouse
            </button>
          </form>

          <div className="mt-16 pt-8 border-t border-outline-variant/20">
            <p className="font-body text-sm text-on-surface-variant text-center">
              Not yet a member? <Link href="/matchmaker" className="text-primary font-bold hover:underline underline-offset-4">Apply for Membership</Link>
            </p>
          </div>
        </div>

        {/* Support Footer */}
        <div className="absolute bottom-12 text-center w-full max-w-md px-8">
          <p className="font-body text-[10px] uppercase tracking-[0.2em] text-on-surface-variant opacity-40">Secure Member Portal • 256-Bit Encryption</p>
        </div>
      </section>
    </main>
  );
}
