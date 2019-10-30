import React from "react";
import logos2 from "../../Image/logos2.png";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
// import ReactLoading from 'react-loading';

class Loginn extends React.Component {
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
      return <h1>Loading</h1>
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
                  Not a member?
                  <span>
                    <Link to="/register">Sign up</Link>
                  </span>
                </a>
                <div className="col in-signup">
                  <div className="desc">
                    <p>Sign In to OSans</p>
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
                    <form action="" className="mt-3" onSubmit={this.signIn}>
                      <label htmlFor="input">Username</label>
                      <input
                        type="text"
                        autoComplete="off"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChangeLogin}
                      />
                      <label htmlFor="input">Password</label>
                      <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChangeLogin}
                      />
                      <label htmlFor="input">Re-Password</label>
                      <input type="password" />
                      <button type="submit" className="btn-primary last">
                        Sign In
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

export default Loginn;
