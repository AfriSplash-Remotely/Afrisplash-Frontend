import React from 'react';
import Image from 'next/image';
import logo from 'assets/svg/logo.png';

const forgotPassword = () => {
  return (
    <section className='bg-white w-full p-4 '>
      <Image src={logo} alt="logo"/>
    </section>
  )
}

export default forgotPassword;