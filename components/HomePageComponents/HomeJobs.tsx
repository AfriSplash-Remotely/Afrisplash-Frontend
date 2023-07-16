import { jobCat, jobData, toArrayOfObjects } from "utils/fakeData";
import JobCard from "components/jobCard";
import JobCategory from "components/molecules/jobCategory";
import styles from "./styles.module.scss";
import { generateUniqueId } from "@/utils/helper";
import { TFunction } from "i18next";

interface Props {
  translate: TFunction<["common", "home", "footer"], undefined>;
}

function HomeJobs({ translate }: Props): JSX.Element {
  const homeJobData = toArrayOfObjects(jobData[0], 5);
  const homeJobCat = toArrayOfObjects(jobCat, 9);

  return (
    <section className={`w-full ${styles.bg_gray}`}>
      <div className="py-28 space-y-24 w-11/12 xl:w-10/12 mx-auto">
        <section className="space-y-10">
          <div className="text-center space-y-5">
            <h2 className="text-4xl font-semibold">
              {translate("Popular job categories")}
            </h2>
            <p className="text-gray-500">
              {translate("224 live")} | {translate("49 added today")}
            </p>
          </div>
          <div className="w-full flex flex-wrap justify-between ">
            {homeJobCat.map((data: any) => (
              <JobCategory key={generateUniqueId()} data={data} />
            ))}
          </div>
        </section>
        <section className="space-y-16 ">
          <div className="text-center space-y-8">
            <h2 className=" text-5xl font-semibold mb-4 md:mb-7">
              {translate("Featured jobs")}
            </h2>
            <div className="text-xl text-gray-700">
              {translate("Live, work, and succeed anywhere in Africa")}
            </div>
          </div>
          <div className="w-full">
            {homeJobData.map(
              (data): JSX.Element => (
                <div key={generateUniqueId()}>
                  <JobCard
                    image={data.image}
                    alt={"company image"}
                    company={data.company}
                    service={data.service}
                    employees={data.employees}
                    offer={data.offer}
                    priceRange={data.priceRange}
                    postDate={data.postDate}
                    hiring={data.hiring}
                    promoted={data.promoted}
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
