import PageHero from "@/components/organisms/sections/hero/InnerPageHero";
import ContactSection from "@/components/organisms/sections/contact/ContactSection";

export default function ContactPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <PageHero
        title="Contact Us"
        subtitle="We’d love to hear from you. Our team is here to help."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      {/* Content Wrapper */}
      <section className="relative">
        
        {/* Soft background separation */}
        <div className="absolute inset-0 bg-gray-50 -z-10" />

        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-white rounded-xl  border border-gray-200 p-">
            <ContactSection />
          </div>
        </div>

      </section>

    </main>
  );
}