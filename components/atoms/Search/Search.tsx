import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React from 'react';

interface SearchProps{
    placeholder: string
}
export default function Search({placeholder}: SearchProps) {
  return (
    <div className='w-full'>
        <div className="w-full flex items-center space-x-3 border bg-white h-12 pl-3 rounded-lg">
            <MagnifyingGlassIcon className='w-5 h-5' />
            <input type="text" placeholder={placeholder} className="focus:outline-none" />
        </div>
    </div>
  )
}
