import React from "react";
import { Link, useLocation } from "react-router-dom";


function Navbar() {

  const location = useLocation();

  return (
    <ul className="nav nav-tabs" style={{ backgroundColor: 'rgb(241, 42, 165)' }}>
      <li className="nav-item">
        <Link 
          to="/"
          className={location.pathname === "/react_portfolio" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portfolio"
          className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/resume"
          className={location.pathname === "/resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
