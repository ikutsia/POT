// firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import * as firebaseui from "firebaseui";

const firebaseConfig = {
  apiKey: "AIzaSyDUuFBxzZT0MVVn96hU40yoTkddxwK5EOA",
  authDomain: "potik-77a97.firebaseapp.com",
  projectId: "potik-77a97",
  storageBucket: "potik-77a97.appspot.com",
  messagingSenderId: "540610544989",
  appId: "1:540610544989:web:e2063642e6d819a51854b4",
  measurementId: "G-K16V6FBBMW",
  // Add other Firebase config properties here...
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase, firebaseui };
