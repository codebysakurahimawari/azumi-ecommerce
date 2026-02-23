"use client";

import { useState } from "react";
import { Star } from "lucide-react";

export default function ProductDetailsMolecule() {
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState("black");
    const [selectedSize, setSelectedSize] = useState("M");

    const colors = ["black", "red", "blue", "green"];
    const sizes = ["S", "M", "L", "XL"];

    return (
        <div className="max-w-xl space-y-6">

            {/* Header */}
            <div className="space-y-3">
                <div className="space-y-1">
                    <p className="text-xs tracking-widest uppercase text-gray-500">
                        Men
                    </p>
                    <h1 className="text-h2 text-gray-900">
                        Premium Cotton T-Shirt
                    </h1>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                    <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={15} fill="currentColor" />
                        ))}
                    </div>
                    <span className="text-sm text-gray-500">
                        4.9 · 113 Reviews
                    </span>
                </div>

                {/* Pricing */}
                <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-gray-900">
                        $59.00
                    </span>
                    <span className="text-base line-through text-gray-400">
                        $89.00
                    </span>
                    <span className="bg-red-100 text-red-600 text-xs font-medium px-2.5 py-1 rounded-full">
                        34% OFF
                    </span>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-600">
                    This premium cotton t-shirt offers unmatched comfort and durability.
                    Designed for everyday wear with a modern tailored fit.
                </p>
            </div>

            {/* Options */}
            <div className="border-t border-gray-200 pt-6 space-y-5">

                {/* Colors */}
                <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-900">
                        Color:
                        <span className="ml-1 text-gray-500 capitalize">
                            {selectedColor}
                        </span>
                    </p>

                    <div className="flex gap-2">
                        {colors.map((color) => (
                            <button
                                key={color}
                                onClick={() => setSelectedColor(color)}
                                className={`w-8 h-8 rounded-full border-2 transition cursor-pointer
                                    ${selectedColor === color
                                        ? "border-black scale-110"
                                        : "border-gray-300"
                                    }`}
                                style={{ backgroundColor: color }}
                            />
                        ))}
                    </div>
                </div>

                {/* Sizes */}
                <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-900">
                        Size
                    </p>

                    <div className="flex gap-2">
                        {sizes.map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`w-10 h-10 rounded-md border text-sm font-medium transition cursor-pointer
                                    ${selectedSize === size
                                        ? "bg-black text-white border-black"
                                        : "border-gray-300 hover:border-black"
                                    }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Quantity */}
                <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-900">
                        Quantity
                    </p>

                    <div className="inline-flex items-center rounded-md border border-gray-300 overflow-hidden">
                        <button
                            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                            className="w-9 h-9 flex items-center justify-center text-lg font-medium text-gray-700 hover:bg-gray-100 active:scale-95 transition"
                        >
                            −
                        </button>

                        <div className="w-10 h-9 flex items-center justify-center text-sm font-semibold text-gray-900 border-x border-gray-300">
                            {quantity}
                        </div>

                        <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="w-9 h-9 flex items-center justify-center text-lg font-medium text-gray-700 hover:bg-gray-100 active:scale-95 transition"
                        >
                            +
                        </button>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3 pt-3">
                    <button className="flex-1 bg-black text-white py-3 rounded-md text-sm font-medium hover:opacity-90 transition">
                        Add to Cart
                    </button>

                    <button className="flex-1 border border-black py-3 rounded-md text-sm font-medium hover:bg-black hover:text-white transition">
                        Buy Now
                    </button>
                </div>
            </div>

            {/* Meta Section */}
            <div className="border-t border-gray-200 pt-6 space-y-4 text-sm text-gray-600">

                <div className="flex flex-wrap items-center gap-5">
                    <button className="hover:text-black transition">
                        🚚 Delivery & Returns
                    </button>

                    <span>
                        <span className="font-medium text-gray-900">
                            Estimated Delivery:
                        </span>{" "}
                        3–5 Business Days
                    </span>
                </div>

                <div className="space-y-1">
                    <p>
                        <span className="font-medium text-gray-900">SKU:</span> TS-12345
                    </p>
                    <p>
                        <span className="font-medium text-gray-900">Vendor:</span> Fashion Hub
                    </p>
                    <p>
                        <span className="font-medium text-gray-900">Availability:</span> In Stock
                    </p>
                    <p>
                        <span className="font-medium text-gray-900">Categories:</span> Men, T-Shirts, Casual
                    </p>
                </div>
            </div>
        </div>
    );
}