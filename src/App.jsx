import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import welcome from "./assets/welcome.png"

function App() {
  return (
    <>
      <NavBar />
      <div className="px-40 py-5  self-center">
        <div className="max-w-7xl">
          <div className="min-h-[480px]">
               <img src={welcome} alt="" />
               
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
