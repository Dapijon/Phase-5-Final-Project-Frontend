import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="nav-items">
      <div className="header-icon">
        <Link to="/" className="nav-link">
          <img
            className="nav-img"
            src="https://cdn-icons-png.freepik.com/256/10383/10383229.png"
            alt="logo"
          />
        </Link>

        <div className="nav-header">
          <h1 className="home-heading">PINACLE FINANCE</h1>
          <p>Experience the best in mobile banking</p>
        </div>
      </div>
      <div className="nav-links">
        <Link to="/" className="btn btn-primary">Home</Link>
        <Link to="/userprofile" className="btn btn-primary">User Profile</Link>
        <Link to="/analytics" className="btn btn-primary">Analytics</Link>
        <Link to="/transactions" className="btn btn-primary">Transactions</Link>
      </div>
    </div>
  );
}

export default Navbar;
