import React, { Component } from "react";
import { connect } from "react-redux";
import Axios from "axios";

class ModalPrivacy extends Component {
  state = {
    password: ""
  };

  onChangePassword = e => {
    console.log(e.target.value);
    this.setState({
      password: e.target.value
    });
  };

  handleSavePassword = () => {
    const idPassword = this.props.password;
    const changepassword = {
      password: this.state.password,
      id: idPassword
    };
    Axios.put(
      `https://rocky-refuge-01694.herokuapp.com/api/changePassword`,
      { changepassword }
    ).catch(err => console.log(err));
  };
  render() {
    return (
      <div className="modalsett">
        <div
          className="modal fade"
          id="privacy"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Setting Your Privacy
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  style={{ color: "white" }}
                  //   onClick={onClickCancelUpdate}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body form-edit">
                <div className="row">
                  <div className="col">
                    <label htmlFor="input">Password </label>
                    <i className="fa fa-eye" onClick={this.onClickMata1}></i>
                    <input
                      name="password"
                      onChange={this.onChangePassword}
                      value={this.state.password}
                      className="input-form shadow-none"
                      // value="Edit Your Password"
                      placeholder="Edit your password"
                      //   type={mata1 ? "text" : "password"}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="input">Confirm's </label>
                    <i className="fa fa-eye" onClick={this.onClickMata2}></i>
                    <input
                      className="input-form shadow-none"
                      // value="Confirm Your Password"
                      placeholder="Confirm password"
                      //   type={mata2 ? "text" : "password"}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary bton-cancel shadow-none"
                  //   onClick={onClickCancelUpdate}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-secondary bton-close shadow-none"
                  onClick={this.handleSavePassword}
                >
                  Edit
                  {/* {textButton} */}
                </button>
                <script src=""></script>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  password: state.dataUser.id
});

export default connect(mapStateToProps)(ModalPrivacy);
