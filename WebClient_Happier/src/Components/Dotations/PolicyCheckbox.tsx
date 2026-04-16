import { useFormContext } from "react-hook-form";
import { FormErrorMessage } from "../shared/FormErrorMessage";
import type { DotationsFormType } from "../../types";

const PolicyCheckbox = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<DotationsFormType>();
  return (
    <label className="text-sm flex gap-4 cursor-pointer relative pt-4">
      <FormErrorMessage message={errors.policy?.message ?? ""} />

      <input
        {...register("policy", {
          required: {
            value: true,
            message: "Akceptacja warunków jest wymagana.",
          },
        })}
        type="checkbox"
        className="opacity-0 absolute pointer-events-none peer"
      />
      <span
        className={`size-5 rounded-md inline-block border  flex-shrink-0 relative
          after:content-['✓']
          after:text-[#198F51]
          after:text-lg
          after:absolute
          after:left-1
          after:top-[-5px]
          after:opacity-0
          peer-checked:after:opacity-100
          ${errors.policy?.message ? "border-red-500" : "border-black"}`}
      ></span>
      <span className="text-sm font-thin text-gray-600">
        Wpłacając darowiznę zgadzam się z polityką prywatności oraz regulaminem
        darowizn.
      </span>
    </label>
  );
};

export { PolicyCheckbox };
