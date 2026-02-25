"use client";

import { useState } from "react";

interface OrderSummaryProps {
    subtotal: number;
    discount: number;
}

export default function OrderSummary({
    subtotal,
    discount,
}: OrderSummaryProps) {
    const [shipping, setShipping] = useState<"free" | "local" | "flat">("free");
    const [agreed, setAgreed] = useState(false);

    const shippingCost =
        shipping === "free" ? 0 : shipping === "local" ? 35 : 35;

    const total = subtotal - discount + shippingCost;

    return (
        <div className="bg-white border border-gray-200 rounded-2xl  p-6 w-full max-w-md">

            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Order Summary
            </h2>

            {/* Subtotal */}
            <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Subtotal</span>
                <span>-${subtotal.toFixed(2)}</span>
            </div>

            {/* Discount */}
            <div className="flex justify-between text-sm text-gray-600 mb-4">
                <span>Discounts</span>
                <span>-${discount.toFixed(2)}</span>
            </div>

            {/* Shipping */}
            <div className="mb-4">
                <p className="text-sm font-medium text-gray-800 mb-2">
                    Shipping
                </p>

                <div className="space-y-2 text-sm text-gray-600">

                    <label className="flex justify-between items-center cursor-pointer">
                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                checked={shipping === "free"}
                                onChange={() => setShipping("free")}
                                className="accent-black"
                            />
                            <span>Free Shipping</span>
                        </div>
                        <span>$0.00</span>
                    </label>

                    <label className="flex justify-between items-center cursor-pointer">
                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                checked={shipping === "local"}
                                onChange={() => setShipping("local")}
                                className="accent-black"
                            />
                            <span>Local</span>
                        </div>
                        <span>$35.00</span>
                    </label>

                    <label className="flex justify-between items-center cursor-pointer">
                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                checked={shipping === "flat"}
                                onChange={() => setShipping("flat")}
                                className="accent-black"
                            />
                            <span>Flat Rate</span>
                        </div>
                        <span>$35.00</span>
                    </label>

                </div>
            </div>

            <div className="border-t border-gray-100 my-4" />

            {/* Total */}
            <div className="flex justify-between items-center mb-6">
                <span className="text-base font-medium text-gray-900">
                    Total
                </span>
                <span className="text-lg font-semibold text-gray-900">
                    ${total.toFixed(2)}
                </span>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2 text-sm text-gray-600 mb-6 cursor-pointer">
                <input
                    type="checkbox"
                    checked={agreed}
                    onChange={() => setAgreed(!agreed)}
                    className="mt-1 accent-black"
                />
                <span>I agree with the terms and conditions</span>
            </label>

            {/* Checkout Button */}
            <button
                disabled={!agreed}
                className={`w-full py-3 rounded-full text-sm font-medium transition 
        ${agreed
                        ? "bg-black text-white hover:bg-gray-900"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
            >
                Process To Checkout
            </button>

            {/* Continue Shopping */}
            <button className="w-full mt-4 text-sm text-gray-500 hover:text-black transition">
                Or continue shopping
            </button>
        </div>
    );
}