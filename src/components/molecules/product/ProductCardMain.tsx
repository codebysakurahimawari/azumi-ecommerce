"use client";

import Image from "next/image";
import { HeartIcon, EyeIcon, ArrowRightLeftIcon } from "lucide-react";
import { useState, useEffect } from "react";

export default function ProductCard({
    image = "/placeholder.png",
    title = "Product Title",
    price = "0.00",
    orignalprice = "",
    discount = "",
    saleEnd = null, // pass a Date string or null
}) {
    const [timeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    // Countdown Timer
    useEffect(() => {
        if (!saleEnd) return;

        const interval = setInterval(() => {
            const now = new Date();
            const end = new Date(saleEnd);
            const diff = end.getTime() - now.getTime();

            if (diff <= 0) {
                clearInterval(interval);
                setTimeLeft({
                    days: "00",
                    hours: "00",
                    minutes: "00",
                    seconds: "00",
                });
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            setTimeLeft({
                days: String(days).padStart(2, "0"),
                hours: String(hours).padStart(2, "0"),
                minutes: String(minutes).padStart(2, "0"),
                seconds: String(seconds).padStart(2, "0"),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [saleEnd]);

    return (
        <div className="w-full bg-white overflow-hidden group relative cursor-pointer ">
            {/* Upper Section */}
            <div className="relative overflow-hidden rounded-md">
                {/* Product Image */}
                <Image
                    src={image}
                    alt={title}
                    width={256}
                    height={256}
                    className="!w-full h-96 object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
                />

                {/* Top Left Badge */}
                {discount && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        -{discount}%
                    </span>
                )}

                {/* Top Right Action Buttons */}
                <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                    {[HeartIcon, ArrowRightLeftIcon, EyeIcon].map((Icon, idx) => (
                        <button
                            key={idx}
                            className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                        >
                            <Icon className="w-4 h-4 text-gray-700 hover:text-white" />
                        </button>
                    ))}
                </div>

                {/* Bottom Add to Cart Pill */}
                <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-black font-medium px-4 py-1 cursor-pointer w-4/5 rounded-full shadow hover:bg-black hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                    Add to Cart
                </button>

                {/* Countdown Timer */}
                {saleEnd && (
                    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex justify-center items-center text-xs font-mono text-red-600 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                        <span>{timeLeft.days}d</span>:
                        <span>{timeLeft.hours}h</span>:
                        <span>{timeLeft.minutes}m</span>:
                        <span>{timeLeft.seconds}s</span>
                    </div>
                )}

                {/* Continuous Scrolling Hot Deal */}
                {discount && (
                    <div className="absolute bottom-0 w-full overflow-hidden opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                        <div className="whitespace-nowrap inline-block  text-xs font-medium text-white bg-black/32 px-2 py-1 ">
                            <span className="animate-marquee whitespace-nowrap inline-block">
                                -- HOT DEAL {discount}% OFF -- HOT DEAL {discount}% OFF --
                            </span>
                        </div>
                    </div>
                )}
            </div>

            {/* Bottom Section: Product Info */}
            <div className="p-4 space-y-1">
                <h5 className="text-gray-900 font-medium text-lg truncate">{title}</h5>
                <div className="flex gap-2 items-center">
                    <div className="text-gray-700 font-semibold">${price}</div>
                    {orignalprice && <div className="line-through text-gray-400">${orignalprice}</div>}
                </div>
            </div>
        </div>
    );
}