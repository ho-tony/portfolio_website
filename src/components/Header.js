import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../input.css";

function Header() {
  return (
    <div class="header flex mb-4">
      <a class="w-1/4 bg-gray-800 hover:bg-gray-700 h-10 font-sans-serif text-xl sm:text-2xl text-white text-center tracking-[.15em] sm:tracking-[.20em] font-bold select-none">
        Home
      </a>

      <a href="https://drive.google.com/file/d/1ZdBmgnODAie_OUkWkoEPXdfG-aVmR6S1/view?usp=sharing" class="w-1/4 bg-gray-800 hover:bg-gray-700 h-10 font-sans-serif text-xl sm:text-2xl text-white text-center tracking-[.15em] sm:tracking-[.20em] font-bold select-none">
        About
      </a>
      
      <a href="https://drive.google.com/file/d/1ZdBmgnODAie_OUkWkoEPXdfG-aVmR6S1/view?usp=sharing" class="w-1/4 bg-gray-800 hover:bg-gray-700 h-10 font-sans-serif text-xl sm:text-2xl text-white text-center tracking-[.15em] sm:tracking-[.20em] font-bold select-nonex">Resume</a>
      
      <a href="https://drive.google.com/file/d/1ZdBmgnODAie_OUkWkoEPXdfG-aVmR6S1/view?usp=sharing" class="w-1/4 bg-gray-800 hover:bg-gray-700 h-10 font-sans-serif text-xl sm:text-2xl text-white text-center tracking-[.15em] sm:tracking-[.20em] font-bold select-none">
        Projects
      </a>
     
    </div>
  );
}
export default Header;
