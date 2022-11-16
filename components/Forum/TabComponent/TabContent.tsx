import React from 'react'

export default function TabContent({ id, activeTab, children }: { id: string, activeTab: string, children: any }) {
    return (
        activeTab === id ? <div>
            {/* content */}
            {children}
        </div>
            : null
    )


}
