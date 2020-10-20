import React, { useState } from "react";
import "../CSS/Signup.css";
import logo from "../MEDIA/logo.png";
import { Button } from "@material-ui/core";
import { auth, db } from "./firebase.js";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Signup() {
  const [state,dispatch]=useStateValue();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup_normal = (e) => {
    e.preventDefault();

    // var actionCodeSettings = {
    //   url: "localhost:3000",
    //   handleCodeInApp: true,
    //   iOS: {
    //     bundleId: "com.example.ios",
    //   },
    //   android: {
    //     packageName: "com.example.android",
    //     installApp: true,
    //     minimumVersion: "12",
    //   },
    //   dynamicLinkDomain: "./",
    // };

    // auth
    //   .sendSignInLinkToEmail(email, actionCodeSettings)
    //   .then(function () {
    //     alert("Hi");

    //     window.localStorage.setItem("emailForSignIn", email);
    //   })
    //   .catch(function (error) {
    //     alert(error.code);
    //   });

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
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

        <Button onClick={signup_google}>SignUp with Google</Button>
      </div>
    </div>
  );
}

export default Signup;
