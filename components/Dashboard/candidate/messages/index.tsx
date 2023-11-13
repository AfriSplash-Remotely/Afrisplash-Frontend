import React from "react";
import AdminLayout from "layouts/adminLayout";
import MessageLayout from "@/layouts/messageLayout";


export default function Messages(): JSX.Element {
    return <AdminLayout>
        <div>
            <h1 className="text-gray-900 font-medium text-lg md:font-bold md:text-2xl lg:text-[2rem]">All Messages</h1>
            <MessageLayout />
        </div>
    </AdminLayout>;
};


