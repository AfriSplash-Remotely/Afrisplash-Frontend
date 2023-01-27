import React from "react";
import Image from "next/image";
import Link from "next/link";
import User from "assets/admin_avatars/admin_avatar.svg";
import MessageIcon from "assets/admin_icons/messages.svg";
import EventsIcon from "assets/icons/calendar.svg";
import QuestionsIcon from "assets/icons/message-question.svg";
import Savedicon from "assets/icons/save-add.svg";
import TagIcon from "assets/icons/tag.svg";
import TrendingIcon from "assets/icons/trend-up.svg";
import TrophyIcon from "assets/icons/trophy.svg";
// interface Links {
//   icon: string;
//   name: string;
// }

const sideLinks = [
  {
    Header: "Top Members",
    icon: TrophyIcon,

    elements: [
      {
        icon: User,
        name: "Timi George",
      },
      {
        icon: User,
        name: "Sam Beast",
      },
      {
        icon: User,
        name: "Ben Flock",
      },
    ],
  },
  {
    Header: "Upcoming Events",
    elements: [
      {
        icon: EventsIcon,
        name: "Open source Afrisplash",
      },
      {
        icon: EventsIcon,
        name: "Afrisplash forum",
      },
    ],
  },
  {
    Header: "Categories",

    elements: [
      {
        icon: QuestionsIcon,
        name: "Questions",
      },
      {
        icon: TrendingIcon,
        name: "Trending Topics",
      },
      {
        icon: TagIcon,
        name: "Tags",
      },
    ],
  },
  {
    Header: "Personal",
    elements: [
      {
        icon: QuestionsIcon,
        name: "My Questiond",
      },
      {
        icon: MessageIcon,
        name: "My Answers",
      },
      {
        icon: Savedicon,
        name: "Saved Topics",
      },
    ],
  },
];

const AsideNavigation = (): JSX.Element => {
  return (
    <aside className="px-7 bg-white py-10 flex flex-col justify-between h-fit gap-7 sticky top-20">
      {sideLinks.map((section) => {
        return (
          <section key={section.Header}>
            <div className="mb-2 flex items-center gap-4">
              <h2>{section.Header}</h2>
              {section.icon && (
                <Image
                  src={section.icon}
                  alt={section.Header}
                  aria-hidden="true"
                  width={18}
                  height={18}
                />
              )}
            </div>
            {section.elements.map((m) => (
              (<Link href="" key={m.name} className="flex items-center gap-2.5 px-1 py-2  ">

                <Image src={m.icon} alt={m.name} width={18} height={18} />
                <h3 className="text-[0.75rem] w-7/12 text-ellipsis whitespace-nowrap">
                  {m.name}
                </h3>

              </Link>)
            ))}
          </section>
        );
      })}
    </aside>
  );
};

export default AsideNavigation;
