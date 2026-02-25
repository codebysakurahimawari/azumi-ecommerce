"use client";

import CheckoutForm from "@/components/organisms/sections/checkout/CheckoutForm";
import CheckoutOrderSummary from "@/components/organisms/sections/checkout/CheckoutOrderSummary";
import PageHero from "@/components/organisms/sections/hero/InnerPageHero";
export default function CheckoutPage() {
    return (
        <main className="bg-white">
            {/* Hero */}
            <PageHero
                title="Checkout"
                subtitle="Discover premium essentials designed for everyday comfort."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Checkout" },
                ]}
            />
            <section className="max-w-7xl mx-auto px-6 xl:px-0 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-5 items-start">

                    {/* LEFT SIDE */}
                    <CheckoutForm />

                    {/* RIGHT SIDE */}
                    <div className="lg:sticky lg:top-28 h-fit">
                        <CheckoutOrderSummary />
                    </div>

                </div>
            </section>
        </main>
    );
}