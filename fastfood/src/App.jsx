import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Nav from "../src/Components/Nav";
import Footer from "../src/Components/Footer";
import MainMenu from "./Components/Menu/MainMenu";
import "../public/style.css";
import { menuData } from "./Components/Menu/data";

function App() {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu  data={menuData}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu/:id" element={<MainMenu data={menuData} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
