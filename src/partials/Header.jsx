/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { ImBooks } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { RiContactsBookUploadFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <motion.div
        className="sticky mb-2 font-serif top-0 z-12 bg-gradient-to-br from-gray-200 from-10% via-gray-300 to-gray-400 to-90% shadow-sm shadow-black"
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.6 }}
      >
        <div className="px-6 py-3 flex justify-between max-sm:flex-col max-sm:py-0.5 items-center">
          <Link
            to={"/"}
            className="text-2xl font-bold text-purple-700 hover:-translate-y-1.5 hover:text-gray-700 transition duration-200"
          >
            E-Library
          </Link>

          <div className="flex max-sm:my-0.5 justify-center items-center space-x-6">
            <Link
              to={"/"}
              className="hover:text-slate-700 text-rose-500 hover:-translate-y-1.5 font-bold text-lg transition duration-150"
            >
              <span className="max-sm:hidden">Home</span>{" "}
              <FaHome className="text-2xl sm:hidden" />
            </Link>
            <Link
              to={`/books`}
              className="hover:text-slate-700 text-rose-500 hover:-translate-y-1.5 font-bold text-lg  transition duration-150"
            >
              <span className="max-sm:hidden">Browse Books</span>
              <ImBooks className="text-2xl sm:hidden" />
            </Link>
            <Link
              to={"/add-book"}
              className="hover:text-slate-700 text-rose-500 hover:-translate-y-1.5 font-bold text-lg transition duration-150"
            >
              <span className="max-sm:hidden">Add Books</span>
              <RiContactsBookUploadFill className="text-2xl sm:hidden" />
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
