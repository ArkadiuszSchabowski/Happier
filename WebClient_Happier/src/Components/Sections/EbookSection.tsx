import ebookImg from "../../assets/img/ebook.png";
import ButtonLink from "../shared/ButtonLink";
import { AiOutlineDownload } from "react-icons/ai";
const EbookSection = () => {
  return (
    <section
      className="bg-brandPurple flex flex-col items-center justify-center min-h-[80vh] relative z-10"
      style={{
        backgroundImage: "url('/backgrounds/dots.png')",
      }}
    >
      <div className="flex items-center justify-center w-[80%] gap-6 md:gap-12 h-[400px]">
        <div className="min-w-32 w-64">
          <img src={ebookImg} alt="" className="w-full  object-cover" />
        </div>
        <div className="h-full flex flex-col justify-around">
          <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-10 text-center sm:text-left ">
            Sprawdź nasz darmowy ebook
          </h3>
          <p className="text-white mb-6 text-xs sm:text-sm md:text-base lg:text-lg">
            <span className="font-bold">
              "Depresja - Kompleksowy przewodnik o wszystkich aspektach
              choroby",
              <br />
            </span>
            <span className="font-thin">
              opracowany przez Agatę Brandt oraz Fundację Szczęśliwsi.
            </span>
          </p>
          <ButtonLink
            color="yellow"
            href="https://www.worldhappiness.report/ed/2022/exploring-the-biological-basis-for-happiness/"
            variant="solid"
            className="border border-black w-48 text-base text-center font-thin flex justify-around items-center"
          >
            <AiOutlineDownload className="text-2xl" />
            Pobierz ebook
          </ButtonLink>
        </div>
      </div>
      <img
        src="/backgrounds/purple-bg.png"
        alt="background"
        className="h-12 absolute -bottom-10 w-full object-cover object-bottom"
      />
    </section>
  );
};

export { EbookSection };
