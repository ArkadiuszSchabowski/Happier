import light from "../../../assets/img/Vector.png";
import { Form } from "./Form";

const NewsletterSection = () => {
  return (
    <section
      className="bg-brandYellow flex justify-center py-24 px-4 relative z-20"
      style={{
        backgroundImage: "url('/backgrounds/dots.png')",
      }}
    >
      <div className="bg-white border border-black rounded-xl flex flex-col gap-5 max-w-[768px] py-4 px-6 md:px-12 md:py-6">
        <div className="flex w-full">
          <div className="flex items-center">
            <img src={light} alt="light icon" className="pr-2" />
          </div>
          <div className="w-full">
            <p className="font-bold text-lg md:text-2xl">
              Zapisz się do <span className="text-[#3D38F5]">newslettera</span>,
              aby poznać wyniki.
            </p>
          </div>
        </div>
        <Form />
      </div>
      <img
        src="../../../public/backgrounds/yellow-bg.png"
        alt="background"
        className="h-12 absolute -bottom-10 w-full object-cover object-bottom"
      />
    </section>
  );
};

export { NewsletterSection };
