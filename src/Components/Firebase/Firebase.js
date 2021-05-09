import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA13K2Cgz6EzzK6K8kFN0dPyKonHmkGHYE",
  authDomain: "react--clone-ii.firebaseapp.com",
  projectId: "react--clone-ii",
  storageBucket: "react--clone-ii.appspot.com",
  messagingSenderId: "386691963815",
  appId: "1:386691963815:web:9e9aadb6172a9038653482",
  measurementId: "G-1SLBGW7HXX",
});

export const auth = firebase.auth();
