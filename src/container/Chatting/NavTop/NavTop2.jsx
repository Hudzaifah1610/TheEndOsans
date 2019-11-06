import React, {Component} from "react";
import "./NavTop2.css";
import mountain from "../../../Image/mountain.jpeg";
import { connect } from "react-redux";

class NavTop2 extends Component {
  render(){

    return (
      <div className="row in-chatt">
        <div className="col ">
            <div className="wrapp-nav-all">
              <img src={this.props.contactUser.avatar} alt="" className="float-left"/>
              <div className="wrapp-desc">
            <h5>{this.props.contactUser.name}</h5>
            <p>Online</p>
            </div>
            </div>
          </div>
        </div>
    );
  }
};

const mapStateToProps = state => ({
  contactUser : state.kontakUser
})
export default connect(mapStateToProps, null)(NavTop2);
