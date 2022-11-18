import React from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import DropDown from 'components/atoms/DropDown/DropDown'


export default function MentorTab(): JSX.Element {
    return (
        <div className='pb-4 flex justify-between items-center'>
            <div className="w-1/2 mt-1">
                <div className="w-full flex items-center space-x-3 border bg-white h-12 pl-3 rounded-lg">
                    <MagnifyingGlassIcon className="w-5 h-5" />
                    <input
                        type="text"
                        placeholder='Search for company,role or country'
                        className="focus:outline-none"
                    />
                </div>
            </div>
            <DropDown />
            <DropDown />
            <DropDown />
            <DropDown />

        </div>
    )
}
