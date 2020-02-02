import React, { useState, useEffect }from 'react';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import Book from '../components/Book';


const App = () => {



    const [book, setBook] = useState([]);

        useEffect(() => {
            fetch('https://www.googleapis.com/books/v1/volumes?q=search+')
            .then(response => response.json())
            .then(data => setBook(data));
        },[]);
        

    return(
        <div className="app">
        <Navbar />
        <div className="active-cyan-3 active-cyan-4 mb-4 container Search-element__margin">
            <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
        </div>
        <Container>
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </Container>
        </div>
    );
};

export default App;