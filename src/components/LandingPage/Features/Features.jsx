import React from "react";
import "./Features.css";
import phonn from "../../../Image/phonn.png";

const Features = () => {
  return (
    <div className="features" id="features">
      <div className="row">
        <div className="col">
          <div className="row pe-features">
            <p className=" m-auto">FEATURES</p>
          </div>
          <div className="row">
            <h2 className="m-auto">Powerful Features in OSans</h2>
          </div>
          <div className="row">
            <div className="col-3 icon-feature">
              <div className="box-icon">
                <i className="fa fa-rocket"></i>
                <a className="sa-tu">Fast Powerfull</a>
              </div>
              <div className="box-icon">
                <i className="fa fa-unlock-alt"></i>
                <a  className="du-a">Secure Account</a>
              </div>
              <div className="box-icon">
                <i className="fa fa-cloud"></i>
                <a>Comfortable</a>
              </div>
            </div>
            <div className="col-6 image-features">
              <img src={phonn} alt="" />
            </div>
            <div className="col-3 icon-feature2">
            <div className="box2-icon">
                <i className="fa fa-rocket"></i>
                <a>Fast Powerfull</a>
              </div>
              <div className="box2-icon">
                <i className="fa fa-unlock-alt"></i>
                <a>Secure Account</a>
              </div>
              <div className="box2-icon">
                <i className="fa fa-cloud"></i>
                <a>Comfortable</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
