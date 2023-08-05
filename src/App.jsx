import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import React from "react";

import useLocalStorage from "hooks/useLocalStorage";

import Starred from "pages/Starred";
import StallInfo from "pages/StallInfo";
import LandingPage from "pages/ExperimentStart";
import EndingPage from "pages/ExperimentEnd";
import VersionA from "pages/HomeA";
import VersionB from "pages/HomeB";

const RedirectWrapper = () => {
  const [startTime] = useLocalStorage("startTime", -1);
  const [endTime] = useLocalStorage("endTime", -1);
  const location = useLocation();
  return endTime !== -1 ? (
    <Navigate to="/end" replace state={{ from: location }} />
  ) : startTime === -1 ? (
    <Navigate to="/start" replace state={{ from: location }} />
  ) : (
    <Outlet />
  );
};

function App() {
  return (
    <Router basename="/faqs-app">
      <Routes>
        <Route path="/start" element={<LandingPage />} />
        <Route path="/end" element={<EndingPage />} />
        <Route element={<RedirectWrapper />}>
          <Route path="/stalls/:id" element={<StallInfo />} />
          <Route path="/experiment/1" element={<VersionA />} />
          <Route path="/experiment/2" element={<VersionB />} />
          <Route path="*" element={<Navigate to="/start" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
