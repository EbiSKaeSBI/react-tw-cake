// В файле AboutUs.jsx
import history from "../assets/history.png";
import Knopochka from "../components/button/Knopochka.jsx";
import Card from "../components/benefit/BenefitCard.jsx";
import Cake from "../assets/footerCake.png"
const images = [
  'https://i.pinimg.com/736x/99/4b/29/994b29a864d3cb055172fba18d3a85ed.jpg',
  'https://i.pinimg.com/736x/3e/c1/6c/3ec16c1b1eaf944cf179edce4d8b2a6d.jpg',
  'https://i.pinimg.com/736x/fd/dc/36/fddc36a4774cad74d75c3bcc2ee7338b.jpg',
  'https://i.pinimg.com/474x/d9/2f/4b/d92f4bcb48490537df8ec764899e2aae.jpg',
  'https://i.pinimg.com/474x/00/da/d0/00dad009797398de96a2055c3226f63a.jpg',
]
const AboutUs = () => {
  return (
    <>
      <section>
        <div className="lg:px-40 md:px-20 py-5 self-center">
          <div className="max-w-7xl">
            <div className="lg:min-h-[480px] md:min-h-[300px] relative">
              <img src={history} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 z-20 lg:p-4 md:p-0 flex flex-col ml-[56px] max-w-[848px] md:">
                <div className="flex flex-col items-start gap-5 max-w-max lg:translate-y-[140px] md:translate-y-[50px]  ">
                  <h1 className="lg:text-5xl md:text-2xl sm:text-xl font-bold text-white">Наша история</h1>
                  <p className="lg:text-base md:text-xs sm:text-[8px] text-white text-start"> В Vovik мы верим, что лучшие вещи в жизни - простые, честные и сделанные с любовью. Именно поэтому мы стремимся создавать вкусные угощения, которые приносят радость в каждый момент. В нашем уютном магазине в Сан-Франциско мы создаем разнообразные торты, пирожные и многое другое, используя только лучшие ингредиенты и традиционные техники. Наша миссия - сделать так, чтобы каждый день казался особенным, поэтому мы всегда рады помочь вам найти идеальное угощение для любого события или настроения. Празднуете ли вы день рождения, балуете себя после тяжелой недели или просто хотите чего-нибудь сладкого - мы не можем дождаться, чтобы поделиться с вами магией.</p>
                  <Knopochka className="" props="Заказать торт" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="lg:px-40 md:px-20 py-5 self-center">
          <div className="max-w-7xl">
            <div className="px-4 pt-5 pb-3">
              <h2 className="text-2xl font-bold text-start">Наш подход</h2>
            </div>
            <div className="lg:px-4 lg:py-4 md:px-10 md:py-2 sm:px-3 sm:py-1">
              <Card />
            </div>
            <div className="px4 py-4">
              <div className="lg:flex md:hidden  lg:max-w-[176px] md:max-w-[450px] gap-8">
              {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Slide ${index}`}
                    className="max-w-[176px] max-h-[176px] rounded-[12px]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="lg:px-40 md:px-20 py-5 self-center sm:mx-auto ">
          <div className="lg:max-w-7xl">
            <div className="lg:min-h-[480px] relative md:items-center md:flex">
              <img src={Cake} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 z-20 p-4  flex flex-col ml-[56px] max-w-[848px]">
                <div className="flex flex-col lg:items-start md:items-center gap-8 max-w-max lg:translate-y-[316px] md:translate-y-[200px] md:translate-x-7">
                  <h2 className="lg:text-5xl md:text-2xl font-bold text-white">Простые и сделанные с любовью.</h2>
                  <Knopochka className="" props="Заказать торт" />
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
