"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/molecules/product/ProductCardMain";
import { productsData, TabKey } from "@/data/productdata";
import { staggerContainer, fadeUp } from "@/lib/animations";

export default function ProductsOffersSection() {
    const [activeTab, setActiveTab] = useState<TabKey>("newArrivals");

    const tabs: { label: string; value: TabKey }[] = [
        { label: "New Arrivals", value: "newArrivals" },
        { label: "Best Seller", value: "bestSeller" },
        { label: "On Sale", value: "onSale" },
    ];

    return (
        <section className="py-12 lg:py-16 xl:py-20">
            <div className="max-w-7xl mx-auto px-4 xl:px-0">

                {/* Tabs */}
                <div className="flex justify-center gap-8 mb-10">
                    {tabs.map((tab) => (
                        <button
                            key={tab.value}
                            onClick={() => setActiveTab(tab.value)}
                            className={`pb-1 cursor-pointer text-h2 transition ${
                                activeTab === tab.value
                                    ? "border-b-2 text-black"
                                    : "text-gray-500 hover:text-black"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Animated Products Grid */}
                <motion.div
                    key={activeTab}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    {productsData[activeTab]
                        .slice(0, 8)
                        .map((product, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                            >
                                <ProductCard {...product} />
                            </motion.div>
                        ))}
                </motion.div>

                {/* View All Button */}
                {productsData[activeTab].length > 8 && (
                    <div className="flex justify-center mt-12">
                        <button className="px-8 py-3 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
                            View All
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
}