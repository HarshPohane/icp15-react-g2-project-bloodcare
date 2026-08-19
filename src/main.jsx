
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import Home from "./views/Home/Home.jsx";
import About from "./views/About/About.jsx";
import Contact from "./views/Contact/Contact.jsx";
import BloodBanks from "./views/BloodBanks/BloodBanks.jsx";
import BloodRequests from "./views/BloodRequests/BloodRequests.jsx";
import Campaigns from "./views/Campaigns/Campaigns.jsx";
import FindBlood from "./views/FindBlood/FindBlood.jsx";
import Hospitals from "./views/Hospitals/Hospitals.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/bloodbanks" element={<BloodBanks />} />
       <Route path="/bloodrequests" element={<BloodRequests />} />
        <Route path="/campaings" element={<Campaigns />} />
         <Route path="/findblood" element={<FindBlood />} />
          <Route path="/hospitals" element={<Hospitals />} />
    </Routes>
  </BrowserRouter>
)

   