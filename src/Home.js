// Home.js
import React, { useState, useEffect } from "react";
//import firebase from "./firebase";
import { firebase, firebaseui } from "./firebase";

function Home() {
  const [resume, setResume] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await firebase
        .firestore()
        .collection("resume")
        .doc("myResume")
        .get();
      setResume(response.data().content);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Portfolio</h1>
      <div className="text-lg">{resume}</div>
    </div>
  );
}

export default Home;
