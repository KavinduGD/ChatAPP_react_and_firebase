import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setErr(null);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErr(error.message);
      });
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Login</span>
        <form action="" onSubmit={handleLogin}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button>Login</button>
          {err && (
            <p style={{ textAlign: "center", color: "red", fontSize: "14px" }}>
              {err}
            </p>
          )}
        </form>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/register");
          }}
        >
          You don't have an account? sign up
        </p>
      </div>
    </div>
  );
}

export default Login;
