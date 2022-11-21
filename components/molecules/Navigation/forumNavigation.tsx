import React, { useContext } from "react";
import Link from "next/link";
import { IndexContext } from "pages/dashboard/forum";

interface Links {
  name: string;
  url: string;
}

const links: Links[] = [
  {
    name: "Trending topics",
    url: "#trending",
  },

  {
    name: "Splash rooms",
    url: "#splash",
  },

  {
    name: "Mentors",
    url: "#mentors",
  },
];

const ForumNavigation: React.FC = () => {
  const { index, setIndex } = useContext(IndexContext);

  return (
    <nav className="w-full mt-1 sticky">
      <ul className="flex justify-between w-full border-[#9b9a9a] border-b-[1.2px] font-medium px-1 sticky top-0">
        {links.map((link, i) => (
          <li
            key={link.name}
            className={`${
              i === index ? "border-b-[3px] pb-[2px] border-primary_green" : ""
            } py-0.5 px-2 w-fit hover:text-green-700`}>
            <Link href="">
              <a
                onClick={() => {
                  if (setIndex !== null) {
                    setIndex(i);
                  }
                }}
                className="
                    focus-visible:outline-[#9b9a9a] outline-none">
                {link.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ForumNavigation;
