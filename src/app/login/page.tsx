'use client';

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setTimeout(() => {
      alert("Sign in successful. Welcome to the clubhouse.");
      setIsLoggingIn(false);
    }, 1000);
  };

  return (
    <main className="flex min-h-screen bg-surface">
      {/* Visual Anchor */}
      <section className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 z-10"></div>
        <img 
          alt="Heritage Course View" 
          className="absolute inset-0 w-full h-full object-cover" 
          src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop" 
        />
        <div className="relative z-20 flex flex-col justify-between p-16 w-full text-white">
          <div>
            <Link href="/" className="font-headline text-4xl font-bold tracking-tighter">55CLUBHOUSE</Link>
          </div>
          <div className="max-w-md">
            <h2 className="font-headline text-5xl leading-tight mb-6">Join the inner circle.</h2>
            <p className="font-body text-lg text-surface-variant leading-relaxed opacity-90">
              Create an account to save your favorite estates and unlock exclusive expert reports.
            </p>
          </div>
        </div>
      </section>

      {/* Simplified Sign In Form */}
      <section className="w-full lg:w-1/2 flex flex-col justify-center items-center px-8 md:px-24 relative">
        <div className="max-w-md w-full">
          <div className="mb-12">
            <h3 className="font-headline text-3xl font-bold text-primary mb-2">Sign In</h3>
            <p className="font-body text-on-surface-variant">Welcome back. Enter your details below.</p>
          </div>

          <form className="space-y-8" onSubmit={handleLogin}>
            <div className="space-y-6">
              <div>
                <label className="font-label text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-2 block">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-transparent border-b border-outline-variant/40 focus:border-secondary focus:ring-0 px-0 py-3 font-body text-primary transition-all outline-none" 
                  placeholder="name@email.com"
                />
              </div>
              <div>
                <label className="font-label text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-2 block">Password</label>
                <input 
                  type="password" 
                  required
                  className="w-full bg-transparent border-b border-outline-variant/40 focus:border-secondary focus:ring-0 px-0 py-3 font-body text-primary transition-all outline-none" 
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={isLoggingIn}
              className="w-full bg-primary text-white py-5 rounded-xl font-bold font-body hover:scale-[0.98] transition-all shadow-xl disabled:opacity-50"
            >
              {isLoggingIn ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-outline-variant/20 text-center">
            <p className="font-body text-sm text-on-surface-variant">
              Don't have an account? <Link href="/signup" className="text-primary font-bold hover:underline">Create account</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
