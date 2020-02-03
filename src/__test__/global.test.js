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



