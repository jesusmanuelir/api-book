import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import Book from "../components/Book";
import { act } from "react-dom/test-utils";
import axios from "axios";
import "regenerator-runtime/runtime";


test("Search book async await", async () => {
    let urlGoogleAPI = `https://www.googleapis.com/books/v1/volumes`;
    const startIndex = 1;
    const maxResults = 12;
    const status = 200;
    const search = 'C++';
    const data = await axios.get(`${urlGoogleAPI}?q=${search}&startIndex=${startIndex}&maxResults=${maxResults}`);;
    expect(data.status).toEqual(status);
  });

  let container = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test("Send data to book component", () => {

  
    const bookInf = { title: "Exploring C for Microcontrollers", 
                      id: "RqFQAAAAMAAJ" ,
                      subtitle: "A Hands on Approach" ,
                      publishedDate: "2009-09-03" ,
                      description: "Unlike traditional embedded systems references, this book skips routine..." ,
                      authors: "Jivan ParabVinod G"                      
                    };
 
    act(() => {
      render(<Book title = { bookInf.title } />,container
      );
    });
  
 
    expect(container.querySelector("#title").textContent).toEqual("Exploring C for Microcontrollers");
   
  });

