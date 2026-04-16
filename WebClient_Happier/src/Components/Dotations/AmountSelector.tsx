import { useFormContext } from "react-hook-form";
import type { DotationsFormType } from "../../types";
import { FormErrorMessage } from "../shared/FormErrorMessage";

const amounts = ["10", "20", "50", "100", "200", "500"];

const AmountSelector = () => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<DotationsFormType>();

  const selectedAmount = watch("selectedAmount");

  return (
    <div className="flex flex-col  items-center gap-4 w-full relative">
      <p className=" font-bold w-full">Wpłata jednorazowa</p>
      <FormErrorMessage message={errors.customAmount?.message ?? ""} />
      <fieldset className="grid grid-cols-3 grid-rows-3 gap-4 ">
        {amounts.map((value, index) => (
          <label htmlFor={value} key={index}>
            <input
              {...register("selectedAmount", {
                onChange: () => {
                  setValue("customAmount", "");
                },
              })}
              type="radio"
              value={value}
              id={value}
              className="hidden peer"
            />
            <div
              className={`border border-black rounded-full py-1 px-2 text-center hover:bg-gray-100 transition cursor-pointer peer-checked:bg-gray-200 ${index > 2 && "row-start-2"} w-24`}
            >
              {`${value} zł`}
            </div>
          </label>
        ))}
        <input
          {...register("customAmount", {
            validate: (value) => {
              if (!value && !selectedAmount) {
                return "Wpisz kwotę lub wybierz jedną z opcji.";
              }
              return true;
            },
            onChange: () => {
              setValue("selectedAmount", "");
            },
          })}
          type="number"
          placeholder="wpisz inną kwotę"
          className="rounded-full py-1 px-2 border border-black col-span-3 row-start-3 placeholder:text-center"
        />
      </fieldset>
    </div>
  );
};

export { AmountSelector };
