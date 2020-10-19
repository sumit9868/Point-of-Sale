import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBHW89srYuZrZrvl-akk8lhwJxEk8xEwEI",
    authDomain: "pointofsale-c6c27.firebaseapp.com",
    databaseURL: "https://pointofsale-c6c27.firebaseio.com",
    projectId: "pointofsale-c6c27",
    storageBucket: "pointofsale-c6c27.appspot.com",
    messagingSenderId: "795871630383",
    appId: "1:795871630383:web:f2b71efe9e482d4c61e2da",
    measurementId: "G-N7TX9Y1QMJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
export default firebase;
