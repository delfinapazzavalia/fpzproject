
import "./App.css";

import Navbar from "../src/components/sections/navbar/Navbar";
import Welcome from "../src/components/sections/welcome/Welcome";
import About from "../src/components/sections/about/About";
import Skills from "../src/components/sections/skills/Skills";
import Projects from "../src/components/sections/projects/Projects";
import Contact from "../src/components/sections/contact/Contact";
import Footer from "../src/components/sections/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

