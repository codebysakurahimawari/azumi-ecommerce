"use client";

import Image from "next/image";
import { Star } from "lucide-react";

interface CustomerTestimonialCardProps {
  testimonialImage: string;
  rating?: number;
  comment: string;
  userName: string;
  userAvatar: string;
  productImage: string;
  productName: string;
  productPrice: string;
}

export default function CustomerTestimonialCard({
  testimonialImage,
  rating = 5,
  comment,
  userName,
  userAvatar,
  productImage,
  productName,
  productPrice,
}: CustomerTestimonialCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8 bg-white  shadow-sm  transition">

      {/* Left Image */}
      <div className="relative w-full md:w-[250px] h-full  overflow-hidden">
        <Image
          src={testimonialImage}
          alt="Testimonial"
          fill
          className="object-cover hover:scale-105 transition transition-all duration-500"
        />
      </div>

      {/* Right Content */}
      <div className="flex flex-col justify-between flex-1 py-4 pr-4">

        {/* Upper Part */}
        <div className="flex flex-col gap-4">

          {/* Ratings */}
          <div className="flex items-center gap-1">
            {Array.from({ length: rating }).map((_, i) => (
              <Star
                key={i}
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          {/* Comment */}
          <p className="text-gray-700 leading-relaxed">
            {comment}
          </p>

          {/* User Info */}
          <div className="flex items-center gap-3 mt-2">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={userAvatar}
                alt={userName}
                fill
                className="object-cover"
              />
            </div>
            <span className="font-medium">{userName}</span>
          </div>
        </div>

        {/* Lower Part - Product Info */}
        <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-200">

          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={productImage}
              alt={productName}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-medium">{productName}</span>
            <span className="text-gray-600">{productPrice}</span>
          </div>

        </div>

      </div>
    </div>
  );
}