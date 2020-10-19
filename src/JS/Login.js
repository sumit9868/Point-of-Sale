import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../CSS/Login.css";
import logo from "../MEDIA/logo192.png";
import { Button } from "@material-ui/core";
import { auth,provider } from "./firebase";

function Login() {
  const history= useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin_normal = (event) => {
    alert("trying to signin with id pwd");
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in , go to personal home
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const signin_google = () => {
    alert("sign in with google");
    auth
      .signInWithPopup(provider)
      .then((result) => {
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
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

        <Button onClick={signin_normal}>Create New User</Button>

        <div class="separator"> Or ?</div>

        <Button onClick={signin_google}>Sign Up with Google</Button>
      </div>
    </div>
  );
}

export default Login;
