import React, { useState } from 'react'
import PropTypes, { InferProps } from "prop-types";

const TooltipProps = {
    message: PropTypes.string.isRequired,
    children: PropTypes.node,
    title:PropTypes.string.isRequired
}
export default function Index({ message, children ,title}: InferProps<typeof TooltipProps>): JSX.Element {
    const [show, setShow] = useState<boolean>(false)

    return (

        <div className="relative flex flex-col  items-center group">
            <span className="flex justify-center" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                {children}
            </span>
            <div className={`absolute w-80 whitespace-nowrap bottom-full  group-hover:flex ${!show ? "hidden" : null}`}>
                
                <div className="relative z-10 px-4 py-6 text-sm  text-gray-500 whitespace-normal  bg-white shadow-lg rounded-lg">
                    <h3 className='text-gray-400 text-xl font-bold mb-4'>{title}</h3>
                    {message}
                </div>
                <div className="w-3 h-3 -mt-2 rotate-45 bg-white" />
            </div>
        </div>)
}
