"use client";
import React, { useState, useMemo } from 'react';
import books from "../../data/booksData.json";
import BooksCard from "./BooksCard";

const categories = [
  { id: 'All', label: 'All Categories' },
  { id: 'Story', label: 'Story' },
  { id: 'Tech', label: 'Tech' },
  { id: 'Science', label: 'Science' },
 
];

const BooksPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBooks = useMemo(() => {
    if (selectedCategory === 'All') return books;
    return books.filter(
      (book) => book.category?.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-slate-900 dark:text-white" >
        Available Books
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Category Sidebar */}
        <aside className="w-full lg:w-64 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-3 shrink-0">
          <h3 className="font-bold text-lg text-slate-900 dark:text-white pb-2 border-b border-slate-200 dark:border-slate-800">
            Categories
          </h3>
          <div className="space-y-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-600 text-white font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-emerald-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </aside>

        {/* Books Grid */}
        <div className="flex-1 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <BooksCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksPage;