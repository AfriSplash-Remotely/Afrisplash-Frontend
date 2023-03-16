import React from "react";
import { NextPage } from "next";
import AllBlog from "components/molecules/AllBlog";
import FeaturedPost from "components/molecules/FeaturedPost";
import Hero from "components/molecules/Hero";
import Newsletter from "components/molecules/Newsletter";
import GeneralLayout from "layouts/generalLayout";

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
