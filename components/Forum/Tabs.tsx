import React from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { InferProps } from "prop-types";
import TabNavItem from "./TabComponent/TabNavItem";
import styles from './Tabs.module.scss'

const TabsProps = {
  tabItems: PropTypes.array.isRequired,
};

export default function Tabs({
  tabItems,
}: InferProps<typeof TabsProps>): JSX.Element {
  const router = useRouter();

  return (
    <div className="w-full my-8">
      {/* tab nav */}
      <ul className={`${styles.cover} " h-10 flex justify-between items-center w-full"`}>
        {tabItems.map((tab) => {
          return (
            <TabNavItem
              key={tab.title}
              title={tab.title}
              routeLink={tab.routeLink}
              isActive={router.pathname === tab.routeLink}
            />
          );
        })}
      </ul>
    </div>
  );
}
