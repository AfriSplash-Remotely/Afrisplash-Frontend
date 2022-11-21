import React from "react";
import Image from "next/image";
import Link from "next/link";
import Filter from "components/atoms/Filter/Filter";
import Search from "components/atoms/Search/Search";
import ForumNavigation from "components/molecules/Navigation/forumNavigation";
import styles from "styles/Forum.module.scss";
import { mentors } from "utils/fakeData";
import TwentyFourhourIcon from "assets/icons/24-support.svg";
import BreifCaseIcon from "assets/icons/briefcase-cross.svg";
import LikeIcon from "assets/icons/like-light.svg";
import ChatIconLight from "assets/icons/message.svg";

const Mentors: React.FC = () => {
  const options = ["Expert", "Developer", "Known", "Pro"];
  return (
    <div className={` ${styles.fill} w-full sm:pr-10 lg:pr-8 xl:pr-44`}>
      <div className="mt-6 mb-7">
        <ForumNavigation />
      </div>
      <div className="flex flex-wrap items-center gap-2 lg:gap-4 justify-between mb-12">
        <Search
          placeholder="search"
          classes="w-96"
          childClasses="border-[1.5px] border-[#9b9a9a]"
        />
        <Filter defaultValue="Expertise" options={options} />
        <Filter defaultValue="Expertise" options={options} />
        <Filter defaultValue="Expertise" options={options} />
        <Filter defaultValue="Expertise" options={options} />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {mentors.map((mentor, i) => (
          <Link key={mentor.name + mentor.tags + i} href="">
            <a
              className="block relative rounded-2xl focus:scale-[1.02]"
              style={{ transition: "all 0.5s ease-in" }}>
              <Image
                layout="responsive"
                src={mentor.ImageUrl}
                alt={mentor.name}
                priority
              />
              <div className="flex gap-1 flex-col px-5 absolute bottom-10 text-white w-full">
                <h3 className="mb-1.5 text-2xl font-semibold">{mentor.name}</h3>
                <div className="flex items-center gap-3">
                  <div className="min-w-fit p-[3px] bg-[#000000c0] rounded-md grid place-items-center">
                    <Image
                      width={18}
                      height={18}
                      src={BreifCaseIcon}
                      alt="chat"
                      priority
                    />
                  </div>
                  <small className="text-sm md:text-[15px] xl:text-base">
                    {mentor.role}
                  </small>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="min-w-fit p-[3px] bg-[#000000c0] rounded-md grid place-items-center">
                    <Image
                      width={18}
                      height={18}
                      src={TwentyFourhourIcon}
                      alt="like"
                      priority
                    />
                  </div>
                  <p className="text-sm md:text-[15px] xl:text-base truncate w-54 pr-3 ">
                    {mentor.tags.join(", ")}
                  </p>
                </div>
              </div>
              <div className="flex w-full items-center justify-between px-5 absolute top-7">
                <button className="bg-[#000000c0] rounded-full w-9 h-9 flex items-center justify-center">
                  <Image
                    width={24}
                    height={24}
                    src={ChatIconLight}
                    alt="chat"
                    priority
                  />
                </button>
                <button className="bg-[#000000c0] rounded-full w-9 h-9 flex items-center justify-center">
                  <Image
                    width={24}
                    height={24}
                    src={LikeIcon}
                    alt="like"
                    priority
                  />
                </button>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Mentors;
