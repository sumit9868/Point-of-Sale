import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../CSS/Login.css";
import logo from "../MEDIA/logo.png";
import { Button } from "@material-ui/core";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {

  
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signin_normal = (event) => {
    alert("trying to signin with id pwd");
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
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
