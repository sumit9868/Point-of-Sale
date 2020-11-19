import React, { useState, useEffect } from 'react'
import firebase from './firebase'
import StyleFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

var uiConfig = {
    signInflow: "popup",
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {

        signInSuccessWithAuthResult: async (authResult) => {

            const userInfo = authResult.additionalUserInfo;

            if(userInfo.isNewUser && userInfo.providerId === 'password'){
                try {
                    
                    await authResult.user.sendEmailVerification() ; 
                    console.log('Check your Email') ;
                } catch (e) {
                    console.log(e) ;
                }
            }
            return false;
        }
    }
};

const signOut = () => {
    firebase.auth().signOut().then(function () {
        console.log('Successfully Signout');
    }).catch( function () {
        console.log('Error in Signout');
    })

}


function Signup() {
    const [user, setUser] = useState();
    useEffect(() => {
        // const user = firebase.auth().currentUser;  // to recieve the info of the current user 
        
        const authObserver = firebase.auth().onAuthStateChanged((user) => {
            setUser(user)
        });
        return authObserver;
    })

    console.log( 'user' , user)

    if (user) {
        return (
            <>
                <span>welcome  {user.displayName}</span> <br />
                <small> {user.email} </small>
                <button onClick={signOut}>Sign out</button>
            </>
        )
    } else {

        return (
            <div>
                <span>Sign up page</span>
                <StyleFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        )
    }
}

export default Signup


// import React, { useState } from "react";
// import "../CSS/Signup.css";
// import logo from "../MEDIA/logo.png";
// import { Button } from "@material-ui/core";
// import { db, auth } from "./firebase.js";
// import { useHistory } from "react-router-dom";
// import {signInWithGoogle} from './firebase.js';

// function Signup() {
//   const history = useHistory();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const signup_normal = (e) => {
//     e.preventDefault();
//     auth
//       .createUserWithEmailAndPassword(email, password)
//       .then((auth) => {
//         db.collection("users")
//           .doc(auth.user?.uid)
//           .set({
//             email: auth.user?.email,
//           })
//           .then(alert("Email Info Saved"))
//           .catch((error) => {
//             alert(error.message);
//           });

//         history.push("/newshop");
//       })
//       .catch((error) => alert(error.message));
//   };

//   // eslint-disable-next-line
//   const signup_google = () => {
//     alert("sign up with google");
//   };

//   return (
//     <div className="profile">
//       <div className="profile__container">
//         <img src={logo} alt="logo" />

//         <h1>Create New Account</h1>

//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter your Email"
//         />

//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Enter your Password"
//         />

//         <Button onClick={signup_normal}>Create New Account</Button>

//         <div class="separator">Or ?</div>

//         <Button onClick={signInWithGoogle}>SignUp with Google</Button>
//       </div>
//     </div>
//   );
// }

// export default Signup;




















