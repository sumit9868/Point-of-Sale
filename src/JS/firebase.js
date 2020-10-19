import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyArNcPbGBvT60Kk2eHI6Y2-XiYJRr86wj4",
  authDomain: "easysell-726ad.firebaseapp.com",
  databaseURL: "https://easysell-726ad.firebaseio.com",
  projectId: "easysell-726ad",
  storageBucket: "easysell-726ad.appspot.com",
  messagingSenderId: "734897434122",
  appId: "1:734897434122:web:2630107f0e506be6a0f9f3",
  measurementId: "G-LKJQZMZV1Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
export default firebase;
