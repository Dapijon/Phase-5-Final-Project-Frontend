import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./Navbar.css";
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../app/authSlice';

function Navbar() {
  const accessToken = useSelector((state) => state.auth.accessToken); 

  const dispatch = useDispatch();

  const handleLogout = () => {
    
    dispatch(signOut());
    Navigate('/')
  };

  return (
    <div className="nav-items">
      <div className="header-icon">
        <img
          className="nav-img"
          src="https://cdn-icons-png.freepik.com/256/10383/10383229.png"
          alt="logo"
        />
        <div className="nav-header">
          <h1 className="home-heading">PINACLE FINANCE</h1>
          <p>Experience the best in mobile banking</p>
        </div>
      </div>
      <nav className="navbar">
        <ul className="navbar-links">
          {accessToken ? (
            <>
              <li className="nav-item">
                <Link to="/analytics">Analytics</Link>
              </li>
              <li className="nav-item">
                <Link to="/admin">Users</Link>
              </li>
              <li className="nav-item">
                <Link to="/transactions">Transactions</Link>
              </li>
              <li className="nav-item">
            <button onClick={handleLogout}>Logout</button>
          </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/login">Login</Link>
                </li>
                <li className="nav-item nav-item-btn">
                <Link to="/signup">SignUp</Link>
              </li>
             
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
