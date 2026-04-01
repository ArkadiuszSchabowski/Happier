import { useFormContext } from "react-hook-form";
import { TextInput } from "./TextInput";
import type { DotationsFormType } from "../../../types";

const PersonalFields = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<DotationsFormType>();
  return (
    <>
      <TextInput
        registration={register("name", {
          required: {
            value: true,
            message: "Imię jest wymagane.",
          },
        })}
        error={errors.name?.message}
        title="Imię"
        placeholder="Wprowadź imię"
        type="text"
      />
      <TextInput
        registration={register("surname", {
          required: {
            value: true,
            message: "Nazwisko jest wymagane.",
          },
        })}
        title="Nazwisko"
        type="text"
        placeholder="Wprowadź nazwisko"
        error={errors.surname?.message}
      />
      <TextInput
        registration={register("email", {
          required: {
            value: true,
            message: "Email jest wymagany.",
          },
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Niepoprawny adres email",
          },
        })}
        title="Adres e-mail"
        type="email"
        placeholder="Wprowadź adres e-mail"
        error={errors.email?.message}
      />
    </>
  );
};

export { PersonalFields };
