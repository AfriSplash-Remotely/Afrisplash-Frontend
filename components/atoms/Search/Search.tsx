import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import PropTypes, { InferProps } from "prop-types";

const SearchProps = {
  placeholder: PropTypes.string.isRequired,
  classes: PropTypes.string,
  childClasses: PropTypes.string,
};
export default function Search({
  placeholder,
  classes,
  childClasses,
}: InferProps<typeof SearchProps>): JSX.Element {
  return (
    <div className={`w-full ${classes}`}>
      <div
        className={`w-full flex items-center space-x-3 border bg-white h-12 pl-3 rounded-lg ${childClasses}`}>
        <MagnifyingGlassIcon className="w-5 h-5" />
        <input
          type="text"
          placeholder={placeholder}
          className="focus:outline-none w-full pr-8"
        />
      </div>
    </div>
  );
}
