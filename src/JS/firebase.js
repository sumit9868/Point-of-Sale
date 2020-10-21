import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHe7tV7VlOxFO5FOFPFcK_ZX0hEnzplc0",
  authDomain: "chaloonlinepointofsale.firebaseapp.com",
  databaseURL: "https://chaloonlinepointofsale.firebaseio.com",
  projectId: "chaloonlinepointofsale",
  storageBucket: "chaloonlinepointofsale.appspot.com",
  messagingSenderId: "140818413504",
  appId: "1:140818413504:web:ffc59bdf870782ac683a25",
  measurementId: "G-TTTGBED93M"
};
// eslint-disable-next-line
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  promt: "select_account",
});
export const signInWithGoogle = () =>    auth.signInWithPopup(provider);
export { db, auth, provider };
export default firebase;
