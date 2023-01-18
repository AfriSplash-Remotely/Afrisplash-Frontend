import React from "react";

interface InputProps {
  placeholder: string;
  className?: string | undefined;
  label?: string | undefined;
  type : string;
  name? : string | undefined;
  value? : any;
  onChange? : any;
  fieldsetClass? : string
}

const Input: React.FC<InputProps> = ({ placeholder, className, label, type, name, fieldsetClass, onChange, value }) => {
  return (
    <fieldset className={fieldsetClass}>
      {label && <label htmlFor="name">{label}</label>}

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`placeholder:text-sm text-sm border-gray-400 outline:none focus:border-none border w-full h-10 rounded-md px-4 pr-16 ${className} focus:border-gray-400`}
      />
    </fieldset>
  );
};
export default Input;
