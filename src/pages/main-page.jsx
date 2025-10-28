import Button from "../components/button/button.jsx";
import welcome from "../assets/welcome.png";
import Carousel from "../components/carusel/carousel.jsx";
import Feedback from "../components/feedback/feedback.jsx";
import { Link } from "react-router-dom";

const images = [
  "https://i.pinimg.com/736x/42/da/1d/42da1d3b09d57310c6250880b5c04cfa.jpg",
  "https://i.pinimg.com/736x/48/4f/57/484f57b11a1a1caaca8f8fee359575cb.jpg",
  "https://i.pinimg.com/1200x/de/8f/1a/de8f1a332e9df31fdbfefff71d424973.jpg",
  "https://i.pinimg.com/1200x/0d/c4/ad/0dc4ad8a989bd77f7fb63759cc57d1eb.jpg",
  "https://i.pinimg.com/736x/55/32/38/5532381a90960a8a392bfa27f4e23382.jpg",
  "https://i.pinimg.com/736x/50/5f/85/505f85625b1d5bc848d2fa42b19030fd.jpg",
];
const images2 = [
  "https://i.pinimg.com/736x/3d/78/6e/3d786e9b352e304b01d08aaffccec9f8.jpg",
  "https://i.pinimg.com/1200x/a3/19/f6/a319f61ec0c96818ef771a1d8c1e1e7d.jpg",
  "https://i.pinimg.com/736x/fb/3d/27/fb3d2775c40f99cdbe85ff68cbf5e2b9.jpg",
  "https://i.pinimg.com/736x/c5/fe/84/c5fe844c29b0c33bd8eb3301f2f74f5c.jpg",
  "https://i.pinimg.com/1200x/a4/3b/d8/a43bd8140c7bda2c489a64824805ff5b.jpg",
  "https://i.pinimg.com/736x/55/dc/03/55dc03eeee255a7d5d1179186c288c45.jpg",
];

function MainPage() {
  return (
    <>
      <section>
        <div className="self-center px-2 py-5 sm:px-4 md:px-20 lg:px-40">
          <div className="mx-auto max-w-7xl">
            <div className="relative min-h-[200px] md:min-h-[300px] lg:min-h-[480px]">
              <img
                src={welcome}
                alt="Добро пожаловать"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 z-20 flex flex-col items-start justify-end gap-3 p-4 text-white lg:gap-5">
                <h1 className="text-xl font-bold md:text-3xl lg:text-5xl">
                  Добро пожаловать в нашу пекарню!
                </h1>
                <p className="text-xs md:text-sm lg:text-base">
                  Уникальные торты для ваших особых моментов.
                </p>
                <Link to="/catalog"><Button>Заказать торт</Button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="self-center px-2 py-5 sm:px-4 md:px-20 lg:px-40">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-start px-4 py-5">
              <h2 className="text-xl font-bold lg:text-2xl">Будущие торты</h2>
            </div>
            <div className="px-4 py-4">
              <div className="max-w-full gap-3">
                <Carousel images={images} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="self-center px-2 py-5 sm:px-4 md:px-20 lg:px-40">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-start px-4 py-5">
              <h2 className="text-xl font-bold lg:text-2xl">Что нового?</h2>
            </div>
            <div className="px-4 py-4">
              <div className="max-w-full gap-3">
                <Carousel images={images2} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="self-center px-2 py-5 sm:px-4 md:px-20 lg:px-40">
          <div className="mx-auto max-w-7xl">
            <div className="px-4 py-5">
              <h2 className="text-xl font-bold lg:text-2xl">
                Отзывы наших клиентов
              </h2>
            </div>
            <Feedback />
          </div>
        </div>
      </section>
    </>
  );
}

export default MainPage;
