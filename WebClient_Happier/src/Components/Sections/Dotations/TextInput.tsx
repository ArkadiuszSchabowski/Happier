import type { UseFormRegisterReturn } from "react-hook-form";
import { FormErrorMessage } from "../../shared/FormErrorMessage";

type TextInputType = {
  title?: string;
  type: "text" | "email" | "checkbox" | "number";
  placeholder?: string;
  error?: string;
  registration: UseFormRegisterReturn;
  className?: string;
};

const TextInput = ({
  title,
  type,
  placeholder,
  error,
  registration,
  className,
}: TextInputType) => {
  return (
    <label className="flex flex-col font-bold relative text-xs sm:text-sm md:text-base lg:text-lg">
      {title}
      <FormErrorMessage message={error ?? ""} />
      <input
        {...registration}
        type={type}
        className={`${className} border border-black rounded-full md:max-w-64 py-1 px-2 mt-2 font-thin text-xs sm:text-sm ${error ? "border-red-500" : "border-black"}`}
        placeholder={placeholder}
      />
    </label>
  );
};

export { TextInput };
