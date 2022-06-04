import React from "react";
import "../input.css";
function Footer() {
  return (
    <footer class="flex items-center justify-center bottom-0 h-13 bg-gray-800">
      <p class="text-sm text-white font-sans tracking-wide select-none text-center justify-center items-center">
        made using <a class="text-cyan-400">react.js</a> and{" "}
        <a class="text-sky-600">tailwind</a>
      </p>
    </footer>
  );
}
export default Footer;
