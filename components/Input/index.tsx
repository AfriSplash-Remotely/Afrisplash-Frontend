import { useRef, useState } from "react";
import { CalenderIcon } from "../../assets";
interface dateProps {
    date: string;
    setDate: React.Dispatch<React.SetStateAction<string>>;
    className?: string;
    height?: string;
}
export const Input = ({
    className,
    label,
    value,
    setValue,
    type,
    placeholder,
    height

}: {
    className?: string;
    label: string;
    value: any;
    setValue: any;
    placeholder?: string;
    type?: string;
    height?: string

}) => {
    return (
        <div className={`w-full flex flex-col  ${className}`}>
            <label className="text-sm  lg:text-base text-[#606172]  font-semibold  mb-2">
                {label}
            </label>
            <input
                type={type ? type : "text"}
                className={`  rounded-[4px] px-3 py-[15px] flex items-center border border-[#BBBBC3] outline-none  placeholder:text-opacity-50 bg-transparent focus:bg-transparent placeholder:text-sm text-black text-sm placeholder:text-[#606172]  ${height ? height : "h-[56px] rounded-[10px]"} `}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
};



export default function UrlInput({
    className,
    label,
    value,
    setValue,
    type,
    placeholder,
    preUrl
}: {
    className?: string;
    label: string;
    value: any;
    setValue: any;
    placeholder?: string;
    type?: string;
    preUrl?: string
}) {
    return (
        <div className="w-full">
            <label
                htmlFor="company-website"
                className="block text-xs text-foreground font-medium dm-sans"
            >
                {label && label}
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                    {preUrl ? preUrl : "https://"}
                </span>
                <input
                    type="text"
                    name="company-website"
                    id="company-website"
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-[#E0E0E0] sm:text-sm "
                    placeholder={placeholder}
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setValue(e.target.value)
                    }
                />
            </div>
        </div>
    );
}


export const DateInput = ({
    date,
    setDate,
    className,
    height,
}: dateProps) => {
    const inputRef = useRef<any>(null);
    const onCalenderIconClick = () => {
        if (inputRef?.current) {
            inputRef.current.focus();
            inputRef?.current?.showPicker();
        }
    };
    return (
        <div
            className={`relative outline-none rounded-[10px] border border-[#BBBBC3] flex  items-center px-4  w-full      ${className} ${height ? height : "h-[56px]"
                }`}
        >
            <input
                type="date"
                name="date"
                className=" opacity-0  "
                value={date}
                onChange={(e: any) => setDate(e.target?.value)}
                ref={inputRef}
            />
            <div className="flex items-center  justify-between w-full px-3 absolute inset-0">
                <p
                    className={` text-sm  ${date ? "text-foreground" : "text-[#71717A]"
                        }`}
                >
                    {date ? date : "Select Date"}
                </p>
                <span className="cursor-pointer" onClick={onCalenderIconClick}>
                    <CalenderIcon />
                </span>
            </div>
        </div>
    );
};

