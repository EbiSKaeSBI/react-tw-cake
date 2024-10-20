import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Knopochka from "./components/button/Knopochka.jsx";
import welcome from "./assets/welcome.png"

function App() {
  return (
    <>
      <NavBar />
      <div className="px-40 py-5 self-center">
        <div className="max-w-7xl">
          <div className="min-h-[480px] relative">
            <img src={welcome} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 z-20 p-4   flex flex-col ">
              <div className="flex flex-col items-start gap-5 max-w-max translate-y-[284px]">
                <h1 className="text-5xl font-bold text-white">Добро пожаловать в нашу пекарню!</h1>
                <p className="text-base text-white">Уникальные торты для ваших особых моментов.</p>
                <Knopochka />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
