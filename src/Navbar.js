// components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { firebase, firebaseui } from "./firebase";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <Link to="/" className="text-white mr-4">
          Home
        </Link>
        <Link to="/contact" className="text-white mr-4">
          Contact
        </Link>
        <Link to="/admin" className="text-white">
          Admin
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
