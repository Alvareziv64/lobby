import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar/NavBar";
import Home from "./Components/Pages/Home/Home"
import AuxFuntions from "./Components/AuxFuntions/AuxFuntions";

const App = () => {
  return (
    <div className="bg">
      <Router>
        <NavBar />
        <AuxFuntions/>
        <Routes>
        <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
