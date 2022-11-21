import React from 'react'
import Link from 'next/link';
import PropTypes, { InferProps } from "prop-types";

const TabNavItemProps = {
    title: PropTypes.string,
    isActive: PropTypes.bool.isRequired,
    routeLink: PropTypes.string.isRequired
}

export default function TabNavItem({ title, isActive, routeLink }: InferProps<typeof TabNavItemProps>): JSX.Element {

    return (
        <Link href={routeLink}>
            <a>
                <div
                    className={isActive ? "active text-lg font-bold cursor-pointer mb-2" : "list-none mb-2 text-right text-gray-300 text-lg font-bold relative cursor-pointer"}>
                    {title}
                </div>
            </a>
        </Link>

    )
}
