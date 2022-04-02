import React from "react";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import "../input.css";

function Home() {
  return (
    <div class="h-screen flex-col bg-gray-900">
      <div class="header flex mb-4">
        <button class="w-1/3 bg-gray-800 hover:bg-gray-700 h-10 font-sans text-xl sm:text-2xl text-white text-center tracking-[.15em] sm:tracking-[.20em] font-bold">
          {/* <Link to="/">Home</Link> */}
          Home
        </button>
        <button class="w-1/3 bg-gray-800 hover:bg-gray-700 h-10 font-sans text-xl sm:text-2xl text-white text-center tracking-[.15em] sm:tracking-[.20em] font-bold">
          {/* <Link to="/resume">Resume</Link> */}
          Resume
        </button>
        <button class="w-1/3 bg-gray-800 hover:bg-gray-700 h-10 font-sans text-xl sm:text-2xl text-white text-center tracking-[.15em] sm:tracking-[.20em] font-bold">
          {/* <Link to="/projects">Projects</Link> */}
          Projects
        </button>
      </div>
      <div class="flex flex-col items-center justify-center h-5/6">
        <p class="text-4xl text-white font-sans tracking-[.5em] select-none font-extrabold">
          Tony Ho
        </p>
        <p class="my-8 text-2xl text-yellow-500 font-sans tracking-[0.25em] select-none text-center">
          Full Stack Software Engineer
        </p>
      </div>
      <footer class="flex items-center justify-center h-16 bg-gray-800">
        <p class="text-sm text-white font-sans tracking-wide select-none text-center justify-center items-center">
          made using <a class="text-cyan-400">react.js</a> and{" "}
          <a class="text-sky-600">tailwind</a>
        </p>
      </footer>
      {/* <Routes>
          <Routes path="/"
          </Routes
          <Route path="/resume"></Route>
          <Route path="/projects"></Route>
        </Routes> */}
    </div>
  );
}
export default Home;
