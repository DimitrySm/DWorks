import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hire from "./components/Hire/Hire";
import Inner from "./components/Inner/Inner";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Inner />
      <Projects />
      <Hire />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
