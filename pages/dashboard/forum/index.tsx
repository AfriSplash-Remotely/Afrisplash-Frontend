import React from "react";
import { NextPage } from "next";
import ForumLayout from 'layouts/forumLayout';

const Forum: NextPage = () => {
  return <ForumLayout>
    <div className="mt-4">
      <div className="flex items-center justify-center">
        <h3 className="mt-5 text-3xl"> Trending Topics content</h3>
      </div>

    </div>
  </ForumLayout >;
};

export default Forum;
