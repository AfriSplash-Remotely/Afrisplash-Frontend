import React from "react";
import { NextPage } from "next";
import Tabs from "components/Forum/TabComponent/Tabs"
import AdminLayout from "layouts/adminLayout";


const Forum: NextPage = () => {
  return <AdminLayout>
    <div className="mt-4">
      <Tabs />
    </div>


  </AdminLayout>;
};

export default Forum;
