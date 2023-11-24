import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import img from "../images/addAvatar.png";
import { auth, db, storage } from "../firebase";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Register() {
  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log("File available at", downloadURL);
            await updateProfile(res.user, {
              displayName,
              photo: downloadURL,
            });
            console.log("hitting here");
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoUrl: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
          });
        }
      );

      setErr(null);
      navigate("/");
    } catch (error) {
      const errorMessage = error.message;
      setErr(error.message);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="imageFile" />
          <label htmlFor="imageFile">
            <img src={img} alt="" />
            <span>Add your Photo</span>
          </label>
          <button>Sign Up</button>
          {err && (
            <p style={{ textAlign: "center", color: "red", fontSize: "14px" }}>
              {err}
            </p>
          )}
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
}

export default Register;
