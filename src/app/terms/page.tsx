import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto min-h-screen">
        <h1 className="noto-serif text-4xl md:text-5xl font-bold text-primary mb-8">Terms of Service</h1>
        <div className="prose prose-lg text-on-surface-variant manrope space-y-6">
          <p>By accessing 55clubhouse, you agree to abide by our standards of excellence and professional conduct within our exclusive community.</p>
          <h2 className="text-xl font-bold text-primary pt-4">Membership Conduct</h2>
          <p>We expect all members to maintain the highest level of integrity when interacting with our experts and community partners.</p>
          <h2 className="text-xl font-bold text-primary pt-4">Service Limitations</h2>
          <p>55clubhouse provides directory and referral services. Final property transactions are handled by licensed third-party agents within our curated network.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
