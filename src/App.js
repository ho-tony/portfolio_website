import React from "react";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import "./input.css";

function App() {
  return (
    <div>
      <Home></Home>
    </div>
  );
}

export default App;
