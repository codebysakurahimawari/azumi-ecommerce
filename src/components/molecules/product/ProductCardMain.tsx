"use client";

import Image from "next/image";
import { HeartIcon, EyeIcon, ArrowRightLeftIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProductCard({
  id = "",
  image = "/placeholder.png",
  title = "Product Title",
  price = "0.00",
  orignalprice = "",
  discount = "",
  saleEnd = null,
  sizes = [],
  colors = [],
}) {
  const router = useRouter();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  // ✅ Navigate to fixed product detail page
  const handleCardClick = () => {
    router.push("/shop/product-detail");
  };

  // Prevent navigation when clicking inner buttons
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  // Countdown Timer
  useEffect(() => {
    if (!saleEnd) return;

    const interval = setInterval(() => {
      const now = new Date();
      const end = new Date(saleEnd);
      const diff = end.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [saleEnd]);

  return (
    <div
      onClick={handleCardClick}
      className="w-full bg-white overflow-hidden group relative cursor-pointer transition-all duration-300"
    >
      {/* Upper Section */}
      <div className="relative overflow-hidden rounded-md">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="w-full h-auto object-contain transition-transform duration-700 ease-in-out group-hover:scale-105"
        />

        {discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            -{discount}%
          </span>
        )}

        {/* Action Buttons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700">
          {[HeartIcon, ArrowRightLeftIcon, EyeIcon].map((Icon, idx) => (
            <button
              key={idx}
              onClick={stopPropagation}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"
            >
              <Icon className="w-4 h-4 text-gray-700" />
            </button>
          ))}
        </div>

        {/* Add to Cart */}
        <button
          onClick={stopPropagation}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-black font-medium px-4 py-1 w-4/5 rounded-full shadow hover:bg-black hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-700"
        >
          Add to Cart
        </button>

        {/* Countdown */}
        {saleEnd && (
          <div className="absolute bottom-0 w-full justify-center flex gap-2 bg-white/30 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-700">
            <span>{timeLeft.days}d</span>:
            <span>{timeLeft.hours}h</span>:
            <span>{timeLeft.minutes}m</span>:
            <span>{timeLeft.seconds}s</span>
          </div>
        )}
      </div>

      {/* Bottom Section */}
      <div className="p-4 space-y-1">
        <h5 className="text-gray-900 font-medium text-lg truncate">
          {title}
        </h5>
        <div className="flex gap-2 items-center">
          <div className="text-gray-700 font-semibold">${price}</div>
          {orignalprice && (
            <div className="line-through text-gray-400">
              ${orignalprice}
            </div>
          )}
        </div>
      </div>

      {/* Colors */}
      {colors.length > 0 && (
        <div className="flex gap-3 p-2">
          {colors.map((color, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                stopPropagation(e);
                setSelectedColor(color);
              }}
              className={`w-4 h-4 rounded-full ${
                selectedColor === color
                  ? "ring-2 ring-offset-1 ring-black"
                  : "ring-1 ring-offset-2 ring-gray-400"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      )}
    </div>
  );
}