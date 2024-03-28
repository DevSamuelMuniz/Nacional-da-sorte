import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Pages
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Cadastro from "./pages/cadastro/cadastro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;
