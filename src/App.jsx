import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/footer/podval.jsx";
import {RouterProvider } from "react-router-dom";
import { router } from "./modules/router.jsx";


function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
