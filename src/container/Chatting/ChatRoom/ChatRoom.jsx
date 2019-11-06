import React from "react";
import "./ChatRoom.css";

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div></div>
      // <div className="chatroom">
      //   <div className="row">
      //     <div className="col">
      //       <div className="row">
      //         <div className="col">
      //           <div className="penerima">
      //             <p className="user">~ Abdillah Al-Atsary ~</p>
      //             <p className="text">
      //               Kasih aku nasihat kawan agar aku menjadi pribadi yang lebih
      //               baik
      //             </p>
      //             <p className="time">09:55 PM</p>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="row">
      //         <div className="col">
      //           <div className="pengirim">
      //             <p className="user">~ Syuhaib Ar Ruumy ~</p>
      //             <p className="text">
      //               Waktu itu lebih berharga daripada emas kawan, maka jangan
      //               sia2kan waktu walaupun sedikit
      //             </p>
      //             <p className="time">09:55 PM</p>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default ChatRoom;
