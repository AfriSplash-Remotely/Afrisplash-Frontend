import React from "react";

interface InputProps {
  placeholder: string;
  className?: string | undefined;
}

const BoxInput: React.FC<InputProps> = ({ placeholder, className }) => {
  return (
    <form className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className={` border-[#AAA3A3] border-2 w-full h-8 rounded-md px-4 pr-16 ${className} focus:outline-gray-600 text-[.72rem]`}
      />
      <button className="absolute right-3 top-2 text-[.72rem] text-[#252525]">
        Send
      </button>
    </form>
  );
};
export default BoxInput;
