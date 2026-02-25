import CartTable from "@/components/molecules/cart/CartTable";
import OrderSummary from "@/components/molecules/cart/OrderSummary";
import PageHero from "@/components/organisms/sections/hero/InnerPageHero";
import RelatedProductsOrganism from "@/components/organisms/sections/common/RelatedProductsOrganism";

export default function Home() {
    return (
        <main className="bg-white">

            {/* Hero */}
            <PageHero
                title="Our Shop"
                subtitle="Discover premium essentials designed for everyday comfort."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Shop" },
                ]}
            />

            {/* Content Container */}
            <section className="max-w-7xl mx-auto px-6 xl:px-0 py-14">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5 items-start">

                    {/* LEFT SIDE */}
                    <div>
                        <CartTable />
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="lg:sticky lg:top-28 h-fit">
                        <OrderSummary
                            subtotal={186.99}
                            discount={80}
                        />
                    </div>

                </div>
            </section>


            <section className="">
                <RelatedProductsOrganism />
            </section>

        </main>
    );
}