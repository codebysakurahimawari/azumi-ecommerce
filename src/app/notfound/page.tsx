"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white px-6">

            {/* Soft Gradient Background Blobs */}
            <div className="absolute w-[500px] h-[500px] bg-purple-300 rounded-full blur-[150px] opacity-30 top-[-120px] left-[-120px] animate-pulse" />
            <div className="absolute w-[400px] h-[400px] bg-pink-300 rounded-full blur-[150px] opacity-30 bottom-[-120px] right-[-120px] animate-pulse" />

            {/* Glass Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 backdrop-blur-xl bg-white/70 border border-gray-200 rounded-3xl p-12 text-center max-w-xl shadow-xl"
            >
                {/* Gradient 404 */}
                <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    404
                </h1>

                <h2 className="text-2xl md:text-3xl font-semibold mt-6 text-gray-800">
                    Oops! Page Not Found
                </h2>

                <p className="text-gray-600 mt-4 leading-relaxed">
                    The page you’re looking for doesn’t exist or has been moved.
                    Let’s take you back to something beautiful.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

                    <Link
                        href="/"
                        className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:scale-105 transition-all duration-300 shadow-md"
                    >
                        Back to Home
                    </Link>

                    <button
                        onClick={() => router.back()}
                        className="px-8 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-black hover:text-white transition-all duration-300"
                    >
                        Go Back
                    </button>

                </div>
            </motion.div>
        </section>
    );
}