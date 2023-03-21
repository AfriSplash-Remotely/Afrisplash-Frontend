import React from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import PropTypes, { InferProps } from "prop-types";

const LocationSearchProps = {
    placeholder: PropTypes.string.isRequired,
    classes: PropTypes.string,
    childClasses: PropTypes.string,
};
export default function LocationSearch({
    placeholder,
    classes,
    childClasses,
}: InferProps<typeof LocationSearchProps>): JSX.Element {
    return (
        <div className={`w-full  ${classes}`}>
            <div
                className={`w-full flex justify-around items-center  border bg-white h-12  px-2  rounded-lg ${childClasses}`}>
                <MapPinIcon className="w-6 h-6 mr-4" />

                <input
                    type="text"
                    placeholder={placeholder}
                    className="focus:outline-none w-full pr-2 "
                />

                <div >
                    <select className="bg-[#D9DEDC] rounded-full outline-none py-1.5  px-2 mx-2" >
                        <option>Globally</option>
                        <option>Remote</option>
                        <option>Globally</option>

                    </select>
                </div>
            </div>
        </div>
    );
}












