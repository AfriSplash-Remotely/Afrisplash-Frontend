import React from "react";
import Image from "next/image";
import Button from "../../atoms/Button/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import { Bars3Icon } from "@heroicons/react/24/outline";

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

const Navigation = ():JSX.Element => {
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
      icon: "",
      link: "#",
      active: false,
      dropDown: [{ title: "item", href: "#" }],
    },
    {
      title: "candidates",
      icon: "",
      link: "/candidates",
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

  const handleMenuClick = (item: headerType, index: number) => {
    header.map((item) => (item.active = false));
    if (router.pathname === item.link) {
      header[index].active = true;
    }
  };
  return (
    <div className="h-20 ">
      <header className="mx-auto flex h-full w-11/12 items-center justify-between md:w-11/12  xl:w-10/12">
        <div className="flex h-full w-1/12 items-center ">
          <Image src="/main_logo.svg" height="70%" width="70%" />
        </div>
        <nav className="hidden h-full items-center lg:flex ">
          <ul className="flex lg:space-x-3 xl:space-x-5">
            {header.map((item: any, index: number) => (
              <Link href={item.link} key={index}>
                <li
                  onClick={() => handleMenuClick(item, index)}
                  className={`cursor-pointer text-sm capitalize hover:text-primary_green hover:underline hover:underline-offset-4 ${
                    item.active &&
                    "text-primary_green underline underline-offset-4"
                  }`}
                >
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="hidden space-x-4 md:flex">
            <Button
              type="filled"
              bgColor="dark_blue"
              color="white"
              classes="w-36 h-10  md:w-28 xl:w-36 rounded-md text-sm capitalize text-white bg-dark_blue hover:opacity-80"
            >
              sign in
            </Button>
            <Button
              type="bordered"
              color="dark_blue"
              borderColor="dark_blue"
              classes="w-36 md:w-28 xl:w-36 rounded-md capitalize h-10 text-sm text-dark_blue border border-dark_blue hover:bg-dark_blue hover:text-white  hover:opacity-80"
            >
              Post Jobs
            </Button>
          </div>
          <div className="flex h-full items-center lg:hidden">
            <Bars3Icon className="h-6 w-8" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
