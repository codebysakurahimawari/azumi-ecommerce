import ProductDetailsMolecule from "@/components/molecules/product/ProductDetailsMolecule";
import ProductImagesMolecule from "@/components/molecules/product/ProductImagesMolecule";

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
        </div>
    );
}