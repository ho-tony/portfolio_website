import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../input.css";

function Header() {
  return (
    <div class="header flex mb-4">
      <button class="w-1/3 bg-gray-800 hover:bg-gray-700 h-10 font-sans-serif text-xl sm:text-2xl text-white text-center tracking-[.15em] sm:tracking-[.20em] font-bold select-none">
        Home
      </button>
      
      <a href="https://drive.google.com/file/d/1ZdBmgnODAie_OUkWkoEPXdfG-aVmR6S1/view?usp=sharing" class="w-1/3 bg-gray-800 hover:bg-gray-700 h-10 font-sans-serif text-xl sm:text-2xl text-white text-center tracking-[.15em] sm:tracking-[.20em] font-bold select-none ">
          Resume
  
      </a>
      <button class="w-1/3 bg-gray-800 hover:bg-gray-700 h-10 font-sans-serif text-xl sm:text-2xl text-white text-center tracking-[.15em] sm:tracking-[.20em] font-bold select-none">
        Projects
      </button>
    </div>
  );
}
export default Header;
