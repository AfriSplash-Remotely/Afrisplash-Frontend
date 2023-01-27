import React from "react";
import Link from "next/link";
import PropTypes, { InferProps } from "prop-types";

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
    (<Link href={routeLink}>

      <div
        className={`relative ${
          isActive
            ? "active text-lg font-medium	text-primary_green cursor-pointer mb-2"
            : "list-none mb-2 text-right text-gray-400 text-lg font-medium	 relative cursor-pointer"
        }`}
      >
        {title}
      </div>

    </Link>)
  );
}
