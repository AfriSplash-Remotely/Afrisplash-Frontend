import React from 'react'
import PropTypes, { InferProps } from "prop-types";

const TabContentProps = {
    id: PropTypes.string,
    activeTab: PropTypes.string,
    children: PropTypes.any
}

export default function TabContent({ id, activeTab, children }: InferProps<typeof TabContentProps>) {
    return (
        activeTab === id ? <div>
            {/* content */}
            {children}
        </div>
            : null
    )


}
