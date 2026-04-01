const gridStyles =
  "flex justify-center items-center flex-col text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl w-[90%] sm:w-[85%] md:w-[80%] gap-12";

const TestResultsSection = () => {
  return (
    <section
      className="bg-brandYellow bg-cover bg-center flex flex-col items-center justify-center min-h-[80vh] flex-wrap px-4 sm:px-6 md:px-8 relative pb-12 sm:pb-20 md:pb-36 pt-12 sm:pt-16 md:pt-20"
      style={{
        backgroundImage: "url('/backgrounds/dots.png')",
      }}
    >
      <img
        src="/backgrounds/yellow-bg.png"
        alt="background"
        className="h-12 absolute -top-10 w-full object-cover object-top"
      />
      <div className="flex flex-col flex-wrap text-center mt-6 mb-8 sm:mb-12 md:mb-16 mx-2 max-w-4xl">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Wyjaśnijmy, jak zbudować trwały dobrostan w oparciu o najnowsze
          odkrycia neurobiologii i psychologii.
        </h3>
      </div>
      <div className="grid text-center gap-12 sm:gap-8 md:gap-10 my-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full place-items-center">
        <div className={gridStyles}>
          <p className="font-bold">~40% zależy od naszej biologii i genów.</p>
          <p className="text-xs sm:text-sm md:text-base lg:text-xl">
            To nasz ewolucyjny punkt startowy, z którym się rodzimy.
          </p>
        </div>
        <div className={gridStyles}>
          <p className="font-bold">Nawet 60% to wpływ środowiska i relacji.</p>
          <p className="text-xs sm:text-sm md:text-base mt-2 lg:text-xl">
            To ogromna przestrzeń Twoich osobistych doświadczeń i więzi
            społecznych.
          </p>
        </div>
        <div
          className={`${gridStyles} sm:col-span-2 lg:col-span-1 w-[90%] sm:w-[85%] md:w-[80%]`}
        >
          <p className="font-bold">
            (Co najważniejsze): Twoje działania kształtują te 60%!
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-xl">
            Szczęście to umiejętność. Wystarczy 10 minut celowego działania
            dziennie, by wpłynąć na swoje środowisko, biologię i relacje.
          </p>
        </div>
      </div>
    </section>
  );
};

export { TestResultsSection };
