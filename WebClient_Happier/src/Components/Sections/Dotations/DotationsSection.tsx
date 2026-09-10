import ButtonLink from "../../shared/ButtonLink";
const DotationsSection = () => {
  return (
    <section
      id="dotations"
      className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-visible bg-white px-6 py-20"
      style={{ backgroundImage: "url('/backgrounds/dots.png')" }}
    >
      {" "}
      {/* Główna zawartość */}{" "}
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {" "}
        <div className="relative overflow-hidden rounded-[32px] bg-[#F4F8F6] px-6 py-12 md:px-12 md:py-16">
          {" "}
          <div className="relative z-10 grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
            {" "}
            {/* LEWA STRONA */}{" "}
            <div>
              {" "}
              <h2 className="max-w-2xl text-4xl font-bold tracking-tight text-[#18352A] md:text-5xl">
                {" "}
                Pomóż nam tworzyć{" "}
                <span className="block text-[#198F51]">
                  {" "}
                  szczęśliwszą Polskę{" "}
                </span>{" "}
              </h2>{" "}
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#52665D]">
                {" "}
                Wierzymy, że szczęście zaczyna się od małych kroków. Dobrych
                relacji, wzajemnego wsparcia i troski o zdrowie psychiczne.{" "}
              </p>{" "}
              <p className="mt-4 max-w-xl leading-7 text-[#52665D]">
                {" "}
                Twoje wsparcie pozwala nam realizować projekty, angażować ludzi
                i tworzyć inicjatywy, które mają realny wpływ na jakość
                życia.{" "}
              </p>{" "}
              <ButtonLink
                href="https://patronite.pl/szczesliwsi?podglad-autora"
                color="green"
                variant="outline"
                className="mt-6 w-64 px-6 py-2"
              >
                {" "}
                Przejdź do Patronite{" "}
              </ButtonLink>{" "}
            </div>{" "}
            {/* PRAWA STRONA */}{" "}
            <div className="relative">
              {" "}
              <div className="rounded-[28px] bg-white p-7 shadow-[0_20px_60px_rgba(24,53,42,0.10)]">
                {" "}
                <div className="mb-7">
                  {" "}
                  <p className="text-sm font-medium text-[#718179]">
                    {" "}
                    Każda kwota ma znaczenie{" "}
                  </p>{" "}
                  <h3 className="mt-1 text-2xl font-bold text-[#18352A]">
                    {" "}
                    Mały krok. Wielka zmiana.{" "}
                  </h3>{" "}
                </div>{" "}
                {/* Informacja */}{" "}
                <div className="border-t border-[#E8EEEB] pt-6">
                  {" "}
                  <p className="text-sm leading-6 text-[#66776F]">
                    {" "}
                    Nie musisz robić wielkich rzeczy.{" "}
                    <span className="font-semibold text-[#18352A]">
                      {" "}
                      Wystarczy jeden mały krok razem z nami.{" "}
                    </span>{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Dekoracja na dole sekcji */}{" "}
      <img
        src="/backgrounds/white-bg.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 left-0 z-20 h-12 w-full object-cover object-bottom"
      />{" "}
    </section>
  );
};
export { DotationsSection };
