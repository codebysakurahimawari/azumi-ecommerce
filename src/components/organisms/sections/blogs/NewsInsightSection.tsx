"use client";

import { motion } from "framer-motion";
import BlogCard from "@/components/molecules/cards/BlogCard";
import { staggerContainer, fadeUp } from "@/lib/animations";

export default function BlogPage() {
    const blogPosts = [
        {
            image: "/demo-images/products/product (1).webp",
            date: "13 August 2024",
            title: "Top 10 Summer Fashion Trends You Can't Miss in 2024",
            excerpt:
                "Discover the hottest fashion trends that are dominating this summer season.",
            href: "/blog/summer-fashion-trends",
        },
        {
            image: "/demo-images/products/product (2).webp",
            date: "10 August 2024",
            title: "How to Style Minimal Outfits Like a Pro",
            excerpt:
                "Learn how to create elegant minimal outfits with simple styling techniques.",
            href: "/blog/minimal-outfits",
        },
        {
            image: "/demo-images/products/product (3).webp",
            date: "05 August 2024",
            title: "Wardrobe Essentials Every Woman Should Own",
            excerpt:
                "Build a timeless wardrobe with these must-have essential pieces.",
            href: "/blog/wardrobe-essentials",
        },
        {
            image: "/demo-images/products/product (4).webp",
            date: "01 August 2024",
            title: "Best Street Style Looks of the Year",
            excerpt:
                "Explore bold and trendy street style looks from fashion influencers.",
            href: "/blog/street-style-looks",
        },
    ];

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">

                {/* Page Header */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="text-center flex flex-col gap-4"
                >
                    <h1 className="text-4xl font-semibold">Our Blog</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore the latest fashion insights, styling tips, and trends curated just for you.
                    </p>
                </motion.div>

                {/* Blog Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {blogPosts.map((post, index) => (
                        <motion.div key={index} variants={fadeUp}>
                            <BlogCard {...post} />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}