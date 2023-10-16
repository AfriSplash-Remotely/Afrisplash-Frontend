import React from "react";
import { NextPage } from "next";
import AdminLayout from "layouts/adminLayout";
import MessageLayout from "@/layouts/messageLayout";

const Messages: NextPage = () => {
  return <AdminLayout>
    <div>
      <h1 className="text-gray-900 font-medium text-lg md:font-bold md:text-2xl lg:text-[2rem]">All Messages</h1>
      <MessageLayout />
    </div>
  </AdminLayout>;
};

export default Messages;
