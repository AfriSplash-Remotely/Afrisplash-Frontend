import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import styles from "./Navigation.module.scss";
import { navLinks } from "./navLinks";

type MobileSidebarT = {
  isOpen: boolean;
  navSwitch: boolean;
  focused: string | null;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setFocused: React.Dispatch<React.SetStateAction<string | null>>;
};

const MobileSidebar = ({
  isOpen,
  focused,
  navSwitch,
  setIsOpen,
  setFocused,
}: MobileSidebarT): JSX.Element => {
  const router = useRouter();

  return (
    <div
      className={
        "fixed overflow-hidden z-50 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out" +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0"
          : " transition-all delay-0 opacity-0 -translate-x-full ease-out")
      }
    >
      <aside
        className={
          "w-screen max-w-xs left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " -translate-x-full ")
        }
      >
        <div className="flex justify-between h-20 p-4">
          <Link href="/" legacyBehavior>
            <div className={`flex cursor-pointer ${styles.logo}`}>
              <Image
                src="/main_logo.svg"
                alt="logo"
                className={styles.logo_img}
                width={50}
                height={50}
              />
            </div>
          </Link>
          <button className="" onClick={() => setIsOpen(false)}>
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="relative w-screen max-w-[15rem] flex flex-col space-y-6 overflow-y-scroll h-full">
          <div className="flex flex-col justify-between p-4">
            
            <ul className="flex flex-col space-y-5">
              {navLinks.map((item: any, index: number) => (
                  <li key={index}>
                    <Link
                      href={item.route}
                      onMouseEnter={() => setFocused(item.title)}
                      className={`text-sm  flex capitalize cursor-pointer relative ${navSwitch === true ? "px-5" : "px-5 pr-8"
                        } py-2 rounded-lg ${router.pathname === item.route &&
                        "text-primary_green bg-light_green"
                        }`}
                    >
                      <div className="flex space-x-5 items-center z-10">
                        <span>
                          <Image
                            alt={item.title}
                            src={item.icon ? item.icon : ""}
                            height={18}
                            width={18}
                          />
                        </span>
                        <span className={`${navSwitch === true ? "hidden" : ""}`}>
                          {item.title}
                        </span>
                      </div>
                      {focused === item.title ? (
                        <motion.div
                          transition={{
                            layout: {
                              duration: 0.2,
                              ease: "easeOut",
                            },
                          }}
                          className="absolute bottom-0 left-0 right-0 w-full h-full text-primary_green bg-light_green px-5 pr-8 m-0 z-0 rounded-lg space-x-0"
                        />
                      ) : null}
                    </Link>
                  </li>
              ))}

             
            </ul>
          </div>
        </div>
      </aside>

      <div
        className="w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></div>
    </div>
  );
};

export default MobileSidebar;
