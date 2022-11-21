import React from "react";
import { NextPage } from "next";
import PropTypes, { InferProps } from "prop-types";
import Tabs from "components/Forum/Tabs";
import AdminLayout from "layouts/adminLayout";
import styles from "styles/Forum.module.scss";

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
      <Tabs tabItems={tabs} />
      <div className={`${styles.container}`}>{children}</div>{" "}
    </AdminLayout>
  );
};

export default ForumLayout;
