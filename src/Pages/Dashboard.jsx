import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import BookCard from "../Components/BookCard/BookCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "../Redux/Slice/BookSlice";

const Dashboard = () => {
  const bookState = useSelector((state) => state.book);
  const dispatch = useDispatch();

  async function loadBooks() {
    if (bookState.bookList.length == 0) {
      const response = await dispatch(getAllBooks());
      // console.log(response);
    }
  }

  useEffect(() => {
    loadBooks();
  }, []);
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Library</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {bookState.bookList.length > 0 &&
            bookState.bookList.map((book) => (
              <BookCard
                key={book._id}
                data={book}
              />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
