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
      className={`rounded-2xl placeholder:text-primary_green bg-light_green focus:bg-white text-gray-800 w-11/12 h-9 px-4 ${className} focus:outline-[#AAA3A3] text-sm font-normal`}
    />
  );
};
export default RoundedInput;
