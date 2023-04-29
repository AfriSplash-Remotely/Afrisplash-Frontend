import React, { ReactNode } from "react";
import Image from "next/image";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navigation.module.scss";
import Button from "../../atoms/Button/Button";
import { motion } from "framer-motion";
import { generateUniqueId } from "@/utils/helper";

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
      link: "/candidates",
      active: false,
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
    {
      title: "Pricing",
      icon: "",
      link: "/pricing",
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
              className={`relative w-36 h-12 sm:w-28 md:w-32 md:h-14 flex items-center cursor-pointer ${styles.logo}`}
            >
              <Image src="/admin_logo.svg" alt="logo" fill />
            </div>
          </Link>
          <nav className="hidden lg:flex items-center h-full ">
            <ul className="flex lg:space-x-3 xl:space-x-5">
              {header.map((item: headerType, index: number) => (
                <Link href={item.link} key={generateUniqueId()}>
                  <li
                    onClick={() => handleMenuClick(item, index)}
                    className={`text-sm flex capitalize cursor-pointer hover:text-primary_green hover:underline hover:underline-offset-4 ${
                      item.active && "text-primary_green underline underline-offset-4"
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
              <Button
                type="filled"
                // bgColor="dark_blue"
                color="white"
                text="sign in"
                classes="w-36 h-10  md:w-28 xl:w-36 rounded-md text-sm capitalize text-white bg-dark_blue hover:bg-primary_green"
                onClick={() => changePath("/auth/login")}
              />
              <Button
                type="bordered"
                color="dark_blue"
                text="Post jobs"
                // borderColor="dark_blue"
                classes="w-36 md:w-28 xl:w-36 rounded-md capitalize h-10 text-sm text-dark_blue border border-dark_blue hover:bg-primary_green hover:text-white"
              />
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
