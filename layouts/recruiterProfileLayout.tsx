import React from "react"
import { NextPage } from "next"
import PropTypes, { InferProps } from "prop-types";
import Tabs from "components/Forum/Tabs";
import AdminLayout from "layouts/adminLayout";

const tabs = [
    { title: "My Profile", routeLink: "/dashboard" },
    { title: "My Company", routeLink: "/dashboard/company" }
]

const RecruiterProfileLayoutProps = {
    children: PropTypes.node.isRequired
}

const RecruiterProfileLayout: NextPage<InferProps<typeof RecruiterProfileLayoutProps>> = ({ children }) => {
    return (
        <AdminLayout>
            <section className="w-full">
                <div className="w-4/12 flex justify-start">
                    <Tabs tabItems={tabs} />
                </div>
                <div className="w-full">
                    {children}
                </div>

            </section>
        </AdminLayout>
    )
}

export default RecruiterProfileLayout