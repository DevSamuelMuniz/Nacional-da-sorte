import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Pages
import Login from "./pages/login/login";
import Home from "./pages/home/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
