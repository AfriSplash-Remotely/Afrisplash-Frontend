import React, { useState } from 'react'
import { TabContent, TabNavItem } from './TabComponent'

export default function Tabs() {

    const [activeTab, setActiveTab] = useState("tab1")

    return (
        <div className='w-full p-2'>
            {/* tab nav */}

            <ul className='flex justify-between  items-center w-full'>
                <TabNavItem title='Trending topics' id='tab1' activeTab={activeTab} setActiveTab={setActiveTab} />
                <TabNavItem title='Splash rooms' id='tab2' activeTab={activeTab} setActiveTab={setActiveTab} />
                <TabNavItem title='Mentors' id='tab3' activeTab={activeTab} setActiveTab={setActiveTab} />
            </ul>

            <div className='mt-4'>
                <TabContent id='tab1' activeTab={activeTab}>Trending topics</TabContent>
                <TabContent id='tab2' activeTab={activeTab}>splash rooms</TabContent>
                <TabContent id='tab3' activeTab={activeTab}>tab3</TabContent>
            </div>
        </div>
    )
}
