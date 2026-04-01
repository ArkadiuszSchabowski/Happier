import { useEffect, useState } from "react";
import woman from "../../assets/img/woman.png";
import ButtonLink from "../shared/ButtonLink";

const colorWords = [
  { text: "emocje.", color: "text-brandPurple", delay: "delay-0" },
  { text: "szczęście.", color: "text-brandBlue", delay: "delay-1" },
  { text: "życie.", color: "text-brandGreen", delay: "delay-2" },
];

const StartSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % colorWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 bg-cover bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: "url('/backgrounds/straight-lines.svg')",
        }}
      ></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col justify-center gap-6 md:gap-8">
            <div>
              <p className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                Masz wpływ
              </p>
              <p className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl relative leading-tight h-16 sm:h-20 md:h-24">
                na twoje {""}
                {colorWords.map((word, index) => (
                  <span
                    key={index}
                    className={`fadeItem ${word.delay} ${word.color} absolute top-0 left-30 transition-opacity duration-500 ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
                  >
                    {word.text}
                  </span>
                ))}
              </p>
            </div>

            <div>
              <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                Zrób to{" "}
                <span
                  className={`${colorWords[activeIndex].color} transition-all duration-300`}
                >
                  #MałymiKrokami
                </span>
              </p>
            </div>

            <div>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-md">
                Chcemy pokazać, że zmiany na lepsze nie oznaczają wywracania
                życia do góry nogami. Wystarczy {""}
                <span className="font-bold">
                  systematyka i 10 minut dziennie!
                </span>
              </p>
            </div>

            <div>
              <ButtonLink
                color="yellow"
                variant="solid"
                href="#"
                className="inline-block border-black border px-4 py-2 rounded-2xl font-thin text-center hover:scale-105 transition-transform"
              >
                Dołącz do inicjatywy!
              </ButtonLink>
            </div>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center">
            <img
              src={woman}
              alt="woman who sit on the floor"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { StartSection };
