import { useState } from "react";
import Navbar from "./components/Navbar";
import { fetchBooks } from "./api/library";
import Displaybooks from "./components/Displaybooks";
const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState([]);
  const handleSearchSubmit = async (query) => {
    setSearchQuery(query); // Update the search query
    const fetchedBooks = await fetchBooks(query); // Fetch books from the API
    setBooks(fetchedBooks.docs); // Assuming the API response has a 'docs' array of books
  };
  return (
    <div className="App">
      <Navbar onSearchSubmit={handleSearchSubmit} />
      <Displaybooks books={books} />
    </div>
  );
};

export default App;
