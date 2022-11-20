import React from "react";
import { NextPage } from "next";
import PropTypes, { InferProps } from "prop-types";
import AdminLayout from "layouts/adminLayout";
import styles from "styles/Forum.module.scss";

const ForumLayoutProps = {
  children: PropTypes.node.isRequired,
};

const ForumLayout: NextPage<InferProps<typeof ForumLayoutProps>> = ({
  children,
}) => {
  return (
    <AdminLayout>
      <div className={`${styles.container}`}>{children}</div>
    </AdminLayout>
  );
};

export default ForumLayout;
