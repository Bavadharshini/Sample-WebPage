import React from "react";
import "./pricing.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";


function Pricing() {
  return (
    <div>
      <h2>Yoga Class Pricing</h2>
      <div className="pricing-container">
        <div className="pricing-card">
          <h3>Beginner</h3>
          <p>100 per class</p>
          <p>Access to beginner-level classes</p>
          <Link to={"/register"}>
          <button>Sign Up</button>
          </Link>
        </div>
        <div className="pricing-card">
          <h3>Intermediate</h3>
          <p>150 per class</p>
          <p>Access to intermediate-level classes</p>
          <Link to={"/register"}>
          <button>Sign Up</button>
          </Link>
        </div>
        <div className="pricing-card">
          <h3>Advanced</h3>
          <p>200 per class</p>
          <p>Access to advanced-level classes</p>
          <Link to={"/register"}>
          <button>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
