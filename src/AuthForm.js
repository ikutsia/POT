// components/AuthForm.js
import React, { useEffect } from "react";
import { firebase, firebaseui } from "./firebase";

function AuthForm() {
  useEffect(() => {
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // Add other sign-in options here...
      ],
      // Other FirebaseUI configuration options...
    });
  }, []);

  return <div id="firebaseui-auth-container"></div>;
}

export default AuthForm;
