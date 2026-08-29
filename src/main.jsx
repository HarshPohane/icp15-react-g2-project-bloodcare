import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./views/Home/Home";
import BloodBanks from "./views/BloodBanks/BloodBanks";
import BloodRequest from "./views/BloodRequest/BloodRequest";
import Campaigns from "./views/Campaigns/Campaigns";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Donors from './views/Donors/Donors';
import FindBlood from "./views/FindBlood/FindBlood";
import Hospitals from "./views/Hospitals/Hospitals";
import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";

createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <BrowserRouter>
    <Navbar />
    <Routes>


<Route path="/" element={<Home />} />
      <Route path="/bloodbanks" element={<ProtectedRoute><BloodBanks /></ProtectedRoute>} />

      <Route path="/bloodrequest" element={<ProtectedRoute><BloodRequest /></ProtectedRoute>} />
      <Route path="/campaigns" element={<ProtectedRoute><Campaigns /></ProtectedRoute>} />
      <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
      <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
      <Route path='/donors' element={<ProtectedRoute><Donors/></ProtectedRoute>}/> 
      <Route path="/find-blood" element={<ProtectedRoute><FindBlood /></ProtectedRoute>} />
      <Route path="/hospitals" element={<ProtectedRoute><Hospitals /></ProtectedRoute>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

    </Routes>
    <Footer />
  </BrowserRouter>
  </AuthProvider>


);

