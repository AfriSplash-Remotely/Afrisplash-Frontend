import React from 'react'
import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
import { MdOutlineWorkOutline, MdOutlineBusinessCenter } from "react-icons/md";
import { getRecruiterStats } from '@/api-endpoints/jobs/jobs.api';

export default function DashboardCards(): JSX.Element {
  const { data: session } = useSession()

  const {data} = useQuery(['recruiterStat'], () => getRecruiterStats(session?.user?.accessToken as string))
  const recruiterStat = data?.data
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

        <div className='flex items-center gap-6 py-6 rounded-lg bg-white' >
          <div className='h-24 w-24 text-dark_black  rounded-full flex justify-center items-center'>
            <MdOutlineBusinessCenter size='3rem' />
          </div>
          <div>
            <p className='text-dark_black font-medium text-lg'>Jobs</p>
            <h3 className='text-dark_black text-4xl font-semibold'>{recruiterStat?.totalJobs}</h3>

          </div>
        </div>

        <div className='flex items-center gap-6 py-6 rounded-lg bg-white' >
          <div className='h-24 w-24 text-dark_black  rounded-full flex justify-center items-center'>
            <MdOutlineWorkOutline size='3rem' />
          </div>
          <div>
            <p className='text-dark_black font-medium text-lg'>Applicants</p>
            <h3 className='text-dark_black text-4xl font-semibold'>{recruiterStat?.totalApplicants}</h3>
          </div>
        </div>
      </div>
    </>
  )
}
