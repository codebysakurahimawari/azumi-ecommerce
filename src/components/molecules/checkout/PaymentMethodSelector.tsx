"use client";

import { useState } from "react";
import CreditCardForm from "././CreditCardForm";

export default function PaymentMethodSelector() {
    const [method, setMethod] = useState("card");

    return (
        <div className="space-y-6">
            <h2 className="text-lg font-medium text-gray-900">
                Choose payment Option:
            </h2>

            {/* Credit Card */}
            <label className="flex items-start gap-3 cursor-pointer">
                <input
                    type="radio"
                    checked={method === "card"}
                    onChange={() => setMethod("card")}
                    className="mt-1 accent-black"
                />
                <div>
                    <p className="font-medium text-gray-900">Credit Card</p>
                    <p className="text-sm text-gray-500">
                        Make your payment directly into our bank account. Your order will not be shipped until the funds have cleared.
                    </p>
                </div>
            </label>

            {method === "card" && <CreditCardForm />}

            {/* Cash */}
            <label className="flex items-center gap-3 cursor-pointer">
                <input
                    type="radio"
                    checked={method === "cash"}
                    onChange={() => setMethod("cash")}
                    className="accent-black"
                />
                <span>Cash on delivery</span>
            </label>

            {/* Apple Pay */}
            <label className="flex items-center gap-3 cursor-pointer">
                <input
                    type="radio"
                    checked={method === "apple"}
                    onChange={() => setMethod("apple")}
                    className="accent-black"
                />
                <span>Apple Pay</span>
            </label>

            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition mt-6">
                Payment
            </button>
        </div>
    );
}