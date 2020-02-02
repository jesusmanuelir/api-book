import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import Book from '../components/Book';
import useInitialState from '../hook/useInitialState';
import { render } from 'react-dom';



const App = () => {

        
    const [state, setState] = useState([]);
  
    const Change = (event) =>{
        setState({value: event.target.value});
    }
   
        const [books, setBook] = useState([]);
    
        useEffect(() => {
            fetch('https://www.googleapis.com/books/v1/volumes?q=search+'+state.value)
            .then(response => response.json())
            .then(data => setBook(data));
        },[]);
        console.log(books.items);
        
 
        return(
            <div className="app">
 

            <Navbar />
            <div className="active-cyan-3 active-cyan-4 mb-4 container Search-element__margin">
                <input className="form-control" type="text" placeholder="Search" onChange={Change} />
            </div>
            <Container>
                <Book />

            </Container>
            </div>
        );
    };


export default App;