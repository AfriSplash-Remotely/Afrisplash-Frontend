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
interface Links {
  icon: string;
  name: string;
}

const TopMembers: Links[] = [
  {
    icon: User,
    name: "Timi George",
  },
  {
    icon: User,
    name: "Sam 001",
  },
  {
    icon: User,
    name: "Ben Flock",
  },
];

const Events: Links[] = [
  {
    icon: EventsIcon,
    name: "Open source Afrisplash",
  },
  {
    icon: EventsIcon,
    name: "Afrisplash forum",
  },
];

const Categories: Links[] = [
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
];

const Personals: Links[] = [
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
];

const AsideNavigation: React.FC = () => {
  return (
    <aside className="px-7 bg-white mt-12 pt-4 pb-8 flex flex-col justify-between h-fit gap-7 sticky top-0">
      <section>
        <div className="mb-2 flex items-center gap-4">
          <h2>Top Members</h2>
          <Image
            src={TrophyIcon}
            alt="trophy"
            aria-hidden="true"
            width={18}
            height={18}
          />
        </div>
        {TopMembers.map((m) => (
          <Link href="" key={m.name}>
            <a className="flex items-center gap-2.5 px-1 py-2  ">
              <Image src={m.icon} alt={m.name} width={18} height={18} />
              <h3 className="text-[0.75rem] w-7/12 text-ellipsis whitespace-nowrap">
                {m.name}
              </h3>
            </a>
          </Link>
        ))}
      </section>
      <section>
        <h2 className="mb-2">Upcoming Events</h2>
        {Events.map((m) => (
          <Link href="" key={m.name}>
            <a className="flex items-center gap-2.5 px-1 py-2">
              <Image src={m.icon} alt={m.name} width={18} height={18} />
              <h3 className="text-[0.75rem] w-7/12 text-ellipsis whitespace-nowrap">
                {m.name}
              </h3>
            </a>
          </Link>
        ))}
      </section>
      <section>
        <h2 className="uppercase mb-2">Categories</h2>
        {Categories.map((m) => (
          <Link href="" key={m.name}>
            <a className="flex items-center gap-2 py-2 px-1 ">
              <Image src={m.icon} alt={m.name} width={18} height={18} />
              <h3 className="text-[0.75rem] w-7/12 text-ellipsis whitespace-nowrap">
                {m.name}
              </h3>
            </a>
          </Link>
        ))}
      </section>
      <section>
        <h2 className="uppercase mb-2">Personal</h2>
        {Personals.map((m) => (
          <Link href="" key={m.name}>
            <a className="flex items-center gap-2  py-2 px-1 ">
              <Image src={m.icon} alt={m.name} width={18} height={18} />
              <h3 className="text-[0.75rem] w-7/12 text-ellipsis whitespace-nowrap">
                {m.name}
              </h3>
            </a>
          </Link>
        ))}
      </section>
    </aside>
  );
};

export default AsideNavigation;
