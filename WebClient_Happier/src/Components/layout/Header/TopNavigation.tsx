import ButtonLink from "../../shared/ButtonLink";

const data = [
  { label: "O badaniu", href: "#" },
  { label: "Wyniki", href: "#" },
  { label: "Ambasadorzy", href: "#ambasador" },
  { label: "Dołącz do inicjatywy!", href: "#dolacz" },
];

export function TopNavigation() {
  return (
    <nav>
      <ul className="flex items-center">
        {data.map((item, index) => (
          <li
            key={index}
            className="px-2 py-3 font-bold whitespace-nowrap hover:text-brandGreen flex items-center transition-all"
          >
            <a href={item.href}>{item.label}</a>
            <span className="ml-2 h-[2em] border-r-2 border-black"></span>
          </li>
        ))}

        <li>
          <ButtonLink
            className="border-black border px-4 font-thin py-[2px]"
            color="green"
            variant="solid"
            href="#wesprzyj"
          >
            Wesprzyj nas
          </ButtonLink>
        </li>
      </ul>
    </nav>
  );
}