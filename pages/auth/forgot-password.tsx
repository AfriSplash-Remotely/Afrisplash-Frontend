import React from 'react';
import Image from 'next/image';
import logo from "assets/logo.png";
import { NextPage } from 'next';

const forgotPassword: NextPage = () => {
  return (
    <section className='bg-white w-full p-4 '>
      <Image src={logo} alt="logo" />
    </section>
  )
}

export default forgotPassword;