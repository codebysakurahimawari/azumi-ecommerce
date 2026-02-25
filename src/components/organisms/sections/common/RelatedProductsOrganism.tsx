"use client";

import { motion } from "framer-motion";
import ProductCard from "@/components/molecules/product/ProductCardMain";
import { productsData } from "@/data/productdata";
import { staggerContainer, fadeUp } from "@/lib/animations";

export default function RelatedProductsOrganism() {
  // Choose which category to show as related
  const relatedProducts = productsData.newArrivals; 
  // 👉 Change to bestSeller or onSale if needed

  if (!relatedProducts?.length) return null;

  return (
    <section className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 xl:px-0">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-h2 font-semibold tracking-tight">
            Related Products
          </h2>
        </div>

        {/* Animated Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {relatedProducts.slice(0, 8).map((product, index) => (
            <motion.div key={index} variants={fadeUp}>
              <ProductCard {...product} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        {relatedProducts.length > 8 && (
          <div className="flex justify-center mt-14">
            <button className="px-8 py-3 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
              View All
            </button>
          </div>
        )}
      </div>
    </section>
  );
}