import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import { SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { Carousel } from "../../shared/Carousel";
import { FaRegSmileBeam } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { habitsCards } from "./Habit.data";
const HabitSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  useEffect(() => {
    register();
  }, []);
  return (
    <section
      className="relative flex flex-col justify-around bg-brandYellow px-4 py-12 sm:px-6 md:px-8 md:py-16 lg:py-20 overflow-visible"
      style={{ backgroundImage: "url('/backgrounds/dots.png')" }}
    >
      {" "}
      {/* GÓRNA CZĘŚĆ */}{" "}
      <div className="flex h-1/3 flex-col items-center">
        {" "}
        <h3 className="mb-6 text-lg font-bold sm:mb-8 sm:text-2xl md:text-3xl lg:text-4xl">
          {" "}
          Co chcieliśmy sprawdzić?{" "}
        </h3>{" "}
        <div className="mb-16 grid min-h-32 w-full max-w-[1000px] grid-cols-2 grid-rows-2 place-items-center items-center gap-4 text-center sm:mb-24 sm:gap-6">
          {" "}
          {/* Ikona 1 */}{" "}
          <FaRegSmileBeam className="size-6 self-end sm:size-8 md:size-10" />{" "}
          {/* Ikona 2 */}{" "}
          <MdOutlineAccessTime className="size-6 self-end sm:size-8 md:size-10" />{" "}
          {/* Tekst 1 */}{" "}
          <p className="max-w-xs text-xs leading-relaxed opacity-90 sm:text-sm md:text-lg lg:text-xl">
            {" "}
            W jaki sposób mikro-nawyki wpływają na samopoczucie?{" "}
          </p>{" "}
          {/* Tekst 2 */}{" "}
          <p className="max-w-xs text-xs leading-relaxed opacity-90 sm:text-sm md:text-lg lg:text-xl">
            {" "}
            Czy 10 minut dziennie wystarczyło, żeby dać efekt?{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
      {/* KARUZELA */}{" "}
      <div className="flex w-full flex-col items-center gap-8 text-lg font-bold sm:gap-10 sm:text-xl md:gap-12 md:text-2xl lg:text-3xl">
        {" "}
        <h3 className="text-center">
          {" "}
          Zbadaliśmy takie mikro-nawyki jak:{" "}
        </h3>{" "}
        <Carousel swiperRef={swiperRef}>
          {" "}
          {habitsCards.map((card) => (
            <SwiperSlide key={card.id} className="flex justify-center">
              {" "}
              <div
                className="relative mx-auto h-[300px] min-w-[100px] max-w-[280px] rounded-lg bg-cover bg-center bg-no-repeat shadow-xl"
                style={{ backgroundImage: `url(${card.image})` }}
              >
                {" "}
                <div className="absolute bottom-0 flex h-1/4 w-full items-center justify-center rounded-b-lg bg-white px-2 text-center text-sm font-semibold text-black">
                  {" "}
                  {card.text}{" "}
                </div>{" "}
              </div>{" "}
            </SwiperSlide>
          ))}{" "}
        </Carousel>{" "}
      </div>{" "}
      {/* DEKORACJA NA DOLE */}{" "}
      <img
        src="/backgrounds/yellow-bg.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 left-0 z-20 h-12 w-full object-cover object-bottom"
      />{" "}
    </section>
  );
};
export { HabitSection };
