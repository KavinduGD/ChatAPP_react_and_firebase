import React from "react";

function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Login</span>
        <form action="">
          <input type="password" placeholder="email" />
          <input type="email" placeholder="password" />

          <button>Login</button>
        </form>
        <p>You don't have an account? sign up</p>
      </div>
    </div>
  );
}

export default Login;
