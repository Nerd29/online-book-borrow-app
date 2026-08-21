"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import books from '../../../data/booksData.json';
import { Button } from '@heroui/react';
import { motion } from 'framer-motion';

// Import your auth context hook here (e.g., useAuth from '@/context/AuthContext')
// import { useAuth } from '@/context/AuthContext';

const FeaturedBooks = () => {
  const router = useRouter();
  
  // Replace this placeholder with your actual auth state (e.g., const { user } = useAuth();)
  const user = null; 

  const handleExploreClick = () => {
    if (user) {
      router.push('/all-books');
    } else {
      // Redirects to login page (and optionally saves target page to redirect after login)
      router.push('/login?redirectTo=/all-books');
    }
  };

  // Take the top 4 books directly from the imported JSON file
  const featuredBooks = books.slice(0, 4);

  // Parent container variant to handle staggered children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  // Individual book card animation variant
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              Curated Selection
            </span>
            <h2 className="text-3xl font-extrabold mt-1">
              Featured Books
            </h2>
          </div>
          
          {/* Handled via onClick handler checking authentication */}
          <Button 
            onClick={handleExploreClick}
            variant="light" 
            className="text-emerald-600 dark:text-emerald-400 font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/50"
          >
            Explore All Books ➔
          </Button>
        </div>

        {/* Animated Book Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {featuredBooks.map((book) => (
            <motion.div
              key={book._id || book.id}
              variants={cardVariants}
              className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300"
            >
              <div>
                {/* Cover Image */}
                <div className="relative w-full h-52 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 mb-4 flex items-center justify-center">
                  {book.coverImage || book.image_url ? (
                    <img
                      src={book.coverImage || book.image_url}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <span className="text-4xl">📖</span>
                  )}
                  <span className="absolute top-2 right-2 px-2.5 py-1 text-[10px] font-bold uppercase rounded-md bg-emerald-500 text-white shadow-sm">
                    {book.category || 'Featured'}
                  </span>
                </div>

                {/* Details */}
                <h3 className="font-bold text-lg line-clamp-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {book.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  By {book.author || 'Unknown Author'}
                </p>
              </div>

              {/* View Details Button */}
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800">
                <Link href={`/bookDetails/${book._id || book.id}`}>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl shadow-md shadow-emerald-600/10">
                    View Details
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedBooks;