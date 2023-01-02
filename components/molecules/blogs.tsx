import React from "react";
import { NextPage } from "next";
import AllBlog from "./AllBlog";
import FeaturedPost from "./FeaturedPost";
import Hero from "./Hero";
import Newsletter from "./Newsletter";
import GeneralLayout from "../../layouts/generalLayout";





const Blog: NextPage = () => {
  return (
    <GeneralLayout>
      <Hero />
      <FeaturedPost />
      <AllBlog />
      <Newsletter />
    </GeneralLayout>
  );
};

export default Blog;
