import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import React, { useEffect } from "react";

import useLocalStorage from "hooks/useLocalStorage";

import Starred from "pages/Starred";
import StallInfo from "pages/StallInfo";
import LandingPage from "pages/ExperimentStart";
import EndingPage from "pages/ExperimentEnd";
import VersionA from "pages/HomeA";
import VersionB from "pages/HomeB";

const StartWrapper = () => {
  const [startTime] = useLocalStorage("startTime", -1);
  return startTime === -1 ? <Navigate to="/start" /> : <Outlet />;
};

function App() {
  return (
    <Router basename="/faqs-app">
      <Routes>
        <Route path="/start" element={<LandingPage />} />
        <Route element={<StartWrapper />}>
          <Route path="/end" element={<EndingPage />} />
          <Route path="/stalls" element={<StallInfo />} />
          <Route path="/stalls/:id" element={<StallInfo />} />
          <Route path="/starred" element={<Starred />} />
          <Route path="/experiment/1" element={<VersionA />} />
          <Route path="/experiment/2" element={<VersionB />} />
        </Route>

        <Route path="*" element={<Navigate to="/start" />} />
      </Routes>
    </Router>
  );
}

export default App;
