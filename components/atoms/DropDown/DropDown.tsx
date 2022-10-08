interface DropDownProps {
    classes?: string,
    onClick?: () => void | any;
    text: string;
    imageUrl?: any
}

// Imports
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const DropDown = ({ text, classes, imageUrl, onClick }: DropDownProps) => {
    return (
        <div className={classes}>
            {imageUrl ? (<span className="h-8 w-8 ml-2 -mr-5">
                <Image src={imageUrl} alt="" />
            </span>) : ""}
            <span className="text-sm ml-6">{text}</span>
            <span className="arrow" onClick={onClick}>
                <ChevronDownIcon className="hover:cursor-pointer h-5 w-5 bold-300 mx-2" />
            </span>
        </div>
    )
}

export default DropDown