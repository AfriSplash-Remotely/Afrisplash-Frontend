import React from "react";
import Image from "next/image";
import BoxInput from "components/atoms/Input/BoxInput";
import AsideNavigation from "components/molecules/Navigation/asideNavigation";
import ForumNavigation from "components/molecules/Navigation/forumNavigation";
import Post from "components/molecules/Post/Post";
import { trending } from "utils/fakeData";
import ChatIcon from "assets/icons/chat.svg";
import DotIcon from "assets/icons/dots.svg";
import LikeIcon from "assets/icons/like.svg";

const Trending: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-5 ">
        <ForumNavigation />
        <Post />
        <div className="flex flex-col gap-6 text-[#252525]">
          {trending.map((p, i) => (
            <div
              key={p.title + i}
              tabIndex={0}
              className="px-7 pb-7 pt-8  bg-white rounded-md flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h2 className="text-black ">{p.title}</h2>
                <div className="flex gap-2 items-center">
                  <button className="bg-[#f5f5f5] border-[#c4c4c4] border-2 text-black px-5 py-[2px] rounded-md text-[.5rem]">
                    {p.tag}
                  </button>
                  <button className="flex items-center text-black p-0 rounded-md">
                    <Image
                      src={DotIcon}
                      alt="more"
                      width="18"
                      height="20"
                      className="block"
                    />
                  </button>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src={p.profile.ImageUrl}
                  alt={p.profile.name}
                  width={25}
                  height={25}
                />
                <div className="text-[.7rem] flex justify-center flex-col">
                  <h3 className="text-black">{p.profile.name}</h3>
                  <span className="text-black">{p.profile.time}hr ago</span>
                </div>
              </div>
              <p className="text-[.7rem] mb-2 font-light">{p.content}</p>
              <div className="flex justify-between items-center -mb-2">
                <div className="flex items-center gap-0.5">
                  <Image
                    src={LikeIcon}
                    alt={p.profile.name}
                    width={12}
                    height={12}
                  />
                  <small className="text-[.65rem]">{p.likes} likes</small>
                </div>
                <div className="flex items-center gap-0.5">
                  <Image
                    src={ChatIcon}
                    alt={p.profile.name}
                    width={12}
                    height={12}
                  />
                  <small className="text-[.65rem]">
                    {p.commentsCount} comments
                  </small>
                </div>
              </div>
              <BoxInput placeholder="Write comment..." />
            </div>
          ))}
        </div>
      </div>
      <AsideNavigation />
    </>
  );
};

export default Trending;
