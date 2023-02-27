import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./components/aboutme/aboutme";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
