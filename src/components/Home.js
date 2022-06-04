import React from "react";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import IconBar from "./IconBar";
import Footer from "./Footer";
import "../input.css";

function Home() {
  return (
    <div class="flex h-screen flex-col bg-[#333745]">
      <Header />
      <div class="grid place-content-center flex-grow place-items-center">
        <p class="text-center text-3xl text-[#FFFDF7] font-serif tracking-[.5em] select-none font-bold my-10">
          TONY HO
        </p>
        <div class="p-1 bg-gradient-to-tr from-amber-500 to-fuchsia-700 rounded-full">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQHJznxACTfnOw/profile-displayphoto-shrink_200_200/0/1647018597257?e=1659571200&v=beta&t=ZbbSnNadfLbGVvHewVRspkoTakFKeF0bOqzDyLIYqPI"
            class="rounded-full"
          />
        </div>

        <p class="my-8 text-center text-3xl text-[#FFFDF7] font-serif font-bold tracking-[0.25em] select-none">
          Full Stack Software Engineer
        </p>
        <IconBar />
      </div>
      <Footer />
    </div>
  );
}
export default Home;
