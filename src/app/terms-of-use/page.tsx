"use client";

import { useState } from "react";
import {
    FileText,
    User,
    ShoppingCart,
    CreditCard,
    Truck,
    RefreshCcw,
    Shield,
    AlertTriangle,
} from "lucide-react";

const tabs = [
    {
        id: "terms",
        label: "Terms",
        icon: FileText,
        content: (
            <>
                <h2 className="text-2xl font-semibold mb-4">
                    Acceptance of Terms
                </h2>
                <p className="mb-4">
                    By accessing or using AZUMI, you agree to comply with these Terms of Use.
                    If you do not agree, please discontinue using our platform immediately.
                </p>
                <p>
                    These terms apply to all visitors, users, and customers of the website.
                </p>
            </>
        ),
    },
    {
        id: "accounts",
        label: "Accounts",
        icon: User,
        content: (
            <>
                <h2 className="text-2xl font-semibold mb-4">
                    Eligibility & Account Responsibility
                </h2>
                <p className="mb-4">
                    You must be at least 18 years old to create an account.
                    You are responsible for maintaining the confidentiality of your login credentials.
                </p>
                <p>
                    AZUMI reserves the right to suspend accounts involved in fraudulent activity.
                </p>
            </>
        ),
    },
    {
        id: "orders",
        label: "Orders",
        icon: ShoppingCart,
        content: (
            <>
                <h2 className="text-2xl font-semibold mb-4">
                    Products & Orders
                </h2>
                <p className="mb-4">
                    All products are subject to availability. We reserve the right to
                    cancel or refuse orders due to pricing errors or stock issues.
                </p>
                <p>
                    Once an order is confirmed, you will receive an email confirmation.
                </p>
            </>
        ),
    },
    {
        id: "payments",
        label: "Payments",
        icon: CreditCard,
        content: (
            <>
                <h2 className="text-2xl font-semibold mb-4">
                    Pricing & Payments
                </h2>
                <p className="mb-4">
                    Prices are listed in INR and may change without notice.
                </p>
                <p>
                    Payments are processed securely via third-party gateways.
                    AZUMI does not store complete payment details.
                </p>
            </>
        ),
    },
    {
        id: "shipping",
        label: "Shipping",
        icon: Truck,
        content: (
            <>
                <h2 className="text-2xl font-semibold mb-4">
                    Shipping & Delivery
                </h2>
                <p className="mb-4">
                    Delivery timelines are estimates and may vary depending on location.
                </p>
                <p>
                    AZUMI is not liable for courier delays beyond our control.
                </p>
            </>
        ),
    },
    {
        id: "returns",
        label: "Returns",
        icon: RefreshCcw,
        content: (
            <>
                <h2 className="text-2xl font-semibold mb-4">
                    Returns & Refunds
                </h2>
                <p className="mb-4">
                    Returns must comply with our Return Policy.
                    Items must be unused and in original packaging.
                </p>
                <p>
                    Refund processing times may vary depending on your payment method.
                </p>
            </>
        ),
    },
    {
        id: "liability",
        label: "Liability",
        icon: Shield,
        content: (
            <>
                <h2 className="text-2xl font-semibold mb-4">
                    Limitation of Liability
                </h2>
                <p>
                    AZUMI shall not be liable for indirect, incidental,
                    or consequential damages arising from the use of our services.
                </p>
            </>
        ),
    },
    {
        id: "risks",
        label: "Risks",
        icon: AlertTriangle,
        content: (
            <>
                <h2 className="text-2xl font-semibold mb-4">
                    Risks & Security
                </h2>
                <p>
                    Online transactions involve inherent risks.
                    While we implement security measures, we cannot guarantee absolute protection.
                </p>
            </>
        ),
    },
];

export default function TermsPage() {
    const [activeTab, setActiveTab] = useState("terms");

    const activeContent = tabs.find((tab) => tab.id === activeTab);

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-10">

                <h1 className="text-4xl font-bold mb-4 text-center">
                    Terms of Use
                </h1>

                <p className="text-center text-gray-500 mb-10">
                    Last Updated: February 2026
                </p>

                {/* Tabs */}
                <div className="flex flex-wrap gap-3 justify-center mb-10">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all
                ${activeTab === tab.id
                                        ? "bg-black text-white"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                <Icon size={16} />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* Tab Content */}
                <div className="border-t pt-8 text-gray-700 leading-relaxed animate-fadeIn">
                    {activeContent?.content}
                </div>

                <div className="mt-16 border-t pt-6 text-sm text-gray-500 text-center">
                    © 2026 AZUMI. All Rights Reserved.
                </div>
            </div>

            <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
}