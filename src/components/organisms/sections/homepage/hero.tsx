"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import PillButton from "@/components/atoms/buttons/primary-section-button";

/* ============================= */
/* Types */
/* ============================= */

type Banner = {
    title: string;
    subtitle: string;
    imageUrl: string;
    splitAfter: number;
};

/* ============================= */
/* Data */
/* ============================= */

const banners: Banner[] = [
    {
        title: "Discover Our Latest Collection",
        subtitle: "Upgrade your style with our premium products",
        imageUrl: "/demo-images/slider-women1.jpg",
        splitAfter: 2,
    },
    {
        title: "Exclusive Deals This Week",
        subtitle: "Grab your favorites before they're gone",
        imageUrl: "/demo-images/slider-women2.jpg",
        splitAfter: 1,
    },
];

/* ============================= */
/* Helper */
/* ============================= */

function breakAfterWords(text: string, count: number): React.ReactNode {
    const words = text.split(" ");

    if (words.length <= count) return text;

    return (
        <>
            {words.slice(0, count).join(" ")}
            <br />
            {words.slice(count).join(" ")}
        </>
    );
}

/* ============================= */
/* Component */
/* ============================= */

export default function HeroSection() {
    const [current, setCurrent] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % banners.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[85vh] overflow-hidden">
            {banners.map((banner, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                >
                    <Image
                        src={banner.imageUrl}
                        alt={banner.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />

                    {/* Text Overlay */}
                    <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 z-20 flex flex-col gap-3 max-w-xl">
                        <p className="text-white text-base md:text-xl">
                            {banner.subtitle}
                        </p>

                        <h1 className="text-white text-3xl md:text-5xl 2xl:text-7xl font-medium leading-tight">
                            {breakAfterWords(
                                banner.title,
                                banner.splitAfter
                            )}
                        </h1>

                        <PillButton
                            text="Explore Collection"
                            variant="red"
                        />
                    </div>
                </div>
            ))}

            {/* Pagination Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
                {banners.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-5 h-5 rounded-full flex items-center justify-center border-2 transition ${
                            current === index
                                ? "border-white"
                                : "border-white/50"
                        }`}
                    >
                        <span
                            className={`w-2 h-2 rounded-full ${
                                current === index
                                    ? "bg-white"
                                    : "bg-white/50"
                            }`}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}