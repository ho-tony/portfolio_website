import React from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import "./input.css";
import {Routes, Route, Link} from "react-router-dom";


function App() {
  return (
    <div className = "App">
        <Routes>
          <Route path="/" element = {<Home />} />

        </Routes>
    </div>
  );
}

export default App;
