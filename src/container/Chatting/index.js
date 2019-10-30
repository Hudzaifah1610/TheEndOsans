import React, { Component } from "react";
import "./Chatting.css";

import { Redirect } from "react-router-dom";
import Axios from "axios";

import NavTop from "./NavTop/NavTop";
import NavTop2 from "./NavTop/NavTop2";
import List from "./List/List";
import ChatRoom from "./ChatRoom/ChatRoom";
import Input from "./Input/Input";

import { connect } from "react-redux";
import { handleAddFriend, handleChangeKontak } from "../../Redux/Action";

class Chatting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      contactList: [],
      isiPesan: [],
      sendChat: "",
      receiver_id: "",
      isLoading: false,
      pin: "",
      addFriend: [],
      friend_id: ""
    };
  }

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    const myState = localStorage.getItem("user");
    const dataUSer = JSON.parse(myState);
    this.setState({ user: dataUSer });

    this.props.handleAddFriends(dataUSer);
  }

  // ContactList
  componentDidMount() {
    const idUser = this.state.user.id;
    Axios.get(
      `https://rocky-refuge-01694.herokuapp.com/api/show-friend/${idUser}`
    ).then(contactList => {
      console.log("contact", contactList);
      this.setState({
        contactList: contactList.data
      });
    });
  }

  // GambarProfile
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
    const { friend_id } = tampilContact;

    this.props.handleChangeNameContact(tampilContact);

    const timeStamp = new Date();

    console.log("waktuuu", timeStamp);

    console.log("Ini yang tamil setelah diklik", tampilContact.friend_id);
    this.setState({
      receiver_id: idContact,
      friend_id
    });
    Axios.get(
      `https://rocky-refuge-01694.herokuapp.com/api/showChat/${id}/${idContact}`
    ).then(ress => {
      console.log("chatnya : ", ress);
      this.setState({ isiPesan: ress.data });
    });
  };

  //  Show Chat
  getChat = async () => {
    const { id } = this.state.user;
    const idContact = this.state.friend_id;
    await Axios.get(
      `https://rocky-refuge-01694.herokuapp.com/api/showChat/${id}/${idContact}`
    ).then(ress => {
      this.setState({ isiPesan: ress.data });
    });
  };

  //   chatdong'

  changeChat = e => {
    this.setState({
      sendChat: e.target.value
    });
  };

  handleSubmitChat = e => {
    e.preventDefault();

    const { sendChat, user, friend_id } = this.state;
    const butuhDataIni = {
      message: sendChat,
      sender_id: user.id,
      receiver_id: friend_id
    };

    console.log(butuhDataIni);
    this.setState({
      isLoading: true
    });
    Axios.post(
      "https://rocky-refuge-01694.herokuapp.com/api/storeMessage",
      butuhDataIni
    ).then(res => {
      console.log(res, "ini pesan kekirim butuh ini");
      // this.getChat();
      this.setState({
        sendChat: "",
        isLoading: false
      });
    });
  };

  // Chat Refresh
  componentDidUpdate(prevProps, prevState) {
    if (prevState) {
      this.getChat();
    }
  }

  // Keluar
  handleClickOut = () => {
    localStorage.clear("token");
    localStorage.clear("user");
    window.location.reload();
  };
  render() {
    const { user, contactList, isiPesan, sendChat } = this.state;
    const {
      handleClickOut,
      handleImage,
      handleChangeImage,
      handleChatRoomClick,
      handleSubmitChat,
      changeChat
    } = this;

    if (!localStorage.getItem("token", "user")) {
      return <Redirect to="/loginn" />;
    }
    return (
      <div className="chatting">
        <div className="containered">
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col-lg-3 sattu">
                  <NavTop
                    emailNavtop={user.email}
                    namaNavTop={user.name}
                    gambarprofile={user.avatar}
                    handleImage={handleImage}
                    handleChangeImage={handleChangeImage}
                    //keluar
                    logOut="LogOut"
                    handleClickOut={handleClickOut}
                  />
                </div>
                <div className="col-lg duwwa">
                  <NavTop2 />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 tigga">
                  {/* <List/> */}
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
                    {contactList.map(tampilContact => (
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
                </div>
                <div className="col-lg emmpat">
                  {/* <ChatRoom /> */}

                  <div className="chatroom">
                    <div className="row">
                      <div className="col all-message">
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

                  {/* akhir ChatRoom */}
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 limma"></div>
                <div className="col-lg ennam">
                  <Input
                    changeChat={changeChat}
                    value={sendChat}
                    handleSubmitChat={handleSubmitChat}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dataUser: state.dataUser
});

const mapDispatchToProps = dispatch => ({
  handleAddFriends: dataUser => dispatch(handleAddFriend(dataUser)),
  handleChangeNameContact: dataUser => dispatch(handleChangeKontak(dataUser))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chatting);
