import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import HomeTwo from "./components/HomeTwo";
// create this

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-two" element={<HomeTwo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
