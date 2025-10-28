import history from "../assets/history.png";
import BenefitCard from "../components/benefit/benefit-card.jsx";
import Cake from "../assets/footerCake.png";
import { useEffect, useState } from "react";

const images = [
  "https://i.pinimg.com/1200x/39/80/3b/39803b2dc6f4fe4c666088e0643d7a6e.jpg",
  "https://i.pinimg.com/1200x/f9/d7/01/f9d70167fa900e094e4db595bd285711.jpg",
  "https://i.pinimg.com/736x/0d/26/ef/0d26efbca71d4b85355828079f243a88.jpg",
  "https://i.pinimg.com/736x/62/c8/9f/62c89fc9496b6da588ae1636a260b56d.jpg",
  "https://i.pinimg.com/1200x/c7/f6/0b/c7f60ba56908e3e16b709b5a549ae315.jpg",
];

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480); // Проверяем, является ли ширина экрана мобильной
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const longText =
    "В Bake мы верим, что лучшие вещи в жизни - простые, честные и сделанные с любовью. Именно поэтому мы стремимся создавать вкусные угощения, которые приносят радость в каждый момент. В нашем уютном магазине в Сан-Франциско мы создаем разнообразные торты, пирожные и многое другое, используя только лучшие ингредиенты и традиционные техники. Наша миссия - сделать так, чтобы каждый день казался особенным, поэтому мы всегда рады помочь вам найти идеальное угощение для любого события или настроения. Празднуете ли вы день рождения, балуете себя после тяжелой недели или просто хотите чего-нибудь сладкого - мы не можем дождаться, чтобы поделиться с вами магией.";

  const shortText =
    "В Bake мы создаем вкусные угощения с любовью. Наша миссия — сделать каждый день особенным. Мы используем только лучшие ингредиенты и традиционные рецепты, чтобы приносить радость в каждый момент. Празднуете ли вы день рождения, хотите порадовать себя или просто насладиться чем-то сладким — мы готовы удивить вас.";

  return (
    <>
      <section>
        <div className="self-center py-5 md:px-20 lg:px-40">
          <div className="max-w-7xl">
            <div className="relative md:min-h-[300px] lg:min-h-[480px]">
              <img
                src={history}
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 z-20 ml-[56px] flex max-w-[848px] flex-col max-[480px]:ml-[10px] md:p-0 lg:p-4">
                <div className="flex max-w-max flex-col items-start gap-5 max-[480px]:mt-10 max-[480px]:gap-2 md:translate-y-[50px] lg:translate-y-[140px]">
                  <h1 className="font-bold text-white max-[480px]:text-xl md:text-2xl lg:text-5xl">
                    Наша история
                  </h1>
                  <p className="text-start text-white max-[480px]:text-[12px] md:text-xs lg:text-base">
                    {isMobile ? shortText : longText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="self-center py-5 md:px-20 lg:px-40">
          <div className="max-w-7xl">
            <div className="px-4 pb-3 pt-5">
              <h2 className="text-start text-2xl font-bold">Наш подход</h2>
            </div>
            <div className="sm:px-3 sm:py-1 md:px-10 md:py-2 lg:px-4 lg:py-4">
              <BenefitCard />
            </div>
            <div className="px4 py-4">
              <div className="gap-8 max-[480px]:hidden md:hidden md:max-w-[450px] lg:flex lg:max-w-[176px]">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Slide ${index}`}
                    className="max-h-[176px] max-w-[176px] rounded-[12px]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="self-center py-5 sm:mx-auto md:px-20 lg:px-40">
          <div className="lg:max-w-7xl">
            <div className="relative md:flex md:items-center lg:min-h-[480px]">
              <img src={Cake} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 z-20 ml-[56px] flex max-w-[848px] flex-col p-4">
                <div className="flex max-w-max flex-col gap-8 max-[480px]:translate-y-[100px] md:translate-x-7 md:translate-y-[200px] md:items-center lg:translate-y-[316px] lg:items-start">
                  <h2 className="font-bold text-white md:text-2xl lg:text-5xl">
                    Простые и сделанные с любовью.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;