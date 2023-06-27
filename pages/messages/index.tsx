import React from "react";
import { NextPage } from "next";
import GeneralLayout from "../../layouts/generalLayout";
import { MessagesComponent } from "@/components/Messages";

const Messages: NextPage = () => {
  return (
    <GeneralLayout>
    <MessagesComponent/>
    </GeneralLayout>
  );
};

export default Messages;
