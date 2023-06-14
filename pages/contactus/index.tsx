import React from 'react'
import Contactus from '@/components/molecules/Contactus/Contactus';
import { XCircleIcon } from '@heroicons/react/24/outline';

const index = ():JSX.Element => {
  return (
    <div className='bg-contact_grey relative block rounded-[24px]'>
      <span className='absolute top-3 right-3 cursor-pointer'>
        <XCircleIcon className='w-7 h-7 ' />
      </span>
      <Contactus />
    </div>
  );
}

export default index

