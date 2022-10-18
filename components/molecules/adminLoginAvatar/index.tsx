import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

interface AdminLoginAvatar{
    imageSrc: any
    text: string
}
export default function AdminLoginAvatar({imageSrc, text}: AdminLoginAvatar) {
  return (
    <div>
        <div className="flex items-center space-x-2 border px-2 py-1 rounded-lg">
            <Image src={imageSrc} alt="avatar" height={30} width={30}/>
            <span className='text-sm text-gray-400'>{text}</span>
            <ChevronDownIcon className="w-5 h-5 text-gray-700" />
        </div>
    </div>
  )
}
