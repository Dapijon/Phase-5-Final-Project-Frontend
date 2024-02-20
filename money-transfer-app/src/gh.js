import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="header">
        <img
          className="image"
          src="https://cdn-icons-png.freepik.com/256/10383/10383229.png"
        ></img>
        <h1 className="home-header">PINACLE FINANCE </h1>
      </div>
      <div className="about">
        <div id="container">
          <div className="row"></div>
          <div className="col-1">
            <h2> THE FUTURE OF MOBILE BANKING</h2>
            <img
              className="phone-image"
              src="https://www.shutterstock.com/image-photo/mobile-shopping-cheerful-arabic-woman-600nw-2108487698.jpg"
            ></img>
          </div>

          <div className="col-2">
            <p> Experience the best in mobile banking</p>
          </div>

          <div className="services">
            <h2>Our Services</h2>
            <div className="services-list-div">
              <p>Account Management</p>
              <ul>
                <li>View account balances</li>
                <li>Check transaction history</li>
                <li>Monitor account activity</li>
              </ul>

              <p>Funds Transfers</p>
              <ul>
                <li>Transfer money between accounts</li>
                <li>Make external transfers</li>
              </ul>

              <p>Mobile Deposits</p>
              <ul>
                <li>Deposit checks using mobile number</li>
                <li>Check deposit status</li>
                <li>Monitor account activity</li>
              </ul>

              <p>Credit Card Services</p>
              <ul>
                <li>View credit card balances and transactions</li>
                <li>Make credit card payments</li>
                <li>Set up credit card alerts</li>
              </ul>
              <img src=""></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
