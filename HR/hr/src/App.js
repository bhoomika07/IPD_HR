import "./App.css";
import {
  Timer,
  AptitudeTest,
  Confirmation,
  Register,
  Records,
  FindCandidates,
  Login,
  CreateTest,
  PerformanceDash,
  ViewApplications,
} from "./components";
import Home from "./components/Home";
import Records2 from "./components/Records2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeScreen, Details } from "./screens";
import { Navbar } from "./components";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isLogout, setIsLogout] = useState(true);
  useEffect(() => {
    setIsLogout(
      JSON.parse(localStorage.getItem("uData")) !== null ? false : true
    );

    return () => {};
  }, []);

  return (
    <div className="container">
      <Router>
        <Navbar isLogout={isLogout} setIsLogout={setIsLogout} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/login"
              element={<Login isLogout={isLogout} setIsLogout={setIsLogout} />}
            />
            <Route path="/homescreen" element={<HomeScreen />} />
            <Route path="/home" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="/findCandidates" element={<FindCandidates />} />
            <Route path="/createTest" element={<CreateTest />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/records" element={<Records />} />
            <Route path="/records2" element={<Records2 />} />
            <Route path="/aptitudeTest" element={<AptitudeTest />} />
            <Route path="/timer" element={<Timer hours="0" minutes="60" />} />
            <Route path="/performance" element={<PerformanceDash />} />
            <Route path="/applications" element={<ViewApplications />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
