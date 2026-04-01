const gridStyles =
  "flex justify-center items-center flex-col text-xl md:text-2xl w-[80%]";

const TestResultsSection = () => {
  return (
    <section
      className=" bg-brandYellow bg-cover bg-center flex flex-col items-center justify-center min-h-[80vh] flex-wrap px-4 relative"
      style={{
        backgroundImage: "url('/backgrounds/dots.png')",
      }}
    >
      <img
        src="../../public/backgrounds/yellow-bg.png"
        alt="background"
        className="h-12 absolute -top-10 w-full object-cover object-top"
      />
      <div className="flex flex-col flex-wrap  text-center  mt-6 mb-12 mx-2">
        <h3 className="text-3xl font-bold max-w-[700px]">
          Wyjaśnijmy, jak zbudować trwały dobrostan w oparciu o najnowsze
          odkrycia neurobiologii i psychologii.
        </h3>
      </div>
      <div className="grid text-2xl  text-center gap-8 my-4 grid-cols-2 lg:grid-cols-3 h-64 place-items-center">
        <div className={gridStyles}>
          <p className="font-bold">~40% zależy od naszej biologii i genów.</p>
          <p className="text-sm">
            To nasz ewolucyjny punkt startowy, z którym się rodzimy.
          </p>
        </div>
        <div className={gridStyles}>
          <p className="font-bold">Nawet 60% to wpływ środowiska i relacji.</p>
          <p className="text-sm">
            To ogromna przestrzeń Twoich osobistych doświadczeń i więzi
            społecznych.
          </p>
        </div>
        <div className={`${gridStyles} col-span-2 w-full lg:col-span-1`}>
          <p className="font-bold">
            (Co najważniejsze): Twoje działania kształtują te 60%!
          </p>
          <p className="text-sm">
            Szczęście to umiejętność. Wystarczy 10 minut celowego działania
            dziennie, by wpłynąć na swoje środowisko, biologię i relacje.
          </p>
        </div>
      </div>
    </section>
  );
};

export { TestResultsSection };
