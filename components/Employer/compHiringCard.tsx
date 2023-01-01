import React from 'react'
import Image from 'next/image'
import LogoWhite from "assets/general/logo-bg-white.svg"
export default function CompHiringCard(): JSX.Element {
    return (
        <div className='border-2 border-primary_grey  rounded-lg p-4'>
            <div className='flex flex-col justify-center  items-center'>
                <Image src={LogoWhite} alt='logo' height='30%' />

                <div className='mt-4 py-2'>
                    <h2 className='text-2xl text-center font-medium  '>Afrisplash Remotely</h2>
                    <p className='text-center mt-3'>The gateway to Africa s remote workforce: Africa s #1 remote work community
                        and largest open source remote work
                        marketplace</p>
                </div>

                <div></div>

            </div>
        </div>
    )
}
