import React, { useState } from "react";
import briefcase from "assets/admin_icons/briefcase.svg";
import directsend from "assets/admin_icons/direct-send.svg";
import messages from "assets/admin_icons/messages.svg";
import messages_2 from "assets/admin_icons/messages-2.svg";
import setting_3 from "assets/admin_icons/setting-3.svg";
import user from "assets/admin_icons/user.svg";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import router from "next/router";
import Image from "next/image";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function AdminNavigation() {
  const [navSwitch, setNavSwitch] = useState(false);
  const nav = [
    {
      title: "Profile",
      icon: user,
      link: "/",
      active: true,
    },
    {
      title: "Jobs",
      icon: briefcase,
      link: "/jobs",
      active: false,
    },
    {
      title: "applicants",
      icon: directsend,
      link: "/applicants",
      active: false,
    },
    {
      title: "messages",
      icon: messages,
      link: "/",
      active: false,
    },
    {
      title: "forum",
      icon: messages_2,
      link: "/",
      active: false,
    },
    {
      title: "settings",
      icon: setting_3,
      link: "/",
      active: false,
    },
  ];

  const changePath = (path: string) => {
    router.push(path);
  };

  const handleMenuClick = (item: any, index: number) => {
    nav.map((item) => (item.active = false));
    if (router.pathname === item.link) {
      nav[index].active = true;
    }
  };

  const handleNavSwitch = () => {
    setNavSwitch(!navSwitch);
  };

  return (
    <aside
      className={`${
        navSwitch === true ? "w-max" : "w-2/12"
      } h-screen relative px-5 z-50`}
    >
      <div className={`relative w-full ${styles.wrapper}`}>
        <header className="w-full relative z-50 h-full flex flex-col space-y-10">
          <Link href="/">
            <div className={`flex cursor-pointer ${styles.logo}`}>
              <img
                src="/main_logo.svg"
                alt="logo"
                className={styles.logo_img}
              />
            </div>
          </Link>
          <nav className="flex items-center h-full ">
            <ul className="flex flex-col space-y-5">
              {nav.map((item: any, index: number) => (
                <Link href={item.link} key={index}>
                  <li
                    onClick={() => handleMenuClick(item, index)}
                    className={`text-sm  flex capitalize cursor-pointer ${navSwitch === true? 'px-5':'px-5 pr-8'} py-2 space-x-2 hover:text-primary_green hover:bg-light_green hover:rounded-lg ${
                      item.active && "text-primary_green"
                    }`}
                  >
                    <div className="flex space-x-2 items-center">
                      <span>
                        <Image
                          src={item.icon ? item.icon : ""}
                          height={18}
                          width={18}
                          layout="fixed"
                        />
                      </span>
                      <span className={`${navSwitch === true ? "hidden" : ""}`}>
                        {item.title}
                      </span>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </header>
      </div>
      <div
        onClick={handleNavSwitch}
        className={`absolute top-16 cursor-pointer hover:bg-light_green ${navSwitch === true? 'bg-[#f8f8f8]': 'bg-white'} -right-3 drop-shadow-lg rounded-full p-1 ${
          navSwitch === true ? "transform rotate-180" : ""
        }`}
      >
        <ChevronLeftIcon className="w-4 h-4 " />
      </div>
    </aside>
  );
}
