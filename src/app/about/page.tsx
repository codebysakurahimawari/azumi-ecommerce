"use client";

export default function AboutPage() {
    return (
        <div className="bg-white text-gray-800">

            {/* HERO */}
            <section className="py-32 bg-gradient-to-b from-pink-50 to-white text-center px-6">
                <h1 className="text-6xl font-bold mb-6 tracking-tight text-gray-900">
                    Who We Are
                </h1>
                <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
                    We are a beauty-focused ecommerce destination committed to
                    authenticity, quality, and empowering confidence through curated
                    premium products.
                </p>
            </section>

            {/* SECTION 1 */}
            <section className="py-24 px-6 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <div>
                        <h2 className="text-4xl font-bold mb-6 text-pink-600">
                            Our Beginning
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Our journey started with a simple vision — to make high-quality
                            beauty and lifestyle products accessible to everyone.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            From a small idea to a fast-growing ecommerce platform,
                            our mission has always been to deliver trust and excellence.
                        </p>
                    </div>

                    <div className="h-80 rounded-2xl bg-gradient-to-br from-pink-100 to-pink-50 shadow-sm"></div>

                </div>
            </section>

            {/* SECTION 2 */}
            <section className="py-24 bg-pink-50 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                    <div className="h-80 rounded-2xl bg-white shadow-sm"></div>

                    <div>
                        <h2 className="text-4xl font-bold mb-6 text-pink-600">
                            Authenticity & Trust
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We partner only with trusted brands and authorized distributors.
                            Every product goes through strict quality checks.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our commitment ensures that customers always receive genuine,
                            safe, and reliable products.
                        </p>
                    </div>

                </div>
            </section>

            {/* SECTION 3 */}
            <section className="py-24 px-6 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <div>
                        <h2 className="text-4xl font-bold mb-6 text-pink-600">
                            Innovation in Beauty Ecommerce
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We blend technology with style to create a seamless and inspiring
                            shopping experience.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            From easy browsing to secure checkout, every detail is designed
                            for convenience and elegance.
                        </p>
                    </div>

                    <div className="h-80 rounded-2xl bg-gradient-to-br from-pink-100 to-white shadow-sm"></div>

                </div>
            </section>

            {/* STATS */}
            <section className="py-28 bg-gradient-to-r from-pink-50 to-white text-center px-6">
                <h2 className="text-4xl font-bold mb-16 text-gray-900">
                    Our Growth Journey
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
                    <div>
                        <h3 className="text-4xl font-bold text-pink-600">30K+</h3>
                        <p className="text-gray-600 mt-2">Happy Customers</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-pink-600">2500+</h3>
                        <p className="text-gray-600 mt-2">Products</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-pink-600">150+</h3>
                        <p className="text-gray-600 mt-2">Brand Partners</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-pink-600">99%</h3>
                        <p className="text-gray-600 mt-2">Positive Reviews</p>
                    </div>
                </div>
            </section>

            {/* VALUES */}
            <section className="py-24 px-6 max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12 text-gray-900">
                    Our Core Values
                </h2>

                <div className="grid md:grid-cols-3 gap-12">
                    <div className="p-8 rounded-2xl bg-pink-50 hover:shadow-md transition">
                        <h3 className="text-2xl font-semibold mb-4 text-pink-600">
                            Customer First
                        </h3>
                        <p className="text-gray-600">
                            Your satisfaction is our top priority.
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl bg-pink-50 hover:shadow-md transition">
                        <h3 className="text-2xl font-semibold mb-4 text-pink-600">
                            Transparency
                        </h3>
                        <p className="text-gray-600">
                            Honest pricing and clear policies.
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl bg-pink-50 hover:shadow-md transition">
                        <h3 className="text-2xl font-semibold mb-4 text-pink-600">
                            Excellence
                        </h3>
                        <p className="text-gray-600">
                            We aim for perfection in every detail.
                        </p>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-32 bg-pink-600 text-white text-center px-6">
                <h2 className="text-5xl font-bold mb-6">
                    Discover Beauty With Confidence
                </h2>
                <p className="max-w-2xl mx-auto text-pink-100 mb-8">
                    Experience premium beauty shopping built on trust and elegance.
                </p>
                <button className="px-10 py-4 bg-white text-pink-600 font-semibold rounded-full hover:scale-105 transition">
                    Shop Now
                </button>
            </section>

        </div>
    );
}