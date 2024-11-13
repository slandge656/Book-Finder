import { useState } from "react";
import "./Navbar.css";

const Navbar = ({ onSearchSubmit }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(searchInput);
  };
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Book Finder</a>
          <form className="d-flex" onSubmit={handleFormSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search books"
              aria-label="Search"
              value={searchInput}
              onChange={handleInputChange}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
