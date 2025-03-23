/* eslint-disable no-unused-vars */
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer
      className="z-12 font-serif bg-gradient-to-br mt-2 from-gray-500 from-10% via-gray-400 to-gray-300 to-90% shadow-sm shadow-black"
      initial={{ x: 500 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.6 }}
    >
      <div className="mx-10 py-2 px-24 max-md:px-0">
        <div className="flex max-md:flex-col justify-between items-center">
          <div className="flex items-center gap-2">
            {/* <img
              src="/shoppyGlobe-logo.jpg"
              alt="ShoppyGlobe Logo"
              className="w-12 h-12 rounded-full"
            /> */}
            <h2 className="text-2xl font-bold cursor-pointer hover:text-purple-300 hover:-translate-y-1.5 transition duration-200">
              E-Library
            </h2>
          </div>

          <div className="flex space-x-5 max-md:mt-4">
            <Link className="text-slate-800 hover:text-rose-500 hover:-translate-y-1.5 transition duration-200">
              <FaInstagramSquare className="text-4xl" />
            </Link>
            <Link className="text-slate-800 hover:text-rose-500 hover:-translate-y-1.5 transition duration-200">
              <FaFacebookSquare className="text-4xl" />
            </Link>
            <Link className="text-slate-800 hover:text-rose-500 hover:-translate-y-1.5 transition duration-200">
              <FaSquareXTwitter className="text-4xl" />
            </Link>
          </div>
        </div>

        <div className="text-center font-semibold text-red-500 w-full text-xl mt-6 max-md:mt-2">
          &copy; {new Date().getFullYear()} E-Library. All Rights Reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
