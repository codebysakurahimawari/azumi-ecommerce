"use client";

import Image from "next/image";
import Link from "next/link";

interface PromotionCardProps {
  image: string;
  title: string;
  description: string;
  buttonText?: string;
  href?: string;
}

export default function PromotionBannerHoverCard({
  image,
  title,
  description,
  buttonText = "Shop Now",
  href = "/shop",
}: PromotionCardProps) {
  return (
    <div className="group relative w-full h-full overflow-hidden cursor-pointer ">
      
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition duration-700"
      />


      {/* Centered Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <div className="flex flex-col gap-2 max-w-lg text-white">
          <h3 className="text-h2">
            {title}
          </h3>

          <p className="text-body opacity-90">
            {description}
          </p>

          <Link
            href={href}
            className="inline-block mt-2 text-lg font-medium underline hover:text-gray-200 transition"
          >
            {buttonText}
          </Link>
        </div>
      </div>

    </div>
  );
}