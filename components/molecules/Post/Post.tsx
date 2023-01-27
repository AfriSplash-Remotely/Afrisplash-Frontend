import React from "react";
import Image from "next/image";
import RoundedInput from "components/atoms/Input/RoundedInput";
import User from "assets/admin_avatars/admin_avatar.svg";
import PhotoIcon from "assets/icons/Image.svg";
import LinkIcon from "assets/icons/Link.svg";
import VideoIcon from "assets/icons/video.svg";
import styles from "./Post.module.scss";

const Post = (): JSX.Element => {
  return (
    <div className="flex flex-col rounded-md py-5 px-6 bg-white">
      <div className="flex items-center justify-between gap-5">
        <Image priority src={User} width={36} height={36} alt="user icon" />

        <RoundedInput
          placeholder="What would you like to discuss?"
          className=""
        />
      </div>
      <div
        className={` ${styles.container} flex items-center justify-start pl-8 gap-9 py-3.5`}
      >
        <input
          type="file"
          name="image"
          id="photo"
          className={` ${styles.file} focus:outline-none w-[0.1px] h-[0.1px] border-0 overflow-hidden absolute whitespace-nowrap `}
        />
        <label
          htmlFor="photo"
          className={`flex items-center gap-2 cursor-pointer rounded-sm`}
        >
          <div className="w-5 h-5 relative">
            <Image
              priority
              alt="photo icon"
              aria-hidden="true"
              fill
              src={PhotoIcon}
            />
          </div>
          <small>Photo</small>
        </label>

        <input
          type="file"
          name="image"
          id="video"
          className={` ${styles.file} focus:outline-none w-[0.1px] h-[0.1px] border-0 overflow-hidden absolute whitespace-nowrap `}
        />
        <label
          htmlFor="video"
          className="flex items-center gap-2 rounded-sm cursor-pointer "
        >
          <div className="w-5 h-5 relative">
            <Image
              priority
              alt="video icon"
              aria-hidden="true"
              fill
              src={VideoIcon}
            />
          </div>
          <small>Video</small>
        </label>

        <input
          type="file"
          name="image"
          id="link"
          className={` ${styles.file} focus:outline-none w-[0.1px] h-[0.1px] border-0 overflow-hidden absolute whitespace-nowrap `}
        />
        <label
          htmlFor="link"
          className="flex items-center gap-2 cursor-pointer rounded-sm"
        >
          <div className="w-5 h-5 relative">
            <Image
              priority
              alt="link icon"
              fill
              aria-hidden="true"
              src={LinkIcon}
            />
          </div>
          <small>Link</small>
        </label>
        <input
          type="file"
          name="image"
          id="articles"
          className={` ${styles.file} focus:outline-none w-[0.1px] h-[0.1px] border-0 overflow-hidden absolute whitespace-nowrap `}
        />
        <label
          htmlFor="articles"
          className="flex items-center gap-2 cursor-pointer rounded-sm"
        >
          <div className="w-5 h-5 relative">
            <Image
              priority
              fill
              alt="link icon"
              aria-hidden="true"
              src={LinkIcon}
            />
          </div>
          <small>Write Article</small>
        </label>
      </div>
    </div>
  );
};

export default Post;
