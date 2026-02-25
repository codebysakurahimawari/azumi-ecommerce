"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHero({
  title,
  subtitle,
  breadcrumbs = [],
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden py-12 bg-white border-b border-gray-100">
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        
        {/* Shape 1 */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-1/4 w-72 h-72 bg-gray-100 rounded-full blur-3xl opacity-40"
        />

        {/* Shape 2 */}
        <motion.div
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-1/4 w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-30"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center gap-2 text-xs tracking-wide text-gray-400 uppercase mb-6"
          >
            {breadcrumbs.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-gray-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-900">
                    {item.label}
                  </span>
                )}

                {index < breadcrumbs.length - 1 && (
                  <span className="text-gray-300">/</span>
                )}
              </div>
            ))}
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-h1 font-medium text-gray-900 tracking-tight"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-2 text-gray-500 text-base lg:text-lg max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}