import React from "react";
import "./Input.css";
import Emoji from "./Emoji";

const Input = ({changeChat,value, handleSubmitChat}) => {
  return (
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

              <div className="dropdown-menu">
                <Emoji />
              </div>
              <div className="imagesy float-left">
                <label htmlFor="upload">
                  <i
                    className="fa fa-paperclip"
                    aria-hidden="true"
                    style={{ cursor: "pointer" }}
                  ></i>

                  <input type="file" id="upload" style={{ display: "none" }} />
                </label>
              </div>
              <input
                type="text"
                onChange={changeChat}
                value={value}
                name="kirimPesan"
                placeholder="Kirim Pesan . . ."
              />
              <i className="fa fa-send " onClick={handleSubmitChat} ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
