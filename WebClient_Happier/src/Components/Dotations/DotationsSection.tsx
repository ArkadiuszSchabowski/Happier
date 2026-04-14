import { useState, type ChangeEvent } from "react";
import ButtonLink from "../shared/ButtonLink";
import { TextInput } from "./TextInput";

const amounts = ["10", "20", "50", "100", "200", "500"];

const DotationsSection = () => {
  const [fields, setFields] = useState({
    name: "",
    surname: "",
    email: "",
    selectedAmount: "",
    customAmount: "",
    policy: false,
  });
  const handleSetFields = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setFields((prevFields) => {
      if (name === "selectedAmount" && prevFields.customAmount !== "") {
        return { ...prevFields, [name]: value, customAmount: "" };
      } else if (name === "customAmount" && prevFields.selectedAmount !== "") {
        return { ...prevFields, [name]: value, selectedAmount: "" };
      } else if (name === "policy") {
        return { ...prevFields, [name]: !prevFields.policy };
      }
      return { ...prevFields, [name]: value };
    });
  };
  return (
    <section
      className="bg-white flex flex-col items-center justify-center py-12"
      style={{
        backgroundImage: "url('./backgrounds/dots.png')",
      }}
    >
      <h3 className="text-2xl md:text-4xl font-bold mb-10">Wesprzyj nas</h3>
      <div className="p-6 border border-black rounded-2xl max-w-[650px] bg-white">
        <form className="grid grid-cols-1 md:grid-cols-2 md:h-80">
          <div className="flex flex-col gap-4">
            <TextInput
              title="Imię"
              type="text"
              placeholder="Wprowadź imię"
              name="name"
              onChange={handleSetFields}
              value={fields.name}
            />
            <TextInput
              title="Nazwisko"
              type="text"
              placeholder="Wprowadź nazwisko"
              name="surname"
              onChange={handleSetFields}
              value={fields.surname}
            />
            <TextInput
              title="Adres e-mail"
              type="email"
              placeholder="Wprowadź adres e-mail"
              name="email"
              onChange={handleSetFields}
              value={fields.email}
            />
            <label className="text-sm flex gap-4 cursor-pointer relative py-4">
              <input
                type="checkbox"
                className="opacity-0 absolute pointer-events-none peer"
                onChange={handleSetFields}
                name="policy"
              />
              <span
                className={` size-5 rounded-md inline-block border border-black flex-shrink-0 relative
          after:content-['✓']
          after:text-[#198F51]
          after:text-lg
          after:absolute
          after:left-1
          after:top-[-5px]
          after:opacity-0
          peer-checked:after:opacity-100`}
              ></span>
              <span className="text-sm font-thin text-gray-600">
                Wpłacając darowiznę zgadzam się z polityką prywatności oraz
                regulaminem darowizn.
              </span>
            </label>
          </div>
          <div className="flex flex-col justify-between items-center gap-4 w-full">
            <p className="my-4 font-bold w-full">Wpłata jednorazowa</p>
            <fieldset className="grid grid-cols-3 grid-rows-3 gap-4 ">
              {amounts.map((value, index) => (
                <label htmlFor={value} key={index}>
                  <input
                    type="radio"
                    value={value}
                    id={value}
                    checked={fields.selectedAmount === value}
                    name="selectedAmount"
                    className="hidden peer"
                    onChange={(e) => handleSetFields(e)}
                  />
                  <div
                    className={`border border-black rounded-full py-1 px-2 text-center hover:bg-gray-100 transition cursor-pointer peer-checked:bg-gray-200 ${index > 2 && "row-start-2"} w-24`}
                  >
                    {`${value} zł`}
                  </div>
                </label>
              ))}
              <input
                name="customAmount"
                onChange={(e) => handleSetFields(e)}
                value={fields.customAmount}
                type="number"
                placeholder="wpisz inną kwotę"
                className="rounded-full py-1 px-2 border border-black col-span-3 row-start-3 placeholder:text-center"
              />
            </fieldset>
            <ButtonLink
              color="green"
              href="#"
              variant="solid"
              className="border-black border max-w-56"
            >
              Wesprzyj przez PayU
            </ButtonLink>
          </div>
        </form>
      </div>
    </section>
  );
};

export { DotationsSection };
