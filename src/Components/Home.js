import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BookShelf from "./Shelf";

const HomePage = ({ allBooks, ChangeBookChelf }) => {

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>Mostafa - Reads</h1>
            </div>

            <div className="list-books-content">
                <div>
                    <BookShelf BookShelf_Name={"Currently Reading"} AllBooks={allBooks} ShelfGroup={'currentlyReading'} ChangeBookChelf={ChangeBookChelf} />
                    <BookShelf BookShelf_Name={"Want to Read"} AllBooks={allBooks} ShelfGroup={'wantToRead'} ChangeBookChelf={ChangeBookChelf} />
                    <BookShelf BookShelf_Name={"Read"} AllBooks={allBooks} ShelfGroup={'read'} ChangeBookChelf={ChangeBookChelf} />
                </div>
            </div>

            <div className="open-search" >
                <Link to="/Search">Add a book</Link>
            </div>

        </div>
    )
}
export default HomePage;

HomePage.prototypes = {
    allBooks: PropTypes.array,
    ChangeBookChelf: PropTypes.func.isRequired,
}; 