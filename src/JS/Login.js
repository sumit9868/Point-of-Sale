import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../CSS/Login.css";
import logo from "../MEDIA/logo.png";
import { Button } from "@material-ui/core";
import { auth } from "./firebase.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signin_normal = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="logo" />

        <h1>Hi there , Please Signin</h1>
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

        <Button onClick={signin_normal}>Sign In</Button>
      </div>
    </div>
  );
}

export default Login;
