import React from "react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes } from "react-router";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <App />
    </Routes>
  </BrowserRouter>
);