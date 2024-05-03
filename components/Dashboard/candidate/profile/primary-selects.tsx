/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import { Listbox, Transition } from "@headlessui/react";

import { Fragment } from "react";
import { IoIosArrowDown } from "react-icons/io";
interface selectProps {
    label: string;
    selected: any;
    setSelected: any;
    data: any;
    name?: string;
    height?: string;
}

function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

 const   PrimarySelect : React.FC<selectProps> = ({
    label,
    selected,
    setSelected,
    data,
    name,
    height,
}) => {
    // const [selected, setSelected] = useState(people[3])

    return (
        <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
                <div className="flex flex-col w-full">
                    <Listbox.Label className="text-xs text-foreground font-medium dm-sans ">
                        {label && label}
                    </Listbox.Label>
                    <div className=" relative w-full">
                        <Listbox.Button
                            className={`${height ? height : "h-[56px] bg-white"
                                } relative w-full  border  border-[#BBBBC3] rounded-[10px] shadow-sm pl-3 pr-10  text-left cursor-default focus:outline-none focus:ring-1 focus:ring-[#E4E4E7] focus:border-[#E4E4E7] sm:text-sm`}
                        >
                            <span className="block truncate capitalize text-black">
                                {selected?.name ? selected?.name : name}
                            </span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <IoIosArrowDown
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                {data?.map((person: any, index: number) => (
                                    <Listbox.Option
                                        key={index}
                                        className={({ active }) =>
                                            classNames(
                                                active
                                                    ? "text-[#0e0e0e] bg-[#EBF6D4]"
                                                    : "text-gray-900",
                                                "cursor-default select-none relative py-2 pl-8 pr-4"
                                            )
                                        }
                                        value={person}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                    className={classNames(
                                                        selected
                                                            ? "font-semibold"
                                                            : "font-normal capitalize",
                                                        "block truncate"
                                                    )}
                                                >
                                                    {person?.name}
                                                </span>

                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            active ? "text-white" : "text-[#0e0e0e]",
                                                            "absolute inset-y-0 left-0 flex items-center pl-1.5"
                                                        )}
                                                    ></span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </div>
            )}
        </Listbox>
    );
}

export default PrimarySelect