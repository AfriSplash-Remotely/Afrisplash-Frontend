import React from "react";
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

export default function AdminNavigation() {
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
      title: "applied",
      icon: directsend,
      link: "/",
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

  return (
    <div className={`w-full h-20  z-50 bg-white`}>
      <div className={`relative h-20 ${styles.wrapper}`}>
        <header className="w-4/12 relative z-50 h-full flex flex-col justify-between  items-center">
          <Link href="/">
            <div
              className={` flex items-center cursor-pointer ${styles.logo}`}
            >
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
                    className={`text-sm flex capitalize cursor-pointer space-x-2 hover:text-primary_green hover:underline hover:underline-offset-4 ${
                      item.active &&
                      "text-primary_green underline underline-offset-4"
                    }`}
                  >
                    <span><Image src={item.icon ? item.icon : ""} /></span>
                    <span>{item.title}</span>
                    
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}
