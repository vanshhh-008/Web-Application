import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "./logo.png"; // Replace with the path to your logo
import { CiShoppingCart } from "react-icons/ci";
import "../src/SearchBar.css";
import { Link } from 'react-router-dom';
export default function Navbar({size}) {


  

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container-fluid">
        {/* Logo */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide"></link>
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={logo} alt="Logo" style={{ width: "50px", height: "50px" }} />
        </a>

        {/* Hamburger Menu */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasMenu"
          aria-controls="offcanvasMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Offcanvas Menu */}
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasMenu"
          aria-labelledby="offcanvasMenuLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasMenuLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            {/* Navbar Links */}
            <ul className="navbar-nav ms-auto">
             
              

              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Restaurants
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/restaurant1">
                      NBC CAFE
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/restaurant2">
                      POC
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/restaurant3">
                      CULTURAL HERITAGE
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/qr-code">
                  QR Code
                </a>
              </li>
           
             <div className='cart'>
              <li>
              <Link to="/cart"><CiShoppingCart style={{fontSize:'30px',color:'black'}}/></Link>
              <span>{size}</span>
              </li>
              </div>

            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
