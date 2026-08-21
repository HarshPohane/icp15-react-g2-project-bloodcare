import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";

import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";

function App() {
  const path = window.location.pathname;
  console.log["current Path means current route:", path];
  if (path === "/") {
    return (
      <>
       
        <Home />
        
      </>
    );
  }
  else if (path === "/about") {
    return (
      <>
      
        <About />
       
      </>
    );
  }
  else if (path === "/contact") {
    return (
      <>
       
        <Contact />
        
      </>
    );
  }

}
export default App;
