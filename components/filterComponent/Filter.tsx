import React from 'react'
import PositionSearchProps from './PositionSearch'
import LocationSearch from './LocationSearch';
import filtersearch from "assets/general/filter-search.svg"
import Image from 'next/image';


export default function Filter(): JSX.Element {
  return (
    <div className='relative flex justify-center  w-full mt-12 py-8'>
      <div className='relative border bg-white w-1/2  rounded-lg'>
        <div className='absolute top-0 left-0 flex'>
          <div className='bg-primary_green rounded-tl-lg py-2 px-8 text-white text-center'>Saved search</div>
          <div className='bg-grey text-center text-white text-2xl px-3 flex items-center'>+</div>
        </div>

        <div className='mt-24 flex items-center justify-between gap-8 px-4 pb-24
        '>
          <PositionSearchProps placeholder='Select a position or job title' />
          <LocationSearch placeholder='Select a location' />
        </div>

        <div className='absolute bottom-0 p-3 mt-20 bg-grey w-full rounded-b-lg'>

          <div className='flex items-center justify-center space-x-2'>
            <Image src={filtersearch} alt='icon' />
            <p>Filters</p>
          </div>      
                 </div>
      </div>


    </div>
  )
}
