import React from 'react';
import Thunbnail from '../assets/img/book.jpeg';


const Book = () => (
        <div className="col-sm-12 col-md-3 col-lg-2 Book-item__margin">
            <div className="card" >
            <img className="card-img-top" src={Thunbnail} alt="" />
            <div className="card-body">
                <p className="card-text">Some quick example.</p>
            </div>
            </div>
        </div>
    );


export default Book;