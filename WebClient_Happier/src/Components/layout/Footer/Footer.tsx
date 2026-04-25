import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { AiFillTikTok } from "react-icons/ai";
import ButtonLink from "../../shared/ButtonLink";
import { MdListAlt } from "react-icons/md";
const socialIcons = [
  {
    href: "https://www.tiktok.com/@fundacjaszczesliwsi",
    ariaLabel: "TikTok",
    icon: <AiFillTikTok className="size-10" />,
  },
  {
    href: "https://www.facebook.com/FundacjaSzczesliwsi",
    ariaLabel: "Facebook",
    icon: <FaFacebookSquare className="size-9" />,
  },
  {
    href: "https://www.youtube.com/@FundacjaSzcz%C4%99%C5%9Bliwsi",
    ariaLabel: "YouTube",
    icon: <FaYoutube className="size-10" />,
  },
  {
    href: "https://www.instagram.com/fundacja_szczesliwsi/",
    ariaLabel: "Instagram",
    icon: <FaInstagramSquare className="size-9" />,
  },
  {
    href: "https://www.linkedin.com/company/fundacja-szcz%C4%99%C5%9Bliwsi",
    ariaLabel: "LinkedIn",
    icon: <BsLinkedin className="size-8" />,
  },
];

export default function Footer() {
  return (
    <footer
      className="relative bg-brandWhite bg-cover bg-repeat py-24 px-4 min-h-[60vh] flex flex-col items-center"
      style={{
        backgroundImage: "url('/backgrounds/dots.png')",
      }}
    >
      <div className="flex flex-col items-center max-w-96 justify-center h-3/4 gap-6">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center">
          Dołącz do inicjatywy
        </h3>
        <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg">
          Chcesz pomóc w promowaniu wartościowej wiedzy naukowej? A może chcesz
          zmienić swoje nawyki?
        </p>
        <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg">
          Wesprzyj kolejną edycję badania!
        </p>
        <ButtonLink
          className="border border-black font-bold flex items-center px-6 py-3 sm:px-7 sm:py-3 text-sm sm:text-base md:text-lg lg:text-xl"
          href="#"
          color="yellow"
          variant="solid"
        >
          <MdListAlt className="size-4 mr-2" />
          Wypełnij formularz
        </ButtonLink>
        <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg">
          Każda forma pomocy jest na wagę złota!
        </p>
      </div>
      <div className="flex justify-center gap-4 my-12">
        {socialIcons.map((icon, index) => (
          <a
            href={icon.href}
            key={index}
            aria-label={icon.ariaLabel}
            rel="noopener noreferrer"
            target="_blank"
            className="h-10 w-10 rounded-lg hover:bg-gray-50 flex items-center justify-center transition-colors"
          >
            {icon.icon}
          </a>
        ))}
      </div>
      <div className="flex flex-col items-center gap-6 text-xs sm:text-sm md:text-base lg:text-lg">
        <p>#MałymiKrokami możemy być #Szczęśliwsi.</p>
        <p>Fantastycznego dnia dla Ciebie!</p>
      </div>
    </footer>
  );
}
