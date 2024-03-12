import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sponsor from "./components/Sponsor";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsor />
      {/* <About/>  */}
    </>
  );
}

export default App;
