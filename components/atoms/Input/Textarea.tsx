import React from "react";

interface TextareaProps {
  placeholder: string;
  rows: number;
  className?: string | undefined;
}

const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  className,
  rows,
}) => {
  return (
    <textarea
      rows={rows}
      placeholder={placeholder}
      className={`rounded-xl placeholder:text-primary_green bg-lighter_green focus:bg-white text-gray-800 w-11/12 px-4 py-2 ${className} focus:outline-[#AAA3A3] text-sm font-normal`}
    />
  );
};
export default Textarea;
