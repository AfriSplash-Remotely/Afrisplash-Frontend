import React from 'react'
import PropTypes, { InferProps } from "prop-types";

const TabNavItemProps = {
    id: PropTypes.string,
    title: PropTypes.string,
    activeTab: PropTypes.string,
    setActiveTab: PropTypes.any
}

export default function TabNavItem({ id, title, activeTab, setActiveTab }: InferProps<typeof TabNavItemProps>): JSX.Element {

    const handleClick = () => {
        setActiveTab(id)
    }
    return (
        <li
            onClick={handleClick}
            className={activeTab === id ? "active text-lg font-bold cursor-pointer mb-2" : "list-none mb-2 text-right text-gray-300 text-lg font-bold relative cursor-pointer"}>
            {title}
        </li>
    )
}
