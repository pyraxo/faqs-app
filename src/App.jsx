import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from "react";

import Starred from "pages/Starred";
import StallInfo from "pages/StallInfo";
import LandingPage from "pages/ExperimentStart";
import EndingPage from "pages/ExperimentEnd";

import VersionA from "pages/HomeA";
import VersionB from "pages/HomeB";

function App() {
  return (
    <Router basename="/faqs-app">
      <Routes>
        <Route path="/start" element={<LandingPage />} />
        <Route path="/end" element={<EndingPage />} />
        <Route path="/stalls" element={<StallInfo />} />
        <Route path="/stalls/:id" element={<StallInfo />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="/experiment/1" element={<VersionA />} />
        <Route path="/experiment/2" element={<VersionB />} />
        <Route path="*" element={<Navigate to="/start" />} />
      </Routes>
    </Router>
  );
}

export default App;
