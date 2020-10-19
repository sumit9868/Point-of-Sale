import React, { useState } from "react";
import "../CSS/Signup.css";
import logo from "../MEDIA/logo192.png";
import { Button } from "@material-ui/core";
import { auth } from "./firebase.js";
import { useHistory } from "react-router-dom";

function Signup() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup_N = (e) => {
    alert("trying to signin with id and pass");
    // e.preventDefault();

    var actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be whitelisted in the Firebase Console.
      url: 'localhost:3000',
      // This must be true.
      handleCodeInApp: true,
      iOS: {
        bundleId: 'com.example.ios'
      },
      android: {
        packageName: 'com.example.android',
        installApp: true,
        minimumVersion: '12'
      },
      dynamicLinkDomain: './'
    };

    auth.sendSignInLinkToEmail(email, actionCodeSettings)
            .then(function() {
              alert("Hi");
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', email);
  })
  .catch(function(error) {
    alert(error.code);
    // Some error occurred, you can inspect the code: error.code
  });
    auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // it successfully created a new user with email and password
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message));
  };

  const signup_G = () => {
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

        <Button onClick={signup_N}>Create New Account</Button>

        <div class="separator">Or ?</div>

        <Button onClick={signup_G}>SignUp with Google</Button>

      </div>
    </div>
  );
}

export default Signup;
