import JobCard from "components/jobCard";
import styles from "./styles.module.scss";
import { TFunction } from "i18next";
import { useQuery } from "@tanstack/react-query";
import { fetchAllJobs } from "@/api-endpoints/jobs/jobs.api";
interface Props {
  translate: TFunction<["common", "home", "footer"], undefined>;
}

function HomeJobs({ translate }: Props): JSX.Element {
  const { data } = useQuery(["jobs"], fetchAllJobs);
  const homeJobs = data?.data

  return (
    <section className={`w-full ${styles.bg_gray}`}>
      <div className="py-28 space-y-24 w-11/12 xl:w-10/12 mx-auto">
        <section className="space-y-16 ">
          <div className="text-center  md:space-y-8">
            <h2 className=" text-2xl lg:text-5xl font-semibold mb-4 md:mb-7">
              {translate("Featured jobs")}
            </h2>
            <div className="text-lg md:text-xl text-gray-700">
              {translate("Live, work, and succeed anywhere in Africa")}
            </div>
          </div>
          <div className="w-full grid grid-cols-1">
            {homeJobs?.slice(0,5).map(
              (job): JSX.Element => (
                <div key={job?._id}>
                  <JobCard
                    _id={job?._id}
                    forDashboard={false}
                    image={job?._company?.logo}
                    alt={job?._company?.name}
                    company={job?._company?.name}
                    service={job?.service}
                    employees={job?._company?.staff}
                    offer={job?.title}
                    salary={`${job?.salary?.min} - ${job.salary?.max}`}
                    postDate={job?.createdAt}
                    status={job?.status}
                    promoted={job?.promoted}
                    isDirectApply={job?.isDirectApply}
                  />
                </div>
              )
            )}
          </div>
        </section>
      </div>
    </section>
  );
}

export default HomeJobs;
