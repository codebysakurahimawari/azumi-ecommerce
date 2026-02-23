"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
    images: string[];
}

export default function ProductImagesMolecule({ images }: Props) {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="flex flex-col gap-3">
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(img)}
                        className={`relative w-20 h-20 rounded-lg overflow-hidden border 
              ${selectedImage === img ? "border-gray-400" : "border-gray-200"}`}
                    >
                        <Image
                            src={img}
                            alt="thumbnail"
                            fill
                            className="object-cover cursor-pointer"
                        />
                    </button>
                ))}
            </div>

            {/* Main Image */}
            <div className="relative flex-1 h-[500px] rounded-xl overflow-hidden">
                <Image
                    src={selectedImage}
                    alt="product image"
                    fill
                    priority
                    className="object-cover"
                />
            </div>
        </div>
    );
}