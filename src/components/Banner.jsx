"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
  "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[70vh] overflow-hidden text-white">
      
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${images[current]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Find Your Next Read
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Discover thousands of books and borrow your favorite titles instantly.
          </p>

          <Link href="/all-books">
            <button className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-semibold transition">
              Browse Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;