import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDwxC6ryZ-X4tIIHHo3l-sC1MeIvJ7w1oo",
  authDomain: "clone-22852.firebaseapp.com",
  databaseURL: "https://clone-22852-default-rtdb.firebaseio.com",
  projectId: "clone-22852",
  storageBucket: "clone-22852.appspot.com",
  messagingSenderId: "522678278785",
  appId: "1:522678278785:web:ddd67b18fc559e7238cb80"
};

const app = firebase.initializeApp(firebaseConfig)
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};