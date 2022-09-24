import React from 'react'
import Image from 'next/image'
import { NextPage } from 'next';
import Button from '../../atoms/Button/Button';

const Navigation: NextPage =() =>{
  return (
    <header>
      <Image src="/main_logo.svg" height="100%" width="100%"/>
      <nav>
        <ul className="flex">
          <li>Home</li>
          <li>Resources</li>
          <li>Candidates</li>
          <li>Employer</li>
          <li>Hire talent</li>
          <li>Remote jobs</li>
        </ul>
      </nav>
      <div>
        <Button type='filled' bgColor='dark_blue' color='white' text="sign in" classes='text-white bg-dark_blue'/>
        <Button type = 'bordered' bgColor='dark_blue' color="dark_blue" text="Post jobs" borderColor='dark_blue'/>
      </div>
    </header>
  )
}

export default Navigation;
