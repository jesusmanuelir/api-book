import React from 'react';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import Book from '../components/Book';


const App = () => {
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