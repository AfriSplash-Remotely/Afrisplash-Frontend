import React, { useState } from 'react'
import GhanaFlag from "assets/general/ghana-flag.svg"
import { MentorCard, MentorTab } from './MentorCardComponent'
import { TabContent, TabNavItem } from './TabComponent'


const mentorsData = [
    {
        name: 'Mubarak Show',
        position: 'Senior Developer',
        role: 'Job search, Career, Leadership,...',
        flag: GhanaFlag,
        src: 'https://images.unsplash.com/photo-1550833980-21742bcf7658?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'


    },
    {
        name: 'Mubarak Show',
        position: 'Senior Developer',
        role: 'Job search, Career, Leadership,...',
        flag: GhanaFlag,
        src: 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'


    }, {
        name: 'Mubarak Show',
        position: 'Senior Developer',
        role: 'Job search, Career, Leadership,...',
        flag: GhanaFlag,
        src: 'https://images.unsplash.com/photo-1633068587533-ca4159e78e79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=402&q=80'


    }, {
        name: 'Mubarak Show',
        position: 'Senior Developer',
        role: 'Job search, Career, Leadership,...',
        flag: GhanaFlag,
        src: 'https://images.unsplash.com/photo-1507038732509-8b1a9623223a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'


    }, {
        name: 'Mubarak Show',
        position: 'Senior Developer',
        role: 'Job search, Career, Leadership,...',
        flag: GhanaFlag,
        src: 'https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'


    }, {
        name: 'Mubarak Show',
        position: 'Senior Developer',
        role: 'Job search, Career, Leadership,...',
        flag: GhanaFlag,
        src: 'https://images.unsplash.com/photo-1606415918835-88d0614e75ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'


    }, {
        name: 'Mubarak Show',
        position: 'Senior Developer',
        role: 'Job search, Career, Leadership,...',
        flag: GhanaFlag,
        src: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80'


    }, {
        name: 'Mubarak Show',
        position: 'Senior Developer',
        role: 'Job search, Career, Leadership,...',
        flag: GhanaFlag,
        src: 'https://images.unsplash.com/photo-1563132337-f159f484226c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'


    }, {
        name: 'Mubarak Show',
        position: 'Senior Developer',
        role: 'Job search, Career, Leadership,...',
        flag: GhanaFlag,
        src: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'


    }, {
        name: 'Mubarak Show',
        position: 'Senior Developer',
        role: 'Job search, Career, Leadership,...',
        flag: GhanaFlag,
        src: 'https://images.unsplash.com/photo-1628149321186-7d4c5b1170f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'


    },

]

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
                                key={mentor.name}
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
