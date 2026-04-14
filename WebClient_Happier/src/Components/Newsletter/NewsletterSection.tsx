import light from "../../assets/img/Vector.png";
import { Form } from "./Form";

const NewsletterSection = () => {
  return (
    <section
      className="bg-brandYellow flex justify-center py-24 px-4 "
      style={{
        backgroundImage: "url('/backgrounds/dots.png')",
      }}
    >
      <div className="bg-white rounded-xl flex flex-col gap-5 max-w-[600px] py-4 px-6 md:px-12 md:py-6">
        <div className="flex w-full">
          <div className="flex items-center">
            <img src={light} alt="light icon" className="pr-2" />
          </div>
          <div className="w-[80%]">
            <p className="font-bold text-lg md:text-2xl">
              Zapisz się do <span className="text-[#3D38F5]">newslettera</span>
            </p>
            <p className="text-sm font-thin">aby poznać wyniki badania.</p>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
};

export { NewsletterSection };
