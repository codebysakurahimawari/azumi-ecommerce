"use client";

import { motion } from "framer-motion";
import BlogCard from "@/components/molecules/cards/BlogCard";
import { staggerContainer, fadeUp } from "@/lib/animations";

export default function NewsInsightSection() {
    const blogPosts = [
        {
            image: "/demo-images/products/product (1).webp",
            date: "13 August",
            title: "Top 10 Summer Fashion Trends You Can't Miss in 2024",
            excerpt:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed vulputate massa.",
            href: "/blog/summer-fashion-trends",
        },
        {
            image: "/demo-images/products/product (2).webp",
            date: "10 August",
            title: "How to Style Minimal Outfits Like a Pro",
            excerpt:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed vulputate massa.",
            href: "/blog/minimal-outfits",
        },
        {
            image: "/demo-images/products/product (3).webp",
            date: "05 August",
            title: "Wardrobe Essentials Every Woman Should Own",
            excerpt:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed vulputate massa.",
            href: "/blog/wardrobe-essentials",
        },
    ];

    return (
        <section className="pb-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10">

                {/* Header (Animated) */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center max-w-2xl mx-auto flex flex-col gap-3"
                >
                    <h2 className="text-h2 font-semibold">
                        News Insight
                    </h2>
                    <p className="text-body text-gray-600">
                        Browse our Top Trending: the hottest picks loved by all.
                    </p>
                </motion.div>

                {/* Blog Grid (Staggered Animation) */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                        >
                            <BlogCard {...post} />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}