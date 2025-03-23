/* eslint-disable no-unused-vars */
import { useParams, Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import { categories } from "../utils/Categories";
import { useState } from "react";
import { motion } from "framer-motion";

const BrowseBooks = () => {
  let { category } = useParams();
  // const books = useSelector((state) => state.books); // Redux store se books fetch kar raha hai
  const [search, setSearch] = useState("");
  const [activeCategroy, setActiveCategory] = useState(null);

  // const filteredBooks = books.filter(
  //   (book) =>
  //     book.category.toLowerCase() === category.toLowerCase() &&
  //     (book.title.toLowerCase().includes(search.toLowerCase()) ||
  //       book.author.toLowerCase().includes(search.toLowerCase()))
  // );

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="mx-4 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-6 shadow-[1px_1px_10px] shadow-black rounded-lg">
        <h1 className="text-3xl underline font-bold text-purple-700 mb-4 text-center">
          {category || "All"} Books
        </h1>

        <div className="flex space-x-5 my-4 items-center justify-center">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              className={`font-semibold text-white px-4 py-2 cursor-pointer rounded-md ${
                activeCategroy === item.category
                  ? "bg-purple-600 shadow-[1px_1px_5px] shadow-black"
                  : "bg-rose-400 hover:bg-purple-500"
              }`}
              onClick={() => setActiveCategory(item.category)}
              whileHover={{
                translateY: "-8px",
                scaleX: 1.04,
                transition: { duration: 0.6, type: "spring", bounce: 0.6 },
              }}
            >
              {item.category}
            </motion.div>
          ))}
        </div>

        {/* Search Input */}
        <div className="flex flex-col justify-center items-center">
          <input
            type="text"
            placeholder="Search by title or author..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 border border-gray-800 focus:border-none rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
          <button
            type="submt"
            className="w-fit px-5 py-1 bg-purple-500 hover:bg-rose-500 cursor-pointer hover:scale-110 transition ease-in-out duration-200  hover:text-white rounded-md"
          >
            Search
          </button>
        </div>

        {/* Books List */}
        {/* <ul className="space-y-3">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <li key={book.id} className="bg-purple-100 p-3 rounded-md shadow">
                <Link
                  to={`/book/${book.id}`}
                  className="text-lg font-semibold text-purple-800 hover:underline"
                >
                  {book.title} - <span className="text-gray-600">{book.author}</span>
                </Link>
              </li>
            ))
          ) : (
            <p className="text-gray-500 text-center">No books found.</p>
          )}
        </ul> */}

        {/* Back to Home Button */}
        <div className="flex mt-2 items-center justify-center">
          <Link
            to="/"
            className="px-4 py-2 bg-purple-500 hover:scale-110  text-white rounded-md shadow hover:bg-rose-500 transition duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrowseBooks;
