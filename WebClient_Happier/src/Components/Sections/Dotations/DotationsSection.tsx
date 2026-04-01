import type { DotationsFormType } from "../../../types";
import { AmountSelector } from "./AmountSelector";
import { PersonalFields } from "./PersonalFields";
import { FormProvider, useForm } from "react-hook-form";
import { PolicyCheckbox } from "./PolicyCheckbox";

const DotationsSection = () => {
  const methods = useForm<DotationsFormType>();
  const onSubmit = (data: DotationsFormType) => {
    console.log(data);
  };

  return (
    <section
      className="bg-white flex flex-col items-center justify-center py-12 px-6 relative"
      style={{
        backgroundImage: "url('./backgrounds/dots.png')",
      }}
    >
      <h3 className="text-2xl md:text-4xl font-bold mb-10">Wesprzyj nas</h3>
      <div className="p-6 border border-black rounded-2xl max-w-[650px] bg-white">
        <FormProvider {...methods}>
          <form
            className="grid grid-cols-1 md:grid-cols-2 md:h-80 "
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            {/* Left side */}
            <div className="flex flex-col gap-4 mb-6">
              <PersonalFields />
              <PolicyCheckbox />
            </div>
            {/* Right side */}
            <div className="flex flex-col items-center justify-between">
              <AmountSelector />
              <button
                type="submit"
                className="border-black border mt-10 md:mt-0 md:mb-10 max-w-56 rounded-full px-4 py-1 bg-[#198F51] text-white"
              >
                Wesprzyj przez PayU
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
      <img
        src="../../../public/backgrounds/white-bg.png"
        alt="background"
        className="h-12 absolute -bottom-10 w-full object-cover object-bottom"
      />
    </section>
  );
};

export { DotationsSection };
