import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import * as AllBooksAPI from "../BooksAPI";
import Book from "./Book";


//allBooks, ChangeBookChelf
const SearchPage = ({ allBooks, ChangeBookChelf }) => {
  let [booksList, setBooksList] = useState([]);
  const [theSearchQuery, setTheSearchQuery] = useState('');



  const getBooksList = async () => {

    if (theSearchQuery?.length !== 0) {

      AllBooksAPI.search(theSearchQuery, 20)
        .then((res) => {
          if (res?.error) { 
            setBooksList([]);
            console.error(res.error, ": There are no books with this name.");
          } else {
            setBooksList(res);
          }

        })
        .catch((err) => {
          console.error(err);
        });

    } else {
      setBooksList([]);
    }
  }


  useEffect(() => {
    getBooksList(theSearchQuery);
  }, [theSearchQuery]);


  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Back
        </Link>
        <div className="search-books-input-wrapper">
          <input autoFocus
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => {
              setTheSearchQuery(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        {theSearchQuery?.length > 0 && booksList?.length > 0 ?
          <ol className="books-grid">
            {booksList?.map((searchedBook) => (

              < Book
                key={searchedBook?.id}
                ChangeBookChelf={ChangeBookChelf}
                BookDetails={
                  allBooks.filter((myBook) => {
                    if (searchedBook.id === myBook.id) {
                      return { searchedBook, shelf: myBook.shelf };
                    }
                  })[0] || searchedBook
                }
              />

            ))}
          </ol> : <h1 className="no-result">No Result Found</h1>
        }
      </div>
    </div>
  );
};
export default SearchPage;

SearchPage.prototypes = {
  allBooks: PropTypes.array,
  ChangeBookChelf: PropTypes.func.isRequired,
}; 