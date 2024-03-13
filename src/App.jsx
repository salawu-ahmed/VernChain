import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Pricing from "./components/Pricing";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/> 
      <Services />
      <Pricing />
    </>
  );
}

export default App;
