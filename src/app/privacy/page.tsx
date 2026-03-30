import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto min-h-screen">
        <h1 className="noto-serif text-4xl md:text-5xl font-bold text-primary mb-8">Privacy Policy</h1>
        <div className="prose prose-lg text-on-surface-variant manrope space-y-6">
          <p>At 55clubhouse, your privacy is our highest priority. We are committed to protecting the personal data of our distinguished members and visitors.</p>
          <h2 className="text-xl font-bold text-primary pt-4">Data Collection</h2>
          <p>We collect information only necessary to provide our curated matchmaking and consultation services. This includes your contact details and lifestyle preferences.</p>
          <h2 className="text-xl font-bold text-primary pt-4">Data Protection</h2>
          <p>Your data is secured using industry-standard encryption and is never shared with third parties without your explicit consent for referral purposes.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
