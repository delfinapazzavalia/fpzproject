
import "./App.css";
import Home from "../src/components/sections/home/Home";
import Navbar from "../src/components/sections/navbar/Navbar";
import About from "../src/components/sections/about/About";
import CoursesCard from "./components/sections/cards/CoursesCards";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <CoursesCard/>
    </>
  );
}

export default App;

