import React from 'react';


 const Navbar = () => {

    const CaptureText = () =>{
      const res = document.getElementById("search");
      alert(res.value);
    }
     return (
        <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-expand-md navbar navbar-dark bg-primary">
        
      
        <div className="container" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0 mr-auto">
              <input className="form-control mr-sm-2" type="input" id="search" placeholder="Search" />
              <button className="btn btn-outline-light my-2 my-sm-0" type="button" onClick={CaptureText}>Search</button>
            </form>
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