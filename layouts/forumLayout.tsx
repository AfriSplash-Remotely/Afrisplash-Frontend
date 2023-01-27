import React from "react";
import { NextPage } from "next";
import PropTypes, { InferProps } from "prop-types";
import Tabs from "components/Forum/Tabs";
import AdminLayout from "layouts/adminLayout";
import styles from "styles/Forum.module.scss";
import AsideNavigation from "@/components/molecules/Navigation/asideNavigation";

const tabs = [
  { title: "Trending topics", routeLink: "/dashboard/forum" },
  { title: "Splash rooms", routeLink: "/dashboard/forum/splash" },
  { title: "Mentors", routeLink: "/dashboard/forum/mentors" },
];
const ForumLayoutProps = {
  children: PropTypes.node.isRequired,
};

const ForumLayout: NextPage<InferProps<typeof ForumLayoutProps>> = ({
  children,
}) => {
  return (
    <AdminLayout>
      <section className=" w-full">
        <div className="w-7/12 flex justify-start">
          <Tabs tabItems={tabs} />
        </div>
        <div className="w-full flex justify-between">
          <div className={`w-7/12`}>{children}</div>
          <div className="w-4/12">
            <AsideNavigation />
          </div>
        </div>
      </section>
    </AdminLayout>
  );
};

export default ForumLayout;
