import React, { useState } from "react";
import "../CSS/Login.css";
import logo from "../MEDIA/logo192.png";
import { Button } from "@material-ui/core";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin_N = (event) => {

    alert("trying to signin with id pwd");
  };

  const signin_G = () => {
    alert("sign in with google");
  };
  
  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="logo" />

        <h1>Hi there , Pleasure Signin to your account</h1>
        
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

        <Button onClick={signin_N}>Create New User</Button>
        
        <div class="separator"> Or ?</div>
      
        <Button onClick={signin_G}>Sign Up with Google</Button>

      

      </div>

    </div>
  );
}

export default Login;
