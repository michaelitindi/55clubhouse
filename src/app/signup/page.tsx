import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen bg-surface">
      {/* Visual Anchor: High-Quality Imagery Side */}
      <section className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 z-10"></div>
        <img 
          alt="Heritage Course View" 
          className="absolute inset-0 w-full h-full object-cover" 
          src="https://images.unsplash.com/photo-1531415080293-233a33d0ef18?q=80&w=2070&auto=format&fit=crop" 
        />
        <div className="relative z-20 flex flex-col justify-between p-16 w-full text-white">
          <div>
            <Link href="/" className="font-headline text-4xl font-bold tracking-tighter">55CLUBHOUSE</Link>
          </div>
          <div className="max-w-md">
            <h2 className="font-headline text-5xl leading-tight mb-6">Experience the Heritage.</h2>
            <p className="font-body text-lg text-surface-variant leading-relaxed opacity-90">
              Create an account to access our unlisted portfolio and start your lifestyle DNA assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Simplified Create Account Form */}
      <section className="w-full lg:w-1/2 flex flex-col justify-center items-center px-8 md:px-24 relative">
        <div className="max-w-md w-full">
          <div className="mb-12">
            <h3 className="font-headline text-3xl font-bold text-primary mb-2">Create Account</h3>
            <p className="font-body text-on-surface-variant">Join our exclusive community of golf enthusiasts.</p>
          </div>

          <form className="space-y-8">
            <div className="space-y-6">
              <div>
                <label className="font-label text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-2 block">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-outline-variant/40 focus:border-secondary focus:ring-0 px-0 py-3 font-body text-primary transition-all outline-none" 
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="font-label text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-2 block">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-outline-variant/40 focus:border-secondary focus:ring-0 px-0 py-3 font-body text-primary transition-all outline-none" 
                  placeholder="name@email.com"
                />
              </div>
              <div>
                <label className="font-label text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-2 block">Create Password</label>
                <input 
                  type="password" 
                  className="w-full bg-transparent border-b border-outline-variant/40 focus:border-secondary focus:ring-0 px-0 py-3 font-body text-primary transition-all outline-none" 
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button className="w-full bg-primary text-white py-5 rounded-lg font-bold font-body hover:scale-[0.98] transition-all shadow-xl">
              Create Account
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-outline-variant/20 text-center">
            <p className="font-body text-sm text-on-surface-variant">
              Already have an account? <Link href="/login" className="text-primary font-bold hover:underline">Sign in</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
