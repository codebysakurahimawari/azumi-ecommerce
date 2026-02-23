"use client";
import { useState } from "react";

type Props = {
    description: string;

    composition: string;
    designed: string;
    origin: string;
    manufacture: string;

    shippingSupport: string;
    importDuties: string;
    estimatedDelivery: string;

    returnPolicies: string;
};

const tabs = ["Description", "Shipping & Returns", "Return Policies"];

export default function ProductInfoTabsOrganism({
    description,
    composition,
    designed,
    origin,
    manufacture,
    shippingSupport,
    importDuties,
    estimatedDelivery,
    returnPolicies,
}: Props) {
    const [activeTab, setActiveTab] = useState("Description");

    return (
        <div className="mt-16 flex flex-col gap-5 items-center max-w-7xl mx-auto w-full">
            {/* Tabs Header */}
            <div className="flex gap-8 ">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-2 text-h3 cursor-pointer font-medium transition ${activeTab === tab
                            ? "border-b-2 border-black text-black"
                            : "text-gray-500 hover:text-black"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tabs Content */}
            <div className="py-10 border border-gray-200  rounded-xl p-8 w-full">
                {/* ================= DESCRIPTION ================= */}
                {activeTab === "Description" && (
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* LEFT */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">
                                Stretch strap top
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {description}
                            </p>
                        </div>

                        {/* RIGHT */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold">
                                COMPOSITION, ORIGIN AND CARE GUIDELINES
                            </h3>

                            <div className="space-y-4 text-sm text-gray-600">
                                <div>
                                    <p className="font-medium text-black">Composition</p>
                                    <p>{composition}</p>
                                </div>

                                <div>
                                    <p className="font-medium text-black">Designed in</p>
                                    <p>{designed}</p>
                                </div>

                                <div>
                                    <p className="font-medium text-black">Origin</p>
                                    <p>{origin}</p>
                                </div>

                                <div>
                                    <p className="font-medium text-black">Manufacture</p>
                                    <p>{manufacture}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ================= SHIPPING & RETURNS ================= */}
                {activeTab === "Shipping & Returns" && (
                    <div className="space-y-8 max-w-3xl">
                        <div>
                            <h3 className="font-semibold mb-2">
                                We've got your back
                            </h3>
                            <p className="text-gray-600">{shippingSupport}</p>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">
                                Import duties information
                            </h3>
                            <p className="text-gray-600">{importDuties}</p>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">
                                Estimated delivery time
                            </h3>
                            <p className="text-gray-600">{estimatedDelivery}</p>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">
                                Need more information?
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="#" className="underline hover:text-black">
                                        Orders & delivery
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="underline hover:text-black">
                                        Returns & refunds
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="underline hover:text-black">
                                        Duties & taxes
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}

                {/* ================= RETURN POLICIES ================= */}
                {activeTab === "Return Policies" && (
                    <div className="max-w-3xl">
                        <h3 className="font-semibold mb-4">
                            Return Policies
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            {returnPolicies}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}