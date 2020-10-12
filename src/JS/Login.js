import React, { useState } from "react";
import "../CSS/Login.css";
import logo from "../MEDIA/logo192.png";
import { Button } from "@material-ui/core";


// import {auth} from "./firebase.js";
// import { useStateValue } from "./StateProvider";
// import { actionTypes } from "./reducer";

function Login() {
  // eslint-disable-next-line
  // const [state, dispatch] = useStateValue();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin_N = (event) => {

    alert("trying to signin with id pwd");
    
    // event.preventDefault();
    // auth
    //   .signInWithEmailAndPassword(email, password)
    //   .then((result) => {
    //     dispatch({
    //       type: actionTypes.SET_USER,
    //       user: result.user,
    //     });
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //   });

  };

  const signin_G = () => {

    alert("sign in with google")
    // auth
    //   .signInWithPopup(provider)
    //   .then((result) => {
    //     dispatch({
    //       type: actionTypes.SET_USER,
    //       user: result.user,
    //     });
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //   });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="logo" />

        <h1>Hi , Please Sign In</h1>
        
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

        <Button onClick={signin_N}>Sign In</Button>
        
        <div class="separator">Or ?</div>
      
        <Button onClick={signin_G}>Sign In with Google</Button>
      </div>

    </div>
  );
}

export default Login;
