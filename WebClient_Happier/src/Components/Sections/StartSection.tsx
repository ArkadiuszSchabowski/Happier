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
    <section className="relative grid grid-cols-1 md:grid-cols-2 min-h-screen ">
      <div
        className="opacity-30 bg-cover bg-no-repeat absolute inset-0"
        style={{
          backgroundImage: "url('/backgrounds/straight-lines.svg')",
        }}
      ></div>
      <div className="flex flex-col  z-20 w-full max-w-[500px] px-6 py-12 md:py-24 gap-8">
        <div>
          <p className="font-bold text-3xl md:text-5xl lg:text-6xl ">
            Masz wpływ
          </p>
          <p className="font-bold text-3xl md:text-5xl lg:text-6xl relative ">
            na twoje {""}
            {colorWords.map((word, index) => (
              <span
                key={index}
                className={`fadeItem ${word.delay} ${word.color} absolute top-0  transition-opacity duration-500 ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
              >
                {word.text}
              </span>
            ))}
          </p>
        </div>
        <div>
          <p className="font-bold text-xl">
            Zrób to{" "}
            <span
              className={`${colorWords[activeIndex].color} transition-all duration-300`}
            >
              #MałymiKrokami
            </span>
          </p>
        </div>
        <div>
          <p>
            Chcemy pokazać, że zmiany na lepsze nie oznaczają wywracania życia
            do góry nogami. Wystarczy {""}
            <span className="font-bold">systematyka i 10 minut dziennie!</span>
          </p>
        </div>
        <div>
          <ButtonLink
            color="yellow"
            variant="solid"
            href="#"
            className="border-black border px-4 w-full max-w-48 rounded-2xl font-thin text-center z-20"
          >
            Dołącz do inicjatywy!
          </ButtonLink>
        </div>
      </div>
      <div className="flex items-end justify-center md:justify-center md:items-center px-6 md:px-10 absolute -bottom-10 right-0 z-30 md:static">
        <img
          src={woman}
          alt="woman who sit on the floor"
          className="w-[300px] sm:w-[350px] md:w-[380px] lg:w-[500px] object-contain"
        />
      </div>
    </section>
  );
};

export { StartSection };
