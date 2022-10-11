interface DropDownProps {
    classes?: string,
    onClick?: () => void | any;
    text: string;
    imageUrl?: any;
    isOpen?: true | false
}

// Imports
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const DropDown = ({ text, classes, isOpen, imageUrl, onClick }: DropDownProps) => {
    
    return (
        <div className={classes}>
            {imageUrl ? (<span className="h-8 w-8 ml-2 -mr-5">
                <Image src={imageUrl} alt="" />
            </span>) : ""}
            <span className="text-sm ml-6">{text}</span>
            <span className="arrow hover:cursor-pointer
                    hover:opacity-100 opacity-80" onClick={onClick}>
                {!isOpen ? (
                    <ChevronDownIcon className="active:transition active:rotate-180
                    active:duration-50 active:ease-out h-5 w-5 bold-200  mx-2" />) : (
                    <ChevronUpIcon className="active:transition active:rotate-180
                    active:duration-50 active:ease-out  h-5 w-5 bold-200 mx-2" />)
                }

            </span>
        </div>
    )
}

export default DropDown