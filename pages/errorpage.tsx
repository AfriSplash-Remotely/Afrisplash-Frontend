import React from 'react'
import Footer from '../components/molecules/Footer/Footer'
import Image from 'next/image'
import errorImage from '../assets/authentication/error-image.svg'
import errorPage from '../assets/authentication/error-page.svg'

const ErrorPage = () => {
    return (
        <div>
            {/* navbar */}
            <div className=" p-6 mx-10">
                <div className="flex flex-row-reverse justify-between items-center">
                    <div className="space-x-4">
                        <button className='rounded-lg border border-3 border-neutral-400 w-32 p-2 text-dark_blue'>
                            Sign in
                        </button>
                        <button className='rounded-lg border border-3 border-neutral-400 bg-dark_blue text-slate-50 w-32 p-2 text-white_2'>
                            Post jobs
                        </button>
                    </div>
                    <div className="flex space-x-7 text-dark_blue font-normal">

                        <a href="#">Home</a>
                        <a href="#">Resource</a>
                        <a href="#">Candidates</a>
                        <a href="#">Employer</a>
                        <a href="#">Hire telent</a>
                        <a href="#">Remote jobs</a>

                    </div>
                    <div className="icon">
                        <Image src="/main_logo.svg" height="70%" width="70%" className='flex-none' />
                    </div>
                </div>

                <div className='flex flex-col items-center'>


                    {/* hero section  */}
                    <div className="items-center pt-48">

                        <Image src={errorPage} alt='google photo' className='items-center' />
                    </div>


                    <p className=''>It's a 404. Unfortunately we couldn't find what you are looking for.</p>
                    <button className="border-primary_green border rounded-md text-primary_green w-80 p-4 mt-5">Take me home</button>
                </div>



            </div>
            <Footer />
        </div>
    )
}

export default ErrorPage
