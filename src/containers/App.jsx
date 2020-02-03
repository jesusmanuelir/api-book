import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import Book from '../components/Book';
import axios from "axios";
import "regenerator-runtime/runtime";
import { IoIosSearch } from "react-icons/io";

const App = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState({ items: [] });
  const [startIndex,setStartIndex] = useState(0);
 
  let API_URL = `https://www.googleapis.com/books/v1/volumes`;
  const fetchBooks = async () => {
    const result = await axios.get(`${API_URL}?q=${search}&startIndex=${startIndex}&maxResults=12`);
    setBooks(result.data);   
    };

  const InputChange = e => {
    setSearch(e.target.value);
  };
      
  const onSubmitNext = e => {
    setStartIndex(startIndex + 12);
    fetchBooks();
  }; 
        
  const onSubmitPreview = e => {
    setStartIndex(startIndex - 12);
    fetchBooks();
  };    
      
  const onSubmitHandler = e => {
    e.preventDefault();
    fetchBooks();
  };


        
  return(
    <div className="app">  
      <Navbar />
        <form onSubmit={onSubmitHandler}>
            <div className="container">
              <div className="input-group">
                <input type="search" className="form-control" value={search}
                    onChange={InputChange} placeholder="Please enter the book name you wish to search" />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="submit">
                    <i className="fa fa-search"><IoIosSearch /></i>
                  </button>
                </div>
              </div>
            </div>  
        </form>

      <Container>
        
        {books.items.map((book) => {
          return(
                  <Book title         = { book.volumeInfo.title } 
                        id            = { book.id } 
                        subtitle      = { book.volumeInfo.subtitle }
                        publishedDate = { book.volumeInfo.publishedDate }
                        description   = { book.volumeInfo.description }
                        authors       = { book.volumeInfo.authors }
                  />
                    
                  
                );
          })}
    
           {books.items.length > 0 &&
              <div className="mx-auto ">
                  <button input="button" className="btn btn-outline-primary Pagination-button__margin" onClick={onSubmitPreview}>Previous</button>
                  <button input="button" className="btn btn-outline-primary Pagination-button__margin" onClick={onSubmitNext}>Next</button>
              </div>}

      </Container>

     
  </div>
  );
};
export default App;