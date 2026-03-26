import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {Navbar} from "../pages/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

export const  Navigation= ()=> {
  return (
    <div style = {{marginLeft : '650px'}}>
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
    </div>

  );
}
