/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Categories from "../components/Categories";
import Welcome from "../components/Welcome";
import PopularBooks from "../components/PopularBooks";

const Home = () => {
  return (
    <>
      <motion.div
        className="bg-gray-100 min-h-screen text-gray-900"
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.6 }}
      >
        <div className="flex flex-col gap-10 pt-4 font-serif bg-gradient-to-br from-pink-200 via-purple-300 to-blue-300">
          <Welcome />

          <Categories />

          <PopularBooks />
        </div>
      </motion.div>
    </>
  );
};

export default Home;
