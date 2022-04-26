import "./App.css";
import {
  Timer,
  AptitudeTest,
  Confirmation,
  Register,
  FindCandidates,
  Login,
  CreateTest,
  PerformanceDash,
  ViewApplications,
} from "./components";
import Records from './components/Records';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeScreen, Details } from "./screens";
import { Navbar } from "./components";
import 'bootstrap/dist/css/bootstrap.min.css';

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
