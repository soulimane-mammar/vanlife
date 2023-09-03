import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Vans from "./pages/vans/Vans";
import About from "./pages/About";
import Home from "./pages/Home";
import "./server";
import VanDetail from "./pages/vans/VanDetail";
import Layout from "./components/Layout";
import Income from "./pages/Host/Income";
import Dashboard from "./pages/Host/Dashboard";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans from "./pages/Host/HostVans";
import HostVanDetails from "./pages/Host/HostVanDetails";
import HostVanDetailsDetails from "./components/HostVanDetailsDetails";
import HostVanDetailsPricing from "./components/HostVanDetailsPricing";
import HostVanDetailsPhotos from "./components/HostVanDetailsPhotos";

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
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans vans={vans} />} />
            <Route path="vans/:id" element={<VanDetail />} />
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetails />}>
                <Route index element={<HostVanDetailsDetails />} />
                <Route path="pricing" element={<HostVanDetailsPricing />} />
                <Route path="photos" element={<HostVanDetailsPhotos />} />
              </Route>
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
