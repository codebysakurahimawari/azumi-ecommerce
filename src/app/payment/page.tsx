import PaymentConfirmationCard from "@/components/organisms/sections/checkout/PaymentConfirmationCard";
import PageHero from "@/components/organisms/sections/hero/InnerPageHero";

export default function PaymentConfirmationPage() {
  return (
    <main className=" min-h-auto">
      
      {/* Optional Hero (keeps consistency with rest of site) */}
      <PageHero
        title="Payment Confirmation"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Checkout", href: "/checkout" },
          { label: "Confirmation" },
        ]}
      />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-center">
          <PaymentConfirmationCard />
        </div>
      </section>

    </main>
  );
}