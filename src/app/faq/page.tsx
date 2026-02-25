"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How can I place an order?",
            answer:
                "Browse products, add them to your cart and proceed to checkout. Enter your shipping details and complete payment to confirm your order.",
        },
        {
            question: "What payment methods do you accept?",
            answer:
                "We accept Debit/Credit Cards, UPI, Net Banking, Wallets, and Cash on Delivery (COD) in selected locations.",
        },
        {
            question: "How long does delivery take?",
            answer:
                "Standard delivery takes 3-7 working days depending on your location. Express shipping options may be available.",
        },
        {
            question: "Can I return or exchange a product?",
            answer:
                "Yes, returns are accepted within 7 days of delivery if the product is unused and in original packaging.",
        },
        {
            question: "How do I track my order?",
            answer:
                "Once your order is shipped, you will receive a tracking link via email and SMS.",
        },
        {
            question: "Is my payment information secure?",
            answer:
                "Yes, all payments are processed through secure encrypted gateways to ensure maximum safety.",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-white">

            {/* Header Section */}
            <div className="bg-gradient-to-r from-pink-50 to-white py-20 text-center">
                <h1 className="text-4xl font-bold text-gray-900">
                    Frequently Asked Questions
                </h1>
                <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                    Find answers to the most common questions about orders, payments,
                    delivery, returns and more.
                </p>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto px-6 py-16">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border-b border-gray-200 py-6 cursor-pointer"
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-gray-800">
                                {faq.question}
                            </h3>
                            <ChevronDown
                                className={`transition-transform duration-300 ${openIndex === index ? "rotate-180 text-[#fc2779]" : ""
                                    }`}
                            />
                        </div>

                        <div
                            className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 mt-4" : "max-h-0"
                                }`}
                        >
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Support Section */}
            <div className="bg-pink-50 py-16 text-center">
                <h2 className="text-2xl font-semibold text-gray-900">
                    Still Have Questions?
                </h2>
                <p className="text-gray-600 mt-3">
                    Our customer support team is here to help you 24/7.
                </p>
                <button className="mt-6 bg-[#fc2779] text-white px-6 py-3 rounded-xl hover:bg-pink-600 transition">
                    Contact Support
                </button>
            </div>

        </div>
    );
}