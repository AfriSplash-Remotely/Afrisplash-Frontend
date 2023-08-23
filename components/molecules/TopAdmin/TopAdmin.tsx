import React from "react";
import { BellIcon, GiftIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import PropTypes, { InferProps } from "prop-types";
import Search from "components/atoms/Search/Search";
import AdminLoginAvatar from "../adminLoginAvatar";

const TopAdminProps = {
  placeholder: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  avatarText: PropTypes.string.isRequired,
  handleShowSidebar: PropTypes.func.isRequired,
};

export default function TopAdmin({
  placeholder,
  avatar,
  avatarText,
  handleShowSidebar,
}: InferProps<typeof TopAdminProps>): JSX.Element {
  return (
    <div className="h-20 flex items-center sticky top-0 z-40 w-full justify-between bg-[#FAFAFA]">
      <div className="w-5/12 hidden md:flex">
        <Search placeholder={placeholder} />
      </div>
      <button className="rounded md:hidden" onClick={handleShowSidebar}>
        <Bars3Icon className="w-6 h-6" />
      </button>
      <section className="flex space-x-20 items-center">
        <div className="flex flex-end w-full space-x-10">
          <GiftIcon className="w-5 h-5" />
          <BellIcon className="w-5 h-5" />
        </div>
        <div className="hidden md:flex">
          <AdminLoginAvatar imageSrc={avatar} text={avatarText} />
        </div>
      </section>
    </div>
  );
}
