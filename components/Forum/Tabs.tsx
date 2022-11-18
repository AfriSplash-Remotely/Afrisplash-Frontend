import React, { useState } from 'react'
import GhanaFlag from "assets/general/ghana-flag.svg"
import { MentorCard, MentorTab } from './MentorCardComponent'
import { TabContent, TabNavItem } from './TabComponent'


const mentorsData = [
    {
        name: 'Mubarak Show',
        position: 'Senior Developer',
        role: 'Job search, Career, Leadership,...',
        flag: GhanaFlag


    },
    {
        name: 'Mubarak Show',
        position: 'Senior Developer',
        role: 'Job search, Career, Leadership,...',
        flag: GhanaFlag


    }, {
        name: 'Mubarak Show',
        position: 'Senior Developer',
        role: 'Job search, Career, Leadership,...',
        flag: GhanaFlag


    }, {
        name: 'Mubarak Show',
        position: 'Senior Developer',
        role: 'Job search, Career, Leadership,...',
        flag: GhanaFlag


    }, {
        name: 'Mubarak Show',
        position: 'Senior Developer',
        role: 'Job search, Career, Leadership,...',
        flag: GhanaFlag


    }, {
        name: 'Mubarak Show',
        position: 'Senior Developer',
        role: 'Job search, Career, Leadership,...',
        flag: GhanaFlag


    }, {
        name: 'Mubarak Show',
        position: 'Senior Developer',
        role: 'Job search, Career, Leadership,...',
        flag: GhanaFlag


    }, {
        name: 'Mubarak Show',
        position: 'Senior Developer',
        role: 'Job search, Career, Leadership,...',
        flag: GhanaFlag


    }, {
        name: 'Mubarak Show',
        position: 'Senior Developer',
        role: 'Job search, Career, Leadership,...',
        flag: GhanaFlag


    }, {
        name: 'Mubarak Show',
        position: 'Senior Developer',
        role: 'Job search, Career, Leadership,...',
        flag: GhanaFlag


    },

]

export default function Tabs() {

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
                                key={mentor.name}
                                name={mentor.name}
                                position={mentor.position}
                                role={mentor.role}
                                flag={mentor.flag} />
                        ))}
                    </div>
                </TabContent>
            </div>
        </div>
    )
}
