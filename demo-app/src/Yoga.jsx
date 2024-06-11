import React from "react";
import "./Yoga.css";
import yogaImage from "./image/yogaimage2.jpg";
import { Outlet ,Link} from "react-router-dom";


export function Yoga() {


  return (
    <>
    <div className="container">
      <div className="heading">
        <div className="nav">
          <h2>
           <bold>Yogi</bold>
          </h2>
          <div className="nav-part2">
            <Link to={"/aboutUs"}>About Us</Link>
            <Link to={"/price"}>Price Details</Link>
            <Link to={"/blog"}>Blog</Link>
            <Link to={"/dailyDose"}>Daily Dose</Link>
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
            <Link to={"/register"}>
            <button>Join Now</button>
            </Link>
          </div>
          <div className="sec">
            <img src={yogaImage} alt="Yoga" />
          </div>
          <Outlet/>
        </div>
      </div>
      </div>
    </>
  );
}
