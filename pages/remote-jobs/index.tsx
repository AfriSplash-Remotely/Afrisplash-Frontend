import { useEffect, useState } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { useQuery } from '@tanstack/react-query'
import { getXJobs } from "@/api-endpoints/jobs/jobs.api"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import GeneralLayout from "layouts/generalLayout";
import SearchTwo from "@/components/atoms/SearchTwo/SearchTwo";
import XJobCard from "@/components/jobCard/xJobCard";

const RemoteJobs: NextPage = (): JSX.Element => {
  const [page, setPage] = useState<number>(1)
  const { data, isLoading, isPlaceholderData, isError } = useQuery({
    queryKey: ["xJobs", page],
    queryFn: () => getXJobs(page),
    keepPreviousData: true,
  })

  const externalJobs = data ;

useEffect(() => {
  if(!isLoading){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}, [page, isLoading])
  
  if (isError) {
    return (
      <h5 className="text-xl font-medium mt-8 text-gray-300">
        Error Loading Remote Jobs
      </h5>
    )
  }

  return (
    <div>
      <Head>
        <title>Afrisplash</title>
        <meta name="description" content="Afrisplash Remotely | Remote Jobs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GeneralLayout>
        <div className="afri-container ">
          <div className="space-y-0 py-2">
          <h3 className="capitalize text-center text-2xl md:text-5xl font-semibold mb-4 md:mb-7">
            Remote Jobs
          </h3>
            <p className="text-gray-700 text-center text-base lg:text-xl">
              Find Remote Jobs that Tailor Fitted for just You
            </p>
          </div>
          <div className="relative flex justify-center w-full mt-12">
            <div className="w-full lg:w-1/3">
              <SearchTwo placeholder="Search jobs, keywords , and companies" />
            </div>
          </div>
          <div className="mt-12 flex items-center gap-8">
            {isLoading ? '' : (
              <>
            <div className="my-8 font-medium text-lg text-gray-400">Found {externalJobs?.limit} Results of {externalJobs?.totalDocs}</div>
              </>
            )}
          </div>
          <div className=" pb-12">
            {isLoading ? (
              <h5 className="text-xl font-medium mt-8 text-gray-300">
                Loading...
              </h5>
            ) : (
              <>
                {externalJobs?.data?.flatMap((xjob): JSX.Element => {
                  return (
                      <div key={xjob?.id}>
                        <XJobCard 
                        title={xjob?.title}
                        companyName={xjob?.companyName}
                        companyLogo={xjob?.companyLogo}
                        description={xjob?.description}
                        minSalary={xjob?.minSalary || 0}
                        maxSalary={xjob?.maxSalary || 0}
                        seniority={xjob?.seniority}
                        publishedDate={xjob?.publishedDate}
                        expiryDate={xjob?.expiryDate}
                        applicationLink={xjob?.applicationLink}
                        />
                      </div>
                    );
                  })}</>
            )}

          </div>
          {isLoading ? '' : (
            <>
              <div className="flex justify-end pb-4 ">
                <div>
                  <div className="flex items-center gap-2">
                    Page
                    <div className="border rounded-lg py-2 px-8">{page}</div>
                    <div>of {' '} {externalJobs?.totalPages}</div>
                    <button className="border rounded-lg py-2 px-4"
                      onMouseDown={() => setPage((old) => Math.max(old - 1, 0))}
                      disabled={page === 1}>
                      {" "}
                      <ChevronLeftIcon className="w-6 h-6 mr-2" />
                    </button>
                    <button className="border rounded-lg py-2 px-4"
                      onMouseDown={() => {
                        if (!isPlaceholderData && externalJobs?.hasNextPage) {
                          setPage((old) => old + 1)
                        }
                      }}
                      disabled={isPlaceholderData || !externalJobs?.hasNextPage}
                    >
                      {" "}
                      <ChevronRightIcon className="w-6 h-6 mr-2" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </GeneralLayout>
    </div>
  );
};

export default RemoteJobs;
