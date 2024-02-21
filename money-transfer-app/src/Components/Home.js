import React from "react";
import "./Home.css";
import { BsBank } from "react-icons/bs";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <>
      <div className="header">
        <img
          className="image"
          src="https://cdn-icons-png.freepik.com/256/10383/10383229.png"
        ></img>
        
        <div className="home-header">
        <h1 className="home-heading">PINACLE FINANCE </h1>
        <p> Experience the best in mobile banking</p>
        </div>
        
      </div>
      <div class="card">
  <div id="about" class="container">
    <div class="row">
      <div class="col-12">
        <h2 class="home-heading">THE FUTURE OF MOBILE BANKING</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <img class="phone-image" src="https://www.shutterstock.com/image-photo/mobile-shopping-cheerful-arabic-woman-600nw-2108487698.jpg" alt="Mobile Shopping" />
      </div>
      <div class="col-6">
        <p>
          In the fast-paced world we live in, managing your finances should be effortless and tailored to your lifestyle. 
          That's why we are excited to introduce the Pinacle Mobile Banking App – your one-stop solution for secure, 
          convenient, and efficient banking on the go. 
          At Pinacle, we understand the importance of having seamless access to your accounts, making transactions, 
          and staying on top of your financial goals. Our mobile app is designed with you in mind, offering a 
          comprehensive set of features that empower you to take control of your finances from the palm of your hand.
        </p>
      </div>
    </div>
  </div>
</div>


      <div id="services">
        <h1> Our Services</h1>
        <div className="container">
          <div className="services-list">
            <div>
              <BsBank className="i" />
              <h2>Account Management</h2>
              <ul>
                <li>View account balances</li>
                <li>Check transaction history</li>
                <li>Monitor account activity</li>
              </ul>
            </div>

            <div>
              <FaMoneyBillTransfer className="i" />
              <h2>Funds Transfers</h2>
              <ul>
                <li>Transfer money between accounts</li>
                <li>Make external transfers</li>
              </ul>
            </div>

            <div>
              <FaMobileAlt className="i" />
              <h2>Mobile Deposits</h2>
              <ul>
                <li>Deposit checks using mobile number</li>
                <li>Check deposit status</li>
                <li>Monitor account activity</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      <div id="contacts">
        <div className="row">
          <div className="contact-left">
             <h1>Contact Us</h1>
             <p>pinaclefinance@gmail.com</p>
             <p>0745889435</p>
             <div className="social-icons">
             <FaFacebook className="social-icon"/>
             <FaTwitter className="social-icon" />
             <FaInstagram  className="social-icon"/>
             </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
