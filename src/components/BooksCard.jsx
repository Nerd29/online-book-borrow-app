"use client"
import React from 'react';
import { Button } from '@heroui/react';
import Image from 'next/image';

const BooksCard = ({ book }) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col group h-full">
      
      {/* Cover Container */}
      <div className="relative h-64 w-full bg-slate-950/80 overflow-hidden flex items-center justify-center p-4">
        {/* Ambient Blurred Background */}
        <Image 
          src={book.image_url} 
          alt="" 
          fill
          priority={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover blur-2xl scale-125 opacity-40 pointer-events-none" 
        />
        
        {/* Main Book Cover */}
        <div className="relative h-full w-full max-w-[160px] shadow-2xl rounded overflow-hidden z-10 transition-transform duration-300 group-hover:scale-105">
          <Image 
            src={book.image_url} 
            alt={book.title} 
            fill
            priority={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain" 
          />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 text-center flex-1 flex flex-col items-center justify-between">
        <div className="w-full mb-4">
          <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
            {book.title}
          </h3>

          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
            {book.author}
          </p>
        </div>

        <Button className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 rounded-full transition-colors">
          Book Details
        </Button>
      </div>
    </div>
  );
};

export default BooksCard;