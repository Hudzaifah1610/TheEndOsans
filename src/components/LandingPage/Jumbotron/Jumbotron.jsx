import React from "react";
import "./Jumbotron.css";
import phonn from "../../../Image/phonn.png";
import { Link } from "react-router-dom";
// import { AnimatedOnScroll } from "react-animated-css-onscroll";

const Jumbotron = () => {
  return (
    <div className="jumb-land">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          {/* {AnimatedOnScroll} */}
          {/* <AnimatedOnScroll */}
            {/* animationIn="rotateInDownRight" */}
            {/* animationInDuration={1000} */}
            <div className="iemji">
              <img src={phonn} alt="" />
            </div>
          {/* </AnimatedOnScroll> */}
          <div className="desc-jumb">
            <h1 className="display-4 ">
              Messages Relaxed
              <br />
              Safe and Comfortable.
            </h1>
            <p className="lead">
              Interact casually through chat with everyone
              <br />
              With OSans, get the fast, simple and secure messaging and calling
              application for free
            </p>
            <Link to="/register">
              <button type="button" className="btn btn-outline-primary">
                JOIN US
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
