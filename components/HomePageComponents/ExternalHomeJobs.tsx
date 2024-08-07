import React, { useState } from 'react'
import { TFunction } from "i18next";
import styles from "./styles.module.scss";
import { useQuery } from '@tanstack/react-query';
import { getXJobs } from '@/api-endpoints/jobs/jobs.api';
import XJobCard from '../jobCard/xJobCard';
import Link from 'next/link';

interface Props {
    translate: TFunction<["common", "home", "footer"], undefined>;
}

export default function ExternalHomeJobs({ translate }: Props): JSX.Element {
    const [page] = useState<number>(1)

    const { data } = useQuery(["xjobs", page], () => getXJobs(page));
    const xHomeJobs = data?.data
    return (
        <section className={`w-full py-4 ${styles.bg_gray}`}>
            <div className="py-8 space-y-24 w-11/12 xl:w-10/12 mx-auto">
                <section className="space-y-16 ">
                    <div className="text-center  md:space-y-8">
                        <h2 className=" text-2xl lg:text-5xl font-semibold mb-4 md:mb-7">
                            {translate("External Jobs")}
                        </h2>
                        <div className="text-lg md:text-xl text-gray-700">
                            {translate("Access Remote Jobs")}
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-1">
                        {xHomeJobs?.slice(0, 3).map(
                            (xjob): JSX.Element => (
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
                            )
                        )}
                    </div>
                    <div className="w-max mx-auto">
                        <Link href="/remote-jobs" className=" text-gray-400 leading-8 border-b-2 hover:text-primary_green">
                            {translate("See more Jobs")}
                        </Link>
                    </div>                </section>
            </div>
        </section>)
}
