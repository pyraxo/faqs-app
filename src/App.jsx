import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React from "react";

import Home from "pages/Home";
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
        <Route path="/end" element={<EndingPage />} /> {/* Added EndingPage route */}
        <Route path="/stalls" element={<StallInfo />} />
        <Route path="/stalls/:id" element={<StallInfo />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="/experiment/1" element={<VersionA />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
