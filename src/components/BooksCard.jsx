"use client";
import React from 'react';
import { Button } from '@heroui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const BooksCard = ({ book }) => {
  const router = useRouter();

  // if (!book) return null;

  

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-800 flex flex-col group h-full">
      
      {/* Cover Container */}
      <div className="relative h-64 w-full bg-slate-100 dark:bg-slate-950 overflow-hidden">
        {book.image_url ? (
          <Image 
            src={book.image_url} 
            alt={book.title || "Book cover"} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105" 
          />
        ) : (
          <div className="flex items-center justify-center h-full text-4xl">📖</div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 text-center flex-1 flex flex-col items-center justify-between">
        <div className="w-full mb-4">
          <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-1">
            {book.title}
          </h3>

          <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1">
            {book.author}
          </p>
        </div>
        <Link href={`/bookDetails/${book.id}`}>
        <Button 
        
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium px-6 rounded-full transition-colors"
        >
          View Details
        </Button>
        </Link>
        
      </div>
    </div>
  );
};

export default BooksCard;