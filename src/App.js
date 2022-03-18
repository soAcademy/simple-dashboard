import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Covid } from "./pages/Covid";
import { Accident } from "./pages/Accident";

const App = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/covid" element={<Covid />} />
          <Route path="/accident" element={<Accident />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
