import PropTypes, { InferProps } from "prop-types";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

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
}: InferProps<typeof DropDownProps>) => {
  return (
    <>
      <div className={`${classes}`}>
        {imageUrl && (
          <span className="h-8 w-8 ml-2 -mr-5">
            <Image src={imageUrl} alt="" />
          </span>
        )}
        <span className="text-sm ml-6">{text}</span>
        <span
          className="arrow hover:cursor-pointer
                    hover:opacity-100 opacity-80"
          onClick={onClick}
        >
          {!isOpen ? (
            <ChevronDownIcon
              className="active:transition active:rotate-180
                    active:duration-50 active:ease-out h-5 w-5 bold-200  mx-2"
            />
          ) : (
            <ChevronUpIcon
              className="active:transition active:rotate-180
                    active:duration-50 active:ease-out  h-5 w-5 bold-200 mx-2"
            />
          )}
        </span>

        {/*  Options on toggle */}
        {isOpen && (
          <div className="absolute top-8 left-0 border-1 shadow-green bg-green-100 px-4 pb-1 w-[100%] mt-4 rounded-sm">
            {options?.map((optText) => (
              <span
                key={optText}
                className="text-sm block capitalize w-100 my-4 hover:cursor-pointer hover:underline"
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
