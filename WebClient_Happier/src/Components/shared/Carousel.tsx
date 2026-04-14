import { Swiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import type { Swiper as SwiperType } from "swiper";
import type { ReactNode } from "react";

type Props = {
  swiperRef: React.RefObject<SwiperType | null>;
  children: ReactNode;
};

const Carousel = ({ swiperRef, children }: Props) => {
  return (
    <div className="flex items-center justify-center w-[100%]   gap-4">
      {/* PRZYCISK LEWY */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="flex  items-center justify-center min-w-[50px] h-[50px] rounded-full border-2 border-white text-white hover:bg-white hover:text-brandBlue transition-all z-10"
      >
        <span className="text-2xl">❮</span>
      </button>

      <div className="w-full overflow-hidden">
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {children}
        </Swiper>
      </div>

      {/* PRZYCISK PRAWY */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="flex items-center justify-center min-w-[50px] h-[50px] rounded-full border-2 border-white text-white hover:bg-white hover:text-brandBlue transition-all z-10"
      >
        <span className="text-2xl">❯</span>
      </button>
    </div>
  );
};

export { Carousel };
