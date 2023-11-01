import React from "react";
import img from "../images/addAvatar.png";
function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form action="">
          <input type="text" placeholder="display name" />
          <input type="password" placeholder="email" />
          <input type="email" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="imageFile" />
          <label htmlFor="imageFile">
            <img src={img} alt="" />
            <span>Add your Photo</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
}

export default Register;
