import React from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import PropTypes, { InferProps } from "prop-types";
import Image from "next/image";
import filtersearch from "assets/co-workingSpace/filter-search.svg";

const LocationSearchProps = {
  placeholder: PropTypes.string.isRequired,
  classes: PropTypes.string,
  childClasses: PropTypes.string,
  showSelect: PropTypes.bool,
  showFilter: PropTypes.bool,
};
export default function LocationSearch({
  placeholder,
  classes,
  childClasses,
  showSelect,
  showFilter,
}: InferProps<typeof LocationSearchProps>): JSX.Element {
  return (
    <div className={`w-full  ${classes}`}>
      <div
        className={`w-full flex justify-around items-center  border bg-white h-12  px-2  rounded-lg ${childClasses}`}
      >
        <MapPinIcon className="w-6 h-6 mr-4" />

        <input
          type="text"
          placeholder={placeholder}
          className="focus:outline-none w-full pr-2 "
        />
        <div >
          {showSelect ? (
            <select className="bg-[#D9DEDC] rounded-full outline-none py-1.5  px-2 mx-2">
              <option>Globally</option>
              <option>Remote</option>
              <option>Globally</option>
            </select>
          ) : null}

          {showFilter ? (
            <div className="flex items-center justify-center space-x-2 pr-3 ">
              <Image
                src={filtersearch}
                alt="icon"
                className="border-l pl-3 w-[60%] h-[60%]"
              />
              <p className="">Filters</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}












