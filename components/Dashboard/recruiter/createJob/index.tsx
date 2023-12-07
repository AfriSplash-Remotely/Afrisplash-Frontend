import React, { useState } from 'react'
import AdminLayout from '@/layouts/adminLayout';
import Link from "next/link";
import Image from "next/image";
import checked from "assets/candidateOnboarding/checked.svg";
import Details from './Details';
import Demographics from './Demographics';
import Requirement from './Requirement';



export default function CreateJobs():JSX.Element {
  const [step, setStep] = useState<number>(1)
  const createJobStep = [
    { id: 1, name: "Job Details" },
    { id: 2, name: 'Job Requirements' },
    { id: 3, name: "Job Demographics" }
  ]
  return (
    <AdminLayout>
      <div>
        <div>
          <h1 className="text-dark_black font-medium text-lg md:font-bold md:text-2xl lg:text-2xl">Post a  job</h1>
          <p className='text-grey_4 font-medium text-lg'>Find your next great hire</p>
        </div>
      </div>

      <div className='mt-4'>
        <div className='mb-8'>
          <div className='flex  flex-wrap gap-2 mb-10 sm:mb-16 md:mb-10'>
            {createJobStep.map((jobStep) => (
              <div className='flex flex-col  flex-shrink-0 basis-40' key={jobStep.id}>
                <div className={`h-1 w-96 rounded-full ${jobStep.id <= step ? `bg-green-900` : `bg-gray-400`} mb-1.5`}>
                  <div className='flex mt-2 items-center'>
                    <div className='flex-shrink-0'>
                      <Image src={checked} width={15} height={15} alt="icon" />

                    </div>
                    <p className='text-sm font-medium text-gray-600 ml-1'>{jobStep.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* components */}
      {step === 1 && <Details />}
      {step === 2 && <Requirement />}
      {step === 3 && <Demographics />}

      <div className='absolute right-12'>
        <div className='flex justify-center items-center gap-4 md:gap-12 font-medium'>
          <Link href="#" legacyBehavior>
            <button className='border-gray-400 border general-btn'
              onClick={() => step > 1 && setStep(step - 1)}
            >Prev</button>
          </Link>
          {step !== 3 && (
            <Link href="#" legacyBehavior>
              <button className='bg-indigo-900 text-gray-400 general-btn'
                onClick={() => step < 3 && setStep(step + 1)}
              >Next</button>
            </Link>
          )}
          {step === 3 && (
            <button className="bg-primary_green text-white general-btn"
            // onClick={handleSubmit}
            >Submit</button>
          )}

        </div>
      </div>
     

    </AdminLayout>
  )
}
