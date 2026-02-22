"use client";

import { Truck, RefreshCcw, Headphones, Tag } from "lucide-react";

export default function StoreFeaturesSection() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6 xl:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <FeatureCard
            icon={<RefreshCcw size={28} />}
            title="14-Day Returns"
            description="Risk-free shopping with easy returns."
          />

          <FeatureCard
            icon={<Truck size={28} />}
            title="Free Shipping"
            description="No extra costs, just the price you see."
          />

          <FeatureCard
            icon={<Headphones size={28} />}
            title="24/7 Support"
            description="24/7 support, always here just for you."
          />

          <FeatureCard
            icon={<Tag size={28} />}
            title="Member Discounts"
            description="Special prices for our loyal customers."
          />
        </div>
      </div>
    </section>
  );
}

/* =========================
   Molecule: FeatureCard
========================= */

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center gap-4 group">
      
      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-black group-hover:text-white transition duration-300">
        {icon}
      </div>

      {/* Content */}
      <div className="flex flex-col ">
        <h3 className=" text-h4">
          {title}
        </h3>
        <p className="text-body">
          {description}
        </p>
      </div>

    </div>
  );
}