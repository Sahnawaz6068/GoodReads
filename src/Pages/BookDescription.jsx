import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../Layout/Layout';

const BookDescription = () => {
    const { state } = useLocation();
    const book = state?.data; 

    if (!book) {
        return <Layout><div className="p-10">No book data available.</div></Layout>;
    }

    return (
        <Layout>
            <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
                <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start">
                    
                    <div className="w-full md:w-80 lg:w-96 flex-shrink-0 shadow-2xl rounded-lg overflow-hidden">
                        <img 
                            src={book.imageUrl} 
                            alt={book.title} 
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    <div className="flex-1">
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            {book.title}
                        </h1>
                        
                        <div className="flex items-center space-x-4 mb-6">
                            <span className="text-lg font-medium text-blue-600">
                                {book.author?.name || "Unknown Author"}
                            </span>
                            <span className="text-gray-300">|</span>
                            <span className="text-gray-500">{book.pages} pages</span>
                        </div>

                        <div className="border-t border-b border-gray-100 py-6 mb-6">
                            <h2 className="text-xl font-semibold mb-3">Description</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {book.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <button className="bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition">
                                Want to Read
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default BookDescription;