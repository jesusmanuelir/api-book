import React, { useState, useEffect } from 'react';

const useInitialState = (letter) =>{
    const [book, setBook] = useState([]);

    useEffect(() => {
        fetch('https://www.googleapis.com/books/v1/volumes?q=search+'+letter)
        .then(response => response.json())
        .then(data => setBook(data));
    },[]);

  
    return book;
}

export default useInitialState;