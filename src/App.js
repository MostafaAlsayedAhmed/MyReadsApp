import "./App.css";
import * as AllBooksAPI from './BooksAPI'
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

//Pages
import HomePage from "./Components/Home";
import SearchPage from "./Components/Search";

function App() {

  const [allBooks, setAllBooks] = useState([]);

  const getAllBooks = async () => {
    const res = await AllBooksAPI.getAll();
    setAllBooks(res);
  }

  const ChangeBookChelf = (book, shelf) => {
    AllBooksAPI.update(book, shelf)
      .then(() => { getAllBooks() });
  };


  useEffect(() => {
    getAllBooks();
  }, []);



  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<HomePage allBooks={allBooks} ChangeBookChelf={ChangeBookChelf} />} />
          <Route exact path="/Search" element={<SearchPage allBooks={allBooks} ChangeBookChelf={ChangeBookChelf} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
