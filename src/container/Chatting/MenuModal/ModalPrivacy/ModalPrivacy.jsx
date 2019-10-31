import React, { Component } from "react";

class ModalPrivacy extends Component {
  state = {};
  render() {
    return (
      <div className="modalsett">
        <div
          class="modal fade"
          id="privacy"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Setting Your Privacy
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  style={{ color: "white" }}
                  //   onClick={onClickCancelUpdate}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body form-edit">
                <div className="row">
                  <div className="col">
                    <label htmlFor="input">Password </label>
                    <i className="fa fa-eye" onClick={this.onClickMata1}></i>
                    <input
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
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary bton-cancel shadow-none"
                //   onClick={onClickCancelUpdate}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  class="btn btn-secondary bton-close shadow-none"
                  onClick={this.handleSaveProfile}
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

export default ModalPrivacy;
