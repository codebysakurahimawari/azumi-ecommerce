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

export default function PromotionBannerCard({
    image,
    title,
    description,
    buttonText = "Shop Now",
    href = "/shop",
}: PromotionCardProps) {
    return (
        <div className="group  overflow-hidden transition duration-300 flex flex-col gap-5 cursor-pointer">

            {/* Image */}
            <div className="relative w-full h-[55vh] overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                />
            </div>

            {/* Content */}
          <div className="flex flex-col gap-3">
              <div className=" flex flex-col gap-2 ">
                <h3 className="text-h2">
                    {title}
                </h3>

                <p className="text-body">
                    {description}
                </p>
            </div>

             <Link
                    href={href}
                    className="text-xl font-medium hover:text-blue-400 underline transition"
                >
                    {buttonText}
                </Link>

          </div>
             
        </div>
    );
}