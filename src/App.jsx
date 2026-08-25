import { Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import Hospitals from "./views/Hospitals/Hospitals";
import Campaigns from "./views/Campaigns/Campaigns";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hospitals />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/campaigns" element={<Campaigns />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
