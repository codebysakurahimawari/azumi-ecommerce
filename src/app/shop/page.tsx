"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import ProductCard from "@/components/molecules/product/ProductCardMain";
import { productsData } from "@/data/productdata";
import StoreFeaturesSection from "@/components/organisms/sections/common/StoreFeaturesSection";
import ShopInstagramSection from "@/components/organisms/sections/common/ShopInstagramSection";

export default function ShopPage() {
  const allProducts = [
    ...productsData.newArrivals,
    ...productsData.bestSeller,
    ...productsData.onSale,
  ];

  const [selectedSize, setSelectedSize] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 8;

  // 🔹 Filtering + Sorting
  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts];

    if (selectedSize !== "all") {
      filtered = filtered.filter((product) =>
        product.size?.includes(selectedSize)
      );
    }

    if (sortOption === "priceLow") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceHigh") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === "nameAsc") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "nameDesc") {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    return filtered;
  }, [selectedSize, sortOption, allProducts]);

  // 🔹 Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <main className="min-h-screen">

      {/* 🔥 HERO SECTION */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-semibold mb-4">
            Our Shop
          </h1>

          {/* Breadcrumb */}
          <div className="flex justify-center items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-black transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-black font-medium">Shop</span>
          </div>
        </div>
      </section>

      {/* 🔥 SHOP CONTENT */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4">

          {/* 🔹 FILTER ROW */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">

            {/* LEFT FILTER */}
            <div className="flex flex-wrap gap-4">

              {/* Size Filter */}
              <select
                className="border border-gray-300 px-4 py-2 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black"
                value={selectedSize}
                onChange={(e) => {
                  setSelectedSize(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="all">All Sizes</option>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">XL</option>
              </select>

            </div>

            {/* RIGHT SORT + COUNT */}
            <div className="flex items-center gap-4">

              <span className="text-sm text-gray-500">
                Showing {paginatedProducts.length} of {filteredProducts.length}
              </span>

              <select
                className="border border-gray-300 px-4 py-2 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black"
                value={sortOption}
                onChange={(e) => {
                  setSortOption(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="default">Sort by</option>
                <option value="priceLow">Price: Low → High</option>
                <option value="priceHigh">Price: High → Low</option>
                <option value="nameAsc">Name: A → Z</option>
                <option value="nameDesc">Name: Z → A</option>
              </select>

            </div>
          </div>

          {/* 🔹 PRODUCTS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {paginatedProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          {/* 🔹 PAGINATION */}
          <div className="flex justify-center mt-14 gap-3">

            {/* Prev Button */}
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm disabled:opacity-40 hover:bg-gray-100 transition"
            >
              Prev
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 border rounded-md text-sm transition ${currentPage === i + 1
                    ? "bg-black text-white border-black"
                    : "border-gray-300 hover:bg-gray-100"
                  }`}
              >
                {i + 1}
              </button>
            ))}

            {/* Next Button */}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm disabled:opacity-40 hover:bg-gray-100 transition"
            >
              Next
            </button>

          </div>

        </div>
      </section>

      <StoreFeaturesSection />
      <ShopInstagramSection />
    </main>
  );
}