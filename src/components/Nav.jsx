// Nav.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import "./Nav.css";

const Nav = () => (
  <nav className="nav-main">
    <Link to="/">
      <img src={logo} alt="Little Lemon Logo" className="nav-logo" />
    </Link>
    <ul className="nav-links">
      <li>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
      <li>
        <Link to="/menu" className="nav-link">
          Menu
        </Link>
      </li>
      <li>
        <Link to="/reservations" className="nav-link">
          Reservations
        </Link>
      </li>
      <li>
        <Link to="/order" className="nav-link">
          Order Online
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
