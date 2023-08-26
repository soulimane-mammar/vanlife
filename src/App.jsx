import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Vans from "./components/Vans";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./server";
import VanDetail from "./components/VanDetail";

function App() {
  let [vans, setVans] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/vans");
      const json = await data.json();
      setVans(json.vans);
    };

    fetchData().catch(console.error);
  }, []);

  console.log(vans);
  return (
    <main>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans vans={vans} />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
