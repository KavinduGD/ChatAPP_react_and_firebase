import React from "react";
import Img from "../images/img.png";
import Attach from "../images/attach.png";

function Input() {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{ display: "none" }} id="sendImg" />
        <label htmlFor="sendImg">
          <img src={Img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
}

export default Input;
