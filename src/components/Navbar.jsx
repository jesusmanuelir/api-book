import React, {useState} from 'react';


 const Navbar = () => {
  const [result,setResult] = useState({
    result: ''
  })
  const CaptureText = () =>{
    const SearchResult = document.getElementById("search");
    setResult({...result, result: SearchResult })
  }
console.log(result);


  
     return (
        <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-expand-md navbar navbar-dark bg-primary">
        
      
        <div className="container" id="navbarSupportedContent">

          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link" href="#">Favourite</a>
            </li>

          </ul>

        </div>
      </nav> 
      
    );
};


export default Navbar;