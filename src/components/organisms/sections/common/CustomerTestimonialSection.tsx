"use client";

import CustomerTestimonialCard from "@/components/molecules/feedbacks/CustomerTestimoanilCard";

type Testimonial = {
    testimonialImage: string;
    rating: number;
    comment: string;
    userName: string;
    userAvatar: string;
    productImage: string;
    productName: string;
    productPrice: string;
};


const testimonials: Testimonial[] = [
    {
        testimonialImage: "/demo-images/banner-cls1.jpg",
        rating: 5,
        comment:
            "Fantastic shop! Great selection, fair prices, and friendly staff. Highly recommended. The quality of the products is exceptional, and the prices are very reasonable!",
        userName: "Sybil Sharp",
        userAvatar: "/demo-images/client-avtar.webp",
        productImage: "/demo-images/banner-cls1.jpg",
        productName: "Contrasting sheepskin sweatshirt",
        productPrice: "$60.00",
    },
    {
        testimonialImage: "/demo-images/banner-cls2.jpg",
        rating: 4,
        comment:
            "Fantastic shop! Great selection, fair prices, and friendly staff. Highly recommended. The quality of the products is exceptional, and the prices are very reasonable!",
        userName: "Sybil Sharp",
        userAvatar: "/demo-images/client-avtar.webp",
        productImage: "/demo-images/banner-cls2.jpg",
        productName: "Contrasting sheepskin sweatshirt",
        productPrice: "$60.00",
    },
];



export default function CustomerTestimonialSection() {
    return (
        <section>
            <div className="max-w-7xl mx-auto px-4 xl:px-0 py-12 lg:py-16 xl:py-20 2xl:py-24 flex flex-col gap-8">

                <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
                    <h2 className="text-h2 font-semibold">
                        Customer Say!
                    </h2>
                    <p className="text-body text-gray-600">
                        Our customers adore our products, and we constantly aim to delight them.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {testimonials.map((item, index) => (
                        <CustomerTestimonialCard
                            key={index}
                            {...item}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}