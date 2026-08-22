import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar/Navbar";
import Home from "./views/Home/Home";
import Campaigns from "./views/Campaigns/Campaigns";
import Hospitals from "./views/Hospitals/Hospitals";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
