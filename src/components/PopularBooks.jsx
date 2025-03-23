import { popularBooksList } from "../utils/PopularBooks";

const PopularBooks = () => {
  return (
    <>
      <div className="px-6 mb-4">
        <h3 className="text-2xl font-bold underline text-gray-900 mb-4">
          Popular Books
        </h3>
        <div className="grid mx-10 max-md:grid-cols-2 grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-1 gap-4">
          {popularBooksList.map((book, index) => (
            <div
              key={index}
              className="group flex justify-center items-center hover:scale-105 shadow-[2px_2px_10px] z-10 shadow-gray-900 rounded-lg cursor-pointer transition-all duration-200 relative overflow-hidden h-48 bg-gradient-to-br from-rose-200 via-rose-400 to-rose-600"
            >
              <div
                className="absolute inset-0 bg-center bg-cover duration-200 group-hover:scale-110 group-hover:opacity-20"
                style={{
                  backgroundImage: `url(${book.imgUrl})`,
                }}
              ></div>
              <h4 className="text-xl font-bold text-white relative z-10">
                {book.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularBooks;
