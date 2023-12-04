import React from "react";
import { BellIcon, GiftIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import PropTypes, { InferProps } from "prop-types";
import Search from "components/atoms/Search/Search";
import AdminLoginAvatar from "../adminLoginAvatar";
import Notification from "@/components/Notification";
import Button from "@/components/atoms/Button/Button";
// import { useRouter } from "next/router";

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
  // const router = useRouter();

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleOnClose = (): void => setIsOpen(false);

  // const changePath = (path: string) => {
  //   router.push(path);
  // };


  return (
    <div className="h-20 flex items-center sticky top-0 z-40 w-full justify-between bg-[#FAFAFA]">
      <div className="w-5/12 hidden md:flex">
        <Search placeholder={placeholder} />
      </div>
      <button className="rounded md:hidden" onClick={handleShowSidebar}>
        <Bars3Icon className="w-6 h-6" />
      </button>
      <section className="flex space-x-10 items-center">
        <div className="flex  items-center flex-end w-full space-x-10">
          <GiftIcon className="w-5 h-5 cursor-pointer" />
          <BellIcon
            onClick={() => setIsOpen(!isOpen)}
            className="w-5 h-5 cursor-pointer"
          />
          {/* <button className="text-white font-semibold px-6 py-2 rounded-md bg-sunglow">Create Job</button>
           */}
          <Button type='filled'
            color="dark_blue"
            text="Create Job"
            classes="w-36 h-10  md:w-28 xl:w-36 rounded-md text-sm capitalize text-white bg-dark_blue hover:bg-primary_green"
// onClick={() => changePath('path')}

          />
        </div>
        <div className="hidden md:flex">
          <AdminLoginAvatar imageSrc={avatar} text={avatarText} link="/dashboard/profile"/>
        </div>
      </section>

      <Notification isOpen={isOpen} onClose={handleOnClose} />
    </div>
  );
}
