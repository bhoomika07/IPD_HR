
import "./App.css";
import Timer from "./components/Timer";
import AptitudeTest from "./components/AptitudeTest";
import Records from "./components/records";
import Confirmation from "./components/confirmation";
import Register from "./components/Register";
import FindCandidates from "./components/findCandidates";
import Login from "./components/Login";
import CreateTest from "./components/CreateTest";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeScreen, Details } from "./screens";
import { Navbar } from "./components";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/findCandidates" element={<FindCandidates />} />
            <Route path="/createTest" element={<CreateTest />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/records" element={<Records />} />
            <Route path="/aptitudeTest" element={<AptitudeTest />} />
            <Route path="/timer" element={<Timer />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
