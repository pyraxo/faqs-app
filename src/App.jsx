// import "@fontsource/poppins";
import "assets/fonts.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "pages/Home";
import Stalls from "pages/Stalls";
import Starred from "pages/Starred";
import StallInfo from "pages/StallInfo";
import LandingPage from "pages/LandingPage";

function App() {
  return (
    <Router basename="/faqs-app">
      <Routes>
        <Route path="/experiment" element={<LandingPage />} />
        <Route path="/stalls" element={<Stalls />} />
        <Route path="/stalls/:id" element={<StallInfo />} />
        <Route path="/starred" element={<Starred />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      {/* <NavBar /> */}
    </Router>
  );
}

export default App;
