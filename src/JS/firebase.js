
import firebase from 'firebase/app';
import  "firebase/firestore";
import 'firebase/auth';
const config = {
  apiKey: "AIzaSyBHW89srYuZrZrvl-akk8lhwJxEk8xEwEI",
    authDomain: "pointofsale-c6c27.firebaseapp.com",
    databaseURL: "https://pointofsale-c6c27.firebaseio.com",
    projectId: "pointofsale-c6c27",
    storageBucket: "pointofsale-c6c27.appspot.com",
    messagingSenderId: "795871630383",
    appId: "1:795871630383:web:f2b71efe9e482d4c61e2da",
    measurementId: "G-N7TX9Y1QMJ"
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  promt: "select_account",
});
export const signInWithGoogle = () =>    auth.signInWithPopup(provider);
