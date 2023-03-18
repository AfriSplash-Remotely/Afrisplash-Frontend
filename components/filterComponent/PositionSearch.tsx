import React from "react";
import { UserIcon, MapPinIcon } from "@heroicons/react/24/solid";
import PropTypes, { InferProps } from "prop-types";
import DropDown from "@/components/atoms/DropDown/DropDown";

const PositionSearchProps = {
    placeholder: PropTypes.string.isRequired,
    classes: PropTypes.string,
    childClasses: PropTypes.string,
};
export default function PositionSearch({
    placeholder,
    classes,
    childClasses,
}: InferProps<typeof PositionSearchProps>): JSX.Element {
    return (
        <div className={`w-full  ${classes}`}>
            <div
                className={`w-full flex justify-around items-center  border bg-white h-12  px-2  rounded-lg ${childClasses}`}>
                <UserIcon className="w-6 h-6 mr-4" />

                <input
                    type="text"
                    placeholder={placeholder}
                    className="focus:outline-none w-full pr-2 "
                />


            </div>
        </div>
    );
}

