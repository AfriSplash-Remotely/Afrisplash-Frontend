import React from "react";
import { NextPage } from "next";
import GeneralLayout from "../layouts/generalLayout";
import Hero from "../components/molecules/Hero";
import FeaturedPost from "../components/molecules/FeaturedPost";
import AllBlog from "../components/molecules/AllBlog";
import Newsletter from "../components/molecules/Newsletter";

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
