import React from 'react'


export default function TabNavItem({ id, title, activeTab, setActiveTab }:
    { id: string, title: string, activeTab: string, setActiveTab: any }) {

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
