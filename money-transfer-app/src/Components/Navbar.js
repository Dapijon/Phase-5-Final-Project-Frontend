import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
//import { useAuth, logout } from "../auth";

function Navbar() {
  //const [logged] = useAuth();
  return (
    <div>
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
