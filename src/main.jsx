<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './views/Home/Home.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
=======
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";


import BloodBanks from "./views/BloodBanks/BloodBanks";
import BloodRequest from "./views/BloodRequest/BloodRequest";
import Campaigns from "./views/Campaigns/Campaigns";

import FindBlood from "./views/FindBlood/FindBlood";
import Hospitals from "./views/Hospitals/Hospitals";
import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>



      <Route path="/bloodbanks" element={<BloodBanks />} />
      <Route path="/bloodrequest" element={<BloodRequest />} />
      <Route path="/campaigns" element={<Campaigns />} />

      <Route path="/find-blood" element={<FindBlood />} />
      <Route path="/hospitals" element={<Hospitals />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

    </Routes>
    <Footer />
  </BrowserRouter>,

>>>>>>> ba0305d4db95371d4cac933564afe4240f35b2ca
)

