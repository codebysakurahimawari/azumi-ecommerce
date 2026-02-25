"use client";

import Image from "next/image";
import { useState } from "react";

interface CartRowProps {
  product: {
    id: number;
    name: string;
    image: string;
    color: string;
    size: string;
    price: number;
    originalPrice: number;
    quantity: number;
  };
  onRemove: (id: number) => void;
}

export default function CartRow({ product, onRemove }: CartRowProps) {
  const [quantity, setQuantity] = useState(product.quantity);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const totalPrice = product.price * quantity;

  return (
    <div className="grid grid-cols-[2fr_1fr_1fr_1fr_auto] items-center gap-6 py-2 border-b border-gray-100 hover:bg-gray-50 transition-colors rounded px-2">
      
      {/* Product */}
      <div className="flex gap-5 items-center">
        <div className="w-24 h-28 relative rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-medium text-gray-800 text-base">
            {product.name}
          </h3>

          <div className="flex gap-3 text-sm text-gray-500">
            <select
              defaultValue={product.color}
              className="bg-gray-50 border border-gray-200 rounded-md px-3 py-1 focus:outline-none focus:ring-1 focus:ring-gray-300"
            >
              <option>Blue</option>
              <option>Black</option>
              <option>Red</option>
            </select>

            <select
              defaultValue={product.size}
              className="bg-gray-50 border border-gray-200 rounded-md px-3 py-1 focus:outline-none focus:ring-1 focus:ring-gray-300"
            >
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="flex flex-col">
        <span className="text-gray-900 font-medium text-base">
          ${product.price.toFixed(2)}
        </span>
        <span className="text-gray-400 line-through text-sm">
          ${product.originalPrice.toFixed(2)}
        </span>
      </div>

      {/* Quantity */}
      <div className="flex justify-center">
        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-full">
          <button
            onClick={decrement}
            className="px-4 py-1 text-gray-600 hover:bg-gray-100 rounded-l-full transition"
          >
            -
          </button>

          <span className="px-4 text-gray-800 text-sm">
            {quantity}
          </span>

          <button
            onClick={increment}
            className="px-4 py-1 text-gray-600 hover:bg-gray-100 rounded-r-full transition"
          >
            +
          </button>
        </div>
      </div>

      {/* Total */}
      <div className="text-gray-900 font-medium text-center">
        ${totalPrice.toFixed(2)}
      </div>

      {/* Remove */}
      <div className="flex justify-end">
        <button
          onClick={() => onRemove(product.id)}
          className="text-gray-400 hover:text-red-500 text-sm transition"
        >
          Remove
        </button>
      </div>
    </div>
  );
}