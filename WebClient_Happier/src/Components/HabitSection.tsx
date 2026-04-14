import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import { SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { Carousel } from "./shared/Carousel";

const cardText = [
  "Cieszenie się chwilą",
  "Wdzięczność",
  "Zapisywanie faktów",
  "Pozytywne stwierdzenia",
  "Picie wody rano",
  "Technika oddechowa 4/6",
];

const HabitSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  useEffect(() => {
    register();
  }, []);

  return (
    <section
      className="bg-brandYellow flex flex-col justify-around px-6 py-12 bg-[url('/backgrounds/dots.svg')] overflow-hidden"
      style={{
        backgroundImage: "url('/backgrounds/dots.png')",
      }}
    >
      <div className=" flex items-center flex-col h-1/3">
        <h3 className="font-bold text-xl mb-4">Co chcieliśmy sprawdzić?</h3>
        <div className="flex justify-around flex-wrap text-center w-full min-h-32 items-center gap-8 mb-16 md:mb-0">
          <p className="max-w-xs leading-relaxed opacity-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            aliquid
          </p>
          <p className="max-w-xs leading-relaxed opacity-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            aliquid
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center font-bold text-xl gap-10 w-full">
        <h3 className=" text-center">Zbadaliśmy takie mikro-nawyki jak:</h3>

        <Carousel swiperRef={swiperRef}>
          {cardText.map((card, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-gray-200 rounded-lg min-w-[100px] max-w-[280px] h-[300px] relative mx-auto shadow-xl">
                <div className="absolute bottom-0 text-sm h-1/4 bg-white w-full rounded-b-lg text-center flex items-center justify-center px-2 text-black font-semibold">
                  {card}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export { HabitSection };
