// import { useParams } from 'next/navigation';
import React from 'react';
import books from '../../../../data/booksData.json';
import Image from 'next/image';



const BookDetailsPage = async({params}) => {
   

    const {id}= await params
    const book = books.find((book) => book.id === parseInt(id));
    return (
         <div className="min-h-[80vh] flex items-center justify-center p-6 bg-gray-50/50 dark:bg-slate-950">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-xl overflow-hidden max-w-4xl w-full">
        <div className="relative min-h-[450px] w-full bg-slate-950 flex items-center justify-center p-6 overflow-hidden">
  {book?.image_url && (
    <>
      {/* Blurred background image */}
      <Image
        src={book.image_url}
        alt=""
        fill
        className="object-cover blur-2xl scale-125 opacity-40 pointer-events-none"
      />

      {/* Main Cover image */}
      <div className="relative h-[380px] w-[250px] shadow-2xl rounded overflow-hidden z-10">
        <Image
          src={book.image_url}
          alt={book?.title || "Book"}
          fill
          sizes="(max-width: 700px) 100vw, 50vw"
          className="object-contain"
          priority
        />
      </div>
    </>
  )}
</div>

        <div className="p-8 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">{book?.title}</h2>
            <p className="text-blue-600 dark:text-blue-400 font-medium text-lg">{book?.author}</p>
             <p className="text-xl font-bold text-gray-800 dark:text-slate-200 pt-1">
              Description : {book?.description}
            </p>

            <div className="text-gray-700 dark:text-slate-300 space-y-1.5 pt-2 text-base">
              <p><span className="font-semibold text-gray-900 dark:text-white">Category :</span> {book?.category}</p>
              <p className="font-semibold text-gray-900 dark:text-white">Available Quantity : <span className="text-blue-500">{book?.available_quantity}</span> copies left </p>
            </div>
            <div className="pt-4"> 

            
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-2 rounded-full transition-colors">
              Borrow this book
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
    );
}
            
          

export default BookDetailsPage;