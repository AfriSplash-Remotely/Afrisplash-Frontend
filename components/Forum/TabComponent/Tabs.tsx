import React from 'react'

export default function Tabs() {
    return (
        <div className='w-full p-2'>
            {/* tab nav */}
            <ul className='flex justify-between  items-center w-full'>
                <li className='list-none  cursor-pointer'>tab 1</li>
                <li>tab 2</li>
                <li>tab 3</li>

            </ul>

            <div>
                {/* tab content */}

                content here
            </div>
        </div>
    )
}
