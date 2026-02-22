"use client";

import { motion } from "framer-motion";
import ShopInstagramCard from "@/components/molecules/cards/ShopInstagramCard";
import { staggerContainer, fadeUp } from "@/lib/animations";

export default function ShopInstagramSection() {
  const instagramPosts = [
    { image: "/demo-images/cls-circle1.jpg", href: "/product/1" },
    { image: "/demo-images/cls-circle2.jpg", href: "/product/2" },
    { image: "/demo-images/cls-circle3.jpg", href: "/product/3" },
    { image: "/demo-images/cls-circle4.jpg", href: "/product/4" },
    { image: "/demo-images/cls-circle5.jpg", href: "/product/5" },
  ];

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10">

        {/* Header (Animated) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-2xl mx-auto flex flex-col gap-3"
        >
          <h2 className="text-h2 font-semibold">
            Shop Instagram
          </h2>
          <p className="text-body text-gray-600">
            Elevate your wardrobe with fresh finds today!
          </p>
        </motion.div>

        {/* Grid (Staggered Animation) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
        >
          {instagramPosts.map((post, index) => (
            <motion.div key={index} variants={fadeUp}>
              <ShopInstagramCard
                image={post.image}
                href={post.href}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}