import React from "react";
import "./NavTop.css";
import ModalBody from "../ModalBody/ModalBody";

const NavTop = ({
  emailNavtop,
  logOut,
  handleClickOut,
  gambarprofile,
  handleImage,
  handleChangeImage,
  namaNavTop,
  onChangeAddFriend,  
  onSubmitAddFriend,
  dataUser
}) => {
  return (
    <div className="navtop">
      <div className="row in-profile">
        <div className="col ">
          <button
            type="button"
            className="btn btn-demo shadow-none"
            data-toggle="modal"
            data-target="#myModal"
          >
            <i className="fa fa-bars float-left icon"></i>
            <h2 className="float-left">OSans</h2>
          </button>
          {/* <!-- Modal --> */}
          <div
            className="modal left fade"
            id="myModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <nav className="navbar fixed-top navbar-light">
                    <a className="navbar-brand" href="###">
                      {" "}
                    </a>
                  </nav>
                  <div className="imagesy float-left">
                    <label htmlFor="upload">
                      <img src={gambarprofile} alt="" />
                      <i
                        className="fa fa-camera"
                        aria-hidden="true"
                        style={{ cursor: "pointer" }}
                      ></i>
                      <input
                        type="file"
                        id="upload"
                        onClick={handleImage}
                        onChange={handleChangeImage}
                        style={{ display: "none" }}
                      />
                    </label>
                  </div>
                </div>
                <nav className="navbar navbar-toggleable-md navbar-light uniq">
                  <div
                    className="down"
                    type=""
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <p className="float-left pe-email">{emailNavtop}</p>
                    <i className="fa fa-caret-down iconn"></i>
                  </div>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                  >
                    <div className="navbar-nav">
                      <a className="nav-item nav-link" href="##">
                        Account <span className="sr-only">(current)</span>
                      </a>
                      <a className="nav-item nav-link" href="##">
                        Reference
                      </a>
                      <a className="nav-item nav-link" href="##">
                        Password
                      </a>
                    </div>
                  </div>
                </nav>

                <div className="modal-body">
                  <ModalBody 
                  modalLogOut={logOut} 
                  onClick={handleClickOut} 
                  onChangeAddFriend={onChangeAddFriend} 
                  onSubmitAddFriend={  onSubmitAddFriend}  dataUser={dataUser} />

                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTop;
