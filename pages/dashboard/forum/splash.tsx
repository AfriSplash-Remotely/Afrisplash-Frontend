import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import AsideNavigation from "components/molecules/Navigation/asideNavigation";
import Post from "components/molecules/Post/Post";
import ForumLayout from "layouts/forumLayout";
import styles from "styles/Forum.module.scss";
import { splash } from "utils/fakeData";
import { generateUniqueId } from "@/utils/helper";

const Splash: NextPage = () => {
  return (
    <ForumLayout>
      <div className="flex flex-col gap-5 ">
        <Post />
        <div className="flex flex-col gap-6 text-[#AAA3A3]">
          <div className="flex w-full items-center justify-between text-sm">
            <h2>Trending Rooms</h2>
            <Link href="">See More</Link>
          </div>
          <div className="grid grid-cols-3 gap-4 relative ">
            {splash.map((s) => (
              <Link
                href=""
                key={generateUniqueId()}
                className={`block rounded-lg bg-white relative ${styles.imageContainer}`}
              >
                <Image src={s.imgUrl} alt={s.tag} fill priority />
                <h3 className="absolute text-white bottom-3 w-full left-0 text-center">
                  {s.tag}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </ForumLayout>
  );
};

export default Splash;
