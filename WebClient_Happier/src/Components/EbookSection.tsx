import ebookImg from "../assets/img/ebook.png";
import ButtonLink from "./shared/ButtonLink";
import { AiOutlineDownload } from "react-icons/ai";
const EbookSection = () => {
  return (
    <section
      className="bg-brandPurple flex flex-col items-center justify-center h-[60vh]"
      style={{
        backgroundImage: "url('/backgrounds/dots.png')",
      }}
    >
      <h3 className="text-white text-2xl md:text-4xl font-bold mb-10">
        Sprawdź nasz darmowy ebook
      </h3>
      <div className="flex items-center justify-center w-[80%] gap-6 md:gap-12">
        <div>
          <img src={ebookImg} alt="" className="w-32 object-cover" />
        </div>
        <div className="w-1/2">
          <p className="text-white mb-6 text-sm md:text-lg">
            <span className="font-bold">
              "Depresja - Kompleksowy przewodnik o wszystkich aspektach
              choroby",
            </span>
            <span className="font-thin">
              opracowany przez Agatę Brandt oraz Fundację Szczęśliwsi.
            </span>
          </p>
          <ButtonLink
            color="yellow"
            href="#"
            variant="solid"
            className="border border-black w-32 text-base  md:w-48 text-center font-thin flex justify-around items-center"
          >
            <AiOutlineDownload className="text-2xl" />
            Pobierz ebook
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export { EbookSection };
