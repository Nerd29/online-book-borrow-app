"use client";
import React from 'react';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const AboutUs = () => {
  // Framer motion variants for letter-by-letter animation
  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  const headingText = "Bridging the Gap Between Readers & ";
  const gradientText = "Knowledge Stack";

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Lottie Animation Container */}
          <div className="relative flex justify-center items-center">
            <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full blur-3xl -z-10" />

            <div className="w-full max-w-md h-80 sm:h-96 flex items-center justify-center p-4">
              <DotLottieReact
                src="https://lottie.host/f2c50e0c-fd4e-42d9-a6bb-5a7812e9b6dd/YQuXtqEt1u.lottie"
                loop
                autoplay
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="space-y-6 text-center lg:text-left">
            
            {/* Badge */}
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              About BookBridge
            </span>

            {/* Letter-by-Letter Animated Heading */}
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
              variants={sentenceVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {headingText.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}

              <span className="inline-block bg-gradient-to-r from-emerald-600 via-green-500 to-teal-400 dark:from-emerald-400 dark:via-emerald-300 dark:to-teal-300 bg-clip-text text-transparent animate-gradient ml-2">
                {gradientText.split("").map((char, index) => (
                  <motion.span key={index} variants={letterVariants}>
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h2>

            {/* Paragraph */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              BookBridge was built to make book sharing, borrowing, and discovering effortless. Whether you`re looking to dive into technical documentation, literary masterpieces, or share your personal collection with fellow avid readers, our platform seamlessly connects you to the right shelf.
            </p>

            {/* Counter Stats Section */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              
              {/* Stat 1 */}
              <div className="space-y-1">
                <h4 className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                  <CountUp end={1200} duration={2.5} separator="," enableScrollSpy scrollSpyOnce />+
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                  Books Listed
                </p>
              </div>

              {/* Stat 2 */}
              <div className="space-y-1">
                <h4 className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                  <CountUp end={850} duration={2.5} enableScrollSpy scrollSpyOnce />+
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                  Active Readers
                </p>
              </div>

              {/* Stat 3 */}
              <div className="space-y-1">
                <h4 className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                  <CountUp end={99} duration={2} enableScrollSpy scrollSpyOnce />%
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                  Borrow Rate
                </p>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-4">
              <Link href="/all-books">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-6 rounded-full shadow-lg shadow-emerald-600/20 transition-all duration-300">
                  Explore Library
                </Button>
              </Link>

              <Link href="/register">
                <Button variant="bordered" className="border-emerald-600 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 font-medium px-8 py-6 rounded-full transition-all duration-300">
                  Join Community
                </Button>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;