import React from "react";
import "./LandingPage.css";
import Navbar from "./Navbar/Navbar";
import Jumbotron from "./Jumbotron/Jumbotron";
import About from "./About/About";
import Features from "./Features/Features";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="land-page">
        <div className="row">
          <div className="col-lg">
            <div className="row  navbarr">
              <div className="col-lg">
                <Navbar />
              </div>
            </div>
            <div className="row jumbotronn">
              <div className="col-lg jump">
                <Jumbotron />
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                <About />
              </div>
            </div>
            <div className="row">
              <div className="col-lg feat">
                <Features />
              </div>
            </div>
            <div className="row">
              <div className="col-lg feat">
                <Contact />
              </div>
            </div>
            <div className="row">
              <div className="col-lg feat">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LandingPage;
