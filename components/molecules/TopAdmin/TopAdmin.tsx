import React from "react";
import { BellIcon, GiftIcon } from "@heroicons/react/24/outline";
import Search from "components/atoms/Search/Search";
import AdminLoginAvatar from "../adminLoginAvatar";

interface TopAdminProps {
  placeholder: string;
  avatar: any;
  avatarText: string;
}

export default function TopAdmin({
  placeholder,
  avatar,
  avatarText,
}: TopAdminProps) {
  return (
    <div className="h-20 flex items-center sticky top-0 z-50 bg-[#f8f8f8] w-full justify-between">
      <div className="w-5/12">
        <Search placeholder={placeholder} />
      </div>
      <section className="flex space-x-20 items-center">
        <div className="flex space-x-10">
          <GiftIcon className="w-5 h-5" />
          <BellIcon className="w-5 h-5" />
        </div>
        <div>
          <AdminLoginAvatar imageSrc={avatar} text={avatarText} />
        </div>
      </section>
    </div>
  );
}
