import React from 'react'

export default function Details():JSX.Element {
  return (
    <div>
      <div className='py-6'>
        <h1 className="text-dark_black font-medium text-lg md:font-bold md:text-2xl lg:text-xl">Job Details</h1>
        <p className='text-dark_black font-medium text-base mt-2'>Please  complete the form below to post a job
        </p>
      </div>
      <form className='text-gray-500 font-medium mb-4 '>
        <div className='mt-2 mb-2'>
          <label htmlFor="title">Job Title</label>
          <input type='text' id='title' className='input-el mt-2' />
        </div>
        <div className='mt-2 mb-2'>
          <label htmlFor="industry">Job Industry</label>
          <input type='text' id='title' className='input-el mt-2' />
        </div>
        <div className='mt-2'>
          <label htmlFor='description'>Job Description</label>
          <textarea maxLength={150}
            className="border-2 border-gray-300 rounded-md mb-2 w-full h-40 py-2 pl-4 outline-none"
          />
        </div>
      </form>
    </div>
  )
}
