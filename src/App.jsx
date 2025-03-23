import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./partials/NotFound";
import Header from "./partials/Header";
import Footer from "./partials/Footer";

const AppRoutes = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/:category" element={<BrowseBooks />} />
      <Route path="/books" element={<BrowseBooks />} />
      <Route path="/book/:id" element={<BookDetails />} />
      <Route path="/add-book" element={<AddBook />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </>
);

export default AppRoutes;
