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
      <div className="body">
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
      </div>
    </>
  );
}

export default Home;
