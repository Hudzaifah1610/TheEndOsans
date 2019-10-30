import React, { Component } from "react";
import "./ModalSetting.css";
import Axios from "axios";

class ModalSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      nama: "",
      email: "",
      no_telp: "",
      textButton: "Edit",
      valueUpdate: true,
      mata1: false,
      mata2: false
    };
  }

  componentDidMount() {
    const myAccount = localStorage.getItem("user");
    const accountMe = JSON.parse(myAccount);

    this.setState(
      {
        user: accountMe
      },
      () => console.log("ini setting harus ada", this.state.user)
    );
  }

  // butoon edit
  handleSaveProfile = () => {
    const { textButton } = this.state;
    if (textButton === "Edit") {
      this.onclickButton();
    } else {
      this.handleUpdateProfile()
    }
  };

  handleUpdateProfile = () => {
    const { nama, email, no_telp } = this.state;
    const idddd = this.state.user.id
    const kirimIni = {
      name: nama,
      email,
      no_telp
    };
    Axios.put(`https://rocky-refuge-01694.herokuapp.com/api/updateProfile/${idddd}`, {kirimIni}).then(res => {
      console.log("data update profile",res.data)
      this.setState({
        textButton : "Edit"
      })
    })
  };

  onclickButton = () => {
    const { user } = this.state;
    this.setState({
      textButton: "Simpan",
      valueUpdate: false,
      nama: user.name,
      email: user.email,
      no_telp: user.no_telp
    });
  };

  // how Password
  onClickMata1 = () => {
    this.setState({
      mata1: !this.state.mata1
    });
  };
  onClickMata2 = () => {
    this.setState({
      mata2: !this.state.mata2
    });
  };

  // update privacy
  onChangeProfile = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // cancel Updatae
  onClickCancelUpdate = () => {
    this.setState({
      textButton: "Edit",
      valueUpdate: true
    });
  };
  render() {
    const {
      user,
      textButton,
      valueUpdate,
      nama,
      email,
      no_telp,
      mata1,
      mata2
    } = this.state;
    const { onClickCancelUpdate } = this;
    return (
      <div className="modalsett">
        <div
          class="modal fade"
          id="modalsetting"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Setting Your Account
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  style={{ color: "white" }}
                  onClick={onClickCancelUpdate}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body form-edit">
                <div className="row">
                  <div className="col">
                    <label htmlFor="input">Name </label>
                    <input
                      value={valueUpdate ? user.name : nama}
                      name="nama"
                      onChange={this.onChangeProfile}
                      className="input-form shadow-none"
                      type="text"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="input">Email </label>
                    <input
                      value={valueUpdate ? user.email : email}
                      name="email"
                      onChange={this.onChangeProfile}
                      className="input-form shadow-none"
                      type="text"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="input">No.Telp </label>
                    <input
                      name="no_telp"
                      value={valueUpdate ? user.no_telp : no_telp}
                      onChange={this.onChangeProfile}
                      className="input-form shadow-none"
                      type="text"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="input">Password </label>
                    <i className="fa fa-eye" onClick={this.onClickMata1}></i>
                    <input
                      className="input-form shadow-none"
                      value="Argo-wilis"
                      type={mata1 ? "text" : "password"}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="input">Confirm's </label>
                    <i className="fa fa-eye" onClick={this.onClickMata2}></i>
                    <input
                      className="input-form shadow-none"
                      value="Argo-wilis"
                      type={mata2 ? "text" : "password"}
                    />
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary bton-cancel shadow-none"
                  onClick={onClickCancelUpdate}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  class="btn btn-secondary bton-close shadow-none"
                  onClick={this.handleSaveProfile}
                >
                  {textButton}
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

export default ModalSetting;
