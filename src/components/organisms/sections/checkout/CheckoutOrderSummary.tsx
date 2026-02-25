"use client";

import { useState } from "react";
import CheckoutCartItem from "@/components/molecules/checkout/CheckoutCartItem";

const products = [
    {
        id: 1,
        name: "V-neck cotton T-shirt",
        image: "/tshirt.jpg",
        variant: "XL / Blue",
        quantity: 1,
        price: 60,
    },
    {
        id: 2,
        name: "Polarized sunglasses",
        image: "/sunglasses.jpg",
        variant: "XL / Blue",
        quantity: 1,
        price: 60,
    },
    {
        id: 3,
        name: "Ramie shirt with pockets",
        image: "/shirt.jpg",
        variant: "XL / Blue",
        quantity: 1,
        price: 60,
    },
];

export default function CheckoutOrderSummary() {
    const [voucher, setVoucher] = useState("");

    const subtotal = products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const discount = 80;
    const shipping = 0;

    const total = subtotal - discount + shipping;

    return (
        <aside className="bg-gray-50 border border-gray-100 rounded-2xl p-6 w-full max-w-sm">

            {/* Title */}
            <h2 className="text-lg font-medium text-gray-900 mb-6">
                Shopping Cart
            </h2>

            {/* Product List */}
            <div className="space-y-6">
                {products.map((item) => (
                    <CheckoutCartItem key={item.id} {...item} />
                ))}
            </div>

            {/* Voucher */}
            <div className="mt-8 border-t border-gray-200 pt-6">
                <p className="text-sm font-medium text-gray-900 mb-3">
                    Add voucher discount
                </p>

                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Enter code"
                        value={voucher}
                        onChange={(e) => setVoucher(e.target.value)}
                        className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-black bg-white"
                    />
                    <button className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-900 transition">
                        Apply Code
                    </button>
                </div>

                <p className="text-xs text-gray-500 mt-3">
                    Discount code is only used for orders with a total value of products over $500.00
                </p>
            </div>

            {/* Summary */}
            <div className="mt-8 border-t border-gray-200 pt-6 space-y-3 text-sm">

                <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                    <span>Discounts</span>
                    <span>- ${discount.toFixed(2)}</span>
                </div>

                <div className="border-t border-gray-200 pt-4 flex justify-between text-base font-semibold text-gray-900">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </div>

        </aside>
    );
}