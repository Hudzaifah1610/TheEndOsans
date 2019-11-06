import React, { Component } from "react";
// import "./Login.css";
import { Link, Redirect } from "react-router-dom";
// import compeny from "../../Image/compeny.png";
// import logo from "../../Image/logo.png";
// import man from "../../Image/man.ico";
// import Footer from "../../components/LandingPage/Footer/Footer";
// import NavFixTop from "../NavFixTop/NavFixTop";
import Axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      token: "",
      isLoading: "",
      togleMata: true
    };
    this.handleSubmitTogleMata = this.handleSubmitTogleMata.bind(this);
  }

  signIn = e => {
    e.preventDefault();

    const dataInput = {
      name: this.state.name,
      password: this.state.password
    };

    this.setState({
      isLoading: true
    });

    Axios.post("https://rocky-refuge-01694.herokuapp.com/api/login", dataInput)
      .then(res => {
        console.log("resssss", res.data.user);
        console.log("token", res.data.access_token);
        localStorage.setItem("token", res.data.access_token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        this.setState({
          isLoading: false
        });
      })
      .catch(err => {
        console.log("error", err);
        this.setState({
          isLoading: false
        });
      });
  };
  handleChangeLogin = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmitTogleMata = () => {
    this.setState({ togleMata: !this.state.togleMata });
  };

  render() {
    const { isLoading } = this.state;
    if (localStorage.getItem("token", "user")) {
      return <Redirect to="/chat" />;
    } else if (isLoading) {
      return <h1>Loading bang ............</h1>;
    }
    return (
      <div className="boody">
        {/* <NavFixTop /> */}
        <div className="container register">
          <div className="row">
            <div className="col all">
              <div className="row">
                <div className="col-lg-4 image">
                  <h1>Login</h1>
                  <p>Let's join in our application</p>
                  {/* <img src={compeny} className="img-fluid" alt="" /> */}
                </div>
                <div className="col-lg-6 innput">
                  {" "}
                  {/* <img src={man} alt="" width="40" className="float-right" /> */}
                  {/* <img src={logo} alt="" className="ml-1" /> */}
                  <p className="ml-1">Change the world with your hands</p>
                  <form autoComplete="off" onSubmit={this.signIn}>
                    <div className="form-group e-mail">
                      <div className="icon">
                        <i className="fa fa-envelope-open icon"></i>
                        <input
                          type="text"
                          className="form-control  shadow-none"
                          style={{ fontWeight: "100", fontFamily: "Domine" }}
                          placeholder="Name"
                          name="name"
                          value={this.state.name}
                          onChange={this.handleChangeLogin}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="icon">
                        <i className="fa fa-key icon"></i>
                        <input
                          type="password"
                          className="form-control  shadow-none"
                          style={{ fontWeight: "100", fontFamily: "Domine" }}
                          id="exampleInputPassword1"
                          placeholder="Password"
                          name="password"
                          value={this.state.password}
                          onChange={this.handleChangeLogin}
                        />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                    <div className="col-lg">
                      <Link to="/register">
                        <small className="small-login">Create an account</small>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Login;
