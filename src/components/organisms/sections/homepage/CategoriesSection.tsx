"use client";

import Link from "next/link";
import CategoryCard from "@/components/molecules/cards/circular-categories-card";

interface Category {
  title: string;
  imageUrl: string;
  productCount: number;
}

interface CategoriesSectionProps {
  categories: Category[];
  viewAllHref?: string;
}

export default function CategoriesSection({
  categories,
  viewAllHref = "/shop",
}: CategoriesSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-0 pt-12 lg:pt-16 xl:pt-20 2xl:pt-24 flex flex-col gap-12">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-h2 dark:text-white">
          Categories you might like
        </h2>
        <Link
          href={viewAllHref}
          className="px-4 py-2 text-sm md:text-base font-medium hover:text-red-800 transition"
        >
          View Collection
        </Link>
      </div>

      {/* Grid Layout - Always 5 Columns */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {categories.slice(0, 5).map((cat, index) => (
          <div key={`${cat.title}-${cat.imageUrl}-${index}`}>
            <CategoryCard
              imageUrl={cat.imageUrl}
              title={cat.title}
              productCount={cat.productCount}
              href={`/category/${cat.title.toLowerCase()}`}
            />
          </div>
        ))}
      </div>

    </section>
  );
}