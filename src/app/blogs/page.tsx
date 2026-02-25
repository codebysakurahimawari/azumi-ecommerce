"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import BlogCard from "@/components/molecules/cards/BlogCard";
import { staggerContainer, fadeUp } from "@/lib/animations";

export default function BlogPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 4;

    const blogPosts = [
        {
            image: "/demo-images/products/product (1).webp",
            date: "2024-08-13",
            title: "Top 10 Summer Fashion Trends You Can't Miss in 2024",
            excerpt: "Discover the hottest fashion trends this summer.",
            href: "/blog/summer-fashion-trends",
        },
        {
            image: "/demo-images/products/product (2).webp",
            date: "2024-08-10",
            title: "How to Style Minimal Outfits Like a Pro",
            excerpt: "Learn minimal styling techniques.",
            href: "/blog/minimal-outfits",
        },
        {
            image: "/demo-images/products/product (3).webp",
            date: "2024-08-05",
            title: "Wardrobe Essentials Every Woman Should Own",
            excerpt: "Build a timeless wardrobe.",
            href: "/blog/wardrobe-essentials",
        },
        {
            image: "/demo-images/products/product (4).webp",
            date: "2024-08-01",
            title: "Best Street Style Looks of the Year",
            excerpt: "Explore bold street style looks.",
            href: "/blog/street-style-looks",
        },
        {
            image: "/demo-images/products/product (1).webp",
            date: "2024-07-28",
            title: "Minimal Fashion Accessories Guide",
            excerpt: "Complete guide to minimal accessories.",
            href: "/blog/minimal-accessories",
        },
        {
            image: "/demo-images/products/product (2).webp",
            date: "2024-07-25",
            title: "Top Denim Trends This Season",
            excerpt: "Denim styles you need right now.",
            href: "/blog/denim-trends",
        },
        {
            image: "/demo-images/products/product (3).webp",
            date: "2024-07-20",
            title: "Office Wear Styling Tips",
            excerpt: "Professional yet stylish outfit ideas.",
            href: "/blog/office-wear",
        },
        {
            image: "/demo-images/products/product (4).webp",
            date: "2024-07-15",
            title: "Summer Color Palette Guide",
            excerpt: "Trending colors this summer.",
            href: "/blog/summer-colors",
        },
    ];

    // Pagination Logic
    const totalPages = Math.ceil(blogPosts.length / postsPerPage);

    const currentPosts = useMemo(() => {
        const start = (currentPage - 1) * postsPerPage;
        return blogPosts.slice(start, start + postsPerPage);
    }, [currentPage]);

    return (
        <section className="bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col gap-20">

                {/* Header */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="text-center max-w-3xl mx-auto"
                >
                    <h1 className="text-5xl font-semibold tracking-tight">
                        Fashion Journal
                    </h1>
                    <p className="text-gray-500 mt-4">
                        Explore the latest trends and styling inspiration.
                    </p>
                </motion.div>

                {/* Blog Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12"
                >
                    {currentPosts.map((post, index) => (
                        <motion.div key={index} variants={fadeUp}>
                            <BlogCard {...post} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-4 mt-10">

                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        className="px-4 py-2 border rounded-lg text-sm hover:bg-black hover:text-white transition"
                    >
                        Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`px-4 py-2 rounded-lg text-sm transition ${currentPage === i + 1
                                ? "bg-black text-white"
                                : "border hover:bg-gray-100"
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        onClick={() =>
                            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                        }
                        className="px-4 py-2 border rounded-lg text-sm hover:bg-black hover:text-white transition"
                    >
                        Next
                    </button>

                </div>

            </div>
        </section>
    );
}