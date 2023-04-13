import React, { ReactNode } from "react";
import Image from "next/image";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navigation.module.scss";
import { motion } from "framer-motion";
import { generateUniqueId } from "@/utils/helper";
// import AdminLoginAvatar from "../adminLoginAvatar";
interface headerType {
  title: string;
  icon?: ReactNode;
  link: string;
  active: boolean;
  dropDown?: {
    title: string;
    href: string;
  }[];
}

const Navigation = (): JSX.Element => {
  const router = useRouter();

  const header: headerType[] = [
    {
      title: "Home",
      icon: "",
      link: "/",
      active: true,
    },
    {
      title: "Resources",
      icon: <ChevronDownIcon className="w-5 h-5" />,
      link: "#",
      active: false,
      dropDown: [{ title: "item", href: "#" }],
    },
    {
      title: "candidates",
      icon: "",
      link: "/onboarding",
      active: false,
      dropDown: [{ title: "item", href: "#" }],
    },
    {
      title: "employer",
      icon: "",
      link: "/employer",
      active: false,
    },
    {
      title: "Hire talent",
      icon: "",
      link: "/hire-talent",
      active: false,
    },
    {
      title: "remote jobs",
      icon: "",
      link: "/remote-jobs",
      active: false,
    },
  ];

  const changePath = (path: string) => {
    router.push(path);
  };

  const handleMenuClick = (item: headerType, index: number) => {
    header.map((item) => (item.active = false));
    if (router.pathname === item.link) {
      header[index].active = true;
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`w-full h-20 sticky top-0 z-50 bg-white`}
    >
      <div className={`relative h-20 ${styles.wrapper}`}>
        <header className="w-11/12 relative z-50 md:w-11/12 xl:w-10/12 mx-auto h-full flex justify-between  items-center">
          <Link href="/" legacyBehavior>
            <div
              className={`w-1/12 h-full flex items-center cursor-pointer ${styles.logo}`}
            >
              <Image
                src="/main_logo.svg"
                alt="logo"
                className={styles.logo_img}
                width={200}
                height={200}
              />
            </div>
          </Link>
          <nav className="hidden lg:flex items-center h-full ">
            <ul className="flex lg:space-x-3 xl:space-x-5">
              {header.map((item: any, index: number) => (
                <Link href={item.link} key={generateUniqueId()}>
                  <li
                    onClick={() => handleMenuClick(item, index)}
                    className={`text-sm flex capitalize cursor-pointer hover:text-primary_green hover:underline hover:underline-offset-4 ${
                      item.active &&
                      "text-primary_green underline underline-offset-4"
                    }`}
                  >
                    <span>{item.title}</span>
                    <span>{item.icon ? item.icon : ""}</span>
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
          <div className="flex space-x-4 items-center">
            <div className="hidden md:flex space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </div>
            <div className="hidden md:flex space-x-4">
              {/* <AdminLoginAvatar /> */}
            </div>
            <div className="flex lg:hidden h-full items-center">
              <Bars3Icon className="w-8 h-6" />
            </div>
          </div>
        </header>
      </div>
    </motion.div>
  );
};

export default Navigation;
