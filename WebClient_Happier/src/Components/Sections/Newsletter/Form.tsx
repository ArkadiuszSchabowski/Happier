import { useForm } from "react-hook-form";

type FormType = {
  email: string;
  agreement: boolean;
};

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormType>();

  const onSubmit = (data: FormType) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {errors.email && (
          <p className="text-center text-red-500 text-xs sm:text-sm md:text-base mb-1">
            {errors.email.message}
          </p>
        )}

        <label>
          <span className="font-bold text-xs sm:text-sm md:text-base lg:text-lg">
            Adres e-mail
          </span>

          <div className="flex mt-1">
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "Email jest wymagany.",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Niepoprawny adres email",
                },
              })}
              placeholder="Wprowadź adres e-mail"
              className={`border-2 ${
                errors.email ? "border-red-500" : "border-black"
              } rounded-l-xl w-full px-3 h-8 text-xs sm:text-sm placeholder:text-xs `}
            />

            <button
              type="submit"
              className="bg-[#3D38F5] text-white px-4 h-8 text-xs sm:text-sm  rounded-r-xl border-2 border-l-0 border-black hover:bg-black leading-none shrink-0"
            >
              Zapisz się
            </button>
          </div>
        </label>

        {errors.agreement && (
          <p className="text-center mt-2 text-red-500 text-xs sm:text-sm md:text-base">
            Aby móc subskrybować, musisz wyrazić zgodę.
          </p>
        )}
      </div>

      <label className="text-xs sm:text-sm md:text-base lg:text-lg flex gap-4 cursor-pointer relative py-4">
        <input
          type="checkbox"
          className="opacity-0 absolute pointer-events-none peer"
          {...register("agreement", { required: true })}
        />

        <span
          className={`${
            errors.agreement && "border-red-500"
          } size-5 rounded-md inline-block border border-black flex-shrink-0 relative
          after:content-['✓']
          after:text-[#3D38F5]
          after:text-lg
          after:absolute
          after:left-1
          after:top-[-5px]
          after:opacity-0
          peer-checked:after:opacity-100`}
        ></span>

        <span>
          Wyrażam zgodę na otrzymywanie newslettera Fundacji Szczęśliwsi na
          podany adres e-mail
        </span>
      </label>
    </form>
  );
};

export { Form };
