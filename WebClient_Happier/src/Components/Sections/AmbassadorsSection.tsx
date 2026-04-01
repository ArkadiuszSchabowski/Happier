import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { SwiperSlide } from "swiper/react";
import { Carousel } from "../shared/Carousel";

const AmbassadorsSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const ambassadors = [1, 2, 3, 4, 5, 6];

  return (
    <section
      className="bg-brandBlue py-24  overflow-hidden"
      style={{
        backgroundImage: "url('/backgrounds/dots.png')",
      }}
    >
      <div className="flex flex-col items-center gap-10 w-full px-6">
        <div className="text-white text-center">
          <h3 className="font-bold text-xl  tracking-wider mb-2">
            Ambasadorzy
          </h3>
          <p className="opacity-90">
            Tutaj znajdziecie publikacje ambasadorów naszego badania:
          </p>
        </div>
        <Carousel swiperRef={swiperRef}>
          {ambassadors.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="min-w-[100px] max-w-[280px] h-[300px] bg-white rounded-lg shadow-xl flex flex-col items-center justify-center text-black">
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-4" />
                <span className="font-bold">Ambasador {item}</span>
              </div>
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export { AmbassadorsSection };
