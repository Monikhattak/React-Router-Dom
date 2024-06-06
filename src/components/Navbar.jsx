import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="about">
            <li>About</li>
          </Link>
          <Link to="register">
            <li>Register</li>
          </Link>
          <Link to="contect">
            <li>Contect</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
