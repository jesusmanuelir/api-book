import React, { useState, useEffect, Children } from 'react';
import { Modal } from 'react-bootstrap';
import { IoIosAddCircleOutline, IoIosInformationCircleOutline } from "react-icons/io";

const Book = ({title, id, subtitle, publishedDate, description, authors}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return(  
        <div className="col-sm-12 col-md-4 col-lg-3 Book-item__margin ">
            <div className="card" >
                <img className="card-img-top Book-item__size-img" src={`http://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} alt="{title}" />
                <div className="card-body Book-item__text">
                    <h6 className="Book-title__font">{title}</h6>
                    <a href="#" title="More Information" className="card-link " onClick={handleShow}><IoIosInformationCircleOutline /></a>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <p>{subtitle}</p>
                        <p><strong>Published Date</strong>: {publishedDate}</p>
                        <p><strong>Authors</strong>: {authors}</p>
                        <p><strong>Description</strong>: {description}</p>
                    </Modal.Body>
            </Modal>
        </div>
    )
    };


export default Book;