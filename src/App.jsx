import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sponsor from "./components/Sponsor";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Sponsor /> */}
      <About/> 
      <Services />
    </>
  );
}

export default App;
