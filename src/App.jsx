import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from "react";

import Home from "pages/Home";
import Stalls from "pages/Stalls";
import Starred from "pages/Starred";
import StallInfo from "pages/StallInfo";
import LandingPage from "pages/ExperimentStart";
import EndingPage from "pages/ExperimentEnd";

import VersionA from "pages/HomeA";

function App() {
  return (
    <Router basename="/faqs-app">
      <Routes>
        <Route path="/start" element={<LandingPage />} />
        <Route path="/end" element={<EndingPage />} />
        <Route path="/stalls" element={<Stalls />} />
        <Route path="/stalls/:id" element={<StallInfo />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="/experiment/1" element={<VersionA />} />
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* <NavBar /> */}
    </Router>
  );
}

export default App;
