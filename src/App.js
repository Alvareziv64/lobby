import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar/NavBar";

const App = () => {
  return (
    <div className="bg">
      <Router>
        <NavBar />
        <Routes>
          <Route></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
