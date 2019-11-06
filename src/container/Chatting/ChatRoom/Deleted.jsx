import React, { Component } from "react";
import "./Deleted.css";
import { connect } from "react-redux";
import Axios from "axios";

class Deleted extends Component {
  onClickDeletePesan = () => {
    const idDelete = this.props.deletePesan.id;
    Axios.delete(
      `https://rocky-refuge-01694.herokuapp.com/api/delete/${idDelete}`
    );
  };
  render() {
    return (
      <div
        class="modal fade deleted"
        tabindex="-1"
        role="dialog"
        aria-labelledby="mySmallModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-sm">
          <div class="modal-content">
            <p>Are you sure you want to delete 1 message?</p>
            <div class="modal-footer">
              <p data-dismiss="modal">Cancel</p>
              <p onClick={this.onClickDeletePesan} data-dismiss="modal">
                Delete
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  deletePesan: state.deletePesan
});

export default connect(mapStateToProps)(Deleted);
