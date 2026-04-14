const gridStyles =
  "flex justify-center items-center flex-col text-xl md:text-2xl";

const TestResultsSection = () => {
  return (
    <section
      className=" bg-brandYellow bg-cover bg-center flex flex-col items-center justify-center min-h-[80vh] flex-wrap px-4"
      style={{
        backgroundImage: "url('/backgrounds/dots.png')",
      }}
    >
      <div className="flex flex-col flex-wrap  sm:w-[50%] md:w-[40%]  text-center  my-6 mx-2">
        <h3 className="text-2xl font-bold">
          Wyjaśnijmy, od czego zależy naszze szczęście, na podstawie zasady
          50-10-40
        </h3>
      </div>
      <div className="grid text-2xl  text-center gap-6 my-4 grid-cols-2 md:grid-cols-3">
        <div className={gridStyles}>
          <p className="font-bold">00%</p>
          <p>zależy od genów</p>
        </div>
        <div className={gridStyles}>
          <p className="font-bold">00%</p>
          <p>zależy od nas samych!</p>
        </div>
        <div className="md:hidden flex items-center justify-center text-xl">
          <p>Co najważniejsze...</p>
        </div>
        <div className={gridStyles}>
          <p className="font-bold">00%</p>
          <p>zależy od okoloiczności życiowych</p>
        </div>
      </div>
    </section>
  );
};

export { TestResultsSection };
