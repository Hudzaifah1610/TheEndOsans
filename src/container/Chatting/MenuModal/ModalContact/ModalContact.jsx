import React, { Component } from "react";
import "./ModalContact.css";
import human1 from "../../../../Image/human1.jpeg";
import { connect } from "react-redux";
import { handleAddFriend } from "../../../../Redux/Action";
import Axios from "axios";
class ModalContact extends Component {
  state = {
    inputSearch: "",
    user: [],
    pin: "",
    addFriend: []
  };

  // onChangeInput = e => {
  //   console.log(e.target.value);
  // };

  // handleSubmitAdd = () => {

  // }

  // Add Friend
  onChangeAddFriend = e => {
    e.preventDefault();

    const { value } = e.target;
    this.setState({
      pin: value
    });
  };

  onSubmitAddFriend = e => {
    e.preventDefault();
    const { pin } = this.state;
    console.log(pin);

    Axios.post("https://rocky-refuge-01694.herokuapp.com/api/search", pin).then(
      ress => {
        console.log("data add friend yg baru => ", ress.data);
        this.setState(
          {
            addFriend: ress.data
          },
          () => {
            console.log("berhasil", this.state.addFriend);
          }
        );
      }
    );
  };

  componentWillMount() {
    const dataUSer = localStorage.getItem("user");
    const userData = JSON.parse(dataUSer);

    this.setState(
      {
        user: userData
      },
      () => {
        console.log("tesku", this.state.user);
      }
    );
  }

  refreshFrend = () => {
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

  handleAddFriend = searchList => {
    console.log(searchList);
    const friend_id = searchList.id;
    const { id } = this.state.user;
    Axios.post(
      `https://rocky-refuge-01694.herokuapp.com/api/add-friend/${id} `,
      { friend_id }
    ).then(res => {
      this.refreshFrend()
      console.log(res);
    });
  };

  render() {
    const { handleAddFriend } = this;
    return (
      <div className="modalcontact">
        <div
          class="modal fade"
          id="contact"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Add Your Friend
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  style={{ color: "white" }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form onSubmit={this.onSubmitAddFriend}>
                <input
                  type="text"
                  placeholder="Search your friend . . ."
                  onChange={this.onChangeAddFriend}
                  value={this.state.pin}
                />
              </form>
              {/* <div class="modal-body overflow-auto">
                <div className="row all-desc-friend">
                  <div className="col in-friend">
                    <img src={human1} alt="" className="float-left" />
                    <div className="desc-friend">
                      <h6>{this.props.dataUSer}</h6>
                      <p>Online</p>
                      <i className="btn btn-primary fa fa-plus"></i>
                    </div>
                  </div>
                </div>
                <div className="row all-desc-friend">
                  <div className="col in-friend">
                    <img src={human1} alt="" className="float-left" />
                    <div className="desc-friend">
                      <h6>nama</h6>
                      <p>Online</p>
                      <i className="btn btn-primary fa fa-plus"></i>
                    </div>
                  </div>
                </div>
              </div> */}

              {this.state.addFriend.map(searchList => (
                <div className="all-modal-contact">
                  <div className="row list" key={searchList.id}>
                    <div className="col">
                      <img
                        src={searchList.avatar}
                        alt=""
                        width="60"
                        height="60"
                        className="float-left topp"
                      />
                      <div className="desc-list">
                        <h5>{searchList.name}</h5>
                        <p>Online</p>
                        {/* <p>Bersyukur adalah untuk orang yang. . .</p> */}
                        <i
                          className="btn btn-primary fa fa-plus"
                          onClick={() => handleAddFriend(searchList)}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary bton-close"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalContact;
