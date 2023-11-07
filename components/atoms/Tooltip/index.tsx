import React, { useState } from 'react'
import PropTypes, { InferProps } from "prop-types";

const TooltipProps = {
    message: PropTypes.string.isRequired,
    children: PropTypes.node,
    title:PropTypes.string.isRequired
}
export default function Index({ message, children ,title}: InferProps<typeof TooltipProps>): JSX.Element {
    const [show, setShow] = useState<boolean>(true)

    return (

        <div className="relative flex flex-col  items-center">
            <span className="flex justify-center" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                {children}
            </span>
            <div className={`absolute p-4 bottom-full flex   group-hover:flex ${!show ? "hidden" : null}`}>
                
                <span className="relative z-10 px-4 py-8 text-xs leading-none text-#606172  bg-white shadow-lg rounded-md">
                    <h4 className='text-#606172 font-bold'>{title}</h4>

                    {message}
                </span>
                <div className="w-3 h-3 -mt-2 rotate-45 bg-white" />
            </div>
        </div>)
}
