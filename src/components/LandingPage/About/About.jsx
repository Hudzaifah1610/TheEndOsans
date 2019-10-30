import React from "react";
import "./About.css";
import logos2 from "../../../Image/logos2.png";

const About = () => {
  return (
    <div className="row about">
      <div className="col-lg all-about">
        <div className="row">
          <img src={logos2} id="about" alt="" width="100" />
        </div>
        <div className="row header-pe">
          <p className="pe-os">
           ~ ABOUT OSANS ~
          </p>
        </div>
        <div className="row">
          <h6>
            A simple application for different sensations, but still maintaining
            quality so that users are comfortable and relaxed in using this
            application , good luck friend.
          </h6>
        </div>
        <div className="row">
          <p className="pe-lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            omnis accusantium sit consequatur perspiciatis nihil officia, quas
            repellendus corporis, ex fuga beatae. Similique saepe qui
            repellendus aliquam, reprehenderit delectus quae.
          </p>
        </div>
        <div className="row all-image-about">
          <div className="col-lg-6 desc-two-about">
            <div className="in-descc">
              <p>
                <i className="fa fa-share mr-3"></i>
                Our Progress
              </p>
              <h5>Great Application</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                sit praesentium provident officia vitae aut dicta blanditiis
                amet suscipit assumenda!
              </p>
              <button
                type="button"
                className="btn btn-outline-primary btn-desc-two-about"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="col-lg image-two-about"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
