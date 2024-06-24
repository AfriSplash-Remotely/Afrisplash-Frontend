import type { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import GeneralLayout from "layouts/generalLayout";
import SearchTwo from "@/components/atoms/SearchTwo/SearchTwo";
import Filter from "../../components/filterComponent/Filter";
import XJobCard from "@/components/jobCard/xJobCard";
import { getXJobs } from "@/api-endpoints/jobs/jobs.api"

const RemoteJobs: NextPage = (): JSX.Element => {
  const { data, isLoading } = useQuery(["xJobs"], getXJobs)
  const externalJobs = data
  
  return (
    <div>
      <Head>
        <title>Afrisplash</title>
        <meta name="description" content="Afrisplash Remotely | Remote Jobs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GeneralLayout>
        <div className="afri-container ">
          <div className="relative flex justify-center w-full mt-12">
            <div className="w-full lg:w-1/3">
              <SearchTwo placeholder="Search jobs, keywords , and companies" />
            </div>
          </div>
          <div>
            <Filter />
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="my-8 font-medium text-lg text-gray-400">Found {externalJobs?.limit} Results of {externalJobs?.totalDocs}</div>
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
                        />
                      </div>
                    );
                  })}</>
            )}

          </div>
          <div className="flex justify-end pb-4 ">
            <div>
              <div className="flex items-center gap-2">
                Page
                <div className="border rounded-lg py-2 px-8">{externalJobs?.page}</div>
                <div>of {' '} {externalJobs?.totalPages}</div>
                <div className="border rounded-lg py-2 px-4 ">
                  {" "}
                  <ChevronLeftIcon className="w-6 h-6 mr-2" />
                </div>
                <div className="border rounded-lg py-2 px-4">
                  {" "}
                  <ChevronRightIcon className="w-6 h-6 mr-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </GeneralLayout>
    </div>
  );
};

export default RemoteJobs;
