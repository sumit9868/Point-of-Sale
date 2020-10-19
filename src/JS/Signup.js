import React, { useState } from "react";
import "../CSS/Signup.css";
import logo from "../MEDIA/logo192.png";
import { Button } from "@material-ui/core";

function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup_normal = (event) => {
    alert("trying to signin with id pwd");
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
