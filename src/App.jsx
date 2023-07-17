// import "@fontsource/poppins";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import NavBar from "components/Navbar";
import Home from "pages/Home";
import Stalls from "pages/Stalls";
import Starred from "pages/Starred";
import StallInfo from "pages/StallInfo";

function App() {
  return (
    <Router basename="/faqs-app">
      <Routes>
        <Route path="/stalls" element={<Stalls />} />
        <Route path="/stalls/:id" element={<StallInfo />} />
        <Route path="/starred" element={<Starred />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      <NavBar />
    </Router>
  );
}

export default App;
