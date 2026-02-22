"use client";

import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  image: string;
  date: string;
  title: string;
  excerpt: string;
  href?: string;
}

export default function BlogCard({
  image,
  date,
  title,
  excerpt,
  href = "#",
}: BlogCardProps) {
  return (
    <Link
      href={href}
      className="group block flex flex-col gap-4 overflow-hidden bg-white  transition duration-300"
    >
      {/* Image */}
      <div className="relative w-full h-96 rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className=" flex flex-col gap-3">
        {/* Date */}
        <span className="text-sm text-gray-500">
          {date}
        </span>

        {/* Title */}
        <h3 className="text-h4 leading-snug group-hover:text-black transition line-clamp-1">
          {title}
        </h3>

        {/* Description */}
        <p className="text-body leading-relaxed">
          {excerpt}
        </p>
      </div>
    </Link>
  );
}