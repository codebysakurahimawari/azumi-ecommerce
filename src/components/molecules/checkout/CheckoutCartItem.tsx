"use client";

import Image from "next/image";

interface CheckoutCartItemProps {
  name: string;
  image: string;
  variant: string;
  quantity: number;
  price: number;
}

export default function CheckoutCartItem({
  name,
  image,
  variant,
  quantity,
  price,
}: CheckoutCartItemProps) {
  return (
    <div className="flex gap-4 items-center">
      <div className="relative w-16 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <div className="flex-1">
        <h4 className="text-sm font-medium text-gray-900">
          {name}
        </h4>
        <p className="text-xs text-gray-500 mt-1">
          {variant}
        </p>
      </div>

      <div className="text-sm text-gray-600">
        {quantity} ×
      </div>

      <div className="text-sm font-medium text-gray-900">
        ${price.toFixed(2)}
      </div>
    </div>
  );
}