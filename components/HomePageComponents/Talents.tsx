import Image from "next/image";
import talentStars from "assets/home-page/talent_stars_bg.svg";
import talentUser from "assets/home-page/talent_user.svg";
import { MentorCard } from "@/components/Forum/MentorCardComponent";
import Button from "@/components/atoms/Button/Button";
import Link from "next/link";
import { mentorsData, topTalentData } from "utils/fakeData";
import styles from "./styles.module.scss";
import { TFunction } from "i18next";

interface Props {
  translate: TFunction<"home", undefined>;
}

function Talents({ translate }: Props): JSX.Element {
  return (
    <section className="w-full ">
      <div className="py-28 space-y-24 w-11/12 xl:w-10/12 mx-auto">
        <section>
          <div className="text-center space-y-5">
            <h3 className="capitalize text-5xl font-semibold mb-4 md:mb-7">
              {translate("our top talents")}
            </h3>
            <div className="text-gray-700 text-lg flex justify-center">
              <p className="text-xl">
                {translate("Find highly-skilled talents from our community")}
              </p>
            </div>
          </div>
          <div className=" my-10 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {topTalentData.map((mentor) => (
                <MentorCard
                  key={mentor.id}
                  name={mentor.name}
                  position={mentor.position}
                  role={mentor.role}
                  flag={mentor.flag}
                  src={mentor.src}
                />
              ))}
              <div
                className={`w-full rounded-xl p-4 bg-cover shadow-sm  bg-no-repeat space-y-10 mt-2 ${styles.createProfileCard}`}
              >
                <div className="flex justify-between items-start relative   pt-5">
                  <Image src={talentUser} alt="stars" width={60} height={60} />
                  <Image
                    className="absolute right-0"
                    src={talentStars}
                    alt="stars"
                    width={120}
                    height={120}
                  />
                </div>
                <div className="w-8/12 font-semibold leading-10 text-3xl">
                  <h2>{translate("Become a top talent too")}</h2>
                </div>
                <div>
                  <Button
                    classes={`bg-primary_green text-white py-4 px-6 rounded-lg`}
                    text={translate("Create your profile")}
                  />
                </div>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2  lg:grid-cols-4">
              {mentorsData.map((mentor) => (
                <MentorCard
                  key={mentor.id}
                  name={mentor.name}
                  position={mentor.position}
                  role={mentor.role}
                  flag={mentor.flag}
                  src={mentor.src}
                />
              ))}
            </div>
          </div>
          <div className="w-max mx-auto">
            <Link href="/" className=" text-gray-400 leading-8 border-b-2">
              {translate("View more")}
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Talents;
