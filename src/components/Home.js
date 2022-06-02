import React from "react";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import IconBar from "./IconBar";
import "../input.css";

function Home() {
  return (
    <div class="flex h-screen flex-col bg-gray-900">
      <Header />
      <div class="grid place-content-center flex-grow">
        <p class="text-center text-4xl text-white font-sans tracking-[.5em] select-none font-extrabold">
          Tony Ho
        </p>
        <p class="my-8 text-center text-2xl text-yellow-500 font-sans tracking-[0.25em] select-none">
          Full Stack Software Engineer
        </p>
        <div class="container max-w-screen-lg mx-auto">
          <div class="flex flex-wrap justify-center gap-2">
            <IconBar />
          </div>
        </div>
      </div>

      <footer class="flex items-center justify-center bottom-0 h-13 bg-gray-800">
        <p class="text-sm text-white font-sans tracking-wide select-none text-center justify-center items-center">
          made using <a class="text-cyan-400">react.js</a> and{" "}
          <a class="text-sky-600">tailwind</a>
        </p>
      </footer>
    </div>
  );
}
export default Home;
