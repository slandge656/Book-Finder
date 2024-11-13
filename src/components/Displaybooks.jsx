import React from "react";
import "./Displaybooks.css";
function Displaybooks({ books = [] }) {
  // Default books to an empty array

  return (
    <div>
      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <div className="book-cards">
          {books.map((book, index) => (
            <div
              className="card"
              style={{ width: "18rem"}}
              key={index}
            >
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                className="card-img-top"
                alt={book.title}
                onError={(e) => (e.target.src = "https://via.placeholder.com/150?text=No+Image")}
              />
              <div className="card-body">
                <h3>{book.title}</h3>
                <p>
                  Author:{" "}
                  {book.author_name ? book.author_name.join(", ") : "Unknown"}
                </p>
                <p>Year: {book.first_publish_year || "Unknown"}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Displaybooks;
