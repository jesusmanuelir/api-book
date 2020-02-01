import React, { useState, useEffect }from 'react';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import Book from '../components/Book';


const App = () => {
    const [book, setBook] = useState([]);
    useEffect(() => {
        fetch('https://www.googleapis.com/books/v1/volumes?q=search+Jesus')
        .then(response => response.json())
        .then(data => setBook(data));
    },[]);

    console.log(book);
    return(
        <div className="app">
        <Navbar />

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