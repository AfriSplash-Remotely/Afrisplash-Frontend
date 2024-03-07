import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import PropTypes, { InferProps } from "prop-types";

const SearchTwoProps = {
    placeholder: PropTypes.string.isRequired,
    classes: PropTypes.string,
    childClasses: PropTypes.string,
};
export default function SearchTwo({
    placeholder,
    classes,
    childClasses,
    ...props
}: InferProps<typeof SearchTwoProps>): JSX.Element {
    return (
        <div className={`w-full  ${classes}`}>
            <div
                className={`w-full flex justify-around items-center  border bg-white h-12  px-2  rounded-lg ${childClasses}`}>
                <input
                    type="text"
                    placeholder={placeholder}
                    className="focus:outline-none w-full pr-2 "
                    {...props}
                />
                <MagnifyingGlassIcon className="w-6 h-6 " />

            </div>
        </div>
    );
}
