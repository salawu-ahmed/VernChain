import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/> 
      <Services />
      <Pricing />
      <CTA />
    </>
  );
}

export default App;
