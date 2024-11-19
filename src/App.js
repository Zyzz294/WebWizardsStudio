import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ReactGA from 'react-ga4';
import { useEffect } from "react";

const TRACKING_ID="G-4YDNJY9J8Z";
function App() {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    // Send pageview with a custom path
    ReactGA.send({ hitType: "pageview", page: "/landingpage", title: "Landing Page" });
}, [])
  return (
    <div className="App">
          <Navbar />
          <Hero />
          <Skills />
          <About />
          <Work />
          <Contact />
          <Footer />
        
        
    </div>
  );
}

export default App;
