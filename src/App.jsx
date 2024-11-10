import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Knopochka from "./components/button/Knopochka.jsx";
import welcome from "./assets/welcome.png"
import Carousel from "./components/carusel/Carousel.jsx";
import Feedback from "./components/feedback/otziv.jsx";
import Footer from "./components/footer/podval.jsx";

const images = [
  "https://i.pinimg.com/control/564x/ee/ca/de/eecade9a4ccb35324114d037e3e91a88.jpg",
  "https://i.pinimg.com/control/564x/41/2b/42/412b4230f2f1c0d7b15c8afba1a6413e.jpg",
  "https://i.pinimg.com/control/564x/53/71/25/537125b34d18eeffa9c088932b535567.jpg",
  "https://i.pinimg.com/control/736x/d8/17/b0/d817b0f0d2b3136f33900dcca09d89d7.jpg",
  "https://i.pinimg.com/control/564x/9b/3f/8c/9b3f8cf5a0cb75aa559ee25bd839f23f.jpg",
  "https://i.pinimg.com/736x/f9/56/2a/f9562ad1110e6c989452ec051096d27b.jpg",

]
const images2 = [
  "https://i.pinimg.com/564x/cf/42/7e/cf427ec7f300d872ed306975d0f8cfa1.jpg",
  "https://i.pinimg.com/564x/64/da/b4/64dab420786f113e5e1a240ffbb389e1.jpg",
  "https://i.pinimg.com/control/564x/d9/f9/c4/d9f9c409bf3fff547d13e16cb80eb1aa.jpg",
  "https://i.pinimg.com/control/564x/ab/88/cc/ab88cc46a10cdd9d2cb50699671b3b59.jpg",
  "https://i.pinimg.com/control/564x/32/04/66/3204669c72e0c7bd26ad026be83a879c.jpg",
  "https://i.pinimg.com/564x/08/39/09/083909bb22092ce248788a403247a9df.jpg"
]

function App() {
  return (
    <>
      <section>
        <NavBar />
        <div className="px-40 py-5 self-center">
          <div className="max-w-7xl">
            <div className="min-h-[480px] relative">
              <img src={welcome} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 z-20 p-4   flex flex-col">
                <div className="flex flex-col items-start gap-5 max-w-max translate-y-[284px]  ">
                  <h1 className="text-5xl font-bold text-white">Добро пожаловать в нашу пекарню!</h1>
                  <p className="text-base text-white">Уникальные торты для ваших особых моментов.</p>
                  <Knopochka props="Заказать" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-40 py-5 self-center">
          <div className="max-w-7xl">
            <div className="max-h-[60px] px-4 py-5 flex justify-start items-center">
              <div>
                <h2 className="text-2xl  font-bold">Будующие торты</h2>
              </div>
            </div>
            <div className="px-4 py-4">
              <div className="gap-3 max-h-96 max-w-5xl">
                <Carousel images={images} />
              </div>
            </div>
            <div className="max-h-[60px] px-4 py-5 flex justify-start items-center">
              <div>
                <h2 className="text-2xl  font-bold">Что нового?</h2>
              </div>
            </div>
            <div className="px-4 py-4">
              <div className="gap-3 max-h-96 max-w-5xl">
                <Carousel images={images2} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-40 py-5 self-center">
          <div className="max-w-7xl">
            <div className="max-h-[60px] px-4 py-5 flex justify-start items-center">
              <h2 className="text-2xl font-bold">Отзывы наших клиентов</h2>
            </div>
          </div>
            <Feedback />
        </div>
      </section>
      <section>
        <Footer/>
      </section>
    </>
  );
}

export default App;
