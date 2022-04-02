import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../input.css";

function Header() {
  return (
    
      <div class="header flex mb-4">
        <button class="w-1/3 bg-gray-800 hover:bg-gray-700 h-10 font-sans text-xl sm:text-2xl text-white text-center tracking-[.15em] sm:tracking-[.20em] font-bold">
          <Link to="/">Home</Link>
        </button>
        <button class="w-1/3 bg-gray-800 hover:bg-gray-700 h-10 font-sans text-xl sm:text-2xl text-white text-center tracking-[.15em] sm:tracking-[.20em] font-bold">
          <Link to="/resume">Resume</Link>
        </button>
        <button class="w-1/3 bg-gray-800 hover:bg-gray-700 h-10 font-sans text-xl sm:text-2xl text-white text-center tracking-[.15em] sm:tracking-[.20em] font-bold">
          <Link to="/projects">Projects</Link>
        </button>
      </div>
  );
}
export default Header;
