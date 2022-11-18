import React, { useState } from 'react'
import { mentorsData } from 'utils'
import { MentorCard, MentorTab } from './MentorCardComponent'
import { TabContent, TabNavItem } from './TabComponent'



export default function Tabs(): JSX.Element {

    const [activeTab, setActiveTab] = useState<string>("tab1")

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
                <TabContent id='tab3' activeTab={activeTab}>
                    <MentorTab />
                    <div className='grid gap-6 lg:grid-cols-3'>
                        {mentorsData.map(mentor => (
                            <MentorCard
                                key={mentor.id}
                                name={mentor.name}
                                position={mentor.position}
                                role={mentor.role}
                                flag={mentor.flag}
                                src={mentor.src} />
                        ))}
                    </div>
                </TabContent>
            </div>
        </div>
    )
}
