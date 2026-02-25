"use client";

import { useState } from "react";
import CartRow from "./CartRow";

const initialProducts = [
  {
    id: 1,
    name: "V-neck cotton T-shirt",
    image: "/tshirt.jpg",
    color: "Blue",
    size: "XL",
    price: 80.0,
    originalPrice: 129.0,
    quantity: 1,
  },
  {
    id: 2,
    name: "V-neck cotton T-shirt",
    image: "/tshirt.jpg",
    color: "Blue",
    size: "XL",
    price: 80.0,
    originalPrice: 129.0,
    quantity: 1,
  },
  {
    id: 3,
    name: "V-neck cotton T-shirt",
    image: "/tshirt.jpg",
    color: "Blue",
    size: "XL",
    price: 80.0,
    originalPrice: 129.0,
    quantity: 1,
  },
];

export default function CartTable() {
  const [products, setProducts] = useState(initialProducts);

  const removeProduct = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-gray-200 ">

      {/* Header */}
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-6 px-6 py-4 border-b border-gray-100 text-xs font-medium text-gray-400 uppercase tracking-wider">
        <div>Product</div>
        <div>Price</div>
        <div className="text-center">Quantity</div>
        <div className="text-center">Total</div>
        <div className="text-right">Action</div>
      </div>

      {/* Rows */}
      <div className="px-2">
        {products.length > 0 ? (
          products.map((product) => (
            <CartRow
              key={product.id}
              product={product}
              onRemove={removeProduct}
            />
          ))
        ) : (
          <div className="py-16 text-center text-gray-400 text-sm">
            Your cart is empty.
          </div>
        )}
      </div>
    </div>
  );
}