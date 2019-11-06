import React from "react";
import "./List.css";
import human1 from "../../../Image/human1.jpeg";


const List = ({listGambar, listContact, keyContact}) => {
  return (
    <div></div>
    // <div className="list-profile">
    //   <div className="row innput">
    //     <div className="col">
    //       <div
    //         className="form-groupe has-search pt-3 position-sticky"
    //         style={{ top: "0", zIndex: "1" }}
    //       >
    //         <span className="fa fa-search form-control-feedback"></span>
    //         <input
    //           type="text"
    //           style={{ border: "none" }}
    //           className="form-control shadow-none"
    //           placeholder="Search Your Contact . . ."
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="row list mt-2">
    //     <div className="col">
    //       <img
    //         src={human1}
    //         alt=""
    //         width="60"
    //         height="60"
    //         className="float-left topp"
    //       />
    //       <div className="desc-list">
    //         <h5>Umar Al-Khudair</h5>
    //         <p>Bersyukur adalah untuk orang yang. . .</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="row list mt-2">
    //     <div className="col" key={keyContact}>
    //       <img
    //         src={listGambar}
    //         alt=""
    //         width="60"
    //         height="60"
    //         className="float-left topp"
    //       />
    //       <div className="desc-list">
    //         <h5>{listContact}</h5>
    //         <p>Bersyukur adalah untuk orang yang. . .</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default List;
