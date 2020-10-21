import React, { useState } from "react";
import "../CSS/Signup.css";
import logo from "../MEDIA/logo.png";
import { Button } from "@material-ui/core";
import { db, auth } from "./firebase.js";
import { useHistory } from "react-router-dom";
import {signInWithGoogle} from './firebase.js';

function Signup() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup_normal = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        alert(`${auth.user?.uid}`);
        alert(`${auth.user?.email}`);

        db.collection("users")
          .doc(auth.user?.uid)
          .set({
            email: auth.user?.email,
          })
          .then(alert("Email Info Saved"))
          .catch((error) => {
            alert(error.message);
          });

        history.push("/newshop");
      })
      .catch((error) => alert(error.message));
  };

  const signup_google = () => {
    alert("sign up with google");
  };

  return (
    <div className="profile">
      <div className="profile__container">
        <img src={logo} alt="logo" />

        <h1>Create New Account</h1>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email"
        ></input>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your Password"
        ></input>

        <Button onClick={signup_normal}>Create New Account</Button>

        <div class="separator">Or ?</div>

        <Button onClick={signInWithGoogle}>SignUp with Google</Button>

      </div>
    </div>
  );
}

export default Signup;
