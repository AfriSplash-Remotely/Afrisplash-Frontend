import { useState } from "react";
import Image from "next/image";
import PropTypes, { InferProps } from "prop-types";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { generateUniqueId } from "@/utils/helper";

const DropDownProps = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  imageUrl: PropTypes.string,
  isOpen: PropTypes.bool,
  options: PropTypes.array,
};

const DropDown = ({
  text,
  isOpen,
  imageUrl,
  onClick,
  options,
}: InferProps<typeof DropDownProps>): JSX.Element => {
  const [makeSelectOption, setMakeSelectOption] = useState<
    string | null | undefined
  >(text);

  return (
    <>
      <div className="mr-8">
        <button
          className="flex flex-row justify-between items-center py-2 px-4 border border-solid rounded-lg relative w-fit-content cursor-pointer"
          onClick={() => onClick && onClick()}
        >
          {imageUrl && (
            <span className="h-8 w-8 ml-2 -mr-5">
              <Image src={imageUrl} alt="" fill />
            </span>
          )}
          <span className="text-sm px-2 capitalize leading-3">
            {makeSelectOption}
          </span>
          <span className="arrow hover:cursor-pointer hover:opacity-100 opacity-80">
            {!isOpen ? (
              <ChevronDownIcon className="active:transition active:rotate-180 active:duration-50 active:ease-out h-5 w-5 bold-200 mx-2" />
            ) : (
              <ChevronUpIcon className="active:transition active:rotate-180 active:duration-50 active:ease-out  h-5 w-5 bold-200 mx-2" />
            )}
          </span>
        </button>
        {/*  Options on toggle */}
        {isOpen && (
          <div className="border-1 shadow-md shadow-green bg-slate-200 px-4 py-1 w-fit-content rounded-sm absolute z-10">
            {options?.map((optText) => (
              <span
                key={generateUniqueId()}
                className="text-sm block capitalize w-100 my-4 hover:cursor-pointer hover:underline"
                onClick={() => setMakeSelectOption(optText)}
              >
                {" "}
                {optText}{" "}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default DropDown;
