import ProductDetailsMolecule from "@/components/molecules/product/ProductDetailsMolecule";
import ProductImagesMolecule from "@/components/molecules/product/ProductImagesMolecule";
import RelatedProductsOrganism from "@/components/organisms/sections/common/RelatedProductsOrganism";
import ProductInfoTabsOrganism from "@/components/organisms/sections/products/ProductInfoTabsOrganism";

const images = [
    "/demo-images/cls-circle1.jpg",
    "/demo-images/cls-circle2.jpg",
    "/demo-images/cls-circle3.jpg",
    "/demo-images/cls-circle4.jpg",
    "/demo-images/cls-circle5.jpg",
];

export default function ProductDetailPage() {
    const product = {
        id: 1,
        name: "Classic Circle Sunglasses",
        price: 129.99,
        rating: 4.5,
        reviews: 128,
        description:
            "Elevate your everyday look with these timeless classic circle sunglasses. Designed with premium lenses and a lightweight frame for all-day comfort.",
        features: [
            "UV400 Protection",
            "Premium Metal Frame",
            "Scratch Resistant Lenses",
            "Lightweight & Comfortable",
        ],
        stock: 12,
    };

    return (
        <div className="container mx-auto px-6 py-10">
            <div className="grid lg:grid-cols-2 gap-12">
                <ProductImagesMolecule images={images} />
                <ProductDetailsMolecule />
            </div>

            <div>
                <ProductInfoTabsOrganism
                    description="A fitted stretch strap top designed for comfort and elegance..."
                    composition="95% Cotton, 5% Elastane. Machine wash cold."
                    designed="Designed in Paris"
                    origin="Made in Italy"
                    manufacture="Ethically manufactured in certified facilities."

                    shippingSupport="Free returns within 30 days. Customer support available 24/7."
                    importDuties="Import duties and taxes are calculated at checkout depending on your location."
                    estimatedDelivery="3–5 business days (Domestic), 7–12 business days (International)."

                    returnPolicies="Items must be returned in original condition within 30 days..."
                />            
            </div>

            <section className="">
                <RelatedProductsOrganism  />
            </section>
        </div>
    );
}