import { useState } from "react";
// import axios from "axios";
import { categories } from "../utils/Categories";
import Loader from "../partials/Loader";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [loading, setLoading] = useState(false);
  // const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const API = import.meta.env.VITE_API_URL;
  const KEY = import.meta.env.VITE_API_KEY;

  const fetchBooks = (category) => {
    setLoading(true);
    // axios
    //   .get(API + `${query}` + KEY)
    //   .then((res) => {
    //     // setBooks(res.data.items);
    //     console.log(res.data.items);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setLoading(false);
    //   });
    navigate(`/books/${category}`);
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className="p-6">
        <h3 className="text-2xl underline font-bold text-gray-900 mb-4">
          Book Categories
        </h3>
        <div className="grid mx-10 max-md:grid-cols-2 grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-1 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group flex items-center justify-center hover:scale-105 shadow-[2px_2px_10px] z-10 shadow-gray-950 rounded-lg text-center cursor-pointer transition-all duration-300 relative overflow-hidden h-48 bg-gradient-to-br from-rose-200 via-rose-400 to-rose-600"
              onClick={() => fetchBooks(category.category)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:scale-110 group-hover:opacity-30 "
                style={{
                  backgroundImage: `url(${category.imgUrl})`,
                }}
              ></div>
              <p className="text-xl font-bold text-white relative z-10 duration-200">
                {category.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
