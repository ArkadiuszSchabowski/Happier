"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const navLinks = ["O badaniu", "Wyniki", "Ambasadorzy", "Chcę dołączyć!"];
  return (
    <div className="lg:hidden relative">
      <button
        aria-label={open ? "Zamknij menu" : "Otwórz menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="relative h-10 w-10 rounded-lg focus:outline-none z-50 cursor-pointer"
      >
        <span
          className={`absolute left-1/2 top-1/2 block h-0.5 w-7 -translate-x-1/2 -translate-y-1/2 bg-black transition-all duration-200 
            before:content-[''] before:absolute before:h-0.5 before:w-7 before:left-1/2 before:-translate-x-1/2 before:bg-black before:transition-all before:duration-200 
            after:content-[''] after:absolute after:h-0.5 after:w-7 after:left-1/2 after:-translate-x-1/2 after:bg-black after:transition-all after:duration-200 
            ${open ? "bg-transparent before:rotate-45 before:translate-y-0 after:-rotate-45 after:translate-y-0" : "before:-translate-y-2 after:translate-y-2"}`}
        />
      </button>

      {/* Dropdown menu - zaokrąglone rogi, wyśrodkowane teksty, krótsze linie */}
      {open && (
        <nav className="absolute top-full right-0 mt-2 bg-gray-200 shadow-[0_4px_6px_rgba(0,0,0,0.25)] rounded-b-xl min-w-[200px] overflow-hidden">
          <ul>
            {navLinks.map((link, index) => {
              return (
                <li key={index}>
                  <a
                    href="#TODO"
                    className="block py-3 font-bold text-sm sm:text-base hover:bg-gray-300 text-center border-b border-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
}
