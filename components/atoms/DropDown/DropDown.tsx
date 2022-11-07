import PropTypes, { InferProps } from "prop-types";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

const DropDownProps = {
  classes: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  imageUrl: PropTypes.any,
  isOpen: PropTypes.bool,
  options: PropTypes.array,
};

const DropDown = ({
  text,
  classes,
  isOpen,
  imageUrl,
  onClick,
  options,
}: InferProps<typeof DropDownProps>): JSX.Element => {
  let [makeSelectOption, setMakeSelectOption] = useState<
    string | null | undefined
  >(text);

  return (
    <>
      <div className={`${classes}`}>
        <div
          className="flex flex-row justify-between items-center shadow
                    h-11 border border-solid rounded-lg z-20 mt-3 mb-1"
        >
          {imageUrl && (
            <span className="h-8 w-8 ml-2 -mr-5">
              <Image src={imageUrl} alt="" />
            </span>
          )}
          <span className="text-sm ml-6 capitalize leading-3">
            {makeSelectOption}
          </span>
          <span
            className="arrow hover:cursor-pointer
                    hover:opacity-100 opacity-80"
            onClick={() => onClick && onClick()}
          >
            {!isOpen ? (
              <ChevronDownIcon
                className="active:transition active:rotate-180
                    active:duration-50 active:ease-out h-5 w-5 bold-200 mx-2"
              />
            ) : (
              <ChevronUpIcon
                className="active:transition active:rotate-180
                    active:duration-50 active:ease-out  h-5 w-5 bold-200 mx-2"
              />
            )}
          </span>
        </div>
        {/*  Options on toggle */}
        {isOpen && (
          <div
            className="border-1 shadow-md shadow-green 
                     bg-slate-200 px-4 py-1 w-[100%]  my-0 rounded-sm"
          >
            {options?.map((optText) => (
              <span
                key={optText}
                className="text-sm block capitalize w-100 my-4
                             hover:cursor-pointer hover:underline"
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

function setMakeSelectOption(e: any) {
  throw new Error("Function not implemented.");
}
