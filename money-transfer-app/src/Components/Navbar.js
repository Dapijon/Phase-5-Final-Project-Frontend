import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
//import { useAuth, logout } from "../auth";

function Navbar() {
  //const [logged] = useAuth();
  return (
    <div className="nav-items">
      <div className="header-icon">
        <img
          className="nav-img"
          src="https://cdn-icons-png.freepik.com/256/10383/10383229.png"
        ></img>

        <div className="nav-header">
          <h1 className="home-heading">PINACLE FINANCE </h1>
          <p> Experience the best in mobile banking</p>
        </div>

      </div>
      <nav className="navbar ">
        <ul className="navbar-links">
          <li className="nav-item">
            <Link className="link-margin" to="/signup">Sign Up</Link>
          </li>
          <li className="nav-item">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
