import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import google from '../assets/authentication/check-mail.svg'

const Verify = () => {
  return <>

    <div className="flex items-center">
      <span className='mx-auto items-center flex '>
        <Image src="/main_logo.svg" height="70%" width="70%" className='flex-none' />
        <p className="font-bold flex-none">AfriSplashRemotely</p>
      </span>
    </div>


    <div className='container w-1/2 rounded-xl m-auto shadow-none md:shadow-2xl '>


      <div className=" text-center sm:text-center md:text-center mt-28 mb-24 pt-44 pb-12 md:pt-30 md:pb-8 sm:pt-22 sm:pb-6">


        <Image src={google} alt='google photo mt-9' />
        <h2 className='text-3xl leading-10 font-semibold sm:text-1xl'>Check Your Mail!</h2>
        <p className='pt-2 leading-8'>We just sent you the instructions to reset your  <br /> password or <a href="#" className='text-green-600 underline leading-8 font-medium'>resend it.</a>
        </p>

        <button className="rounded-xl bg-dark_blue w-96 p-2 mt-3 mb-24 text-white sm:w-48 md:w-80 mb:p-auto">Login</button>

      </div>

    </div>
  </>

}

export default Verify
