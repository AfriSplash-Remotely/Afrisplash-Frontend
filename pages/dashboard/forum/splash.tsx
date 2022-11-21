import React from "react";
import Image from "next/image";
import Link from "next/link";
import AsideNavigation from "components/molecules/Navigation/asideNavigation";
import ForumNavigation from "components/molecules/Navigation/forumNavigation";
import Post from "components/molecules/Post/Post";
import styles from "styles/Forum.module.scss";
import { splash } from "utils/fakeData";

const Splash: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-5 ">
        <ForumNavigation />
        <Post />
        <div className="flex flex-col gap-6 text-[#AAA3A3]">
          <div className="flex w-full items-center justify-between text-sm">
            <h2>Trending Rooms</h2>
            <Link href="">
              <a>See More</a>
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4 relative ">
            {splash.map((s, i) => (
              <Link href="" key={s.tag[0] + i}>
                <a
                  className={`block rounded-lg bg-white relative ${styles.imageContainer}`}>
                  <Image
                    src={s.imgUrl}
                    alt={s.tag}
                    layout="responsive"
                    priority
                  />
                  <h3 className="absolute text-white bottom-3 w-full left-0 text-center">
                    {s.tag}
                  </h3>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <AsideNavigation />
    </>
  );
};

export default Splash;
