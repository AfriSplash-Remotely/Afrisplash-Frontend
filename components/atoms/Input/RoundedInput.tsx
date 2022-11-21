import React from "react";

interface InputProps {
  placeholder: string;
  className?: string | undefined;
}

const RoundedInput: React.FC<InputProps> = ({ placeholder, className }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`rounded-2xl bg-[#D6ECDC99] w-11/12 h-9 px-4 ${className} focus:outline-[#AAA3A3] text-[.77rem] font-normal text-[#AAA3A3]`}
    />
  );
};
export default RoundedInput;
