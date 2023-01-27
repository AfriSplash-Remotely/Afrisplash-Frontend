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
        className={`placeholder:text-sm text-sm border-gray-400 border w-full h-10 rounded-md px-4 pr-16 ${className} focus:outline-gray-600`}
      />
      <button className="absolute right-3 top-3 text-sm text-gray-500">
        Send
      </button>
    </form>
  );
};
export default BoxInput;
