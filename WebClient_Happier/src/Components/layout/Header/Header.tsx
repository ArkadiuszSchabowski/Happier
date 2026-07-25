import type { MouseEvent } from "react";
import logo from "../../../assets/global/logo.svg";
import MobileMenu from "./MobileMenu";
import { TopNavigation } from "./TopNavigation";

export default function Header() {
  const handleHeaderClick = (event: MouseEvent<HTMLElement>) => {
    const clickedElement = event.target as HTMLElement;
    const clickedLink = clickedElement.closest("a");

    if (!clickedLink) return;

    const linkText = clickedLink.textContent?.trim().toLowerCase();

    if (linkText?.includes("ambasadorzy")) {
      event.preventDefault();

      const ambassadorsSection = document.getElementById("ambasador");

      if (ambassadorsSection) {
        ambassadorsSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        window.history.replaceState(null, "", "#ambasador");
      }
    }
  };

  return (
    <header
      onClick={handleHeaderClick}
      className="sticky top-0 z-50 bg-gray-200 rounded-b-xl shadow-[0_4px_6px_rgba(0,0,0,0.25)] px-6"
    >
      <div className="container mx-auto flex items-center justify-between py-2">
        <a
          href="/"
          className="inline-flex items-center"
          aria-label="Strona główna"
        >
          <img
            width={139}
            height={53}
            src={logo}
            alt="Fundacja Szczęśliwsi logo"
          />
        </a>

        <div className="hidden lg:block">
          <TopNavigation />
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
