import React from "react";
import Link from "next/link";
import PropTypes, { InferProps } from "prop-types";
import styles from "../Tabs.module.scss";

const TabNavItemProps = {
  title: PropTypes.string,
  isActive: PropTypes.bool.isRequired,
  routeLink: PropTypes.string.isRequired,
};

export default function TabNavItem({
  title,
  isActive,
  routeLink,
}: InferProps<typeof TabNavItemProps>): JSX.Element {
  return (
    (<Link href={routeLink} className="h-full">

      <div
        className={`relative h-full ${
          isActive
            ? `${styles.active} text-lg font-medium	text-primary_green cursor-pointer`
            : "list-none text-right text-gray-400 text-lg font-medium cursor-pointer"
        }`}
      >
        {title}
      </div>

    </Link>)
  );
}
