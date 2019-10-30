import React from "react";
import logos2 from "../../Image/logos2.png";
import { Link } from "react-router-dom";
import "./Register.css";
import axios from "axios";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      register: {
        name: "",
        email: "",
        password: "",
        rePassword: "",
        no_telp: ""
      },
      togleMata1: true,
      togleMata2: true
      // isLoading: ""
    };
  }

  postRegister = e => {
    const dataStatePost = this.state.register;

    this.setState = {
      isLoading: true
    };
    axios
      .post(
        "https://rocky-refuge-01694.herokuapp.com/api/register",
        dataStatePost
      )
      .then(res => {
        console.log("status ok => ", res);
        alert("Register Berhasil", res);
        this.setState({
          register: {
            name: "",
            email: "",
            password: "",
            rePassword: "",
            no_telp: ""
          }
          // isLoading: false
        });
      })
      .catch(err => {
        // alert("nama atau email sudah digunakan", err);
      });
  };

  handleChangeRegister = e => {
    let changeRegister = { ...this.state.register };
    changeRegister[e.target.name] = e.target.value;
    this.setState({
      register: changeRegister
    });
  };

  handleSubmitRegister = e => {
    e.preventDefault();
    const { password, name, email } = this.state.register;
    if (name === "" || email === "" || password === "") {
      alert("Nama, email , password tidak boleh kosong");
    } else {
      this.postRegister();
    }
  };

  handleToggleMata1 = () => {
    this.setState({
      togleMata1: !this.state.togleMata1
    });
  };
  handleToggleMata2 = () => {
    this.setState({ togleMata2: !this.state.togleMata2 });
  };
  render() {
    const { name, email, password, no_telp } = this.state.register;
    const { isLoading } = this.state;

    if (isLoading) {
      return <h1>Loading bang ......</h1>;
    }
    return (
      <div className="register">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col-lg-5  left">
                <div className="in-left">
                  <img className="float-left" src={logos2} alt="" />
                  <p>OSans</p>
                  <h1>
                    Make your life more comfortable with the osans application
                  </h1>
                </div>
              </div>
              <div className="col-lg right">
                <a>
                  Already a member?
                  <span>
                    <Link to="/loginn">Sign in</Link>
                  </span>
                </a>
                <div className="col in-signup">
                  <div className="desc">
                    <p>Sign Up to OSans</p>
                    <button className="btn btn-primary">
                      {" "}
                      <i className="fa fa-unlock-alt"></i> Your account is
                      Secure
                    </button>
                    <button className="btn btn-secondary float-right">
                      <i className="fa fa-twitter"></i>
                    </button>
                    <button className="btn btn-secondary float-right">
                      <i className="fa fa-facebook"></i>
                    </button>
                    <div className="haer"></div>
                    <form action="" className="mt-3">
                      <label htmlFor="input">Username</label>
                      <input
                        autocomplete="off"
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChangeRegister}
                        required
                      />
                      <label htmlFor="input">Email</label>
                      <input
                        autocomplete="off"
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChangeRegister}
                      />
                      <label htmlFor="input">No.Telp</label>
                      <input
                        type="text"
                        name="no_telp"
                        value={no_telp}
                        onChange={this.handleChangeRegister}
                      />
                      <label htmlFor="input">Password</label>
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChangeRegister}
                        pattern=".{8,}"
                      />
                      <button
                        type="button"
                        className="btn-primary last"
                        onClick={this.handleSubmitRegister}
                      >
                        Create Account
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
