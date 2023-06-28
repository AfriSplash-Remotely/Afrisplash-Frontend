import React from "react";
import { NextPage } from "next";
import AdminLayout from "layouts/adminLayout";
import { MessagesComponent } from "@/components/Messages";

const Messages: NextPage = () => {
  return (
    <AdminLayout>
      <MessagesComponent />
    </AdminLayout>
  );
};

export default Messages;
