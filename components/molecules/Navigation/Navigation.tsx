import React from "react";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navigation.module.scss";
import Button from "../../atoms/Button/Button";

interface headerType {
  title: string;
  icon?: any;
  link: string;
  active: boolean;
  dropDown?: {
    title: string;
    href: string;
  }[];
}

const Navigation = (): JSX.Element => {
  const router = useRouter();

  let header: headerType[] = [
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
    <div className={`w-full h-20 sticky top-0 z-50 bg-white`}>
      <div className={`relative h-20 ${styles.wrapper}`}>
        <header className="w-11/12 relative z-50 md:w-11/12 xl:w-10/12 mx-auto h-full flex justify-between  items-center">
          <Link href="/">
            <div
              className={`w-1/12 h-full flex items-center cursor-pointer ${styles.logo}`}
            >
              <img
                src="/main_logo.svg"
                alt="logo"
                className={styles.logo_img}
              />
            </div>
          </Link>
          <nav className="hidden lg:flex items-center h-full ">
            <ul className="flex lg:space-x-3 xl:space-x-5">
              {header.map((item: any, index: number) => (
                <Link href={item.link} key={index}>
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
              <Button
                type="filled"
                bgColor="dark_blue"
                color="white"
                text="sign in"
                classes="w-36 h-10  md:w-28 xl:w-36 rounded-md text-sm capitalize text-white bg-dark_blue hover:opacity-80"
                onClick={() => changePath("/auth/login")}
              />
              <Button
                type="bordered"
                color="dark_blue"
                text="Post jobs"
                borderColor="dark_blue"
                classes="w-36 md:w-28 xl:w-36 rounded-md capitalize h-10 text-sm text-dark_blue border border-dark_blue hover:bg-dark_blue hover:text-white  hover:opacity-80"
              />
            </div>
            <div className="flex lg:hidden h-full items-center">
              <Bars3Icon className="w-8 h-6" />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navigation;
