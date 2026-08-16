"use client";
import BooksPage from '@/components/Books';
import React from 'react';

const AllBooksPage = () => {
    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
            <BooksPage />
        </main>
    );
};

export default AllBooksPage;