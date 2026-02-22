"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";

interface ShopInstagramCardProps {
    image: string;
    href?: string;
    alt?: string;
}

export default function ShopInstagramCard({
    image,
    href = "#",
    alt = "Instagram Post",
}: ShopInstagramCardProps) {
    const CardContent = (
        <div className="group relative aspect-square w-full overflow-hidden rounded-xl cursor-pointer">

            {/* Image */}
            <Image
                src={image}
                alt={alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-center justify-center">

                {/* Eye Icon */}
                <Eye
                    size={32}
                    className="text-white opacity-0 group-hover:opacity-100 transition duration-300"
                />

            </div>
        </div>
    );

    return href ? <Link href={href}>{CardContent}</Link> : CardContent;
}