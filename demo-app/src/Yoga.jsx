import React from "react";
import "./Yoga.css";
import yogaImage from "./image/yogaimage2.jpg"

export function Yoga() {
  const showAlert = () => {
    alert("Yoga link clicked!");
  };

  return (
    <>
      <div className="heading">
        <div className="nav">
          <h2>
            <a href="#" onClick={showAlert}>Yoga</a>
          </h2>
          <div className="nav-part2">
            <h4>Home</h4>
            <h4>About Us</h4>
            <h4>Pricing</h4>
            <h4>Blog</h4>
            <h4>Contact</h4>
          </div>
          <div>
            <button>Get Started</button>
          </div>
        </div>
        <div className="main">
          <div className="one">
            <h1>Empower Your<span> Body and Mind </span>with Yoga</h1>
            <br />
            <p>Yoga is a powerful tool for healing and transformation that can change lives for the better. It is an ancient practice that has been around for thousands of years and is popular all around the world.</p>
            <br />
            <button>Join Now</button>
          </div>
          <div className="sec">
            <img src={yogaImage} alt="Yoga" />
          </div>
        </div>
      </div>
    </>
  );
}
