import type { ChangeEvent } from "react";

type TextInputType = {
  title: string;
  type: string;
  placeholder: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
};

const TextInput = ({
  title,
  type,
  placeholder,
  onChange,
  value,
  name,
}: TextInputType) => {
  return (
    <label className="flex flex-col font-bold">
      {title}
      <input
        type={type}
        name={name}
        value={value}
        className="border border-black rounded-full md:max-w-64 py-1 px-2 mt-2 font-thin "
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
      />
    </label>
  );
};

export { TextInput };
