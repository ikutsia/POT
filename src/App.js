// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import ContactForm from "./ContactForm";
import Admin from "./Admin";
import NotFound from "./NotFound";
import AuthForm from "./AuthForm";
import Firebase from "./firebase";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/authform" element={<AuthForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
