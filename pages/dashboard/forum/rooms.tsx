import React from "react";
import { NextPage } from "next";
import ForumLayout from "layouts/forumLayout";


const Rooms: NextPage = () => {
    return (
        <ForumLayout>
            <div className="flex items-center justify-center">
                <h3 className="mt-5 text-3xl"> Splash room content</h3>
            </div>
        </ForumLayout>
    );
};

export default Rooms;
