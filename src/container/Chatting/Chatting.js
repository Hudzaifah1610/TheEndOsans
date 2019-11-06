import React, { Component } from "react";
import "./Chatting.css";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import NavTop from "./NavTop/NavTop";
import NavTop2 from "./NavTop/NavTop2";
import List from "./List/List";
import ChatRoom from "./ChatRoom/ChatRoom";
import Input from "./Input/Input";

import Emoji from "./Input/Emoji";
// import ModalBody from "../ModalBody/ModalBody";

class Chatting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      contactList: [],
      isiPesan: [],
      sendChat: "",
      receiver_id: ""
    };
  }

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    const myState = localStorage.getItem("user");
    const dataUSer = JSON.parse(myState);
    this.setState({ user: dataUSer });
  }

  componentDidMount() {
    const idUser = this.state.user.id;
    Axios.get(
      `https://rocky-refuge-01694.herokuapp.com/api/users/${idUser}`
    ).then(contactList => {
      console.log("contact", contactList);
      this.setState({
        contactList: contactList.data
      });
    });
  }
  uploadRefresh = () => {
    const idUser = this.state.user.id;
    console.log("IdUSer =>>>>>>>iDUser", idUser);
    Axios.get(
      `https://rocky-refuge-01694.herokuapp.com/api/userId/${idUser}`
    ).then(ress => {
      console.log("IdUser", ress);
      localStorage.setItem("user", JSON.stringify(ress.data));
      this.setState({
        user: ress.data
      });
    });
  };

  handleChangeImage = e => {
    e.preventDefault();
    let avatar = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(avatar);
    reader.onloadend = () => {
      this.setState({
        avatar: avatar,
        base64: reader.result
      });

      this.handleImage();
    };
  };

  handleImage = async () => {
    const idUser = this.state.user.id;
    await Axios.put(
      `https://rocky-refuge-01694.herokuapp.com/api/avatar/${idUser}`,
      {
        idUser,
        avatar: this.state.base64
      }
    ).then(data => {
      console.log("data :", data);
      this.uploadRefresh();

      this.setState({
        avatar: this.state.avatar
      });
    });
  };

  // ChatRoomKlik
  handleChatRoomClick = tampilContact => {
    const { id } = this.state.user;
    const idContact = tampilContact.id;
    console.log("Ini yang tamil setelah diklik", tampilContact);
    this.setState({
      receiver_id: idContact
    });
    Axios.get(
      `https://rocky-refuge-01694.herokuapp.com/api/showChat/${id}/${idContact}`
    ).then(ress => {
      console.log("chatnya : ", ress);
      this.setState({ isiPesan: ress.data });
    });
  };

  getChat = async () => {
    const { id } = this.state.user;
    const idContact = this.state.receiver_id;
    await Axios.get(
      `https://rocky-refuge-01694.herokuapp.com/api/showChat/${id}/${idContact}`
    ).then(ress => {
      this.setState({ isiPesan: ress.data });
    });
  };

  changeChat = e => {
    this.setState({
      sendChat: e.target.value
    });
  };

  handleSubmitChat = e => {
    e.preventDefault();

    const { sendChat, user, receiver_id } = this.state;
    const butuhDataIni = {
      message: sendChat,
      sender_id: user.id,
      receiver_id
    };
    Axios.post(
      "https://rocky-refuge-01694.herokuapp.com/api/storeMessage",
      butuhDataIni
    ).then(res => {
      console.log(res, "ini pesan kekirim butuh ini");
      // this.getChat();
      this.setState({
        sendChat: ""
      });
    });
  };
  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUpdate() {
    this.getChat();
  }
  signOut = () => {
    localStorage.clear("token");
    localStorage.clear("user");
  };
  render() {
    const { user, isiPesan, sendChat } = this.state;
    const { handleChatRoomClick, changeChat, handleSubmitChat } = this;

    if (!localStorage.getItem("token", "user")) {
      return <Redirect to="/" />;
    }
    return (
      <div className="chatting">
        <div className="containered">
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col-lg-3 sattu">
                  {/* NavTop */}

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
                          tabindex="-1"
                          role="dialog"
                          aria-labelledby="myModalLabel"
                        >
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <nav class="navbar fixed-top navbar-light">
                                  <a class="navbar-brand" href="###">
                                    {" "}
                                  </a>
                                </nav>
                                <div
                                  onClick={this.handleImage}
                                  className="imagesy float-left"
                                >
                                  <label
                                    for="upload"
                                    onClick={this.handleImage}
                                  >
                                    <img src={user.avatar} alt="" />
                                    <i
                                      className="fa fa-camera"
                                      aria-hidden="true"
                                      style={{ cursor: "pointer" }}
                                    ></i>
                                    <input
                                      type="file"
                                      id="upload"
                                      onChange={this.handleChangeImage}
                                      style={{ display: "none" }}
                                    />
                                  </label>
                                </div>
                              </div>
                              <nav class="navbar navbar-toggleable-md navbar-light uniq">
                                <div
                                  class="down"
                                  type=""
                                  data-toggle="collapse"
                                  data-target="#navbarNavAltMarkup"
                                  aria-controls="navbarNavDropdown"
                                  aria-expanded="false"
                                  aria-label="Toggle navigation"
                                >
                                  <p className="float-left pe-email">
                                    {user.email}
                                  </p>
                                  <i className="fa fa-caret-down iconn"></i>
                                </div>
                                <div
                                  class="collapse navbar-collapse"
                                  id="navbarNavAltMarkup"
                                >
                                  <div class="navbar-nav">
                                    <a class="nav-item nav-link" href="##">
                                      Account{" "}
                                      <span class="sr-only">(current)</span>
                                    </a>
                                    <a class="nav-item nav-link" href="##">
                                      Reference
                                    </a>
                                    <a class="nav-item nav-link" href="##">
                                      Password
                                    </a>
                                    <a
                                      class="nav-item nav-link"
                                      href="##"
                                      onClick={this.signOut}
                                    >
                                      logout
                                    </a>
                                  </div>
                                </div>
                              </nav>

                              <div className="modal-body">
                                {/* <ModalBody /> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Akhir NAvtop */}
                </div>
                <div className="col-lg duwwa">
                  <NavTop2 />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 tigga">
                  {/* <List /> */}
                  <div className="list-profile">
                    <div className="row innput">
                      <div className="col">
                        <div
                          className="form-groupe has-search pt-3 position-sticky"
                          style={{ top: "0", zIndex: "1" }}
                        >
                          <span className="fa fa-search form-control-feedback"></span>
                          <input
                            type="text"
                            style={{ border: "none" }}
                            className="form-control shadow-none"
                            placeholder="Search Your Contact . . ."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row list mt-2">
                      <div className="col">
                        <img
                          // src={human1}
                          alt=""
                          width="60"
                          height="60"
                          className="float-left topp"
                        />
                        <div className="desc-list">
                          <h5>Umar Al-Khudair</h5>
                          <p>Bersyukur adalah untuk orang yang. . .</p>
                        </div>
                      </div>
                    </div>
                    {this.state.contactList.map(tampilContact => (
                      <div
                        className="row list"
                        key={tampilContact.id}
                        onClick={() => handleChatRoomClick(tampilContact)}
                      >
                        <div className="col">
                          <img
                            src={tampilContact.avatar}
                            alt=""
                            width="60"
                            height="60"
                            className="float-left topp"
                          />
                          <div className="desc-list">
                            <h5>{tampilContact.name}</h5>
                            {/* <p>Bersyukur adalah untuk orang yang. . .</p> */}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* akhir List */}
                </div>
                <div className="col-lg emmpat">
                  {/* <ChatRoom /> */}
                  <div className="chatroom">
                    <div className="row">
                      <div className="col">
                        {isiPesan.map(pesan => {
                          return (
                            <div key={pesan.id}>
                              {user.id !== pesan.sender_id ? (
                                <div className="row">
                                  <div className="col">
                                    <div className="penerima">
                                      {/* <p className="user">
                                        ~ Abdillah Al-Atsary ~
                                      </p> */}
                                      <p className="text">{pesan.message}</p>
                                      <p className="time">{pesan.created_at}</p>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div className="row">
                                  <div className="col">
                                    <div className="pengirim">
                                      {/* <p className="user">
                                        ~ Syuhaib Ar Ruumy ~
                                      </p> */}
                                      <p className="text">{pesan.message}</p>
                                      <p className="time">{pesan.created_at}</p>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 limma"></div>
                <div className="col-lg ennam">
                  {/* <Input /> */}

                  <div className="innput">
                    <div className="row">
                      <div className="col">
                        <div className="row">
                          <div className="col featur-input">
                            <i
                              className="fa fa-emoji"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            ></i>

                            <div class="dropdown-menu">
                              <Emoji />
                            </div>
                            <div className="imagesy float-left">
                              <label for="upload">
                                <i
                                  className="fa fa-paperclip"
                                  aria-hidden="true"
                                  style={{ cursor: "pointer" }}
                                ></i>

                                <input
                                  type="file"
                                  id="upload"
                                  style={{ display: "none" }}
                                />
                              </label>
                            </div>
                            <input
                              type="text"
                              onChange={changeChat}
                              value={sendChat}
                              name="kirimPesan"
                              placeholder="Kirim Pesan . . ."
                            />
                            <i
                              className="fa fa-send"
                              onClick={handleSubmitChat}
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* akhir Input */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chatting;
